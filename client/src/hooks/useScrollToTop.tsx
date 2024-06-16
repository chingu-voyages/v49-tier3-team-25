// note this component used at the moment

import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

type Props = {
  children: ReactNode;
};

const ScrollToTop = (props: Props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;

// https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
