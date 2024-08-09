import CompanyHeader from './CompanyHeader';
import CompanyRow from './CompanyRow';
import TableFooter from './TableFooter';

function CompanyTable() {
  return (
    <div className="flex items-start justify-start sm:items-center sm:justify-center">
      <div className="max-h-[70vh] overflow-auto rounded-lg border border-gray-300 shadow-lg">
        <table className="table-auto bg-white">
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
