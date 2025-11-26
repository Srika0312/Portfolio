import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text3D, Box, Sphere, Torus, Cone } from '@react-three/drei'
import * as THREE from 'three'

// Blender Logo - Orange and Blue cube-like design
export const BlenderLogo = ({ position }) => {
    const groupRef = useRef()
    const meshRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
        }
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} position={position}>
                {/* Main cube */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial
                        color="#EA7600"
                        metalness={0.6}
                        roughness={0.2}
                        emissive="#EA7600"
                        emissiveIntensity={0.3}
                    />
                </mesh>

                {/* Blue accent sphere */}
                <mesh position={[0.4, 0.4, 0.4]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color="#265787"
                        metalness={0.8}
                        roughness={0.1}
                        emissive="#265787"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {/* Glow effect */}
                <pointLight position={[0, 0, 0]} color="#EA7600" intensity={2} distance={3} />
            </group>
        </Float>
    )
}

// After Effects Logo - Purple/Blue gradient design
export const AfterEffectsLogo = ({ position }) => {
    const groupRef = useRef()
    const meshRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.008
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.3
        }
        if (meshRef.current) {
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
            <group ref={groupRef} position={position}>
                {/* Main rounded box */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[1.3, 1.3, 0.3]} />
                    <meshStandardMaterial
                        color="#9999FF"
                        metalness={0.7}
                        roughness={0.2}
                        emissive="#9999FF"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {/* Inner detail */}
                <mesh position={[0, 0, 0.2]}>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshStandardMaterial
                        color="#00005B"
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                <pointLight position={[0, 0, 1]} color="#9999FF" intensity={2} distance={3} />
            </group>
        </Float>
    )
}

// Photoshop Logo - Blue design
export const PhotoshopLogo = ({ position }) => {
    const groupRef = useRef()
    const meshRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.012
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + 2) * 0.3
        }
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
        }
    })

    return (
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
            <group ref={groupRef} position={position}>
                {/* Main cube */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[1.2, 1.2, 0.4]} />
                    <meshStandardMaterial
                        color="#31A8FF"
                        metalness={0.6}
                        roughness={0.3}
                        emissive="#31A8FF"
                        emissiveIntensity={0.3}
                    />
                </mesh>

                {/* Dark blue accent */}
                <mesh position={[0, 0, 0.25]}>
                    <boxGeometry args={[0.9, 0.9, 0.1]} />
                    <meshStandardMaterial
                        color="#001E36"
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                <pointLight position={[0, 0, 1]} color="#31A8FF" intensity={2} distance={3} />
            </group>
        </Float>
    )
}

// DaVinci Resolve Logo - Red/Gray design
export const DaVinciResolveLogo = ({ position }) => {
    const groupRef = useRef()
    const torusRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.009
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.55 + 3) * 0.3
        }
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.02
            torusRef.current.rotation.z += 0.01
        }
    })

    return (
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.3}>
            <group ref={groupRef} position={position}>
                {/* Outer torus ring */}
                <mesh ref={torusRef}>
                    <torusGeometry args={[0.8, 0.15, 16, 32]} />
                    <meshStandardMaterial
                        color="#CC0000"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#CC0000"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {/* Center sphere */}
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial
                        color="#666666"
                        metalness={0.9}
                        roughness={0.1}
                    />
                </mesh>

                <pointLight position={[0, 0, 0]} color="#CC0000" intensity={2.5} distance={3} />
            </group>
        </Float>
    )
}

// Premiere Pro Logo - Purple design
export const PremiereProLogo = ({ position }) => {
    const groupRef = useRef()
    const meshRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.011
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.65 + 4) * 0.3
        }
        if (meshRef.current) {
            meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
        }
    })

    return (
        <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.1}>
            <group ref={groupRef} position={position}>
                {/* Main rounded box */}
                <mesh ref={meshRef}>
                    <boxGeometry args={[1.2, 1.2, 0.4]} />
                    <meshStandardMaterial
                        color="#9999FF"
                        metalness={0.7}
                        roughness={0.2}
                        emissive="#9999FF"
                        emissiveIntensity={0.35}
                    />
                </mesh>

                {/* Purple accent */}
                <mesh position={[0, 0, 0.25]}>
                    <boxGeometry args={[0.85, 0.85, 0.1]} />
                    <meshStandardMaterial
                        color="#00005B"
                        metalness={0.85}
                        roughness={0.15}
                    />
                </mesh>

                {/* Small detail sphere */}
                <mesh position={[0.3, 0.3, 0.4]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial
                        color="#EA77FF"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#EA77FF"
                        emissiveIntensity={0.5}
                    />
                </mesh>

                <pointLight position={[0, 0, 1]} color="#9999FF" intensity={2} distance={3} />
            </group>
        </Float>
    )
}
