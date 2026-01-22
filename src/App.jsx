import Gametitle from "./components/Gametitle";
import Button from "./components/Button";
import Difficulty from "./pages/Difficulty";
import { Routes, Route } from "react-router-dom";
import Back from "./components/Back";
import Rules from "./pages/Rules";
import Play from "./pages/Play";
import Next from "./components/Next";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <Gametitle />

            <Button name="start game" route="/rules" variant="primary" />

            <Button
              name="choose difficulty"
              route="/Difficulty"
              variant="secondary"
            />
          </div>
        }
      />

      <Route path="/difficulty" element={<Difficulty />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/play" element={<Play />} />
      <Route path="/next" element={<Play />} />
    </Routes>
  );
};

export default App;
