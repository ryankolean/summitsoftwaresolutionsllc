export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Summit Software Solutions LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="tel:+12488829055" className="hover:text-blue-600 transition-colors">
              (248) 882-9055
            </a>
            <a href="mailto:info@summitsoftwaresolutions.com" className="hover:text-blue-600 transition-colors">
              info@summitsoftwaresolutions.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}