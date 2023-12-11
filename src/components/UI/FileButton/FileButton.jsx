import React, {useEffect} from 'react'
import styles from './FileButton.module.scss';
import useParserCsv from '../../../hooks/useParserCsv';

function FileButton({ putCsvData, showErrToast }) {
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
      const isCsv = file.name.toLowerCase().endsWith('.csv');
  
      // Если формат файла .csv, то читаем и парсим файл, иначе показываем ошибку
      if (isCsv) {
        try {
          const buffer = await file.arrayBuffer();
  
          // Декодировка данных из файла
          const decoderedText = new TextDecoder('windows-1251').decode(buffer);
          console.log(decoderedText);
          parseCsv(decoderedText);
        } catch (err) {
          console.err('Ошибка чтения файла:', err);
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
