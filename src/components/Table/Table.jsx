import React from 'react';
import styles from './Table.module.scss';
import TableRow from './TableRow/TableRow';

function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__theads}>
          <th className={styles.table__thead}>Имя</th>
          <th className={styles.table__thead}>Номер телефона</th>
          <th className={styles.table__thead}>email</th>
          <th className={styles.table__thead}>Дата рождения</th>
          <th className={styles.table__thead}>Адрес</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

export default Table;