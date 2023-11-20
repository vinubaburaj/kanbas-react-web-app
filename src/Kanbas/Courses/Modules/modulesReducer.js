import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
  module: { name: "Module Name", description: "Module Description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        action.payload,
        ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((m) => {
        return m._id === action.payload._id ? action.payload : m;
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    }
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
