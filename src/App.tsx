import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroApply from "@/sections/HeroApply"
import ImportantDates from "@/sections/ImportantDates"
import ExamDetails from "@/sections/ExamDetails"
import SectionsGrid from "@/sections/SectionsGrid"
import AboutCampus from "@/sections/AboutCampus"
import Recognitions from "@/sections/Recognitions"
import Scholarship from "@/sections/Scholarship"
import HowToApply from "@/sections/HowToApply"
import FAQ from "@/sections/FAQ"
import ApplyNowBar from "./components/ApplyNowBar"

export default function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <Header />
      <main>
        <HeroApply />
        <ImportantDates />
        <ExamDetails />
        <SectionsGrid />
        <AboutCampus />
        <Recognitions />
        <Scholarship />
        <HowToApply />
        <FAQ />
      </main>
      <Footer />

     <ApplyNowBar phone="+919876543210" target="#apply" offset={80} showAfter={120} />
    </div>
  )
}
