import React from 'react'
import styles from './ErrToast.module.scss';

function ErrToast() {
  return (
    <div className={styles.err}>
        <p className={styles.err__message}>Неправильный формат файла, разрешены только файлы .CSV</p>
    </div>
  )
}

export default ErrToast