import React from "react";

export const Icon = {
  Home: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 10.5L12 3l9 7.5"/><path d="M9 21V12h6v9"/></svg>,
  File: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>,
  Upload: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 16V3"/><path d="M7 8l5-5 5 5"/><path d="M20 21H4"/></svg>,
  Card: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>,
  Exam: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h5"/></svg>,
  Query: (cls="w-4 h-4") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/><path d="M9.5 8.5a3 3 0 0 1 5 1.5c0 1.5-1 2-2 2"/><circle cx="11" cy="16" r="1"/></svg>,
  Phone: (cls="w-5 h-5") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.36-1.26a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Bell: (cls="w-5 h-5") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21h4"/></svg>,
  Chat: (cls="w-5 h-5") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>,
  Help: (cls="w-5 h-5") => <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"/><path d="M12 17h.01"/></svg>,
};
