import React from 'react';
import {Consumer} from '../AuthContext';


function Private() {
  
  const handleSubmit = (evt, setAuth) => {
    evt.preventDefault();
    sessionStorage.clear();
    setAuth(false);
  }
  return (
    <div>
       <Consumer>        
        {({setAuth}) => (
          <form onSubmit={e=>handleSubmit(e, setAuth)}>    
              <button
              type="submit">
                Cerrar sesión
              </button>
          </form>
        )}
       </Consumer>
      <h1>Zona privada</h1>
    </div>
  );
}

export default Private;
