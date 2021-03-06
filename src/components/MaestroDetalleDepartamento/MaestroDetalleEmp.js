import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class MaestroDetalleEmp extends Component {
    state = {
        empleados:[]
    }

    cargarEmpleados = () => {
        var iddepartamento = this.props.iddepartamento;
        var request = "/api/Empleados/EmpleadosDepartamento/"+ iddepartamento;
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            })
        });
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }

    //AQUI COMPROBAMOS LOS VIEJOS PROPS CON LOS NUEVOS PARA VER SI NOS DEVUELVE 
    //EL MISMO DEPARTAMENTO O ES DISTINTO EN ESE CASO PINTAMOS DE NUEVO cargarEmpleados()
    componentDidUpdate = (oldProps) => {
        if (this.props.iddepartamento != oldProps.iddepartamento){
            this.cargarEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>Empleados del departamento {this.props.iddepartamento}</h1>
                {this.state.empleados.length > 0 && 
                (
                    this.state.empleados.map((emp,index)=>{
                        return (<h3 style={{color:"red"}} key={index}>
                            {emp.apellido}, {emp.oficio}
                        </h3>)
                    })
                )}
            </div>
        )
    }
}
