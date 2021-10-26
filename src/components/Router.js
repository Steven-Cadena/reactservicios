import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetalleEmpleadoRouter from './RutasEmpleadosParametros/DetalleEmpleadoRouter';
import EmpleadosRouter from './RutasEmpleadosParametros/EmpleadosRouter';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* id empleado es lo que recibe por parametro */}
                    <Route exact path="/detallesempleado/:idempleado" 
                        render={props=>{
                            var id = props.match.params.idempleado;
                            return <DetalleEmpleadoRouter idempleado={id}/>
                        }}/>
                </Switch>
                <EmpleadosRouter/>
            </BrowserRouter>
        )
    }
}
