import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopCustom = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const mainContent = document.querySelector('.overflow-y-auto');
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollTopCustom;
