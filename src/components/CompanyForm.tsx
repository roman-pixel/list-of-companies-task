import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../ui/Button';
import TextField from '../ui/TextField';

import { addCompany, updateCompany } from '../store/companySlice';

interface ICompanyForm {
  onCloseModal?: () => void | undefined;
  id?: number;
  initialName?: string;
  initialAddress?: string;
}

function CompanyForm({
  onCloseModal,
  id,
  initialName = '',
  initialAddress = '',
}: ICompanyForm) {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(
      id ? updateCompany({ id, name, address }) : addCompany({ name, address }),
    );
    onCloseModal?.();
    toast.success(`Запись ${id ? 'обновлена' : 'добавлена'}`);
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
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default CompanyForm;
