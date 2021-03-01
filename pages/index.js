import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import { css } from '@emotion/css';


const Index = () => {

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild( renderer.domElement );

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 0, 200);
        camera.lookAt(0, 0, 0);
        const scene = new THREE.Scene();

        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const line = new THREE.Line( geometry, material );
        scene.add( line );
        renderer.render( scene, camera );

        const animate = () => {
            requestAnimationFrame( animate );
            line.rotation.y += 0.01;
            line.rotation.x += 0.01;
            renderer.render( scene, camera );
        }
        animate();
    }, []);

    return <></>
};

export default Index;