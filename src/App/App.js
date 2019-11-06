import React from 'react';
import {Provider, Consumer} from '../AuthContext';
import Private from './Private';
import Public from './Public';

function App() {
  return (
    <div>
     <Provider>
       <Consumer>
        {({isAuth}) => (
          isAuth ?  
            <Private />
          :  
            <Public /> 
        )}
       </Consumer>
     </Provider>
    </div>
  );
}

export default App;
