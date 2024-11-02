




// Создание сцены -----------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game').appendChild(renderer.domElement);
//  -----------------------------------


// Создание геометрии -------------------------------
const geometry = new THREE.BoxGeometry(1., 1, 1);
const material = new THREE.MeshPhongMaterial({ color: '#1c06f9' });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = -2;
scene.add(cube);

camera.position.z = 6;

// const playerGeometry = new THREE.BoxGeometry(1, 0.2, 1);
// const playerMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
// const player = new THREE.Mesh(playerGeometry, playerMaterial);
// player.position.y = -3;
// scene.add(player);

// -------------------------------

// Создание освещения


const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);



// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(0, 1, 1).normalize();
// scene.add(directionalLight);


// 

// Рендер сцены -----------------------------------
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();


//  -----------------------------------

// создание анимации
const anim = () => {
	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;
	renderer.render(scene, camera);
	window.requestAnimationFrame(anim)

}
anim();
// ---------------------------------------------