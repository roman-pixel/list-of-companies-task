import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '../ui/Checkbox';

import {
  deselectAllCompanies,
  RootState,
  selectAllCompanies,
} from '../store/companySlice';

function CompanyHeader() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isRowChecked, setIsRowChecked] = useState(false);

  const selectedCompanies = useSelector(
    (state: RootState) => state.companies.selectedIds,
  );

  useEffect(() => {
    setChecked(selectedCompanies.length > 0);
  }, [selectedCompanies.length, setIsRowChecked]);

  useEffect(() => {
    if (isRowChecked) {
      if (checked) {
        dispatch(selectAllCompanies());
      } else {
        dispatch(deselectAllCompanies());
      }
    }
    setIsRowChecked(false);
  }, [checked, dispatch, isRowChecked, setIsRowChecked]);

  function handleCheckboxChange() {
    setIsRowChecked(true);
    setChecked((check) => !check);
  }

  return (
    <tr>
      <th className="table-header-row text-center">
        <div className="flex items-center">
          <Checkbox
            checked={checked}
            title={checked ? 'Снять выбор' : 'Выбрать все'}
            onChange={handleCheckboxChange}
          />
        </div>
      </th>
      <th className="table-header-row">Наименование</th>
      <th className="table-header-row">Адрес</th>
      <th className="table-header-row">Дата создания</th>
      <th className="table-header-row">Дата изменения</th>
    </tr>
  );
}

export default CompanyHeader;
