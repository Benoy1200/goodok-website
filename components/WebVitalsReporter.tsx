'use client';

import { useEffect } from 'react';

/**
 * Web Vitals 性能监测组件
 * 收集 LCP, INP, CLS 等关键指标
 */
export function WebVitalsReporter() {
  useEffect(() => {
    // 动态加载 Web Vitals 库
    const loadWebVitals = async () => {
      try {
        const webVitals = await import('web-vitals');

        // 检查新版本API (v4+) 还是旧版本API
        const onCLS = webVitals.onCLS || (webVitals as any).getCLS;
        const onINP = webVitals.onINP || (webVitals as any).getFID;
        const onFCP = webVitals.onFCP || (webVitals as any).getFCP;
        const onLCP = webVitals.onLCP || (webVitals as any).getLCP;
        const onTTFB = webVitals.onTTFB || (webVitals as any).getTTFB;

        // Cumulative Layout Shift - 视觉稳定性
        if (onCLS) {
          onCLS((metric: any) => {
            console.log('CLS:', metric);
          });
        }

        // Interaction to Next Paint (替代 FID)
        if (onINP) {
          onINP((metric: any) => {
            console.log('INP:', metric);
          });
        }

        // First Contentful Paint
        if (onFCP) {
          onFCP((metric: any) => {
            console.log('FCP:', metric);
          });
        }

        // Largest Contentful Paint
        if (onLCP) {
          onLCP((metric: any) => {
            console.log('LCP:', metric);
          });
        }

        // Time to First Byte
        if (onTTFB) {
          onTTFB((metric: any) => {
            console.log('TTFB:', metric);
          });
        }
      } catch (error) {
        console.error('Failed to load Web Vitals:', error);
      }
    };

    loadWebVitals();
  }, []);

  return null;
}

export default WebVitalsReporter;
