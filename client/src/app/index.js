import React from 'react'
import { NavBar } from '../components'
import ScoreBoard from '../pages/ScoreBoard'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from '../pages/Main';

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/scoreboard" element={<ScoreBoard />} />
            </Routes>
        </Router>
    )
}


export default App
