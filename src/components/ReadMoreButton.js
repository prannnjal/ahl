import React from 'react';
import Image from 'next/image';

export const ReadMoreButton = () => {
  return (
    <div className="w-full py-4 px-6 flex items-center justify-start" style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}>
      <div className="flex items-center space-x-3">
        <span className="text-black font-semibold text-lg">READ MORE</span>
        <Image
          src="/Group 17.svg"
          alt="Arrow"
          width={20}
          height={20}
          className="text-black"
        />
      </div>
    </div>
  );
};
