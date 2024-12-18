const initialState = ["celery"];

function changeLibrary(state = initialState, action) {
    switch (action.type) {
        case "ADD_LIBRARY":
            return [...state, action.payload];
        default:
            return state;
    };
};

export default changeLibrary;