import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'http://localhost:5000/api'



const initialState = {
    loading :false,
    error: false,
    products : []
}
export const createPRoduct = createAsyncThunk('product/create',async (payload:any , rejectWithValue) => {
    try {
        const response = await axios.post(`${url}/create`,payload);
        if(response){
            return response.data;
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

const productSlice = createSlice = ({
    name: "product",
    initialState,
    reducers:{},
})