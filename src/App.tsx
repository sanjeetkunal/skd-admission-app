// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";

/* -------- Landing (home) imports -------- */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroApply from "@/sections/HeroApply";
import ImportantDates from "@/sections/ImportantDates";
import AboutCampus from "@/sections/AboutCampus";
import Recognitions from "@/sections/Recognitions";
import HowToApply from "@/sections/HowToApply";
import ApplyNowBar from "@/components/ApplyNowBar";       // keep as per your structure
import Gallery from "@/sections/gallery";                  // <- check the actual file: if it's /gallery/index.tsx this is fine
import ExamDetailsSection from "@/sections/ExamDetails";   // alias the landing one

/* -------- Dashboard imports -------- */
import DashboardLayout from "@/dashboard/components/DashboardLayout";
import DashboardPage from "@/dashboard/DashboardPage";
import Applications from "@/dashboard/Applications";
import Documents from "@/dashboard/Documents";
import Payments from "@/dashboard/Payments";
import ExamDetails from "@/dashboard/ExamDetails";         // dashboard page
import MyQuery from "@/dashboard/MyQuery";
import RequestCallback from "@/dashboard/RequestCallback";
import Profile from "@/dashboard/Profile";
import Counsellor from "@/dashboard/Counsellor";

/* ---- Landing page ---- */
function LandingHome() {
  return (
    <>
      <Header />
      <main>
        <HeroApply />
        <AboutCampus />
        <ImportantDates />
        <Recognitions />
        <ExamDetailsSection /> {/* landing section (not dashboard page) */}
        <HowToApply />
        <Gallery />
      </main>
      <Footer />
      <ApplyNowBar phone="+919876543210" target="#apply" offset={80} showAfter={120} />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Routes>
        {/* Public landing */}
        <Route path="/" element={<LandingHome />} />

        {/* Dashboard master layout with persistent Sidebar/Header/Hero */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="applications" element={<Applications />} />
          <Route path="documents" element={<Documents />} />
          <Route path="payments" element={<Payments />} />
          <Route path="exam-details" element={<ExamDetails />} />
          <Route path="query" element={<MyQuery />} />
          <Route path="request-callback" element={<RequestCallback />} />
          <Route path="profile" element={<Profile />} />
          <Route path="counsellor" element={<Counsellor />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
