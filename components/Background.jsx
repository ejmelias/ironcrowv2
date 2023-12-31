"use client"
import { Canvas } from '@react-three/fiber'
import Crows from './Crows'
import { Suspense } from 'react'

const LoadingSpinner = () => (
    <div className="fixed inset-0 flex items-center justify-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="animate-spin"
        >
            <circle cx="50" cy="50" fill="none" stroke="#000" opacity={0.2} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
        </svg>
    </div>
)

export default function Background() {
    return (
        <div className='fixed w-screen h-screen m-0 p-0 bg-gradient-to-t from-gray-500 to-blue-100'>
            <Suspense fallback={<LoadingSpinner />}>
                <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 95 }}>
                    <Crows count={50}/>
                </Canvas>
            </Suspense>
        </div>
    )
}