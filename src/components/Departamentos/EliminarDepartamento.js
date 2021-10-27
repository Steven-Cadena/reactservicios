import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

export default class EliminarDepartamento extends Component {
    cajanumeroRef = React.createRef();

    state = {
        status:false
    }

    deleteDepartamento = (e) => {
        e.preventDefault();
        var num = this.cajanumeroRef.current.value;
        var request = "/webresources/departamentos/delete/" + num;
        var url = Global.urlcruddepartamentos + request;
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }
    render() {
        if (this.state.status == true){
            return (<Redirect to={"/departamentos"}/>)
        }
        return (
            <div>
                <h1>¿Desea eliminaar el departamento de 
                    {this.props.nombre} en 
                    {this.props.localidad}?</h1>
                <NavLink to={"/departamentos"} className="btn btn-default">
                    Cancelar
                </NavLink>
                <form onSubmit={this.deleteDepartamento}>
                    <input type="hiden" 
                    defaultValue={this.props.iddepartamento} ref={this.cajanumeroRef}/>
                    <button className="btn btn-danger">
                        Eliminar Departamento
                    </button>
                </form>
            </div>
        )
    }
}
