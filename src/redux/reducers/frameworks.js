const initialState = ["angular", "django"];

function changeFramework(state = initialState, action) {
    switch (action.type) {
        case "ADD_FRAMEWORK":
            return [...state, action.payload];
            break;
        default:
            return state;
    };
};

export default changeFramework;