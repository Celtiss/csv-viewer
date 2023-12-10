import React from 'react';
import styles from '../Table.module.scss';

function TableRow({ csvItem }) {
  return (
    <tr className={styles.table__row}>
        <td className={styles.table__cell}>{csvItem.name}</td>
        <td className={styles.table__cell}>{csvItem.phone}</td>
        <td className={styles.table__cell}>{csvItem.email}</td>
        <td className={styles.table__cell}>{csvItem.bday}</td>
        <td className={styles.table__cell}>{csvItem.address}</td>
    </tr>
  )
}

export default TableRow