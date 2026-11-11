import { useEffect, useId, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaCloudUploadAlt,
  FaFileAlt,
  FaPaperPlane,
  FaPen,
  FaTimes,
} from "react-icons/fa";

import "./ApplyForm.css";

/* ============================================================
   SUBMISSION SETTINGS
   ------------------------------------------------------------
   To receive applications (with documents) directly, paste the
   URL of a form service that accepts file uploads — for example
   a Formspree form endpoint — or your own backend API.

   While this is empty, the form still works: it opens the
   parent's email app with all the details filled in, and the
   success screen explains how to send the documents.
============================================================ */

const APPLICATION_ENDPOINT = "";
const SCHOOL_EMAIL = "info.praiseeljuniorschool256@gmail.com";

/* ============================================================
   OPTIONS
============================================================ */

const CLASSES = [
  "Baby Class",
  "Middle Class",
  "Top Class",
  "P1",
  "P2",
  "P3",
  "P4",
  "P5",
  "P6",
  "P7",
];

const RELATIONSHIPS = ["Mother", "Father", "Guardian", "Other"];

const DOCUMENTS = [
  { key: "birthCertificate", label: "Birth certificate" },
  { key: "passportPhoto", label: "Passport photo" },
  { key: "reportCard", label: "Previous report card" },
  { key: "transferLetter", label: "Transfer letter (if applicable)" },
];

const MAX_FILE_MB = 5;
const ACCEPTED_FILES = "image/*,.pdf";

const STEPS = [
  { id: "learner", title: "Learner" },
  { id: "parent", title: "Parent / guardian" },
  { id: "documents", title: "Documents" },
  { id: "review", title: "Review & submit" },
];

const emptyValues = {
  studentName: "",
  dob: "",
  gender: "",
  classApplying: "",
  currentSchool: "",
  parentName: "",
  relationship: "",
  phone: "",
  email: "",
  additionalInfo: "",
  consent: false,
};

const emptyFiles = {
  birthCertificate: null,
  passportPhoto: null,
  reportCard: null,
  transferLetter: null,
};

/* ============================================================
   VALIDATION
============================================================ */

const today = new Date().toISOString().slice(0, 10);

