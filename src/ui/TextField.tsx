import { ChangeEventHandler, useState } from 'react';
import { sliceText } from '../utils/helpers';

interface ITextFiled {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  variation: string;
  placeholder?: string;
}

interface IStyles {
  primary: string;
  inline: string;
}

function TextField({ value, onChange, variation, placeholder }: ITextFiled) {
  const [isFocus, setIsFocus] = useState(false);

  const base =
    'w-full leading-10 placeholder:text-gray-500 dark:placeholder:text-gray-400';

  const styles: IStyles = {
    primary:
      base + ' bg-gray-200 rounded px-4 dark:bg-gray-700 dark:text-gray-200',
    inline:
      base +
      ' bg-transparent hover:bg-slate-200 focus:outline-none min-w-40 dark:hover:bg-slate-900',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles[variation as keyof IStyles]}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      value={isFocus ? value : sliceText(value)}
      onChange={onChange}
    />
  );
}

export default TextField;
