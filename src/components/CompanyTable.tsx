import CompanyHeader from './CompanyHeader';
import CompanyRow from './CompanyRow';

function CompanyTable() {
  return (
    <div className="max-h-[70vh] min-w-min overflow-auto">
      <table className="border-collapse border border-gray-300">
        <thead>
          <CompanyHeader />
        </thead>
        <tbody>
          <CompanyRow />
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;
