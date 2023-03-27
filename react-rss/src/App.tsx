import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import NotFound from './pages/NotFoundPage';
import { Header } from './components/Header';
import Form from './pages/FormPage';

// class App extends Component {
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="about" element={<About />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
