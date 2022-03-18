import './App.css';

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  return (
    <div className="App">
      { console.log(giphy_secret_key) }
      <p>ohaa</p>
      {/* { console.log("hai") } */}
    </div>
  );
}

export default App;
