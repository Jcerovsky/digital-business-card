import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './components/Info.js'
import About from './components/About.js'
import Interest from './components/Interest.js'
import Footer from './components/Footer.js'



function App() {
    return (
        <div>
            <Info/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)