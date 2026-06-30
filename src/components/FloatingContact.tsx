"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, X, MessageSquare } from "lucide-react";
import { site } from "@/data/site";

// Floating WhatsApp / quick-contact dock with a small live-chat style popover.
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello VLT Motors, I'd like more information about your vehicles."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            className="w-72 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 shadow-card backdrop-blur-xl"
          >
            <div className="bg-gradient-to-r from-volt-500 to-volt-400 p-4 text-ink-950">
              <p className="font-bold">Need help choosing?</p>
              <p className="text-sm opacity-80">
                Our advisors typically reply within minutes.
              </p>
            </div>
            <div className="space-y-2 p-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    WhatsApp
                  </span>
                  <span className="block text-xs text-white/50">
                    {site.whatsappDisplay}
                  </span>
                </span>
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-volt/20 text-volt">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Call us
                  </span>
                  <span className="block text-xs text-white/50">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        initial={false}
        animate={{
          scale: visible || open ? 1 : 0,
          opacity: visible || open ? 1 : 0,
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-volt text-ink-950 shadow-glow"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
