import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Home/routes/HomePage.tsx";

// Todo
// - [ ] Add a route for the main app
//    - [ ] Add a route for the auth page
// - [x] Add a route for the marketing/landing page
// - [ ] Add a route for published notes

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)


export default App
