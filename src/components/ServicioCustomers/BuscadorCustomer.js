import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCustomer extends Component {

    cajaIdRef = React.createRef();

    state = {
        customer :{}
        , status: false
    };

    buscarCustomer = (e) => {
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var request = "customers/" + id;
        var url = Global.urlnorthwind + request;
        axios.get(url).then(res =>{
            //console.log(res.data);
            //console.log(res.data.customer);
            this.setState({
                customer: res.data.customer
                , status:true
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>Introduzca ID Customer:</label>
                    <input type="text" ref={this.cajaIdRef} required/>
                    <button>
                        Buscar customer
                    </button>
                </form>
                <hr/>
                {this.state.status == true && (
                    <div>
                        <h1>Empresa: {this.state.customer.companyName}</h1>
                        <h1 style={{color:"red"}}>Nombre: {this.state.customer.contactName}</h1>
                        <h1>Cargo: {this.state.customer.contactTitle}</h1>
                        <h1>City: {this.state.customer.city}</h1>
                    </div>
                )}

            </div>
        )
    }
}
