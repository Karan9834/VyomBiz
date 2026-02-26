import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingSpinner from "./components/common/LoadingSpinner";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
