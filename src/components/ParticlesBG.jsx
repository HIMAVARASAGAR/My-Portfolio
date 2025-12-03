import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function ParticlesBG() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07051A, 0.04); 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    
    // FINAL CAMERA POSITION: Close and slightly above the objects
    camera.position.set(0, 3, 6); 
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xad1deb, 10, 15, Math.PI / 8, 0.5, 2); 
    spotLight.position.set(0, 0, 5);
    scene.add(spotLight);

    // --- OBJECTS ---
    const interactiveObjects = [];
    
    // 1. Particle Background
    const pCount = 1200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for(let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 15; 
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const particlesMesh = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.02, color: 0x6a5cff, transparent: true, opacity: 0.8 }));
    scene.add(particlesMesh);

    // 2. Interactive Foreground Objects (Solid Cubes/Blocks)
    // CRITICAL FIX: Luminous/Emissive material for maximum visibility
    const blockMat = new THREE.MeshStandardMaterial({ 
        color: 0x6a5cff, 
        roughness: 0.2, 
        metalness: 0.9, 
        emissive: 0x6a5cff,
        emissiveIntensity: 1.0 // VERY HIGH EMISSION for visibility
    });

    const cube1 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.5, 2.5), blockMat.clone()); // BIGGER
    cube1.position.set(2, 0, 0); // Closer and visible
    interactiveObjects.push(cube1);
    scene.add(cube1);

    const cube2 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.0, 0), blockMat.clone()); // BIGGER
    cube2.position.set(-2, 0, 0); // Closer and visible
    interactiveObjects.push(cube2);
    scene.add(cube2);
    
    // 3. Ground Plane
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0x111111 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    scene.add(floor);


    // --- INTERACTION LOGIC ---
    let mouse = new THREE.Vector2();
    let raycaster = new THREE.Raycaster();
    const interactionDistance = 5.0; // Increased interaction distance significantly

    const handleMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        spotLight.position.set(mouse.x * 5, mouse.y * 5, 5);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    const initialPositions = interactiveObjects.map(obj => obj.position.clone());

    // Helper vectors for physics calculation
    const tempVec3 = new THREE.Vector3();
    const tempInitialPos = new THREE.Vector3();

    const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();

        // 1. Raycast to determine cursor position in 3D
        raycaster.setFromCamera(mouse, camera);
        // Look 5 units away (in front of the camera)
        const cursor3D = raycaster.ray.at(5, tempVec3); 

        // 2. Foreground Interaction (Repulsion & Color)
        interactiveObjects.forEach((obj, i) => {
            const initialPos = initialPositions[i];
            
            // Calculate distance and inverted distance for repulsion
            const dist = obj.position.distanceTo(cursor3D);
            const distInv = interactionDistance - dist;
            
            // Calculate direction away from cursor (dist > 0)
            const dir = tempInitialPos.subVectors(obj.position, cursor3D).normalize();
            
            // Calculate repulsion force
            const repulsion = distInv > 0 ? dir.multiplyScalar(distInv * 0.5) : new THREE.Vector3(); // Stronger repulsion factor (0.5)
            
            // Damping for smooth return (Lerp-like logic using standard delta)
            const targetX = initialPos.x + repulsion.x;
            const targetY = initialPos.y + repulsion.y;
            const targetZ = initialPos.z + repulsion.z;

            const dampFactor = 0.1; // Smoothness

            obj.position.x += (targetX - obj.position.x) * dampFactor;
            obj.position.y += (targetY - obj.position.y) * dampFactor;
            obj.position.z += (targetZ - obj.position.z) * dampFactor;

            // Continuous rotation
            obj.rotation.x += 0.2 * delta;
            obj.rotation.y += 0.1 * delta;


            // Color shift on proximity 
            const colorFactor = Math.min(1, Math.max(0, distInv / interactionDistance));
            const baseColor = new THREE.Color(0x6a5cff);
            const highlightColor = new THREE.Color(0xffffff);
            
            const targetColor = baseColor.lerp(highlightColor, colorFactor);
            obj.material.color.set(targetColor);
            
            // Increase Emissive intensity on proximity
            obj.material.emissiveIntensity = 0.5 + colorFactor * 2.5; 
        });

        // 3. Background/Particles
        particlesMesh.rotation.y += 0.0005;

        renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
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

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}