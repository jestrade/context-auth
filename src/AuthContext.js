import React, { useState, useEffect } from 'react';

//Crear el objeto React Context
const AuthContext = React.createContext();
//Definir el objeto consumidor
const Consumer = AuthContext.Consumer;
//Definir el objeto funcional proveedor 
const Provider = (props) => {
  //Definir el manejo del estado de autenticación 
  const [isAuth, setAuth] = useState(false);
  //Definir el inicio del ciclo de vida del componente, para verificar si el usuario ya está autenticado al momento de recargar la página; en caso de estarlo, establecer el estado de autenticación como verdadero
  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    uid !== null && setAuth(true);
  },[isAuth]);
  //Retornar el componente Provider que se renderiza, con la definición de la función que actualiza el estado, y el estado de autenticación
  return (
      <AuthContext.Provider
          value={{
              isAuth: isAuth,
              setAuth: setAuth
          }}
          >
          {props.children}
      </AuthContext.Provider>
  )
}

//exportar los objetos Proveedor y Consumidor
export { Provider, Consumer }
