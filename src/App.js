import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Join from "./components/Join/Join"
import Chat from "./components/Chat/Chat"

const App = () => (
    <Router>
        <Routes>
            <Route path="/" exact Component={Join} />
            <Route path='/chat' Component={Chat} />
        </Routes>
    </Router>
)

export default App;


// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;