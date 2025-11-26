import { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

// Lazy load heavy 3D components
const Hero3D = lazy(() => import('./components/Hero3D'))
const Gallery = lazy(() => import('./components/Gallery'))

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time for assets
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <LoadingScreen loading={loading} />
            <div className="app">
                <Navigation />
                <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
                    <Hero3D />
                </Suspense>
                <About />
                <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
                    <Gallery />
                </Suspense>
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default App
