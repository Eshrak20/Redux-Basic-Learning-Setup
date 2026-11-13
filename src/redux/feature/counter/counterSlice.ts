import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:10}

const counterSlice = createSlice({
    name:"habijabi",
    initialState,
    reducers:{  // Reducer আসলে কিছুই না , এখানে Object থাকবে 
    barbe :()=>{
        
    }

    }
    
});

export default counterSlice.reducer