import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Instance, Instances, useMatcapTexture, useTexture } from '@react-three/drei';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';

function Crow({ index=0, z=0, speed=1 }) {

    const ref = useRef();
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        spin: THREE.MathUtils.randFloat(8, 12),
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI
    })
    
    useFrame((state, dt) => {

        if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y -= dt * speed), -z);

        ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin));

        if (data.y < -(height * (index === 0 ? 4 : 1))) {
            data.y = height * (index === 0 ? 4 : 1);
        }
    })

    return (
        <group >
            <Instance scale={0.2} ref={ref}/>
        </group>
    )
}

function Crows({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {

    const { nodes } = useGLTF('/crow.glb');
    const matcapTexture = useTexture('/matcap.png');
    
    return (
          <>
            <Instances geometry={nodes.crow.geometry} >
                <meshMatcapMaterial matcap={matcapTexture} />
                <group>
                    {Array.from({ length: count }, (_, i) => (<Crow key={i} index={i} speed={speed} z={Math.round(easing(i / count) * depth)} /> ))}
                </group>
            </Instances>
            
            <EffectComposer multisampling={0}>
                <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
            </EffectComposer>
        </> 
    );
}
export default Crows;