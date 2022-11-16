import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout";
import Monster from "./features/monster";
import Profile from "./features/profile";
import NoMatch from "./features/nomatch";
import ProtectedRoute from "./features/auth0/ProtectedRoute";
import Emulator from "./features/emulator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Emulator />} />
          <Route
            path="monster/:id"
            element={<ProtectedRoute component={Emulator} />}
          />
          <Route
            path="monster"
            element={<ProtectedRoute component={Monster} />}
          />
          <Route
            path="profile"
            element={<ProtectedRoute component={Profile} />}
          />
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
