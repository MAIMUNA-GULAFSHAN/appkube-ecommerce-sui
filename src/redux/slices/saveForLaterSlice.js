import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    saveForLater: [],
  };
  const saveSlice = createSlice({
    name: "saveForLaterSlice",
    initialState,
    reducers: {
      addToSaveForLater: (state, action) => {
        // console.log('dispatching cart items',action.payload)
        state.saveForLater.push(action.payload);
        // console.log('payload',action.payload) 
          },
    },
  });
  
  export const { addToSaveForLater } = saveSlice.actions;
  export default saveSlice.reducer;
  