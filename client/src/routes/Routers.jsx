import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Panel from '../pages/Panel';
import { BrowserRouter } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/panel" element={<Panel />} />
            </Routes>
        </BrowserRouter>
    );
}