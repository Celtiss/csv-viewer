import React from 'react'
import styles from './FileButton.module.scss';

function FileButton() {

  return (
    <label className={styles.file}>
      <span className={styles.file__buttonText}>Выберите файл</span>
      <input
        className={styles.file__button}
        type='file'
        accept='.csv'
        name='file'
        aria-label='file-button'
      />
    </label>
  );
}

export default FileButton;
