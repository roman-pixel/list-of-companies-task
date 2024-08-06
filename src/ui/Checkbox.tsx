import { ChangeEventHandler } from 'react';

interface CheckboxProps {
  checked: boolean;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({ checked, title, onChange }: CheckboxProps) {
  return (
    <input
      title={title}
      checked={checked}
      type="checkbox"
      className="h-4 w-4 rounded transition-transform duration-200 focus:outline-none active:scale-90"
      onChange={onChange}
    />
  );
}

export default Checkbox;
