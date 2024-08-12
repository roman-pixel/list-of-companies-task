import ThemeSettings from './ThemeSettings';

function Header() {
  return (
    <header className="flex justify-center border-b border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <div className="flex w-full items-center justify-between px-3 py-4 sm:px-6 xl:w-[50vw] xl:px-0">
        <p className="text-lg font-semibold uppercase tracking-widest text-gray-800 dark:text-gray-100">
          Список компаний
        </p>

        <ThemeSettings />
      </div>
    </header>
  );
}

export default Header;
