import * as THREE from "./node_modules/three/build/three.module.js";

import { ARButton } from "./ARButton.js";

class App {
  constructor() {
    console.log("APP");
    this.init();
    this.animate();
  }

  init() {
    const container = document.createElement("div");
    document.body.appendChild(container);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    this.scene.add(light);

    //

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.xr.enabled = true;
    container.appendChild(this.renderer.domElement);

    //
    // console.log(ARButton);
    document.body.appendChild(ARButton.createButton(this.renderer));

    //

    this.geometry = new THREE.CylinderGeometry(0, 0.05, 0.2, 32);
    //.rotateX(
    //   Math.PI / 2
    // );
    this.geometry = new THREE.SphereGeometry(
      0.3,
      50,
      50,
      0,
      Math.PI * 2,
      0,
      Math.PI * 2
    );

    // function onSelect() {

    //     const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() });
    //     const mesh = new THREE.Mesh(geometry, material);
    //     mesh.position.set(0, 0, - 0.3).applyMatrix4(controller.matrixWorld);
    //     mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
    //     scene.add(mesh);

    // }

    this.controller = this.renderer.xr.getController(0);
    this.controller.addEventListener("select", this.onclick.bind(this));
    this.scene.add(this.controller);

    //

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }
  onclick() {
    const texture = new THREE.TextureLoader().load(
      "earth_atmos_2048.jpg",
      THREE.SphericalRefractionMapping
    );

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      overdraw: 0.5,
    });

    // material.side = THREE.DoubleSide;

    // const material = new THREE.MeshPhongMaterial({
    //   color: 0xffffff * Math.random(),
    // });
    const mesh = new THREE.Mesh(this.geometry, material);
    mesh.position.set(0, 0, -0.5).applyMatrix4(this.controller.matrixWorld);
    // mesh.quaternion.setFromRotationMatrix(this.controller.matrixWorld);
    this.scene.add(mesh);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //

  animate() {
    this.renderer.setAnimationLoop(this.render.bind(this));
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

window.onload = () => {
  new App();
};
