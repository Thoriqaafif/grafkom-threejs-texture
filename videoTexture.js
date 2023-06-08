import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

// scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Sets the color of the background
renderer.setClearColor(0xEFEFEF);

// orbit
const orbit =  new OrbitControls(camera, renderer.domElement);

camera.position.set(3,3,10);
orbit.update();

// load texture
const video = document.getElementById('vid');
const videoTexture = new THREE.VideoTexture(video);
videoTexture.wrapS = THREE.RepeatWrapping;
videoTexture.wrapT = THREE.RepeatWrapping;
videoTexture.repeat.set(1, 1);
// videoTexture.minFilter=THREE.LinearFilter;
// videoTexture.magFilter=THREE.LinearFilter;
// const rock = new THREE.TextureLoader().load( "textures/rock.png" );

// create cube
const cubeGeometry = new THREE.BoxGeometry( 3, 3, 3 );      
const cubeMaterial = new THREE.MeshBasicMaterial( { 
    map:videoTexture, 
    side:THREE.FrontSide,
    // toneMapped:false
 } );    //material
const obj = new THREE.Mesh( cubeGeometry, cubeMaterial );
// obj.position.set(0,50,0);
scene.add( obj );

// create ball
// const ballGeometry = new THREE.SphereGeometry( 3 ); 
// const ballMaterial = new THREE.MeshBasicMaterial( { map: rock } ); 
// const ball = new THREE.Mesh( ballGeometry, ballMaterial ); 
// scene.add( ball );

// var flag=true
// // change texture
// function changeTexture( type ){
//     // obj.material.map.dispose();
//     obj.material.map=type;
//     flag=!flag;
// }

// // event click
// function clickHandler(event){
//     if (flag)
//         changeTexture(gold);
//     else
//         changeTexture(water);
// }
renderer.domElement.onkeydown=function(e){
    if(e.keyCode==80){
        video.play()
    }
}
// renderer.domElement.addEventListener('click', clickHandler)

function animate() {
	requestAnimationFrame( animate );
    orbit.update();

    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();
