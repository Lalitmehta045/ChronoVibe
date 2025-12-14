import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import WatchDetailPage from './WatchDetailPage.tsx';
import CollectionPage from './CollectionPage.tsx';
import ContactPage from './ContactPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/watch/:watchName" element={<WatchDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
