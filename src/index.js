import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers/ServicioCustomers';
import BuscadorCustomer from './components/ServicioCustomers/BuscadorCustomer';
import Buscadorcoches from './components/BuscadorCoches/Buscadorcoches';
import MaestroDetalleDepartamento from './components/MaestroDetalleDepartamento/MaestroDetalleDepartamento';
import MaestroDetalleEmp from './components/MaestroDetalleDepartamento/MaestroDetalleEmp';
import MaestroDetalleDept from './components/MaestroDetalleDepartamento/MaestroDetalleDept';
import EmpleadosRouter from './components/RutasEmpleadosParametros/EmpleadosRouter';
import Router from './components/Router';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
    {/* <App /> 
    <ServicioCustomers/>
    <BuscadorCustomer/>
    <Buscadorcoches/>
    <MaestroDetalleDepartamento/>
    <MaestroDetalleDept/>*/}
    <Router/>
    {/* <EmpleadosRouter/> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
