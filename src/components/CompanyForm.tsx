import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../ui/Button';
import TextField from '../ui/TextField';

import { addCompany } from '../store/companySlice';

interface ICompanyForm {
  onCloseModal?: () => void | undefined;
}

function CompanyForm({ onCloseModal }: ICompanyForm) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addCompany({ name, address }));
    onCloseModal?.();
  }

  return (
    <form className="flex w-72 flex-col gap-5 sm:w-96" onSubmit={handleSubmit}>
      <TextField
        variation="primary"
        placeholder="Наименование"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        variation="primary"
        placeholder="Адрес"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className="mt-3 flex justify-center gap-4 sm:justify-end">
        <Button variation="secondary" onClick={onCloseModal}>
          Закрыть
        </Button>
        <Button variation="primary" type="submit">
          Добавить
        </Button>
      </div>
    </form>
  );
}

export default CompanyForm;
