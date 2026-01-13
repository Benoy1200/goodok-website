"use client";

// 顶部联系信息条组件 - 展示联系方式和营业时间
export default function TopBar() {
  return (
    <div className="bg-[#1a365d] text-white text-sm py-2 hidden md:block">
      <div className="container flex items-center justify-between">
        {/* 左侧：联系信息 */}
        <div className="flex items-center gap-6">
          {/* 电话 */}
          <a
            href="tel:+8613822102050"
            className="flex items-center gap-2 hover:text-orange-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+86 138 2210 2050</span>
          </a>

          {/* 邮箱 */}
          <a
            href="mailto:info@goodokshop.com"
            className="flex items-center gap-2 hover:text-orange-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@goodokshop.com</span>
          </a>
        </div>

        {/* 右侧：全球配送信息 */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>🌍 Free Global Shipping</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon-Sat: 9:00-18:00 (GMT+8)</span>
          </span>
        </div>
      </div>
    </div>
  );
}
