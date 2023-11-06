import { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { token: action.payload.token,userId:action.payload.userId}
        case 'LOGOUT':
            return { token: null ,userId:null}
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useReducer(authReducer, {
        token: null,
        userId:null
    })

    useEffect(()=>{
        const token=localStorage.getItem('token');
        const userId=localStorage.getItem('userId');

        if(token){
            setAuth({type:'LOGIN',payload:{token:token,userId:userId}})
        }
    },[])


    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;