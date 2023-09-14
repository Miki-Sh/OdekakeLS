import React from 'react';
import '../public/css/NewEdit.css';

const ModalNew = (props) => {
  const { setModalOpen, setTodoData } = props;
    const saveTodo = () => {
      let existingData = localStorage.getItem('todo');
      if (!existingData) {
        existingData = ['火の元を確認する','玄関の鍵を閉める'];
      } else {
        existingData = JSON.parse(existingData);
      }
      const val = document.querySelector('.itemName').value;
      existingData.push(val);
      localStorage.setItem('todo', JSON.stringify(existingData));
      setModalOpen(false);
      setTodoData(existingData);
    };

    return(
      <div className='overlay' onClick={() => setModalOpen(false)}>
        <div className="container">
          <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
            <h1>おでかけ前にすることを追加しよう！</h1>
            <p className="form-label">↓に入力してください</p>
            <form method="post">
              <input type="text" className="itemName" />
              <input type="submit" value="作成する" onClick={saveTodo} />
            </form>
          </div>
          <button onClick={() => setModalOpen(false)} className="cancel-button">もどる</button>
        </div>    
      </div>    
    );
};

export default ModalNew;