let initState = {
    text: -1,
    form_fields: -1
};

// ------------------------------------
// CONSTANTS
// ------------------------------------
export const INIT_DATA = 'CHAT/INIT_DATA';

// ------------------------------------
// REDUCER
// ------------------------------------
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INIT_DATA: {
            return {
                text: action.payload.text,
                form_fields: action.payload.form_fields
            };
        }
        default:
            return state;
    }
}

// ------------------------------------
// ACTIONS
// ------------------------------------
export const initData = (payload) => {
    return { type: INIT_DATA, payload: payload };
};

// ------------------------------------
// FUNCTIONS
// ------------------------------------