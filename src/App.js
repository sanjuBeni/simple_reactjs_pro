import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable light mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#253440";
      setToggleText("Enable dark mode");
      showAlert("Dark mode is active", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setToggleText("Enable light mode");
      showAlert("Ligh mode is active", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggle={toggleMode} toggleText={toggleText} />
        <div className="container mt-4">
          <Alert alert={alert} />
          <Routes>
            <Route extact
              path="/"
              element={
                <Textform
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                  alert={setAlert}
                />
              }
            ></Route>
            <Route extact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
