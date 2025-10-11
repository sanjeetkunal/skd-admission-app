// src/utils/scrollToApply.ts
export function scrollToApply(offset = 80) {
  const el = document.getElementById("apply");
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const top = rect.top + scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });

  // (optional) focus first field after scroll
  const first = el.querySelector<HTMLElement>("input,select,textarea,button");
  if (first) setTimeout(() => first.focus({ preventScroll: true }), 400);
}
