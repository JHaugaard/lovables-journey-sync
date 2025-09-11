import { useEffect } from 'react';

interface PerformanceMetrics {
  pageLoadTime?: number;
  domContentLoaded?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
}

export function usePerformance() {
  useEffect(() => {
    if ('performance' in window) {
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: PerformanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        // Get paint metrics
        paint.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        });

        // Get LCP if available
        if ('getLCP' in window) {
          // In a real application, you would use web-vitals library
          // import { getLCP } from 'web-vitals';
          // getLCP((metric) => console.log('LCP:', metric));
        }

        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics');
          console.log('Page Load Time:', metrics.pageLoadTime?.toFixed(2), 'ms');
          console.log('DOM Content Loaded:', metrics.domContentLoaded?.toFixed(2), 'ms');
          console.log('First Contentful Paint:', metrics.firstContentfulPaint?.toFixed(2), 'ms');
          console.groupEnd();
        }

        // In production, send to analytics
        if (process.env.NODE_ENV === 'production') {
          // Example: Send to Google Analytics or other monitoring service
          // gtag('event', 'timing_complete', {
          //   name: 'page_load_time',
          //   value: Math.round(metrics.pageLoadTime || 0)
          // });
        }

        return metrics;
      };

      // Wait for page to fully load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance, { once: true });
      }
    }
  }, []);
}

export function measureWebVitals() {
  // This would typically use the web-vitals library
  // For now, we'll implement basic performance observation
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP candidate:', lastEntry.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      let cumulativeScore = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cumulativeScore += (entry as any).value;
        }
      }
      console.log('CLS:', cumulativeScore);
    }).observe({ type: 'layout-shift', buffered: true });
  }
}