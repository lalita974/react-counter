import { useState } from "react";
import "./App.css";
import vector from "./assets/Vector.png";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <header>
        <div className="container">
          <img src={vector} alt="calculatrice" />
          <p>React Counter</p>
        </div>
      </header>
      <main>
        <section>
          <div className="counter">
            {counter > 0 ? (
              <button className="decrement" onClick={decrement}>
                -
              </button>
            ) : (
              " "
            )}
            <p>{counter}</p>
            {counter < 10 ? (
              <button className="increment" onClick={increment}>
                +
              </button>
            ) : (
              " "
            )}
          </div>
          <div>
            <button className="reset" onClick={reset}>
              Reset
            </button>
          </div>
        </section>
      </main>
      <footer className="container">
        Made with <span>React</span> at <span>Le Réacteur</span> by{" "}
        <span>Lalita</span>
      </footer>
    </>
  );
}

export default App;
