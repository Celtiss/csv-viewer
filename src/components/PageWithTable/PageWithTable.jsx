import styles from './PageWithTable.module.scss';
import FileButton from '../UI/FileButton/FileButton';
import Table from '../Table/Table';

function PageWithTable() {
    return (
        <section className={styles.tablePage}>
            <FileButton />
            <Table />
        </section>
      )
}

export default PageWithTable