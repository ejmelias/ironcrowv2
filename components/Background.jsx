"use client"
import { Canvas } from '@react-three/fiber'
import Crows from './Crows'

export default function Background() {
    return (
        <div className='fixed w-full h-full m-0 p-0 bg-gradient-to-t from-gray-500 to-blue-100'>
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 95 }}>
                <Crows count={50}/>
            </Canvas>
        </div>
    )
}