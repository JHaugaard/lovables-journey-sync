import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function FocusManager() {
  const location = useLocation();

  useEffect(() => {
    // Focus management for SPA navigation
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // Set focus to main content on route change
      mainContent.focus();
      
      // Announce route change to screen readers
      const routeAnnouncement = document.createElement('div');
      routeAnnouncement.setAttribute('aria-live', 'polite');
      routeAnnouncement.setAttribute('aria-atomic', 'true');
      routeAnnouncement.className = 'sr-only';
      
      // Get page title for announcement
      const pageTitle = document.title;
      routeAnnouncement.textContent = `Navigated to ${pageTitle}`;
      
      document.body.appendChild(routeAnnouncement);
      
      // Clean up announcement after screen reader has time to read it
      setTimeout(() => {
        if (document.body.contains(routeAnnouncement)) {
          document.body.removeChild(routeAnnouncement);
        }
      }, 1000);
    }

    // Scroll to top on route change (for better UX)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
}