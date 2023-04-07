import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios,  {AxiosError} from "axios";

const initialState = {
    token:localStorage.getItem('token'),
    userData : [],
    loading : "",
    error:""
}
const url = 'http://localhost:5000/api'


//Register NEW User
export const registerUser = createAsyncThunk('auth/register', async(payload, rejectWithValue) => {
    try {
        const response = await axios.post(`${url}/register`, payload);
        if(response){
            localStorage.setItem("token", response.token);
            return response.data.dataUser;
        } 
        else {
            return rejectWithValue(response.data.message);
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        }
        console.log(error.response.data)
        return rejectWithValue(error.response.data) 
    }
})



//LOGIN USER
export const loginUser = createAsyncThunk("auth/login", async(payload, rejectWithValue) => {
    try {
        const response = await axios.post(`${url}/login`, payload);
        if(response){
            localStorage.setItem("token", response.token);
            return response.data;
        } 
        else {
            return rejectWithValue(response.data.message);
        }
        
    } catch (err) {
        console.log(err)

        return rejectWithValue(err.response.data)
        
    }
 })
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state,action) => {
            state.loading = "pending";
        });
        builder.addCase(registerUser.fulfilled, (state, action)=>{
            state.user =action.payload;
            state.loading = "success"
        })
        builder.addCase(registerUser.rejected, (state, action)=>{
            state.user =action.payload;
            state.loading = "rejected",
            state.error=true
        })
        builder.addCase(loginUser.pending, (state,action) => {
            state.loading = "pending";
        })
        builder.addCase(loginUser.fulfilled, (state,action) => {
            console.log(state, action)
            state.userData.push(action.payload.data);
            state.userData = action.payload.dataUser;
            state.token=action.payload.token;
            state.loading = "success"
        })
        builder.addCase(loginUser.rejected, (state,action) => {
            state.loading="rejected",
            state.error=true
        })
    }
});

export const getCurrentUSer = (state) => state.auth.userData;
export const getLoadingData = (state) => state.auth.loading;
export const getErrorData = (state) => state.auth.error;

export default authSlice.reducer;