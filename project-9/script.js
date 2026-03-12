export function fetchData() {
    return async function (dispatch, getState) {
        console.log(getState());
        dispatch({type: "userList/fetchData"});
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            dispatch({type: "userList/fetchDataSuccess", payload: data});
        } catch (error) {
            dispatch({type: "userList/fetchDateError", payload: error.message});
        }
    }
}

// export function fetchData() {
//     return function (dispatch) {
//         dispatch({type: