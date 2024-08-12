import { useSelector } from 'react-redux';
import { IRootState } from '../store/companySlice';

function TableFooter() {
  const companies = useSelector(
    (state: IRootState) => state.companies.companies,
  );

  return (
    <tr>
      <td
        colSpan={5}
        className="sticky bottom-0 bg-gray-100 px-3 py-1 text-gray-600 dark:bg-gray-900 dark:text-gray-100"
      >
        Всего: {companies.length}
      </td>
    </tr>
  );
}

export default TableFooter;
