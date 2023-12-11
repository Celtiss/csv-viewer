import { useState } from 'react';
import CsvParceredData from '../models/CsvParceredData';

type parserReturn = {
    parcedFile: CsvParceredData[];
    parseCsv: (csvText: string) => void;
    isParced: boolean;
}

function useParserCsv():parserReturn {
    const [parcedFile, setParcedFile] = useState<CsvParceredData[]>([]); // Стейт для распарсенных данных
    const [isParced, setParcedStatus] = useState<boolean>(false); // Стейт о статусе парсинга

    const parseCsv = (csvText: string):void => {
    // Создаем массив из каждой новой строки в файле
    const tableRows = csvText.split('\n');

    // Создаем массив заголовоков таблицы
    const tableTitles = tableRows[0].split(',').map(title => title.trim());

    // Парсим данные
    const parsedData:CsvParceredData[] = tableRows.slice(1, -1).map((row) => {

        const rowData = row.split(',').map(item => item.replace(/"/g, '')); // Получаем массив элементов строки

        // Если длина массива больше 4, то есть это адресс, то возвращаем запятые
        if(rowData.length > 4) {
            const address = rowData.slice(4).join(',');
            rowData.splice(4, rowData.length - 4, address);
        }

        const rowObject = {}; // Объект, где будут хранится данные для одной строки таблицы {name, phone, email...}
        tableTitles.forEach(( key, index) => {
            rowObject[key] = rowData[index];
        });
        return rowObject;

    });
    setParcedStatus(true);
    setParcedFile(parsedData);
    };

    return { parcedFile, parseCsv, isParced };
}

export default useParserCsv;