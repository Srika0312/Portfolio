import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Image } from '@react-three/drei'
import * as THREE from 'three'

// Logo URLs
const LOGOS = {
    blender: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1024px-Blender_logo_no_text.svg.png',
    afterEffects: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1024px-Adobe_After_Effects_CC_icon.svg.png',
    photoshop: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1024px-Adobe_Photoshop_CC_icon.svg.png',
    davinci: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/1024px-DaVinci_Resolve_Studio.png',
    premiere: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1024px-Adobe_Premiere_Pro_CC_icon.svg.png'
}

// Blender Logo
export const BlenderLogo = ({ position }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} position={position}>
                <Image
                    url={LOGOS.blender}
                    transparent
                    scale={[2, 2, 1]}
                    opacity={0.9}
                />
                <pointLight position={[0, 0, 1]} color="#EA7600" intensity={1} distance={3} />
            </group>
        </Float>
    )
}

// After Effects Logo
export const AfterEffectsLogo = ({ position }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.3
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
            <group ref={groupRef} position={position}>
                <Image
                    url={LOGOS.afterEffects}
                    transparent
                    scale={[2, 2, 1]}
                    opacity={0.9}
                />
                <pointLight position={[0, 0, 1]} color="#9999FF" intensity={1} distance={3} />
            </group>
        </Float>
    )
}

// Photoshop Logo
export const PhotoshopLogo = ({ position }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + 2) * 0.3
        }
    })

    return (
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
            <group ref={groupRef} position={position}>
                <Image
                    url={LOGOS.photoshop}
                    transparent
                    scale={[2, 2, 1]}
                    opacity={0.9}
                />
                <pointLight position={[0, 0, 1]} color="#31A8FF" intensity={1} distance={3} />
            </group>
        </Float>
    )
}

// DaVinci Resolve Logo
export const DaVinciResolveLogo = ({ position }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.55 + 3) * 0.3
        }
    })

    return (
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.3}>
            <group ref={groupRef} position={position}>
                <Image
                    url={LOGOS.davinci}
                    transparent
                    scale={[2, 2, 1]}
                    opacity={0.9}
                />
                <pointLight position={[0, 0, 1]} color="#CC0000" intensity={1} distance={3} />
            </group>
        </Float>
    )
}

// Premiere Pro Logo
export const PremiereProLogo = ({ position }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.65 + 4) * 0.3
        }
    })

    return (
        <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.1}>
            <group ref={groupRef} position={position}>
                <Image
                    url={LOGOS.premiere}
                    transparent
                    scale={[2, 2, 1]}
                    opacity={0.9}
                />
                <pointLight position={[0, 0, 1]} color="#9999FF" intensity={1} distance={3} />
            </group>
        </Float>
    )
}
