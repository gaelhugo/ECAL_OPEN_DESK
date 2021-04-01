import * as THREE from "./node_modules/three/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

class App {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.center = { x: 0, y: 400, z: 0 };
    this.radius = 400;
    this.angle = 0;

    // this.camera.position.z = 400;
    // this.camera.position.y = 400;

    this.scene = new THREE.Scene();

    const c = 0xffffff; // white
    const near = -100;
    const far = 2000;
    this.scene.fog = new THREE.Fog(c, near, far);

    //const texture = new THREE.TextureLoader().load("textures/crate.gif");

    const geometry = new THREE.BoxGeometry(200, 200, 200);

    const texture = new THREE.TextureLoader().load("obqzJh.jpg");
    const normalTexture = new THREE.TextureLoader().load("normal.jpg");

    // shiny material
    const material = new THREE.MeshPhongMaterial({
      color: 0x000000,
      shininess: 100,
      emissive: 0x000000,
      //   emissiveMap: texture,
      wireframe: false,
      flatShading: true,
      normalMap: normalTexture,
    });

    material.side = THREE.DoubleSide;

    // non shiny material
    const material2 = new THREE.MeshLambertMaterial({
      color: 0xff0000,
    });
    // material2.color.setRGB(0, 255, 0); // red
    // material2.flatShading = false;

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.light = new THREE.PointLight(0xffffff, 1, 1500);
    this.scene.add(this.light);

    this.light2 = new THREE.PointLight(0xff0000, 2, 3000);
    this.scene.add(this.light2);

    this.light3 = new THREE.PointLight(0xffffff, 1, 1500);
    this.scene.add(this.light3);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 1);
    document.body.appendChild(this.renderer.domElement);

    const color = 0xaaaaaa;
    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    this.scene.add(light);

    //
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize.bind(this));

    this.setPositions();
    this.draw();
  }

  onWindowResize(e) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  updateCameraPosition() {
    this.angle += 0.5;
    const x =
      Math.cos((this.angle * Math.PI) / 180) * this.radius + this.center.x;
    const y = Math.sin((this.angle * Math.PI) / 180) * this.radius;
    const z =
      Math.sin((this.angle * Math.PI) / 180) * this.radius + this.center.z;
    this.camera.position.set(x, y, z);
    this.light.position.set(x, y, z);
    this.light2.position.set(x, this.center.y, -z);
    this.camera.lookAt(0, 0, 0);
  }
  setPositions() {
    const x =
      Math.cos((this.angle * Math.PI) / 180) * this.radius + this.center.x;
    const y = Math.sin((this.angle * Math.PI) / 180) * this.radius;
    const z =
      Math.sin((this.angle * Math.PI) / 180) * this.radius + this.center.z;
    this.camera.position.set(x, y, z);
    this.light.position.set(x, y, z);
    this.light2.position.set(x, this.center.y, -z);
    this.light3.position.set(-x, 0, -z);
    // this.camera.lookAt(0, 0, 0);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);

    // this.updateCameraPosition();
    this.controls.update();

    requestAnimationFrame(this.draw.bind(this));
  }
}

window.onload = () => {
  new App();
};
