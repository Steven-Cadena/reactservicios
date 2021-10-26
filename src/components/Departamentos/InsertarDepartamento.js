import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class InsertarDepartamento extends Component {
    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        mensaje: ""
        , status: false
    };

    InsertarDepartamento = (e) => {
        e.preventDefault();
        var numero = parseInt(this.cajanumeroRef.current.value);
        var nombre = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;
        var departamento = {
            numero:numero,
            nombre:nombre,
            localidad:loc
        }
        var request = "/webresources/departamentos/post";
        var url = Global.urlcruddepartamentos + request;
        axios.post(url, departamento).then(res => {
            this.setState({
                mensaje:"Departamento insertado correctamente."
            });
        });

    }
    render() {
        return (
            <div>
                <h1>Nuevo departamento</h1>
                <form style={{width:"500px" , margin:"0 auto", display:"table"}} onSubmit={this.InsertarDepartamento}>
                    <div className="form-group row">
                        <label>Número:</label>
                        <input type="number" className="form-control" ref={this.cajanumeroRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" ref={this.cajanombreRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Localidad</label>
                        <input type="text" className="form-control" ref={this.cajalocalidadRef}/>
                    </div>
                    <br/>
                    <button className="btn btn-info">
                        Insertar Departamento
                    </button>
                </form>
                <h2 style={{dolor:"red"}}>
                    {this.state.mensaje}
                </h2>
            </div>
        )
    }
}
