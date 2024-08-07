import CompanyTable from './components/CompanyTable';
import TableMenu from './components/TableMenu';
import Header from './ui/Header';

function App() {
  return (
    <div>
      <Header />

      <div className="p-1 sm:p-5">
        <CompanyTable />
        <TableMenu />
      </div>
    </div>
  );
}

export default App;
