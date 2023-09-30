import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    classData: [],
    isLoading: false,
    error: null,
    isEditMode: false,
};


const addOrRemove = (action, State, data) => {
    if (action === "add") {
        return State.push(data);
    }
    const indexToRemove = State.findIndex((classItem) => classItem.id === data.id);
    if (indexToRemove !== -1) {
        State.splice(indexToRemove, 1);
    }
    return State;
}
const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        addClasses: (state, action) => {
            action.payload['id'] = nanoid();
            addOrRemove("add", state.classData, action.payload);
            state.isEditMode = true;
        },
        removeClass: (state, action) => {
            state.isLoading = false;
            addOrRemove("remove", state.classData, action.payload);
            state.isEditMode = true;
            state.error = null;
        },
        classSaveRequest: (state) => {
            state.isLoading = true;
        },
        classSaveSuccess: (state, action) => {
            state.isLoading = false;
            state.classData = action.payload;
            state.error = null;
            state.isEditMode = false;
        },
        classSaveFail: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
        classGetRequest: (state) => {
            state.isLoading = true;
        },
        classGetSuccess: (state, action) => {
            state.isLoading = false;
            state.classData = action.payload;
            state.error = null;
            state.isEditMode = false;
        },
        classGetFail: (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        },
    },
});

export const { addClasses, removeClass, classSaveRequest, classSaveSuccess, classSaveFail, classGetRequest, classGetSuccess, classGetFail } = classSlice.actions;
export default classSlice.reducer;
