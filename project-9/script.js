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

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const ambientLight = new THREE.AmbientLight('#fff');
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight('#fff', 1);
directionalLight.position.set(0.25, 3, -2.25);
scene.add(directionalLight);

const gltfLoader = new GLTFLoader();

// export function fetchData() {

//     return async function (disp