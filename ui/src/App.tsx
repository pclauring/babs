import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout";
import Monster from "./features/monster";
import Profile from "./features/profile";
import Welcome from "./features/welcome";
import NoMatch from "./features/nomatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="monster" element={<Monster />} />
          <Route path="profile" element={<Profile />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
