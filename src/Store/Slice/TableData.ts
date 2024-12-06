import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MockeAPI from '../mockData.json'

interface MockData{
    id:number;
    customerName:string;
    assignee:string;
    model:string;
    floors:string;
}

interface MockDataState {
    data: MockData[];
    loading: boolean;
    error: string | null;
    count: number

}

const initialState: MockDataState ={
    data: [],
    loading: false,
    error:null,
    count:0
}

export const getMockAPIRequest = createAsyncThunk('mockAPI/grid/table',async() =>{
    try{
        const data = MockeAPI;
        console.log(MockeAPI)
        return data
    }
    catch(error){
        console.log(error);
        Promise.reject(error) ;
    }

})


const mockDataSlice = createSlice({
    name:'MockDataTable',
    initialState,
    reducers: {
      fetchMockDataStart: (state)=>{
        state.loading = true;
        state.error = null;
      },
      fetchMockDataSuccess: (state,action)=>{
        state.loading = false;
        state.data = action.payload;
      },
      fetchMockDataError: (state,action)=>{
        state.loading = false;
        state.error = action.payload;
      },
    //   btn clicked
      setCount:(state,action)=>{
        state.count = action.payload;
      }
    },
    extraReducers: (build)=>{
        build.addCase(getMockAPIRequest.pending,(state,action)=>{
            state.loading = true;
            state.error = null;
        })
        build.addCase(getMockAPIRequest.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message || null; 
        })
        build.addCase(getMockAPIRequest.fulfilled, (state,action)=>{
            state.data = action.payload || [];      
        })
    }
})

export default mockDataSlice.reducer;
export const {fetchMockDataError,fetchMockDataSuccess,fetchMockDataStart,setCount} = mockDataSlice.actions;