function validateStep(stepId, values) {
  const errors = {};

  if (stepId === "learner") {
    if (values.studentName.trim().length < 3) {
      errors.studentName = "Please enter the learner's full name.";
    }
    if (!values.dob) {
      errors.dob = "Please enter the date of birth.";
    } else if (values.dob >= today) {
      errors.dob = "Date of birth must be in the past.";
    }
    if (!values.gender) errors.gender = "Please select a gender.";
    if (!values.classApplying) errors.classApplying = "Please choose a class.";
  }

  if (stepId === "parent") {
    if (values.parentName.trim().length < 3) {
      errors.parentName = "Please enter the parent or guardian's name.";
    }
    if (!values.relationship) {
      errors.relationship = "Please choose your relationship to the learner.";
    }
    if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (stepId === "review" && !values.consent) {
    errors.consent = "Please confirm that the information is correct.";
  }

  return errors;
}

/* ============================================================
   SUBMIT
============================================================ */

function makeReference() {
  const year = new Date().getFullYear();
  const code = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PE-${year}-${code}`;
}

function formatDate(value) {
  if (!value) return "";
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildSummary(values, files, reference) {
  const attached = DOCUMENTS.filter(({ key }) => files[key]).map(({ label }) => label);

  return [
    `Application reference: ${reference}`,
    "",
    "LEARNER",
    `Name: ${values.studentName.trim()}`,
    `Date of birth: ${formatDate(values.dob)}`,
    `Gender: ${values.gender}`,
    `Class applying for: ${values.classApplying}`,
    `Current school: ${values.currentSchool.trim() || "—"}`,
    "",
    "PARENT / GUARDIAN",
    `Name: ${values.parentName.trim()} (${values.relationship})`,
    `Phone: ${values.phone.trim()}`,
    `Email: ${values.email.trim() || "—"}`,
    "",
    "ADDITIONAL INFORMATION",
    values.additionalInfo.trim() || "—",
    "",
    `Documents ready: ${attached.length ? attached.join(", ") : "none yet"}`,
  ].join("\n");
}

async function submitApplication(values, files) {
  const reference = makeReference();

  if (APPLICATION_ENDPOINT) {
    const data = new FormData();
    data.append("reference", reference);
    Object.entries(values).forEach(([key, value]) => data.append(key, String(value)));
    Object.entries(files).forEach(([key, file]) => {
      if (file) data.append(key, file);
    });

    const response = await fetch(APPLICATION_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error("The application could not be sent.");
    }

    return { method: "online", reference, values };
  }

  // Fallback: open the parent's email app with everything filled in.
  const subject = `Application ${reference}: ${values.studentName.trim()} (${values.classApplying})`;
  window.location.href = `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(buildSummary(values, files, reference))}`;

  return { method: "email", reference, values };
}

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function Field({ id, label, error, hint, required, className = "", children }) {
  return (
    <div className={`apf-field ${error ? "has-error" : ""} ${className}`.trim()}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="apf-req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="apf-optional">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p className="apf-error" id={`${id}-error`}>
          {error}
        </p>
      ) : (
        hint && (
          <p className="apf-hint" id={`${id}-hint`}>
            {hint}
          </p>
        )
      )}
    </div>
  );
}

function FileField({ id, label, file, error, onChange, onClear }) {
  return (
    <div className={`apf-file ${file ? "has-file" : ""} ${error ? "has-error" : ""}`}>
      <span className="apf-file-icon" aria-hidden="true">
        {file ? <FaCheck /> : <FaFileAlt />}
      </span>

      <div className="apf-file-text">
        <strong>{label}</strong>
        <small id={`${id}-status`}>
          {error ||
            (file
              ? `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} MB`
              : `Photo or PDF, up to ${MAX_FILE_MB} MB`)}
        </small>
      </div>

      {file ? (
        <button type="button" className="apf-file-clear" onClick={onClear}>
          <FaTimes aria-hidden="true" />
          <span>Remove</span>
        </button>
      ) : (
        <label htmlFor={id} className="apf-file-pick">
          <FaCloudUploadAlt aria-hidden="true" />
          <span>Choose file</span>
        </label>
      )}

      <input
        id={id}
        type="file"
        accept={ACCEPTED_FILES}
        className="apf-file-input"
        aria-label={`Upload ${label}`}
        aria-describedby={`${id}-status`}
        onChange={onChange}
      />
    </div>
  );
}

/* ============================================================
   FORM
============================================================ */

function ApplyForm({ onSuccess }) {
  const uid = useId();
  const id = (name) => `${uid}-${name}`;

  const [step, setStep] = useState(0);
  const [values, setValues] = useState(emptyValues);
  const [files, setFiles] = useState(emptyFiles);
  const [fileErrors, setFileErrors] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const headingRef = useRef(null);
  const firstRender = useRef(true);
  const current = STEPS[step];

  // Move focus to the step heading when the step changes (not on first load).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  const update = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const pickFile = (key) => (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileErrors((prev) => ({ ...prev, [key]: `File is too large (max ${MAX_FILE_MB} MB).` }));
      return;
    }
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      setFileErrors((prev) => ({ ...prev, [key]: "Please choose a photo or a PDF." }));
      return;
    }

    setFileErrors((prev) => ({ ...prev, [key]: undefined }));
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const clearFile = (key) => () => setFiles((prev) => ({ ...prev, [key]: null }));

  const fieldProps = (name, hint) => ({
    id: id(name),
    name,
    value: values[name],
    onChange: update,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${id(name)}-error` : hint ? `${id(name)}-hint` : undefined,
  });

  const goTo = (index) => {
    setErrors({});
    setSubmitError("");
    setStep(index);
  };

  const next = () => {
    const found = validateStep(current.id, values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    goTo(step + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (current.id !== "review") {
      next();
      return;
    }

    const found = validateStep("review", values);
    setErrors(found);
    if (found.consent) {
      document.getElementById(id("consent"))?.focus();
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await submitApplication(values, files);
      onSuccess?.(result);
    } catch {
      setSubmitError(
        "Sorry, your application could not be sent. Please check your connection and try again, or call 0744 523 317.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const attachedCount = DOCUMENTS.filter(({ key }) => files[key]).length;

  return (
    <section className="ap-section apf" aria-labelledby={id("title")}>
      <div className="ap-container apf-grid">
        {/* ---------- side panel ---------- */}
        <aside className="apf-side">
          <span className="ap-eyebrow light">Application form</span>
          <h2 id={id("title")}>
            Apply in <em>four steps</em>.
          </h2>
          <p>Fields marked * are required. You can go back to any step before you submit.</p>

          <ol className="apf-progress">
            {STEPS.map(({ id: stepId, title }, index) => {
              const state = index < step ? "is-done" : index === step ? "is-current" : "";
              return (
                <li key={stepId} className={state}>
                  {index < step ? (
                    <button type="button" onClick={() => goTo(index)}>
                      <span className="apf-dot" aria-hidden="true">
                        <FaCheck />
                      </span>
                      <span>
                        {title}
                        <small>Completed · edit</small>
                      </span>
                    </button>
                  ) : (
                    <div aria-current={index === step ? "step" : undefined}>
                      <span className="apf-dot" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span>
                        {title}
                        {index === step && <small>In progress</small>}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </aside>

        {/* ---------- form card ---------- */}
        <form className="apf-card" onSubmit={handleSubmit} noValidate>
          <div className="apf-bar" aria-hidden="true">
            <span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>

          <header className="apf-head">
            <small>
              Step {step + 1} of {STEPS.length}
            </small>
            <h3 ref={headingRef} tabIndex={-1}>
              {current.title}
            </h3>
          </header>

          {/* STEP 1 — LEARNER */}
          {current.id === "learner" && (
            <div className="apf-fields">
              <Field id={id("studentName")} label="Learner's full name" error={errors.studentName} required className="span-2">
                <input type="text" autoComplete="off" placeholder="e.g. Grace Nakato" {...fieldProps("studentName")} />
              </Field>

              <Field id={id("dob")} label="Date of birth" error={errors.dob} required>
                <input type="date" max={today} {...fieldProps("dob")} />
              </Field>

              <Field id={id("gender")} label="Gender" error={errors.gender} required>
                <select {...fieldProps("gender")}>
                  <option value="">Select gender</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </Field>

              <Field id={id("classApplying")} label="Class applying for" error={errors.classApplying} required>
                <select {...fieldProps("classApplying")}>
                  <option value="">Select class</option>
                  <optgroup label="Nursery">
                    {CLASSES.slice(0, 3).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Primary">
                    {CLASSES.slice(3).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </optgroup>
                </select>
              </Field>

              <Field
                id={id("currentSchool")}
                label="Current school"
                hint="Leave blank if this is your child's first school."
              >
                <input type="text" placeholder="e.g. Sunrise Nursery School" {...fieldProps("currentSchool", true)} />
              </Field>
            </div>
          )}

          {/* STEP 2 — PARENT */}
          {current.id === "parent" && (
            <div className="apf-fields">
              <Field id={id("parentName")} label="Parent / guardian name" error={errors.parentName} required>
                <input type="text" autoComplete="name" placeholder="e.g. Sarah Namukasa" {...fieldProps("parentName")} />
              </Field>

              <Field id={id("relationship")} label="Relationship to learner" error={errors.relationship} required>
                <select {...fieldProps("relationship")}>
                  <option value="">Select relationship</option>
                  {RELATIONSHIPS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Field>

              <Field id={id("phone")} label="Phone number" error={errors.phone} required hint="We will call or WhatsApp you on this number.">
                <input type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 0700 123 456" {...fieldProps("phone", true)} />
              </Field>

              <Field id={id("email")} label="Email address" error={errors.email}>
                <input type="email" autoComplete="email" placeholder="e.g. parent@example.com" {...fieldProps("email")} />
              </Field>

              <Field
                id={id("additionalInfo")}
                label="Additional information"
                hint="Medical needs, siblings at the school, or anything we should know."
                className="span-2"
              >
                <textarea rows={5} maxLength={1000} {...fieldProps("additionalInfo", true)} />
              </Field>
            </div>
          )}

          {/* STEP 3 — DOCUMENTS */}
          {current.id === "documents" && (
            <div className="apf-docs">
              <p className="apf-note">
                Uploading now is optional. If a document is not ready, you can
                send it later on WhatsApp or bring it to the school office.
              </p>

              {DOCUMENTS.map(({ key, label }) => (
                <FileField
                  key={key}
                  id={id(key)}
                  label={label}
                  file={files[key]}
                  error={fileErrors[key]}
                  onChange={pickFile(key)}
                  onClear={clearFile(key)}
                />
              ))}
            </div>
          )}

          {/* STEP 4 — REVIEW */}
          {current.id === "review" && (
            <div className="apf-review">
              <ReviewBlock title="Learner" onEdit={() => goTo(0)}>
                <Row label="Name" value={values.studentName} />
                <Row label="Date of birth" value={formatDate(values.dob)} />
                <Row label="Gender" value={values.gender} />
                <Row label="Class" value={values.classApplying} />
                <Row label="Current school" value={values.currentSchool || "—"} />
              </ReviewBlock>

              <ReviewBlock title="Parent / guardian" onEdit={() => goTo(1)}>
                <Row label="Name" value={`${values.parentName} (${values.relationship})`} />
                <Row label="Phone" value={values.phone} />
                <Row label="Email" value={values.email || "—"} />
                <Row label="Notes" value={values.additionalInfo || "—"} />
              </ReviewBlock>

              <ReviewBlock title="Documents" onEdit={() => goTo(2)}>
                <Row
                  label="Attached"
                  value={`${attachedCount} of ${DOCUMENTS.length}${
                    attachedCount < DOCUMENTS.length ? " · the rest can be sent later" : ""
                  }`}
                />
              </ReviewBlock>

              <div className={`apf-consent ${errors.consent ? "has-error" : ""}`}>
                <input
                  id={id("consent")}
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={update}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? `${id("consent")}-error` : undefined}
                />
                <label htmlFor={id("consent")}>
                  I confirm that the information in this application is correct.
                </label>
                {errors.consent && (
                  <p className="apf-error" id={`${id("consent")}-error`}>
                    {errors.consent}
                  </p>
                )}
              </div>

              {!APPLICATION_ENDPOINT && (
                <p className="apf-note">
                  When you submit, your email app will open with your
                  application filled in. Press <strong>send</strong> there to
                  deliver it to our admissions office.
                </p>
              )}

              {submitError && (
                <p className="apf-submit-error" role="alert">
                  {submitError}
                </p>
              )}
            </div>
          )}

          {/* ACTIONS */}
          <div className="apf-actions">
            {step > 0 && (
              <button type="button" className="ap-btn ap-btn-plain" onClick={() => goTo(step - 1)}>
                <FaArrowLeft aria-hidden="true" />
                <span>Back</span>
              </button>
            )}

            {current.id === "review" ? (
              <button type="submit" className="ap-btn ap-btn-berry" disabled={submitting}>
                <span>{submitting ? "Submitting…" : "Submit application"}</span>
                <i aria-hidden="true">
                  <FaPaperPlane />
                </i>
              </button>
            ) : (
              <button type="submit" className="ap-btn ap-btn-navy">
                <span>Continue to {STEPS[step + 1].title.toLowerCase()}</span>
                <i aria-hidden="true">
                  <FaArrowRight />
                </i>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function ReviewBlock({ title, onEdit, children }) {
  return (
    <div className="apf-review-block">
      <div className="apf-review-head">
        <h4>{title}</h4>
        <button type="button" onClick={onEdit}>
          <FaPen aria-hidden="true" />
          Edit <span className="ap-sr">{title}</span>
        </button>
      </div>
      <dl>{children}</dl>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default ApplyForm;