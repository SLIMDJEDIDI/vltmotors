"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { vehicles } from "@/data/vehicles";

const subjects = [
  "General enquiry",
  "Book a test ride",
  "Request a quote",
  "After-sales / service",
  "Financing",
  "Business / fleet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulated submission — connect to your CRM, email API or Supabase here.
    setTimeout(() => setStatus("done"), 1100);
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-4xl border border-white/10 bg-white/[0.03] p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-volt/15 text-volt">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-white">Message sent!</h3>
        <p className="mt-2 max-w-sm text-white/60">
          Thank you for reaching out. A member of the VLT Motors team will get
          back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-ghost btn-sm mt-7"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-4xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" placeholder="Your first name" />
        <Field label="Last name" name="lastName" placeholder="Your last name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+216 …" />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Select label="Subject" name="subject" options={subjects} />
        <Select
          label="Vehicle of interest"
          name="vehicle"
          options={["Not sure yet", ...vehicles.map((v) => v.name)]}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
        />
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-white/55">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-volt"
        />
        I agree to be contacted by VLT Motors and accept the privacy policy.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
    </form>
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

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-2xl border border-white/15 bg-ink-900 px-4 py-3 text-sm text-white focus:border-volt/50 focus:outline-none focus:ring-2 focus:ring-volt/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
