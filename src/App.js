import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MailPage from "./pages/MailPage";
import InboxPage from "./pages/InboxPage";
import SentPage from "./pages/SentPage";
import DraftPage from "./pages/DraftPage";
import SpamPage from "./pages/SpamPage";

import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./Images/logo.png";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="gmailLogo" width="100" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav style={{ fontSize: "30px" }}>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Setting</Nav.Link>
              <Nav.Link href="#">Privacy</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mail/:id" element={<MailPage />} />
        <Route path="/mail/inbox" element={<InboxPage />}></Route>
        <Route path="/mail/sent" element={<SentPage />}></Route>
        <Route path="/mail/draft" element={<DraftPage />}></Route>
        <Route path="/mail/spam" element={<SpamPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
