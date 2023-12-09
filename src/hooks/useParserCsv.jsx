import { useState } from 'react';

function useParserCsv() {
    const [parcedFile, setParcedFile] = useState([]); // Стейт для распарсенных данных
    const [isParced, setParcedStatus] = useState(false); // Стейт о статусе парсинга

    const parseCsv = (csvText) => {
    // Создаем массив из каждой новой строки в файле
    const tableRows = csvText.split('\n');

    // Создаем массив заголовоков таблицы
    const tableTitles = tableRows[0].split(',');

    // Парсим данные
    const parsedData = tableRows.slice(1).map((row) => {

        const rowData = row.split(','); // Получаем массив элементов строки

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