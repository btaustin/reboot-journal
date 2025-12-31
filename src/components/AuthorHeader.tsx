import Image from "next/image";

export default function AuthorHeader() {
  return (
    <div className="mt-0 pt-0">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-muted/30 p-8 rounded-2xl">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-lg flex-shrink-0">
          <Image
            src="https://bucket.rebootjournal.com/avatar-profile-pic.png"
            alt="Brandon Thompson"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Written By</p>
          <h3 className="text-2xl font-bold mb-3">Brandon Thompson</h3>
          <div className="mt-4 flex justify-center sm:justify-start">
            <a
              href="https://x.com/btaustin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-2"
            >
              Follow @btaustin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
