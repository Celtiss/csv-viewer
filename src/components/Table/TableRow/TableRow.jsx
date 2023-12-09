import React from 'react';
import styles from '../Table.module.scss';

function TableRow() {
  return (
    <tr className={styles.table__row}>
        <td className={styles.table__cell}>Ячейка 1</td>
        <td className={styles.table__cell}>Ячейка 2</td>
        <td className={styles.table__cell}>Ячейка 3</td>
        <td className={styles.table__cell}>Ячейка 2</td>
        <td className={styles.table__cell}>Ячейка 3</td>
    </tr>
  )
}

export default TableRow