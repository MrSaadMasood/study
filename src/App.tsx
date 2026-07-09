import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { WeekDetailPage } from './pages/WeekDetailPage';
import { DayDetailPage } from './pages/DayDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/week/:weekNumber" element={<WeekDetailPage />} />
          <Route path="/week/:weekNumber/day/:day" element={<DayDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
