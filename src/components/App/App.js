import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

import ProtectedRoute from '../ProtectedRoute';
import Main from '../MainPage/MainPage';
import PageWithTable from '../PageWithTable/PageWithTable';

function App() {
  const [isLocalCsv, setLocalCsvStatus] = useState(true); // Стейт для проверки данных в локальном хранилище
  const [isErr, setErrStatus] =useState(false); // Стейт для статуса ошибки формата файла

  // Показать ошибку на 3 секунды
  const showErrToast = () => {
    setErrStatus(true);
    setTimeout(() => {
      setErrStatus(false);
    }, 3000);
  };

  // Проверка наличия .Csv файла в локальном хранилище
  const checkLocalStorage = () => {
    const isCsv = !! localStorage.getItem('csvFile');
    isCsv ?
    toggleLocalStorageStaus(true) :
    toggleLocalStorageStaus(false);
  }

  const toggleLocalStorageStaus = (stutus) => {
    setLocalCsvStatus(stutus);
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);


  return (
    <main className={styles.page}>
      <Routes>
        <Route path='/' element=
          {
            (isLocalCsv === null || isLocalCsv === false) ?
            <Navigate to="/main" replace /> :
            <Navigate to="/table" replace />
          }
        />
        <Route path='/main' element=
          {
            isLocalCsv ?
            <Navigate to="/table" replace /> :
            <Main 
            toggleLocalStorageStaus={toggleLocalStorageStaus}
            isErr={isErr}
            showErrToast={showErrToast} />
          }
        />
        <Route path='/table' element=
          {
            <ProtectedRoute element={PageWithTable}
            isLocalCsv={isLocalCsv}
            toggleLocalStorageStaus={toggleLocalStorageStaus}
            isErr={isErr}
            showErrToast={showErrToast}
            />
          } 
        />
      </Routes>
    </main>
  );
}

export default App;
