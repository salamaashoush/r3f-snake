import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Burger(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(
    '/model.gltf'
  )
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.bunBottom.geometry} material={nodes.bunBottom.material} />
      <mesh geometry={nodes.cheese.geometry} material={materials.yellow} position={[0, 0.09, 0]} />
      <mesh
        geometry={nodes.salad.geometry}
        material={materials.green}
        position={[0, 0.04, 0]}
        scale={[0.92, 0.75, 0.92]}
      />
      <group position={[0, 0.14, 0]} scale={[1.56, 0.7, 1.56]}>
        <mesh geometry={nodes.Mesh_tomato.geometry} material={materials._defaultMat} />
        <mesh geometry={nodes.Mesh_tomato_1.geometry} material={materials.red} />
      </group>
      <mesh
        geometry={nodes.bunTop.geometry}
        material={nodes.bunTop.material}
        position={[0, 0.17, 0]}
      />
      <mesh
        geometry={nodes.patty.geometry}
        material={materials.brownDark}
        position={[0, 0.07, 0]}
      />
    </group>
  )
}

useGLTF.preload(
  '/model.gltf'
)