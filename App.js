// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Weather from './Components/Weather';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  };

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils -Dark mode";
    }else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode removed", "$black");
      document.title = "TextUtils -light mode";
    }
  }

  return (
    <Router>
      {/* <Navbar mode={mode} title="TextUtils" aboutText='About' toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <About mode={mode}/>
      
      <div className="container">
        <TextForm heading="TextUtils" showAlert={showAlert} mode={mode}/>
      </div> */}
      <Navbar mode={mode} title='TextUtils' aboutText='About' toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <About mode={mode}/>
      <div className="container">
        <Routes>
              <Route path='/' element={<TextForm heading="TextUtils" mode={mode} showAlert={showAlert}/>}/>
              {/* <Route path='/about' element={<About mode={mode}/>} /> */}
              <Route path='/weather' element={<Weather/>} />
        </Routes>
      </div>
      <div className="container">
        <Link to='/' className='btn btn-primary'>Home</Link>
        {/* <Link to='/about'/> */}
        <Link to='/weather' className='btn btn-secondary' style={{marginLeft:'10px'}}>Weather</Link>
      </div>

      </Router>

  );
}

export default App;
