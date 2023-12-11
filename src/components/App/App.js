import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

import ProtectedRoute from '../ProtectedRoute';
import Main from '../MainPage/MainPage';
import PageWithTable from '../PageWithTable/PageWithTable';

function App() {
  const [isLocalCsv, setLocalCsvStatus] = useState(true); // Стейт для проверки данных в локальном хранилище
  const [isErr, setErrStatus] =useState(false); // Стейт для статуса ошибки формата файла
  const [csvData, setCsvData] = useState([]); // Стейт для массива данных .csv файла

  // Сохранить массив данных .csv файла в стейт и в localStorage
  const putCsvData = (data) => {
    const newData = addIdToCsvData(data); // Добавить уникальный id для каждого объекта массива
    setCsvData(newData);
    localStorage.setItem('csvFile',JSON.stringify(newData));
    toggleLocalStorageStaus(true);
  };

  // Показать ошибку на 3 секунды
  const showErrToast = () => {
    setErrStatus(true);
    setTimeout(() => {
      setErrStatus(false);
    }, 3000);
  };

  // Добавить уникальный id для каждого объекта массива
  const addIdToCsvData = (csvArr) => {
    return csvArr.map((csvItem, idx) => {
      return{
        ...csvItem,
        id: idx
      }
    })
  };

  // Проверить наличия .Csv файла в локальном хранилище
  const checkLocalStorage = () => {
    const isCsv = !! localStorage.getItem('csvFile');
    if (isCsv) {
      setCsvData(JSON.parse(localStorage.getItem('csvFile')));
      toggleLocalStorageStaus(true);
    }
    else {
      toggleLocalStorageStaus(false);
    }
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
            csvData={csvData}
            putCsvData={putCsvData}
            isErr={isErr}
            showErrToast={showErrToast} />
          }
        />
        <Route path='/table' element=
          {
            <ProtectedRoute element={PageWithTable}
            isLocalCsv={isLocalCsv}
            csvData={csvData}
            putCsvData={putCsvData}
            toggleLocalStorageStaus={toggleLocalStorageStaus}
            />
          } 
        />
      </Routes>
    </main>
  );
}

export default App;
