import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import NewsfeedPage from "./pages/NewsfeedPage";
import ProfilePage from "./pages/ProfilePage";
import FriendsPage from "./pages/FriendsPage";
import AboutPage from "./pages/AboutPage";
import StorePage from "./pages/StorePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/profile" />} />
        <Route path="/newsfeed" element={<NewsfeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/store" element={<StorePage />}/>
        <Route path="/groups" element={<div>Groups</div>} />
        <Route path="/photos" element={<div>Photos</div>} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/requests" element={<div>Requests</div>} />
        <Route path="/logout" element={<div>Logout</div>} />
      </Route>
    </Routes>
  );
};

export default App;