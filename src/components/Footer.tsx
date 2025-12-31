const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 bg-indigo-500 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          BeyondChats
        </h3>

        <p className="text-sm md:text-base mb-4">
          Building smarter conversations with AI
        </p>

        <div className="text-sm">
          &copy; {CURRENT_YEAR} BeyondChats. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
