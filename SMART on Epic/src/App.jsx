import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CallBack from './pages/CallBack';
import PatientDetails from './pages/PatientDetail';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/callback" element={<CallBack />} />
                <Route path="/patient-details" element={<PatientDetails />} />
            </Routes>
        </Router>
    );
}

export default App;