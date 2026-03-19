import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./app/routes";
import Layout from "./components/layout/layout";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";
import "swiper/css";

function PageTransition({ children }: { children: React.ReactNode }) {
  const el = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!el.current) return;
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );
  }, [location.pathname]);

  return <div ref={el}>{children}</div>;
}

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <Layout>
              <PageTransition>
                <route.component />
              </PageTransition>
            </Layout>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
