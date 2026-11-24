import Link from "next/link";
import { Mail, Send, Phone } from "lucide-react";
import { profile } from "@/data/profile";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Profile */}
          <div>
            <h2 className="text-xl font-bold text-white">
              {profile.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Software Engineering &amp; Management Student | Full-Stack Developer
            </p>

            <p className="mt-2 text-xs text-purple-300">
              Woldia University (Jul 2029) • Encodo College (Jul 2027)
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Navigation
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
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
                href="#management"
                className="text-slate-400 transition hover:text-white"
              >
                Management
              </Link>
              <Link
                href="#projects"
                className="text-slate-400 transition hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="#services"
                className="text-slate-400 transition hover:text-white"
              >
                Services
              </Link>
              <Link
                href="#skills"
                className="text-slate-400 transition hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="#education"
                className="text-slate-400 transition hover:text-white"
              >
                Education
              </Link>
              <Link
                href="#experience"
                className="text-slate-400 transition hover:text-white"
              >
                Experience
              </Link>
              <Link
                href="#certificates"
                className="text-slate-400 transition hover:text-white"
              >
                Certificates
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
              Connect With Me
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              {/* Telegram */}
              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-300"
              >
                <Send size={17} />
              </a>

              {/* Instagram */}
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone}`}
                aria-label="Phone"
                title="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                <Phone size={17} />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              {profile.email} • {profile.phone}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-base font-semibold text-white">
            {profile.quote}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
