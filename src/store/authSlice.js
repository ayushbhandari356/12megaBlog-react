import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // we are initialising the auth as false that is user not login 
    status:false,
    userData:null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    // inisde reducers everyone has access to state and action and with the help of action we get payload and change the initialstate onwards
    reducers:{

        login:(state,actions)=>{
            state.status=true;
            state.userData=actions.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer