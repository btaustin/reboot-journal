import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import Header from "@/components/Header";

export default function AboutPage() {
  const content = `
### **Brandon Thompson**
___________________

In technology, our first and most trusted instinct is the reboot. It’s the universal fix, the clean slate, the humble admission that sometimes you have to power down to power up. For over two decades, my career in software engineering—from my first lines of code to leading teams as a Senior Director—has been a series of these essential restarts. Every new project, every architectural puzzle, every step in leadership has been a cycle of learning, launching, and beginning again, stronger than before.

This journal is built on a simple, yet profound, conviction: the logic that reboots a crashed server and the principles that reboot a stalled career often rhyme. Both point toward a foundational design, an intended state of order and high performance. My passion for architecting elegant, resilient software systems is the very same passion that fuels my desire to help others build exceptional careers. The first principles that create a reliable microservice feel strangely familiar to the core principles that build an impactful leader.

**Reboot Journal** is the log file for that exploration. It’s a space to document the process of debugging our code, our careers, and our leadership, restarting our assumptions to find a better way forward. My goal is to chronicle this journey and invite you to join me as we:

* **Reboot Our Assumptions.** We'll challenge the status quo of how we build software and lead teams. Here, we'll ask the hard questions and chase the elegant solutions, whether we're designing a distributed system or developing a strategy for a new product. We don't settle for "how it's done"; we chase "how it *should* be done."

* **Reboot Our Approach.** We'll support one another by sharing the messy middle of the process. This is a place that acknowledges the immense complexity of our work and offers real encouragement for the expedition ahead. We'll trade perfection for progress and theory for tested, practical wisdom.

* **Reboot Our Impact.** We'll motivate each other to tap into our own source code—the unique talents and drives we possess. The aim is to build an unwavering belief in our capacity to innovate, to lead, and to connect with the ultimate "why" that powers every other restart in our lives.

Whether you’re here for leadership strategies, technical deep dives, or a partner in striving for excellence, you’re in the right place. Welcome to the journal of a career spent in perpetual, powerful reboot.

Let's build something with impact, together.
`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] min-h-[300px] overflow-hidden bg-muted">
          <Image
            src="https://bucket.rebootjournal.com/austin_skyline-hero.webp"
            alt="Austin Skyline"
            className="object-cover"
            fill
            priority
            data-ai-hint="austin skyline"
          />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="container mx-auto px-4 md:px-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%),_0_1px_3px_rgb(0_0_0_/_90%)]">
                About Me
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-muted shadow-xl">
                  <Image
                    src="https://bucket.rebootjournal.com/avatar-profile-pic.png"
                    alt="Brandon Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="https://x.com/btaustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-all shadow-md text-sm font-bold"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  Follow @btaustin
                </a>
              </div>
              <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:opacity-80 transition-all flex-1">
                <ReactMarkdown>{content}</ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
