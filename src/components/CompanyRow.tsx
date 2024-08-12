import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '../ui/Checkbox';
import NoData from '../ui/NoData';

import {
  ICompany,
  IRootState,
  toggleSelectCompany,
} from '../store/companySlice';
import { formatDate, sliceText } from '../utils/helpers';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CompanyForm from './CompanyForm';

function CompanyRow() {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: IRootState) => state.companies.companies,
  );
  const selectedIds = useSelector(
    (state: IRootState) => state.companies.selectedIds,
  );

  if (companies.length === 0) return <NoData />;

  const isChecked = (id: number): boolean => selectedIds.includes(id);

  function handleCheckboxChange(id: number) {
    dispatch(toggleSelectCompany(id));
  }

  return (
    <>
      {companies.map((company: ICompany) => (
        <tr
          key={company.id}
          className={`bg-white dark:bg-slate-800 ${isChecked(company.id) ? 'bg-sky-100 dark:bg-slate-950' : ''}`}
        >
          <td
            className={`table-body-row sticky left-0 bg-white text-center shadow-xl dark:bg-slate-800 ${isChecked(company.id) ? 'bg-sky-100 dark:bg-slate-950' : ''}`}
          >
            <div className="pointer-events-none absolute inset-0 border-r border-gray-200 dark:border-slate-600"></div>
            <div className="flex items-center justify-center">
              <Checkbox
                checked={isChecked(company.id)}
                title={isChecked(company.id) ? 'Снять выбор' : 'Выбрать'}
                onChange={() => handleCheckboxChange(company.id)}
              />
            </div>
          </td>
          <td className="table-body-row">{sliceText(company.name)}</td>
          <td className="table-body-row">{sliceText(company.address)}</td>
          <td className="table-body-row">
            {formatDate(company.created_at) || '—'}
          </td>
          <td className="table-body-row">
            {formatDate(company?.updated_at) || '—'}
          </td>
          <td
            className={`table-body-row sticky right-0 bg-white dark:bg-slate-800 ${isChecked(company.id) ? 'bg-sky-100 dark:bg-slate-950' : ''}`}
          >
            <div className="pointer-events-none absolute inset-0 border-l border-gray-200 dark:border-slate-600"></div>
            <div className="flex h-full items-center justify-center">
              <Modal>
                <Modal.Open opens={`edit ${company.id}`}>
                  <Button variation="inline">Ред.</Button>
                </Modal.Open>
                <Modal.Window
                  name={`edit ${company.id}`}
                  header="Изменение записи"
                >
                  <CompanyForm
                    id={company.id}
                    initialName={company.name}
                    initialAddress={company.address}
                  />
                </Modal.Window>
              </Modal>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CompanyRow;
