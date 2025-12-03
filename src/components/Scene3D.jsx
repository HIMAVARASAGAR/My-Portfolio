import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Setup
    const scene = new THREE.Scene();
    // Match CSS background color (Industrial Grey)
    scene.background = new THREE.Color(0xA0A5B1); 
    // Fog to blend objects into distance
    scene.fog = new THREE.FogExp2(0xA0A5B1, 0.08); 

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Enable shadows for "Physical" look
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Objects (Abstract Sculptures)
    const group = new THREE.Group();
    
    // Material: Matte Plastic/Clay look (High roughness, low metalness)
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xffffff, 
        roughness: 0.4, 
        metalness: 0.1 
    });

    // Main Torus (The central ring)
    const torusGeo = new THREE.TorusGeometry(1.8, 0.6, 64, 100);
    const torus = new THREE.Mesh(torusGeo, material);
    torus.castShadow = true;
    torus.receiveShadow = true;
    group.add(torus);

    // Satellite Sphere
    const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, material);
    sphere.position.set(2.5, 1.5, 1);
    sphere.castShadow = true;
    group.add(sphere);

    scene.add(group);

    // 3. Lighting (Studio Setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // 4. Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);
        
        // Auto rotation
        group.rotation.x += 0.002;
        group.rotation.y += 0.003;

        // Mouse parallax effect (Responsive movement)
        group.rotation.x += mouseY * 0.05;
        group.rotation.y += mouseX * 0.05;

        renderer.render(scene, camera);
    };
    animate();

    // 6. Resize Handler
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }
        renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}