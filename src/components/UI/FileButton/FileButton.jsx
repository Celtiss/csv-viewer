import React, {useEffect} from 'react'
import styles from './FileButton.module.scss';
import useParserCsv from '../../../hooks/useParserCsv';

function FileButton({ showErrToast, toggleLocalStorageStaus }) {
  // Хук для парсинга csv файла
  const { parcedFile, parseCsv, isParced } = useParserCsv();

  // Ждем распарсенные данные, если все успешно, то сохраняем в localStorage
  useEffect(() => {
    if(isParced) {
      localStorage.clear();
      localStorage.setItem('csvFile',JSON.stringify(parcedFile));
      toggleLocalStorageStaus(true);
    }
  }, [parcedFile, isParced]);

  // Обработчик события добавления/изменения файла
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    // Существует ли файл
    if (file) {
      // Проверка формата файла
      const isCsv =  file.name.toLowerCase().endsWith('.csv');

      // Если формат файла .csv, то читаем и парсим файл, иначе показываем ошибку
      if (isCsv) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const csvFileText = e.target.result;
          parseCsv(csvFileText);
        };
        reader.readAsText(file);
      }
      else {
        showErrToast();
      }
    }
  }

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
