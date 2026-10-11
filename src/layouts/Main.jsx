import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import CustomCursor from "../components/common/cursor/CustomCursor";

const Main = () => {
  const { pathname, state } = useLocation();

  // New page: start at the top, unless we were sent to a specific home section.
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0);
  }, [pathname, state]);

  return (
    <div className="relative bg-obsidian text-ink min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] btn-primary px-4 py-2 rounded-md font-mono text-sm"
      >
        Skip to content
      </a>
      <CustomCursor />
      <NavBar />
      <div id="main-content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
