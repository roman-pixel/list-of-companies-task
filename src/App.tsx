import { Toaster } from 'react-hot-toast';
import CompanyTable from './components/CompanyTable';
import TableMenu from './components/TableMenu';
import Header from './ui/Header';

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Header />

      <div className="p-1 sm:p-5">
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
    </div>
  );
}

export default App;
