import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://i.pinimg.com/564x/75/6c/8a/756c8a1f5ee4eeaa728f8b83067cda5e.jpg" >
        Olha só que legal minha miniatura do Batwing.
      </Post>
    </div>
  );
}


export default App;
