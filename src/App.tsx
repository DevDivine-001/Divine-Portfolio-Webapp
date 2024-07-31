import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Atom } from "react-loading-indicators";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,    
      duration: 900,
      easing: "ease-in-sine",
      delay: 300,
    });

    (AOS as any).refresh();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh] bg-[#0F0715]">
          <Atom color="#fff" size="medium" text="" textColor="" />
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </div>
  );
};

export default App;
