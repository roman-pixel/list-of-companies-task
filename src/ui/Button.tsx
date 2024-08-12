interface IStyles {
  primary: string;
  error: string;
  secondary: string;
  inline: string;
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variation: string;
  children: string | JSX.Element | JSX.Element[];
}

function Button({ variation, children, ...rest }: IButton) {
  const base =
    'flex items-center justify-center text-sm font-semibold transition-all duration-200 active:scale-95';

  const styles: IStyles = {
    primary:
      base +
      ' rounded bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 hover:text-gray-100 dark:hover:bg-blue-600 dark:text-gray-100 dark:hover:text-gray-200 px-3 py-2 sm:px-4 sm:py-2',
    error:
      base +
      ' rounded bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 hover:text-gray-100 dark:hover:bg-red-600 dark:text-gray-100 dark:hover:text-gray-200 px-3 py-2 sm:px-4 sm:py-2',
    secondary:
      base +
      ' rounded bg-slate-500 hover:bg-slate-600 text-white  hover:text-gray-100 dark:bg-slate-600 dark:text-gray-100 dark:hover:bg-slate-500 dark:hover:text-gray-200 px-3 py-2 sm:px-4 sm:py-2',
    inline:
      base +
      ' text-blue-500 hover:text-blue-600 dark:text-sky-600 dark:hover:text-sky-700 bg-none',
  };

  return (
    <button className={styles[variation as keyof IStyles]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
