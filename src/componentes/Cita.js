import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Cita extends Component {
  render() {
      const {fecha,hora,mascota,propietario,sintomas}=this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span>{propietario}</p>
            <p className="card-text"><span>Fecha: </span>{fecha}</p>
            <p className="card-text"><span>Hora: </span>{hora}</p>
            <p className="card-text"><span>Sintomas:</span>
            <br/>
            {sintomas}
            </p>
            <button
            onClick={()=>this.props.borrarCita(this.props.idCita)} 
            className="btn btn-danger">Borrar &times </button>
            
        </div>
      </div>
    )
  }
}

Cita.propTypes={
    info:PropTypes.shape({
        fecha:PropTypes.string.isRequired,
        hora:PropTypes.string.isRequired,
        mascota:PropTypes.string.isRequired,
        propietario:PropTypes.string.isRequired,
        sintomas:PropTypes.string.isRequired
    })
}

export default Cita;
