import { Toaster } from 'react-hot-toast';
import CompanyTable from './components/CompanyTable';
import TableMenu from './components/TableMenu';
import Header from './ui/Header';

function App() {
  return (
    <>
      <Header />

      <div className="sm:p-5">
        <CompanyTable />
        <TableMenu />
      </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          className: '',
          duration: 3000,
        }}
      />
    </>
  );
}

export default App;
