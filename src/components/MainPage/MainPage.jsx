import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import ErrToast from '../UI/ErrToast/ErrToast';

function Main() {
  const [isErr, setErrStatus] =useState(false);
  const showErrToast = () => {
    setErrStatus(true);
    
    // спустя три секунды убираем уведомление об ошибке
    setTimeout(() => {
      setErrStatus(false);
    }, 3000);
  };
  
  return (
    <section className={styles.main}>
      {isErr && <ErrToast />}
      <div className={styles.main__container}>
        <p className={styles.main__text}>Выберите файл в формате CSV</p>
        <FileButton showErrToast={showErrToast} />
      </div>
    </section>
  )
}

export default Main;