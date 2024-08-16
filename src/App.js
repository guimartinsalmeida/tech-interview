import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAdsMetrics from './pages/GoogleAdsMetrics';
import GoogleAnalitycs from './pages/GoogleAnalitycs';
import CRMMetrics from './pages/CRMMetrics';
import MetaAds from './pages/MetaAds';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/oauth2callback"element={<GoogleAdsMetrics/>}></Route>
      <Route path="/analitycs"element={<GoogleAnalitycs/>}></Route>
      <Route path="/crmcharts"element={<CRMMetrics/>}></Route>
      <Route path="/metaads"element={<MetaAds/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
