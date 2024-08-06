import { ChangeEventHandler, useState } from 'react';
import { sliceText } from '../utils/helpers';

interface TextFiledProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  variation: string;
  placeholder?: string;
}

interface Styles {
  primary: string;
  inline: string;
}

function TextField({
  value,
  onChange,
  variation,
  placeholder,
}: TextFiledProps) {
  const [isFocus, setIsFocus] = useState(false);

  const base =
    'w-full min-w-40 bg-transparent leading-10 placeholder:text-gray-500';

  const styles: Styles = {
    primary: base + ' bg-gray-300 rounded  px-4',
    inline: base + ' hover:bg-slate-200 focus:bg-slate-100',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles[variation as keyof Styles]}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      value={isFocus ? value : sliceText(value)}
      onChange={onChange}
    />
  );
}

export default TextField;
