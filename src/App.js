import "./App.css";
import { useState } from "react";

function App() {
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);

  const reverse1 = () => {
    setHide1(false);
  };
  const reverse2 = () => {
    setHide2(false);
  };
  const reverse3 = () => {
    setHide3(false);
  };
  const reverse4 = () => {
    setHide4(false);
  };
  const reverse5 = () => {
    setHide5(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.input.value;
    e.stopPropagation();
    console.log(data);

    if (data === "1") {
      setHide1(true);
    }
    if (data === "2") {
      setHide2(true);
    }
    if (data === "3") {
      setHide3(true);
    }
    if (data === "4") {
      setHide4(true);
    }
    if (data === "5") {
      setHide5(true);
    }
    e.target.input.value = "";
  };

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <div className="first">
        <div className="div1">Empty Div</div>
        <div className="div12">
          <div className="div221 innerdiv" hidden={!hide1} onClick={reverse1}></div>
          <div className="div222 innerdiv" hidden={!hide2} onClick={reverse2}></div>
          <div className="div223 innerdiv" hidden={!hide3} onClick={reverse3}></div>
          <div className="div224 innerdiv" hidden={!hide4} onClick={reverse4}></div>
          <div className="div225 innerdiv" hidden={!hide5} onClick={reverse5}></div>
        </div>
      </div>
      <div></div>
      <div className="div2">
        <div className="div21">5 circles</div>
        <div className="div221" hidden={hide1}></div>
        <div className="div222" hidden={hide2}></div>
        <div className="div223" hidden={hide3}></div>
        <div className="div224" hidden={hide4}></div>
        <div className="div225" hidden={hide5}></div>
      </div>
      <div className="div3">
        <div className="div31">
          <form onSubmit={handleSubmit}>
            <input type="text" name="input" className="input" autocomplete="off" />
            <br />
            <button className="button">Shoot</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
