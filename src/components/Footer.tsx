import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h2 className="text-xl font-bold text-white">
              Gibeamanuel Hibstu
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Software Engineering Student | Full-Stack Developer
            </p>
          </div>

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
                href="#contact"
                className="text-slate-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-3">

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <ExternalLink size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <ExternalLink size={18} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-lg font-semibold text-white">
            Code with purpose. Build with passion.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            © 2026 Gibeamanuel Hibstu. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}