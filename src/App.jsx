import Login from "./pages/Login"
import Register from "./pages/Register"
import DashboardLayout from "./layouts/DashboardLayout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import AddJobs from "./pages/dashboard/AddJobs"
import AllJobs from "./pages/dashboard/AllJobs"
import Profile from "./pages/dashboard/Profile"
import Stats from "./pages/dashboard/Stats"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="add_jobs" element={<AddJobs/>} />
          <Route path="all_jobs" element={<AllJobs/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="stats" element={<Stats/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
