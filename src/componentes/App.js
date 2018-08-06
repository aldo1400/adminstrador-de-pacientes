import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';

class App extends Component {

  state={
    citas:{}
  }

  crearCita=infoCita=>{
    // tomar una copia del state
    const citas={...this.state.citas};
    // agregarlo al state actual
    citas[`citas${Date.now()}`]=citas;
    // set al state

    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
        titulo="Administrador de pacientes de veterinaria"
        />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita 
                crearCita={this.crearCita}
              />
            </div>
            <div className="col-md-6">
            2
            </div>
          </div>
      </div>
    );
  }
}

export default App;
