import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class Buscadorcoches extends Component {
    cajamarcaRef = React.createRef();

    state = {
        coches: []
        , temp: []
    };

    buscarCoches = (e) => {
        e.preventDefault();
        var coches = this.state.temp;
        var marca = this.cajamarcaRef.current.value.toLowerCase();
        //VOY A UTILIZAR EL METODO filter() DE ARRAY
        //.filter(obj => obj.propiedad == valor)
        var filtro = 
        coches.filter(car => car.marca.toLowerCase().includes(marca));
        //REASIGNAMOS EL STATE EN EL FIILTRO
        this.setState({
            coches: filtro
        })
    }


    cargarCoches = (e) => {
        if (e != null) {
            e.preventDefault();
        }
        var request = "/webresources/coches";
        var url = Global.urlcoches + request;
        axios.get(url).then(res =>{
            console.log(res.data);
            this.setState({
                coches:res.data
                , temp:res.data
            });
        });
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Api coches</h1>
                <form onSubmit={this.buscarCoches}> 
                    <label>Marca:</label>
                    <input type="text" required ref={this.cajamarcaRef}/>
                    <button>
                        Filtrar coches
                    </button>
                    <button onClick={this.cargarCoches}>
                        Cargar todos los coches
                    </button>
                </form>
                <table border="2">
                    <thead>
                        <tr>
                            <td>Marca</td>
                            <td>Modelo</td>
                            <td>Conductor</td>
                            <td>Imagen</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coches.map((coche,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td> <img src={coche.imagen} style={{width:'150px', height:'150px'}}/></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
