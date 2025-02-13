import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CallBack from './pages/CallBack';
import PatientHome from './pages/PatientHome';
import Labs from './pages/Labs';
import Medications from './pages/Medications';
import Vitals from './pages/Vitals';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/callback" element={<CallBack />} />
                <Route path="/patient-home" element={<PatientHome />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/medications" element={<Medications />} />
                <Route path="/vitals" element={<Vitals />} />
            </Routes>
        </Router>
    );
}

export default App;