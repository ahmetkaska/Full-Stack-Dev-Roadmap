import UserCard from "./components/UserCard";


function App() {
  return (
    <div className="App">
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
    </div>

  );
}

export default App;
