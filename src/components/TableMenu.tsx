import { useDispatch, useSelector } from 'react-redux';

import Button from '../ui/Button';
import Modal from '../ui/Modal';
import AddCompanyForm from './AddCompanyForm';

import { deleteSelectedCompanies, RootState } from '../store/companySlice';

function TableMenu() {
  const dispatch = useDispatch();

  const selectedCompanies = useSelector(
    (state: RootState) => state.companies.selectedIds,
  );

  function handleDelete() {
    dispatch(deleteSelectedCompanies());
  }

  return (
    <div className="mt-5 flex items-center gap-4">
      <Modal>
        <Modal.Open opens="add">
          <Button variation="primary">Добавить</Button>
        </Modal.Open>
        <Modal.Window name="add" header="Добавить компанию">
          <AddCompanyForm />
        </Modal.Window>
      </Modal>

      {selectedCompanies.length > 0 && (
        <Button variation="delete" onClick={handleDelete}>
          Удалить
        </Button>
      )}
    </div>
  );
}

export default TableMenu;
