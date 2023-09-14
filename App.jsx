import React, {useState} from 'react';
import './public/css/style.css';
import ToDoList from './components/ToDoList';
import Uncheck from './components/Uncheck';
import ModalNew from './components/ModalNew';
import Introduction from './components/Introduction';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [introOpen, setIntroOpen] = useState(false);
  const [todoData, setTodoData] = useState([]);
  return(
  <>
    <header>
      <a className="header-logo" onClick={() => setIntroOpen(true)}>おでかけチェック</a>
      { introOpen && <Introduction setIntroOpen={setIntroOpen} /> }
    </header>
    <div className="container">
      { modalOpen && (
        <ModalNew 
          setModalOpen={setModalOpen}
          setTodoData={setTodoData} />)}
      <div className="container-header">
        <h1>おでかけ前のチェックリスト</h1>
        <button className="new-button" onClick={() => setModalOpen(true)}>+ やること追加</button>
      </div>
      <ToDoList todoData={todoData} />
      <Uncheck />
    </div>
  </>
)}

export default App;