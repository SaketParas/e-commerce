const ADD_COMMENTS = 'ADD_COMMENTS';
const LOG_IN = "LOG_IN";

const company_data = (action_data) => {
    console.log(action_data)
    return {
        type: ADD_COMMENTS,
        all: action_data
    }
}

const loginUser = (payload) => {
    console.log(payload);
    return {
        type: LOG_IN,
        payload
    }
}
export { company_data, loginUser }