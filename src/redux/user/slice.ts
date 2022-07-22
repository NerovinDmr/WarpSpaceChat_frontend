import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Status, Usertype } from './types';

const initialState= {
    items: {},
    isAuth:false 
  };


const userSlice = createSlice(
    {
    name: 'user',
    initialState,
    reducers: {
        getUser:(state , action)=>{
            state.isAuth=true     
        }
        },
}
)

export const {getUser} = userSlice.actions
export default userSlice.reducer
