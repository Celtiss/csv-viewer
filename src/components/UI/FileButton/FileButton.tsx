import React, {useEffect, FC} from 'react'
import styles from './FileButton.module.scss';
import CsvParceredData from '../../../models/CsvParceredData.ts';
import useParserCsv from '../../../hooks/useParserCsv.ts';

interface FileButtonProps {
  putCsvData: (parcedFile: CsvParceredData[]) => void;
  showErrToast: () => void;
}

const FileButton: FC <FileButtonProps> = ({ putCsvData, showErrToast }) => {
  // Хук для парсинга csv файла
  const { parcedFile, parseCsv, isParced } = useParserCsv();

  // Ждем распарсенные данные, если все успешно, то сохраняем в localStorage
  useEffect(() => {
    if(isParced) {
      putCsvData(parcedFile);
    }
  }, [parcedFile, isParced]);

  // Обработчик события добавления/изменения файла
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
  
    // Существует ли файл
    if (file) {
      // Проверка формата файла
      const isCsv: boolean = file.name.toLowerCase().endsWith('.csv');
  
      // Если формат файла .csv, то читаем и парсим файл, иначе показываем ошибку
      if (isCsv) {
        try {
          const buffer = await file.arrayBuffer();
  
          // Декодировка данных из файла
          const decoderedText = new TextDecoder('windows-1251').decode(buffer);
          parseCsv(decoderedText);
        } catch (err) {
          console.log('Ошибка чтения файла:', err);
        }
      } else {
        showErrToast();
      }
    }
  };
  
  return (
    <label className={styles.file}>
      <span className={styles.file__buttonText}>Выберите файл</span>
      <input
        className={styles.file__button}
        type='file'
        // accept='.csv' // Закоментирован, чтобы проверить работоспособность уведомления о неправильном формате файла
        name='file'
        aria-label='file-button'
        onChange={handleFileInputChange}
      />
    </label>
  );
}

export default FileButton;
