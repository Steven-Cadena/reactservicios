import logo from './../../components/assets/images/logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";
import MenuDepartamentos from '../Departamentos/MenuDepartamentos';
import TablaDepartamentos from '../Departamentos/TablaDepartamentos';

function App() {
  return (
    <div className="App">
      <MenuDepartamentos/>
      <TablaDepartamentos/>
    </div>
  );
}

export default App;
