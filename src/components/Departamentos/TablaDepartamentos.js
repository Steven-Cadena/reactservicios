import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class TablaDepartamentos extends Component {
    state = {
        departamentos:[]
        , status:false
    }

    cargarDepartamentos = () => {
        var request = "/webresources/departamentos/";
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos:res.data
                , status:true
            });
        });
    }
    componentDidMount = () => {
        this.cargarDepartamentos();
    } 
    render() {
        if (this.state.status == true){
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <th>Número</th>    
                            <th>Nombre</th>    
                            <th>Localidad</th>    
                            <th>Acciones</th>
                        </thead> 
                        <tbody>
                            {this.state.departamentos.map((dept,index)=>{
                                return(<tr key={index}>
                                    <td>{dept.numero}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink to={"/detallesdepartamento/" + dept.numero + 
                                    "/" + dept.nombre + "/" + dept.localidad} className="btn btn-success">
                                        Detalles
                                        </NavLink>
                                    </td>
                                </tr>);
                            })}
                        </tbody>
                    </table>

                </div>
            )
        }else{
            return(<h1>Cargando registro ....</h1>);
        }

    }
}
