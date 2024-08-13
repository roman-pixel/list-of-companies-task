import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import CompanyTable from './components/CompanyTable';
import TableMenu from './components/TableMenu';
import Header from './ui/Header';

import { ThemeProvider } from './contexts/ThemeContext';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
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
            className:
              'bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-100',
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
