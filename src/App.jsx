import Gametitle from "./components/Gametitle";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Difficulty from "./pages/Difficulty";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <Gametitle />

            <Button name="start game" route="/begin" variant="primary" />
            <Button
              name="choose difficulty"
              route="/mode"
              variant="secondary"
            />
            <Button name="settings" route="/difficulty" variant="tertiary" />

            <Button2 name="EASY" route="/begin" variant="primary" />
            <Button2 name="NORMAL" route="/mode" variant="secondary" />
            <Button2 name="HARD" route="/difficulty" variant="tertiary" />
          </div>
        }
      />

      <Route path="/difficulty" element={<Difficulty />} />
    </Routes>
  );
};

export default App;
