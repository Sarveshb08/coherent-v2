import Image from 'next/image';
import React from 'react';

export function ExperienceCard() {
  return (
    <div
      className="relative w-[570px] h-[192.68px] rounded-[15px] shadow-[4px_7px_26px_0px_rgba(0,0,0,0.12)] overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, #130428 7%, #251043 34%, #38126D 56%, #261045 85%, #190634 100%)',
      }}
    >
      {/* Background Rectangle Overlay */}
      <Image
        src="/figma-assets/card-rect.svg"
        alt="Card Background"
        fill
        style={{ objectFit: 'cover', zIndex: 1 }}
        className="pointer-events-none select-none"
        priority
      />
      {/* Main Image (left) */}
      <div className="absolute left-[59px] top-[48.96px] w-[119.99px] h-[98px] z-10">
        <div className="relative w-[119.99px] h-[98px]">
          <Image
            src="/figma-assets/card-image.png"
            alt="Experience Card Main"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-[15px]"
            priority
          />
          {/* Decorative Ellipses */}
          <div className="absolute left-[1.57px] top-[63.74px] w-[4.83px] h-[4.42px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute left-[115.15px] top-[41.34px] w-[4.83px] h-[4.42px] rounded-full bg-[#D9D9D9]" />
          <div className="absolute left-[17.45px] top-[6px] w-[4.83px] h-[4.42px] rounded-full bg-[#693B93]" />
          <div className="absolute left-[90.99px] top-[86.78px] w-[4.83px] h-[4.42px] rounded-full bg-[#693B93]" />
          {/* Gradient Ellipse */}
          <div
            className="absolute left-0 top-[49.91px] w-[113.93px] h-[48.09px] rounded-full"
            style={{
              background:
                'linear-gradient(180deg, #2C1250 0%, #2C1250 19.8%, rgba(44,18,80,0) 90.1%)',
              opacity: 1,
            }}
          />
        </div>
      </div>
      {/* Title */}
      <div className="absolute left-[195px] top-[45.96px] w-[256px] h-[24px] z-20">
        <span className="font-poppins font-semibold text-[26px] leading-[1.25em] text-white">
          CIB on the Mobile
        </span>
      </div>
      {/* Description */}
      <div className="absolute left-[196px] top-[80.96px] w-[232px] h-[48px] z-20">
        <span className="font-poppins font-medium text-[8px] leading-[1.3125em] text-white">
          Take your client onboard seamlessly by our amazing tool of digital onboard process.
        </span>
      </div>
      {/* Learn More Button */}
      <button
        className="absolute left-[193px] top-[111.96px] w-[119px] h-[33px] rounded-[10px] border border-[#693B93] bg-[#2C1250] flex items-center justify-center z-30 hover:brightness-110 transition"
        style={{ boxShadow: '4px 7px 26px 0px rgba(0,0,0,0.12)' }}
      >
        <span className="font-poppins font-medium text-[10px] leading-[1.5em] text-white tracking-widest">
          LEARN MORE
        </span>
      </button>
      {/* Top Accent Bar */}
      <div
        className="absolute left-[-74.25px] top-[-4.04px] w-[643.11px] h-[8.08px] rounded-t-[15px]"
        style={{ background: '#4F228D' }}
      />
    </div>
  );
}

export default ExperienceCard;
