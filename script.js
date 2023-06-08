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
const orbit =  new OrbitControls(camera, renderer.domElement)

// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)

camera.position.set(3,3,10);
orbit.update()

// load texture
const water = new THREE.TextureLoader().load( "textures/water.png" );
const watertext = new THREE.TextureLoader().load( "textures/watertext.png" );
const rock1 = new THREE.TextureLoader().load( "textures/rock.png" );    //no mipmap
const rock2 = new THREE.TextureLoader().load( "textures/rock.png" );    //mipmap
const gold = new THREE.TextureLoader().load( "textures/gold.png" );
const wood = new THREE.TextureLoader().load( "textures/wood.jpg" );

// watertext.wrapS = THREE.MirroredRepeatWrapping;
// watertext.wrapT = THREE.MirroredRepeatWrapping;
// watertext.repeat.set( 2, 2 );
// watertext.generateMipmaps=false;
// watertext.generateMipmaps=false;
// water.offset.set(100,100);
// water.rotation=Math.PI/4;
// water.center.set(0.5,0.5);
// water.generateMipmaps=false;
// water.mipmaps=[1,2,3,4];
// water.flipY=true;
rock1.generateMipmaps=false;

// create cube
const cubeGeometry = new THREE.BoxGeometry( 3, 3, 3 );      
const cubeMaterial = new THREE.MeshBasicMaterial( { map:rock1, side:THREE.DoubleSide} );    //material
const obj = new THREE.Mesh( cubeGeometry, cubeMaterial );
obj.translateX(-2)
scene.add( obj );

const cube2Geometry = new THREE.BoxGeometry( 3, 3, 3 );      
const cube2Material = new THREE.MeshBasicMaterial( { map:rock2, side:THREE.DoubleSide} );    //material
const obj2 = new THREE.Mesh( cube2Geometry, cube2Material );
obj2.translateX(2)
scene.add( obj2 );

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
// renderer.domElement.addEventListener('click', clickHandler)

function animate() {
	requestAnimationFrame( animate );

    // obj.rotation.x += 0.01;
    // obj.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate()