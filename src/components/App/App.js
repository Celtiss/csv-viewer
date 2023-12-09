import styles from './App.module.scss';
import Main from '../MainPage/MainPage';
// import PageWithTable from '../PageWithTable/PageWithTable';


function App() {
  return (
    <main className={styles.page}>
      <Main />
      {/* <PageWithTable /> */}
    </main>
  );
}

export default App;
