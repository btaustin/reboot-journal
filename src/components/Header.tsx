import { Power } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Power className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold tracking-tight">Reboot Journal</span>
        </Link>
        <nav className="ml-auto flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Me
          </Link>
          <Link
            href="https://x.com/rebootjournal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors bg-muted/50 px-3 py-1.5 rounded-full border border-border/50 shadow-sm"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            <span className="hidden sm:inline">Follow on X</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
