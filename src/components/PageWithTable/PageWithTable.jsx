import {useNavigate} from 'react-router-dom';
import styles from './PageWithTable.module.scss';
import Table from '../Table/Table';

function PageWithTable({ csvData, toggleLocalStorageStaus }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        localStorage.clear();
        toggleLocalStorageStaus(false);
        navigate('/main', {replace: true});
    };

    return (
        <section className={styles.tablePage}>
            <button className={styles.tablePage__button} onClick={handleButtonClick}>Загрузить новый файл</button>
            <Table csvData={csvData} />
        </section>
      )
}

export default PageWithTable