import CompanyHeader from './CompanyHeader';
import CompanyRow from './CompanyRow';
import TableFooter from './TableFooter';

function CompanyTable() {
  return (
    <div className="flex items-start justify-start sm:items-center sm:justify-center">
      <div className="max-h-[70vh] overflow-auto">
        <table className="table-auto border-collapse border border-b-0 border-t-0 border-gray-200 bg-white">
          <thead>
            <CompanyHeader />
          </thead>
          <tbody>
            <CompanyRow />
          </tbody>
          <tfoot>
            <TableFooter />
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default CompanyTable;
