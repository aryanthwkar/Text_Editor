import { useState } from "react";
import "./App.css";
//import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  const Alert = () => {
    
    
  }
 const [text, setText] = useState("Enable Light Mode")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setText("Enable Dark Mode")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Enable Light Mode")
    }
  };
  return (
    <>
      <Navbar
        title={"Aryan Editors"}
        about={"About"}
        mode={mode}
        toggleMode={toggleMode}
        setText = {text}
      />
      <Alert alert={alert} />
      {/* <About /> */}
      <TextForm />
      
    </>
  );
}

export default App;
