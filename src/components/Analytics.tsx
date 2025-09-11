import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
  enabled?: boolean;
}

export function Analytics({ trackingId, enabled = process.env.NODE_ENV === 'production' }: AnalyticsProps) {
  const location = useLocation();

  useEffect(() => {
    if (!enabled || !trackingId) return;

    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, [trackingId, enabled]);

  useEffect(() => {
    if (!enabled || !trackingId || !window.gtag) return;

    // Track page views on route changes
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Log page view in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Page view tracked:', location.pathname);
    }
  }, [location, trackingId, enabled]);

  return null;
}

// Custom event tracking helper
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (window.gtag && process.env.NODE_ENV === 'production') {
    window.gtag('event', eventName, parameters);
  } else if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event tracked:', eventName, parameters);
  }
}

// Convenience functions for common events
export const analytics = {
  pageView: (path: string) => {
    trackEvent('page_view', { page_path: path });
  },
  
  click: (elementName: string, location?: string) => {
    trackEvent('click', { 
      event_category: 'engagement',
      event_label: elementName,
      page_location: location 
    });
  },
  
  adventure: (adventureType: string) => {
    trackEvent('adventure_interest', {
      event_category: 'travel',
      event_label: adventureType
    });
  },
  
  navigation: (from: string, to: string) => {
    trackEvent('navigation', {
      event_category: 'user_flow',
      from_page: from,
      to_page: to
    });
  }
};