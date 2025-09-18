/* global gtag */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";

import Benefit from "./components/Benefit";
import Preparation from "./components/Preparation";

import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Training from "./components/Training";
import MockExam from "./components/MockExam";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contactus from "./components/Contactus";

import PrivacyPolicy from "./components/Privacy Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/Refund Policy";
import JoinNowForm from "./components/Joinnow";
import WhatsAppChat from "./components/Whatsappchat";
import FlashMain from "./FlashcardApp/FlashMain";
import Acp from "./components/Acp";
import Pmp from "./components/Pmp";
import AtpBadgeSection from "./components/AtpBadgeSection.js";


import PdfDocs from "./components/PdfDocs";
import Docs from "./components/ProjectDocs/pages/Docs";
import PDUs from "./components/pages/PDUs";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AtpBadgeSection />
                <Banner />
                <Benefit />
                <Preparation />
                {/* <Whychooseus /> */}
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/training" element={<Training />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/flashcards" element={<FlashMain />} />
          <Route path="/agile" element={<FlashMain />} />
         
          <Route path="/process-groups" element={<FlashMain />} />
          <Route
            path="/project-management-foundation"
            element={<FlashMain />}
          />
          <Route path="/knowledge-area" element={<FlashMain />} />
          <Route path="/performance-domain" element={<FlashMain />} />
          <Route path="/PDUs" element={<PDUs />} />
          <Route path="/PdfDocs" element={<PdfDocs />} />
          {/* <Route path="/blogs" element={<EdzestBlogs />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />

         

          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/join-us" element={<JoinNowForm />} />

          <Route path="/docs/*" element={<Docs />} />
          <Route path="/docs/:chapterId/:subChapterId" element={<Docs />} />

          <Route path="*" element={<Hero />} />
        </Routes>
        <WhatsAppChat />
      </Router>
    </div>
  );
}

export default App;
