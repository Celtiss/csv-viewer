import React, {FC} from 'react';
import styles from './MainPage.module.scss';
import CsvParceredData from '../../models/CsvParceredData.ts';
import FileButton from '../UI/FileButton/FileButton.tsx';
import ErrToast from '../UI/ErrToast/ErrToast.tsx';

interface MainProps {
  putCsvData: (parcedFile: CsvParceredData[]) => void;
  isErr: boolean;
  showErrToast: () => void;
}

const Main: FC <MainProps> = ({ putCsvData, isErr, showErrToast }) => {
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