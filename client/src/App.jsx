import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import axios from "axios";
import Courses from "./pages/Courses.jsx";
import ShowCourse from "./pages/ShowCourse.jsx";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile/:subpage?/:action?/:id?" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/detail/:id" element={<ShowCourse />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
