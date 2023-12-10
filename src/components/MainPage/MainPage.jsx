import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import ErrToast from '../UI/ErrToast/ErrToast';

function Main({ toggleLocalStorageStaus, isErr, showErrToast }) {
  
  return (
    <section className={styles.main}>
      {isErr && <ErrToast />}
      <div className={styles.main__container}>
        <p className={styles.main__text}>Выберите файл в формате CSV</p>
        <FileButton showErrToast={showErrToast} toggleLocalStorageStaus={toggleLocalStorageStaus} />
      </div>
    </section>
  )
}

export default Main;