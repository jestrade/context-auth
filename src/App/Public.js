import React from 'react';
import {Consumer} from '../AuthContext';


function Public() {

  const handleSubmit = (evt, setAuth) => {
    evt.preventDefault();
    sessionStorage.setItem('user','user-data');
    setAuth(true);
  }
  return (
    <div>
      <h1>Zona pública</h1>
       <Consumer>        
        {({setAuth}) => (
          <form onSubmit={e=>handleSubmit(e, setAuth)}>    
              <button
              type="submit">
                Iniciar sesión
              </button>
          </form>
        )}
       </Consumer>
    </div>
  );
}

export default Public;
