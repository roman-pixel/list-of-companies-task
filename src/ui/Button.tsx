interface IStyles {
  primary: string;
  delete: string;
  secondary: string;
}

interface IButton {
  variation: string;
  children: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ variation, onClick, type, children }: IButton) {
  const base =
    'rounded px-3 py-2 text-sm font-semibold text-white transition-all duration-100 hover:text-stone-200 active:scale-95 sm:px-4 sm:py-2';

  const styles: IStyles = {
    primary: base + ' bg-blue-600 hover:bg-blue-700',
    delete: base + ' bg-red-600 hover:bg-red-700',
    secondary: base + ' bg-slate-500',
  };

  return (
    <button
      type={type}
      className={styles[variation as keyof IStyles]}
      onClick={onClick}
    >
      {children}
      <div className="bg-slate-300"></div>
    </button>
  );
}

export default Button;
