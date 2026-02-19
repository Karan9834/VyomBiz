import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Ensures the page starts at the top on route changes.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Force scroll to top on route change or refresh
        window.scrollTo(0, 0);

        // Ensure browser doesn't try to restore scroll on its own
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, [pathname]);

    return null;
}
