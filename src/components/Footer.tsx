import Link from "next/link";
import { Mail, Send, Phone, ExternalLink } from "lucide-react";import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-3">

          {/* Profile */}
          <div>
            <h2 className="text-xl font-bold text-white">
              {profile.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Software Engineering & Management Student | Full-Stack Developer
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                href="#home"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="text-slate-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="#projects"
                className="text-slate-400 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="#education"
                className="text-slate-400 transition hover:text-white"
              >
                Education
              </Link>

              <Link
                href="#contact"
                className="text-slate-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <Mail size={18} />
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
               <ExternalLink size={18} />
              </a>

              {/* Telegram */}
              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <Send size={18} />
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone}`}
                aria-label="Phone"
                title="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <Phone size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
               <ExternalLink size={18} />
              </a>

            </div>

            <p className="mt-4 text-xs text-slate-500">
              {profile.email}
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-lg font-semibold text-white">
            {profile.quote}
          </p>

          <p className="mt-3 text-sm text-slate-500">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
