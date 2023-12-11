import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import ErrToast from '../UI/ErrToast/ErrToast';

function Main({ putCsvData, isErr, showErrToast }) {
  return (
    <section className={styles.main}>
      {isErr && <ErrToast />}
      <div className={styles.main__container}>
        <p className={styles.main__text}>Выберите файл в формате CSV</p>
        <FileButton putCsvData={putCsvData} showErrToast={showErrToast} />
      </div>
    </section>
  )
}

export default Main;