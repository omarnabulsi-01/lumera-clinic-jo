"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: ContactValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.name.trim().length < 3 || !emailPattern.test(values.email) || values.message.trim().length < 8) {
      setError("يرجى تعبئة الاسم والبريد والرسالة بشكل صحيح.");
      setSuccess(false);
      return;
    }

    // Future integration: submit through a server action or protected API route, never from direct browser email secrets.
    setError("");
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-8" noValidate>
      <h2 className="text-2xl font-black text-charcoal">رسالة سريعة</h2>
      <p className="mt-2 text-sm leading-7 text-mocha">للاستفسارات العامة فقط، وليس للحالات الطارئة أو مشاركة تفاصيل طبية حساسة.</p>
      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">الاسم</span>
          <input
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            className="field-input"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">البريد الإلكتروني</span>
          <input
            value={values.email}
            onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
            className="field-input"
            type="text"
            inputMode="email"
            dir="ltr"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-black text-charcoal">الرسالة</span>
          <textarea
            value={values.message}
            onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
            className="field-input min-h-36 resize-y"
          />
        </label>
      </div>
      {error ? <p className="mt-5 rounded-2xl bg-blush-soft px-4 py-3 text-sm font-bold text-rosegold-dark">{error}</p> : null}
      {success ? (
        <p className="mt-5 flex gap-2 rounded-2xl bg-sage-soft px-4 py-3 text-sm font-bold text-charcoal" role="status">
          <CheckCircle2 className="size-5 text-sage" aria-hidden="true" />
          تم التحقق من الرسالة محليًا، ويمكن ربط الإرسال لاحقًا بطريقة آمنة.
        </p>
      ) : null}
      <PremiumButton type="submit" className="mt-6" icon={<Send className="size-4" aria-hidden="true" />}>
        إرسال الرسالة
      </PremiumButton>
    </form>
  );
}
