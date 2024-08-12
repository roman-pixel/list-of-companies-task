interface IStyles {
  primary: string;
  error: string;
  secondary: string;
}

interface IButton {
  variation: string;
  children: string | JSX.Element | JSX.Element[];
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ variation, onClick, type, children }: IButton) {
  const base =
    'flex items-center justify-center rounded px-3 py-2 text-sm font-semibold transition-all duration-200 hover:text-gray-100 active:scale-95 sm:px-4 sm:py-2 dark:hover:text-gray-200';

  const styles: IStyles = {
    primary:
      base +
      ' bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700  dark:hover:bg-blue-600 dark:text-gray-100',
    error:
      base +
      ' bg-red-600 hover:bg-red-700 text-white dark:bg-red-700  dark:hover:bg-red-600 dark:text-gray-100',
    secondary:
      base +
      ' bg-slate-500 hover:bg-slate-600 text-white dark:bg-slate-600 dark:text-gray-100 dark:hover:bg-slate-500',
  };

  return (
    <button
      type={type}
      className={styles[variation as keyof IStyles]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
