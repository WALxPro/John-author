import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "@/components/layout/PageTransition";
import Home from "@/pages/Home";
import AboutBook from "@/pages/AboutBook";
import AboutAuthor from "@/pages/AboutAuthor";
import Contact from "@/pages/Contact";
import Faqs from "@/pages/Faqs";
import NotFound from "@/pages/NotFound";

const withTransition = (page) => <PageTransition>{page}</PageTransition>;

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={withTransition(<Home />)} />
        <Route path="/about-the-book" element={withTransition(<AboutBook />)} />
        <Route path="/about-the-author" element={withTransition(<AboutAuthor />)} />
        <Route path="/contact" element={withTransition(<Contact />)} />
        <Route path="/faqs" element={withTransition(<Faqs />)} />
        <Route path="*" element={withTransition(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
}
