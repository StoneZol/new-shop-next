const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    searchQueries: [],
}

const searchQueriesSlice = createSlice({
    name: "searchQueries",
    initialState,
    reducers: {
        addQueries: (state, action) => {
            action.payload.forEach((query) => {
                const index = state.searchQueries.indexOf(query);
                if (index !== -1) {
                    state.searchQueries.splice(index, 1); // Удаляем старый элемент
                }
                state.searchQueries.push(query);
                if (state.searchQueries.length > 10) {
                    state.searchQueries.pop();
                }
            });
        },
        
    },
});

export const {
    addQueries,
} = searchQueriesSlice.actions

export default searchQueriesSlice.reducer;