export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Summit Software Solutions LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}