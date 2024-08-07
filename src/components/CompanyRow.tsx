import { useDispatch, useSelector } from 'react-redux';

import TextField from '../ui/TextField';
import Checkbox from '../ui/Checkbox';
import NoData from '../ui/NoData';

import {
  ICompany,
  RootState,
  toggleSelectCompany,
  updateCompany,
} from '../store/companySlice';
import { formatDate } from '../utils/helpers';

function CompanyRow() {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companies.companies,
  );
  const selectedIds = useSelector(
    (state: RootState) => state.companies.selectedIds,
  );

  if (companies.length === 0) return <NoData />;

  const isChecked = (id: number): boolean => selectedIds.includes(id);

  function handleCheckboxChange(id: number) {
    dispatch(toggleSelectCompany(id));
  }

  function handleTexFiledChange(
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    field: string,
  ) {
    const newValue = e.target.value;
    dispatch(
      updateCompany({
        id,
        [field]: newValue,
      }),
    );
  }

  return (
    <>
      {companies.map((company: ICompany) => (
        <tr
          key={company.id}
          className={isChecked(company.id) ? 'bg-blue-50' : ''}
        >
          <td className="table-body-row text-center">
            <div className="flex items-center">
              <Checkbox
                checked={isChecked(company.id)}
                title={isChecked(company.id) ? 'Снять выбор' : 'Выбрать'}
                onChange={() => handleCheckboxChange(company.id)}
              />
            </div>
          </td>
          <td className="table-body-row hover:bg-slate-200">
            <TextField
              variation="inline"
              value={company.name}
              onChange={(e) => handleTexFiledChange(e, company.id, 'name')}
            />
          </td>
          <td className="table-body-row hover:bg-slate-200">
            <TextField
              variation="inline"
              value={company.address}
              onChange={(e) => handleTexFiledChange(e, company.id, 'address')}
            />
          </td>
          <td className="table-body-row">
            {formatDate(company.created_at) || '—'}
          </td>
          <td className="table-body-row">
            {formatDate(company?.updated_at) || '—'}
          </td>
        </tr>
      ))}
    </>
  );
}

export default CompanyRow;
