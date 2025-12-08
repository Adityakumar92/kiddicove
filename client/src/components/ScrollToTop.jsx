import { useLocation } from "wouter";
import { useEffect } from "react";
var ScrollToTop = function () {
    var location = useLocation()[0];
    useEffect(function () {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
};
export default ScrollToTop;
