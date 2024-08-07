import { useSelector } from 'react-redux';
import { RootState } from '../store/companySlice';

function TableFooter() {
  const companies = useSelector(
    (state: RootState) => state.companies.companies,
  );

  return (
    <tr className="border-b-0 bg-gray-100">
      <td
        colSpan={5}
        className="sticky bottom-0 bg-gray-100 px-3 py-1 text-gray-600"
      >
        Всего: {companies.length}
      </td>
    </tr>
  );
}

export default TableFooter;
