export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-sm text-steel-500">
          <span className="font-semibold text-steel-300">incertae</span> — нерешённые вопросы человечества
        </div>
        <div className="flex items-center gap-6 text-xs text-steel-600">
          <span>© 2026</span>
          <a href="#" className="hover:text-steel-400 transition-colors">О проекте</a>
          <a href="#" className="hover:text-steel-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-steel-400 transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
