import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeLayout from '~/layout/HomeLayout';
import SecondLayout from './layout/SecondLayout';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomeLayout />} />
                    <Route path="/friends" element={<SecondLayout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
