import styles from './PageWithTable.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import Table from '../Table/Table';
import ErrToast from '../UI/ErrToast/ErrToast';

function PageWithTable({ toggleLocalStorageStaus, isErr, showErrToast }) {
    return (
        <section className={styles.tablePage}>
            {isErr && <ErrToast />}
            <FileButton showErrToast={showErrToast} toggleLocalStorageStaus={toggleLocalStorageStaus} />
            <Table />
        </section>
      )
}

export default PageWithTable