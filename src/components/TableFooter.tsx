import { useSelector } from 'react-redux';
import { IRootState } from '../types/companySliceTypes';

function TableFooter() {
  const companies = useSelector(
    (state: IRootState) => state.companies.companies,
  );

  return (
    <tr>
      <td colSpan={6} className="table-footer">
        Всего: {companies.length}
      </td>
    </tr>
  );
}

export default TableFooter;
