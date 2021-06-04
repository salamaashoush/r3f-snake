import React, { useRef, useState, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'

let x = 100;
let y = 100;

const Snake = ({ direction }) => {
    const mesh = useRef()

    const handleMovement = useCallback(() => {
        switch (direction) {
            case 'up': {
                mesh.current.position.set(y + 1, 0);
                break;                
            }
            case 'down': {
                mesh.current.position.set(y - 1, 0);
                break;
            }
            case 'right': {
                mesh.current.position.set(x - 1, 0);
                break;
            }
            case 'left': {
                mesh.current.position.set(x + 1, 0);
                break;
            }
        }
    }, [direction]);
  
    useFrame(() => {
        handleMovement();
        // mesh.current.position.set(i, 0)
    })
  
    return (
      <mesh
            ref={mesh}
            scale={[5.5, 5.5, 5.5]}
            position={[x, 0, y]}
     >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={'orange'} />
      </mesh>
    );
  }
  
  export default Snake;