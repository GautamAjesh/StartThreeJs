
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffee });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const circleGeometry = new THREE.CircleGeometry(1, 32);
const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.position.x = 0; 
scene.add(circle);

const rectangleGeometry = new THREE.PlaneGeometry(2, 2);
const rectangleMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
rectangle.position.y = 0; 
scene.add(rectangle);


const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    rectangle.rotation.x += 0.01;
    rectangle.rotation.y += 0.01;


    renderer.render(scene, camera);
};

animate();
