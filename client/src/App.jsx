import Auth from "./pages/auth/Auth";
import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/home/Dashboard";
import DashboardHome from "./components/home/DashboardHome";
import Profile from "./components/home/Profile";
import DashboardEvents from "./components/home/DashboardEvents";
import DashboardFriends from "./components/home/DashboardFriends";
import AddFriend from "./components/home/AddFriend";
import EventDetail from "./components/home/EventDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
      </Routes>

      <Routes>
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>

      <Routes>
        <Route
          path="/home/*"
          element={user ? <Dashboard /> : <Navigate to="../auth" />}
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="events" element={<DashboardEvents />} />
          <Route path="events/:eventsId" element={<EventDetail />} />
          <Route path="friends" element={<DashboardFriends />} />
          <Route path="newfriend" element={<AddFriend />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
