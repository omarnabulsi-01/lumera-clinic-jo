"use client";

import { CalendarDays, CheckCircle2, Send } from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { services } from "@/data/services";
import { PremiumButton } from "@/components/ui/premium-button";

type BookingFormValues = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

type BookingErrors = Partial<Record<keyof BookingFormValues, string>>;

const initialValues: BookingFormValues = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function validate(values: BookingFormValues): BookingErrors {
  const errors: BookingErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+\d\s()-]{8,20}$/;

  if (values.fullName.trim().length < 3) {
    errors.fullName = "يرجى إدخال الاسم الكامل.";
  }

  if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "يرجى إدخال رقم هاتف صحيح.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "يرجى إدخال بريد إلكتروني صحيح.";
  }

  if (!values.service) {
    errors.service = "يرجى اختيار الخدمة المطلوبة.";
  }

  if (!values.preferredDate) {
    errors.preferredDate = "يرجى اختيار التاريخ المفضل.";
  }

  if (!values.preferredTime) {
    errors.preferredTime = "يرجى اختيار الوقت المفضل.";
  }

  return errors;
}

export function BookingForm({ initialServiceSlug }: { initialServiceSlug?: string }) {
  const [values, setValues] = useState<BookingFormValues>({
    ...initialValues,
    service: services.some((service) => service.slug === initialServiceSlug) ? initialServiceSlug ?? "" : "",
  });
  const [errors, setErrors] = useState<BookingErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateValue(name: keyof BookingFormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submittedValues: BookingFormValues = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      preferredTime: String(formData.get("preferredTime") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const nextErrors = validate(submittedValues);
    setValues(submittedValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Future integration: send this validated payload to a Next.js server action or API route that rate-limits requests,
    // protects email/CRM secrets on the server, and avoids storing medical details without explicit consent.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-8" noValidate>
      <div className="mb-7 flex items-start gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-rosegold text-warm-white">
          <CalendarDays className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-charcoal">نموذج حجز موعد</h2>
          <p className="mt-2 text-sm leading-7 text-mocha">
            النموذج لا يخزن بيانات طبية في هذه النسخة، ويتم التحقق من المدخلات داخل المتصفح فقط.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="الاسم الكامل" error={errors.fullName}>
          <input
            name="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.fullName)}
            autoComplete="name"
          />
        </Field>

        <Field label="رقم الهاتف" error={errors.phone}>
          <input
            name="phone"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            className="field-input arabic-number"
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+962 7 9000 0000"
          />
        </Field>

        <Field label="البريد الإلكتروني" error={errors.email}>
          <input
            name="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            inputMode="email"
            type="text"
            dir="ltr"
          />
        </Field>

        <Field label="الخدمة المطلوبة" error={errors.service}>
          <select
            name="service"
            value={values.service}
            onChange={(event) => updateValue("service", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">اختاري الخدمة</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>

        <Field label="التاريخ المفضل" error={errors.preferredDate}>
          <input
            name="preferredDate"
            value={values.preferredDate}
            onChange={(event) => updateValue("preferredDate", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.preferredDate)}
            type="text"
            inputMode="numeric"
            placeholder="2026-05-20"
          />
        </Field>

        <Field label="الوقت المفضل" error={errors.preferredTime}>
          <select
            name="preferredTime"
            value={values.preferredTime}
            onChange={(event) => updateValue("preferredTime", event.target.value)}
            className="field-input"
            aria-invalid={Boolean(errors.preferredTime)}
          >
            <option value="">اختاري الوقت</option>
            {["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <Field label="رسالة إضافية" error={errors.message}>
            <textarea
              name="message"
              value={values.message}
              onChange={(event) => updateValue("message", event.target.value)}
              className="field-input min-h-32 resize-y"
              aria-invalid={Boolean(errors.message)}
            />
          </Field>
        </div>
      </div>

      {submitted ? (
        <div className="mt-6 flex gap-3 rounded-[24px] border border-sage/25 bg-sage-soft p-5 text-sm font-bold leading-7 text-charcoal" role="status">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-sage" aria-hidden="true" />
          تم التحقق من طلبك محليًا. يمكن ربط إرسال الطلبات بالبريد الإلكتروني أو نظام الحجز لاحقًا بطريقة آمنة.
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <PremiumButton type="submit" icon={<Send className="size-4" aria-hidden="true" />}>
          إرسال طلب الحجز
        </PremiumButton>
        <p className="text-xs leading-6 text-mocha">لن يتم إرسال بيانات حقيقية إلى خادم في النسخة الحالية.</p>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-charcoal">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs font-bold text-rosegold-dark">{error}</span> : null}
    </label>
  );
}
