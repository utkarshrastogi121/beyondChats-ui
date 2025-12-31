const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-bold tracking-tight mb-1">
          BeyondChats
        </h3>

        <p className="text-sm text-white/90 mb-4">
          AI-powered article publishing platform
        </p>

        <div className="text-sm text-white/80">
          &copy; {CURRENT_YEAR} BeyondChats. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
