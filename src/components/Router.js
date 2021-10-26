import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetalleEmpleadoRouter from './RutasEmpleadosParametros/DetalleEmpleadoRouter';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/detallesempleado/:idempleado" 
                        render={props=>{
                            var id = props.match.params.idempleado;
                            return <DetalleEmpleadoRouter idempleado={id}/>
                        }}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
