import {useState, createContext, useEffect } from 'react';
import firebase from '../service/firebaseConnections';

//criar o context//
export const AuthContext = createContext({});


function AuthProvider({ children }){
   const [user, setUser] = useState({});
   const [loadingAuth, setloadingAuth] = useState(false);


   return(
      <AuthContext.Provider value={{ signed: !!user, user }}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;