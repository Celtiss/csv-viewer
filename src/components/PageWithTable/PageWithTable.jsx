import styles from './PageWithTable.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import Table from '../Table/Table';
import ErrToast from '../UI/ErrToast/ErrToast';

function PageWithTable({ csvData, putCsvData, isErr, showErrToast }) {
    return (
        <section className={styles.tablePage}>
            {isErr && <ErrToast />}
            <FileButton putCsvData={putCsvData} showErrToast={showErrToast} />
            <Table csvData={csvData} />
        </section>
      )
}

export default PageWithTable