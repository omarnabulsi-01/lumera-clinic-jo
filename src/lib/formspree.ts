export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdweldd";

export const FORM_SUCCESS_MESSAGE = "تم إرسال طلبك بنجاح. سيتواصل معك فريق لوميرا قريبًا لتأكيد الموعد.";

export const FORM_ERROR_MESSAGE = "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.";

export async function submitFormspreeForm(form: HTMLFormElement) {
  const formData = new FormData(form);
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Formspree submission failed");
  }
}
