import { useSelector } from 'react-redux';

import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CompanyForm from './CompanyForm';

import DeleteDialog from './DeleteDialog';
import { IRootState } from '../types/companySliceTypes';

function TableMenu() {
  const selectedCompanies = useSelector(
    (state: IRootState) => state.companies.selectedIds,
  );

  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      <Modal>
        <Modal.Open opens="add">
          <Button variation="primary">Добавить</Button>
        </Modal.Open>
        <Modal.Window name="add" header="Добавить компанию">
          <CompanyForm />
        </Modal.Window>
      </Modal>

      {selectedCompanies.length > 0 && (
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="error">Удалить</Button>
          </Modal.Open>
          <Modal.Window name="delete" header="Удаление записи">
            <DeleteDialog />
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}

export default TableMenu;
