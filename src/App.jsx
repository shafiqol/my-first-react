import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllUsers from "./AllUsers";
import Add from "./Add";

function App() {
  function handleClick() {
    alert("warning");
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React learning</h1>

      <button onClick={handleClick}>click me</button>

      <AllUsers></AllUsers>

      <Add></Add>
    </>
  );
}

export default App;
