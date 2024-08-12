import { ChangeEventHandler } from 'react';

interface ICheckbox {
  checked: boolean;
  title: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({ checked, title, onChange }: ICheckbox) {
  return (
    <input
      title={title}
      checked={checked}
      type="checkbox"
      className="custom-checkbox h-4 w-4 appearance-none rounded border border-gray-300 bg-transparent transition-transform duration-200 checked:bg-blue-500 focus:outline-none active:scale-90"
      onChange={onChange}
    />
  );
}

export default Checkbox;
