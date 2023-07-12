import { useState } from 'react';
import './App.scss';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header><h1>Notify</h1></header>
      <div className='notify-trigger' onClick={() => { setShow(!show) }}>&#128276;</div>
      {show && <section className='notify-content'>
        <div>
          Welcome to Notify App...
        </div>
        <div>
          This is to notify you there is a new message.
        </div>
        <div>
          This is to another notification for you.
        </div>
      </section>}
    </div>
  );
}

export default App;
