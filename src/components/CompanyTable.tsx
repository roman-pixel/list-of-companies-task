import CompanyHeader from './CompanyHeader';
import CompanyRow from './CompanyRow';
import TableFooter from './TableFooter';

function CompanyTable() {
  return (
    <div className="flex items-start justify-start sm:items-center sm:justify-center">
      <div className="max-h-[70vh] overflow-auto border-2 border-gray-300 shadow-lg sm:max-h-[80vh] sm:rounded-lg dark:border-slate-700 dark:shadow-2xl dark:shadow-cyan-700/20">
        <table className="w-screen table-auto lg:w-[50vw]">
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
