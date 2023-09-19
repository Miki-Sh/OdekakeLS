import React, {useState} from 'react';
import './public/css/style.css';
import ToDoList from './components/ToDoList';
import Uncheck from './components/Uncheck';
import Introduction from './components/Introduction';

const App = () => {
  const [introOpen, setIntroOpen] = useState(false);
  
  return(
  <>
  <header>
    <a className="header-logo" onClick={() => setIntroOpen(true)}>おでかけチェック</a>
    { introOpen && <Introduction setIntroOpen={setIntroOpen} /> }
  </header>
  <div className="container">
    <ToDoList />
    <Uncheck />
  </div>
  </>
)}

export default App;