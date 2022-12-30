import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import MailPage from "./MailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mail/:id" element={<MailPage />} />
      </Routes>
    </div>
  );
}

export default App;
