import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from "./components/Layout"
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import NotFound from "./pages/NotFoundPage"

// class App extends React.Component {
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="notFound" element={<NotFound />}></Route>
            <Route path="*" element={<Navigate to="/notFound" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
