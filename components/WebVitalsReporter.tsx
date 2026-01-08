'use client';

import { useEffect } from 'react';

/**
 * Web Vitals 性能监测组件
 * 收集 LCP, FID, CLS 等关键指标
 */
export function WebVitalsReporter() {
  useEffect(() => {
    // 动态加载 Web Vitals 库
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        // Cumulative Layout Shift - 视觉稳定性
        getCLS((metric) => {
          console.log('CLS:', metric);
          // 可以发送到分析服务
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'exception', {
              description: `CLS: ${metric.value}`,
              fatal: false,
            });
          }
        });

        // First Input Delay - 交互响应速度
        getFID((metric) => {
          console.log('FID:', metric);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_view', {
              metric_name: 'FID',
              metric_value: metric.value,
            });
          }
        });

        // First Contentful Paint - 首次内容绘制
        getFCP((metric) => {
          console.log('FCP:', metric);
        });

        // Largest Contentful Paint - 最大内容绘制
        getLCP((metric) => {
          console.log('LCP:', metric);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_view', {
              metric_name: 'LCP',
              metric_value: metric.value,
            });
          }
        });

        // Time to First Byte - 首字节时间
        getTTFB((metric) => {
          console.log('TTFB:', metric);
        });
      } catch (error) {
        console.error('Failed to load Web Vitals:', error);
      }
    };

    loadWebVitals();
  }, []);

  return null;
}

export default WebVitalsReporter;
