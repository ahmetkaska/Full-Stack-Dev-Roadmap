import UserCard from "./components/UserCard";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('white');

  const changeMode = () => {
    setMode(prevMode => (prevMode === 'black' ? 'white' : 'black'));
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: mode,
        color: mode === 'black' ? 'white' : 'black',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>Week Three</h1>
      <hr />
      <h4>Props Exercise</h4>

      <UserCard
        id={1}
        name={'Ahmet'}
        surname={'Kaşka'}
        age={25}
        number={'0000 000 00 00'}
        mail={'ahmet@gmail.com'}
      />

      <UserCard
        id={2}
        name={'Aydin'}
        surname={'Balta'}
        age={45}
        number={'0001 001 01 01'}
        mail={'aydin@gmail.com'}
      />

      <UserCard
        id={3}
        name={'Ali'}
        surname={'Veli'}
        age={49}
        number={'0000 000 00 02'}
        mail={'ali@gmail.com'}
      />

      <hr />
      <h4>State Exercise</h4>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Arttir +</button>
      <span style={{ margin: '0 10px' }}> {count} </span>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Azalttir -</button>
    

      <h4>Change Mode</h4>
      <button onClick={changeMode}>Change Mode (Current: {mode})</button>
    </div>
  );
}

export default App;
