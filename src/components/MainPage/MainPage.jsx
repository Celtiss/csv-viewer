import React from 'react';
import styles from './MainPage.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import ErrToast from '../UI/ErrToast/ErrToast';

function Main() {
  return (
    <section className={styles.main}>
      <ErrToast />
      <div className={styles.main__container}>
        <p className={styles.main__text}>Выберите файл в формате CSV</p>
        <FileButton />
      </div>
    </section>
  )
}

export default Main;