"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";

export type QuoteIntent = "quote" | "test-ride" | "advisor";

const titles: Record<QuoteIntent, { title: string; cta: string }> = {
  quote: { title: "Request a quotation", cta: "Send my request" },
  "test-ride": { title: "Book a test ride", cta: "Book my test ride" },
  advisor: { title: "Contact a sales advisor", cta: "Request a call" },
};

export function QuoteDialog({
  open,
  onClose,
  intent,
  vehicleName,
}: {
  open: boolean;
  onClose: () => void;
  intent: QuoteIntent;
  vehicleName?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    if (open) setStatus("idle");
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulated submission — wire to your CRM / email service here.
    setTimeout(() => setStatus("done"), 1100);
  };

  const t = titles[intent];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-ink-900 shadow-card"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <h3 className="text-lg font-bold text-white">{t.title}</h3>
                {vehicleName && (
                  <p className="text-sm text-volt">{vehicleName}</p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {status === "done" ? (
              <div className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-volt/15 text-volt">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="mt-5 text-xl font-bold text-white">
                  Request received!
                </h4>
                <p className="mt-2 text-sm text-white/60">
                  Thank you. A VLT Motors advisor will contact you within one
                  business day.
                </p>
                <button onClick={onClose} className="btn-primary mt-6 w-full">
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 p-5">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+216 …"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit more…"
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    t.cta
                  )}
                </button>
                <p className="text-center text-[11px] text-white/40">
                  By submitting you agree to be contacted by VLT Motors.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
      />
    </div>
  );
}
