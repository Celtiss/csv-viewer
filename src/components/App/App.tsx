import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

import CsvParceredData from '../../models/CsvParceredData.ts';
import CsvRenderedData from '../../models/CsvRenderedData.ts';
import Main from '../MainPage/MainPage.tsx';
import PageWithTable from '../PageWithTable/PageWithTable.tsx';

function App() {
  const [isLocalCsv, setLocalCsvStatus] = useState<boolean>(false); // Стейт для проверки данных в локальном хранилище
  const [isErr, setErrStatus] = useState<boolean>(false); // Стейт для статуса ошибки формата файла
  const [csvData, setCsvData] = useState<CsvRenderedData []>([]); // Стейт для массива данных .csv файла

  // Сохранить массив данных .csv файла в стейт и в localStorage
  const putCsvData = (data: CsvParceredData []):void => {
    const newData = addIdToCsvData(data); // Добавить уникальный id для каждого объекта массива
    setCsvData(newData);
    localStorage.setItem('csvFile',JSON.stringify(newData));
    toggleLocalStorageStaus(true);
  };

  // Показать ошибку на 3 секунды
  const showErrToast = ():void => {
    setErrStatus(true);
    setTimeout(() => {
      setErrStatus(false);
    }, 3000);
  };

  // Добавить уникальный id для каждого объекта массива
  const addIdToCsvData = (csvArr):CsvRenderedData[] => {
    return csvArr.map((csvItem, idx) => {
      return{
        ...csvItem,
        id: idx
      }
    })
  };

  // Проверить наличия .Csv файла в локальном хранилище
  const checkLocalStorage = ():void => {
    const isCsv = !! localStorage.getItem('csvFile');
    if (isCsv) {
      setCsvData(JSON.parse(localStorage.getItem('csvFile')as string));
      toggleLocalStorageStaus(true);
    }
    else {
      toggleLocalStorageStaus(false);
    }
  }

  // Изменить статус наличия данных .csv файлы в локальном хранилище
  const toggleLocalStorageStaus = (stutus:boolean):void => {
    setLocalCsvStatus(stutus);
  };

  // Проверить наличие данных .csv файлы в локальном хранилище
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
            putCsvData={putCsvData}
            isErr={isErr}
            showErrToast={showErrToast} />
          }
        />
        <Route path='/table' element=
          {
            <PageWithTable
            csvData={csvData}
            toggleLocalStorageStaus={toggleLocalStorageStaus}
            />
          } 
        />
      </Routes>
    </main>
  );
}

export default App;
