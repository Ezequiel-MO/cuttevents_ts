import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import GeneralLayout from "./layouts/GeneralLayout";
import EventSelection from "./screens/EventSelection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="events" element={<GeneralLayout />}>
          <Route index element={<EventSelection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
