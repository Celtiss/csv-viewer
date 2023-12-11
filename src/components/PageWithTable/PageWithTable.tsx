import React, { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './PageWithTable.module.scss';
import Table from '../Table/Table.tsx';
import CsvRenderedData from '../../models/CsvRenderedData.ts';

interface PageWithTableProps {
    csvData: CsvRenderedData[];
    toggleLocalStorageStaus: (status: boolean) => void;
}

const PageWithTable: FC <PageWithTableProps> = ({ csvData, toggleLocalStorageStaus }) => {
    const navigate = useNavigate();

    const handleButtonClick = ():void => {
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