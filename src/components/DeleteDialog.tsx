import toast from 'react-hot-toast';
import { deleteSelectedCompanies } from '../store/companySlice';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';

interface IDeleteDialog {
  onCloseModal?: () => void | undefined;
}

function DeleteDialog({ onCloseModal }: IDeleteDialog) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteSelectedCompanies());
    toast.success('Успешно удалено');
  }

  return (
    <div className="w-72 sm:w-96">
      <p className="dark:text-gray-100">
        Вы уверены, что хотите удалить запись/записи навсегда? Это действие
        невозможно отменить.
      </p>
      <div className="mt-8 flex justify-center gap-4 sm:justify-end">
        <Button variation="secondary" onClick={onCloseModal}>
          Закрыть
        </Button>
        <Button variation="error" onClick={handleDelete}>
          Удалить
        </Button>
      </div>
    </div>
  );
}

export default DeleteDialog;
