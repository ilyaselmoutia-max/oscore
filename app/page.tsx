 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Matches from "./components/Matches";
import Predictions from "./components/Predictions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Matches />
      <Predictions />
      <Footer />
    </main>
  );
}