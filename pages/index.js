// import React, { useRef, useState, useMemo, useEffect } from 'react';
// import { Canvas, useFrame } from "react-three-fiber";
// import * as THREE from 'three';
// import { css } from '@emotion/css';


// const Index = () => {

//     useEffect(() => {
//         const scene = new THREE.Scene();
//             const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//             const renderer = new THREE.WebGLRenderer();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             document.body.appendChild(renderer.domElement);


//     }, []);

//     return (
//         <>
//         </>
//     )
// };

// export default Index;


import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from 'three';
import five from '../src/assets/five.png';
import { css } from '@emotion/css';

const style = css`
    background-color: black;
`;

const Box = (props) => {
    const mesh = useRef();

    const [active, setActive] = useState(false);

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.03;

    });

    const texture = useMemo(() => new THREE.TextureLoader().load(five), [])

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [5, 5, 5] : [3, 3, 3]}
            onClick={(e) => setActive(!active)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive attach="map" object={texture} />
            </meshBasicMaterial>
        </mesh>
    )
}

const Index = () => {
    return (
        <Canvas className={style}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    )
};

export default Index;