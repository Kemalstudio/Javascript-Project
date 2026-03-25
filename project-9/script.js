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
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

const gltfLoader = new GLTFLoader();

// gltfLoader.load('./models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) => {
    gltfLoader.load('./models/FlightHelmet/glTF-Binary/FlightHelmet.glb', (gltf) => {
        gltf.scene.scale.set(10, 10, 10);
        gltf.scene.rotation.y = Math.PI * 0.5;
        scene.add(gltf.scene);
    });

const clock = new THREE.Clock();

// function animate() {
//     const elapsedTime = clock.getElapsedTime();
    
//     // Update objects
//     gltf.scene.rotation.y = elapsedTime * 0.5;

//     // Render
//     renderer.render(scene, )