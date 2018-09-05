import _ from 'lodash';

let initState = {
    questions: [],
    sent: false
};

// ------------------------------------
// CONSTANTS
// ------------------------------------
export const INIT_DATA = 'RESEARCH/INIT_DATA';
export const SET_DATA = 'RESEARCH/SET_DATA';
export const SENT_DATA = 'RESEARCH/SENT_DATA';

// ------------------------------------
// REDUCER
// ------------------------------------
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INIT_DATA: {
            return initDataFunc(state, action.payload);
        }
        case SET_DATA: {
            return setDataFunc(state, action.payload);
        }
        case SENT_DATA: {
            return sentAnswersFunc(state);
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
export const setAnswer = (payload) => {
    return { type: SET_DATA, payload: payload };
};
export const sentAnswers = () => {
    return { type: SENT_DATA };
};

// ------------------------------------
// FUNCTIONS
// ------------------------------------

function initDataFunc(state, payload) {
    let newState = _.cloneDeep(state);
    newState.questions.push(payload);
    return newState;
}

function setDataFunc(state, payload) {
    let newState = _.cloneDeep(state);
    newState.questions[payload.questionPos].answer = payload.answer;
    return newState;
}

function sentAnswersFunc(state) {
    let newState = _.cloneDeep(state);
    return {
        ...newState,
        sent: true
    };
}