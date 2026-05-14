"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { services } from "@/data/services";
import { FORM_ERROR_MESSAGE, FORM_SUCCESS_MESSAGE, submitFormspreeForm } from "@/lib/formspree";

type ContactValues = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};
type SubmissionStatus = "idle" | "loading" | "success" | "error";

const initialValues: ContactValues = {
  fullName: "",
  phone: "",
  email: "",
  service: "استفسار عام",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");

  function updateValue(name: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setError("");
    setSubmissionStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+\d\s()-]{8,20}$/;

    if (
      values.fullName.trim().length < 3 ||
      !phonePattern.test(values.phone.trim()) ||
      !emailPattern.test(values.email.trim()) ||
      values.message.trim().length < 8
    ) {
      setError("يرجى تعبئة الاسم ورقم الهاتف والبريد والرسالة بشكل صحيح.");
      setSubmissionStatus("idle");
      return;
    }

    setError("");
    setSubmissionStatus("loading");

    try {
      await submitFormspreeForm(form);
      setValues(initialValues);
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-8" noValidate>
      <input type="hidden" name="website" value="Lumera Clinic" />
      <input type="hidden" name="formType" value="Contact Form" />
      <input type="hidden" name="source" value="contact-page" />
      <input type="hidden" name="preferredDate" value="" />
      <input type="hidden" name="preferredTime" value="" />
      <h2 className="text-2xl font-black text-charcoal">رسالة سريعة</h2>
      <p className="mt-2 text-sm leading-7 text-mocha">
        للأسئلة العامة والحجز المبدئي. تُرسل الرسالة إلى فريق لوميرا عبر Formspree، مع تجنب مشاركة تفاصيل طبية حساسة أو طارئة.
      </p>
      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">الاسم</span>
          <input
            name="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            className="field-input"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">رقم الهاتف</span>
          <input
            name="phone"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            className="field-input arabic-number"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+962 7 9101 0766"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">البريد الإلكتروني</span>
          <input
            name="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            className="field-input"
            type="text"
            inputMode="email"
            dir="ltr"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">نوع الاستفسار</span>
          <select name="service" value={values.service} onChange={(event) => updateValue("service", event.target.value)} className="field-input">
            <option value="استفسار عام">استفسار عام</option>
            {services.slice(0, 8).map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">الرسالة</span>
          <textarea
            name="message"
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            className="field-input min-h-36 resize-y"
          />
        </label>
      </div>
      {error ? <p className="mt-5 rounded-2xl bg-blush-soft px-4 py-3 text-sm font-bold text-rosegold-dark">{error}</p> : null}
      {submissionStatus === "success" ? (
        <p className="mt-5 flex gap-2 rounded-2xl bg-sage-soft px-4 py-3 text-sm font-bold text-charcoal" role="status">
          <CheckCircle2 className="size-5 text-sage" aria-hidden="true" />
          {FORM_SUCCESS_MESSAGE}
        </p>
      ) : null}
      {submissionStatus === "error" ? (
        <p className="mt-5 flex gap-2 rounded-2xl bg-blush-soft px-4 py-3 text-sm font-bold text-rosegold-dark" role="alert">
          <AlertCircle className="size-5" aria-hidden="true" />
          {FORM_ERROR_MESSAGE}
        </p>
      ) : null}
      <PremiumButton
        type="submit"
        className="mt-6"
        disabled={submissionStatus === "loading"}
        icon={
          submissionStatus === "loading" ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )
        }
      >
        {submissionStatus === "loading" ? "جارٍ إرسال الرسالة..." : "إرسال الرسالة"}
      </PremiumButton>
    </form>
  );
}
