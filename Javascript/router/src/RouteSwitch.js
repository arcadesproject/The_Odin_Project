import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Members from './Members';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
