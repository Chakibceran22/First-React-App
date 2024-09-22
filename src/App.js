import React from "react";
import HOME from "./componenets/loginPage";
import SIGNE from "./componenets/signeUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HOME />} />
                <Route path="/signeUp" element={<SIGNE />} />
            </Routes>
        </Router>
    );
    }
    export default App;