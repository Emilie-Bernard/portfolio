import React from 'react';
import Image from "next/image";

const LoadingImage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen fixed top-0 left-0 bg-white z-50">
      <Image src="/images/principal.svg" alt="emiliebernard" className="w-24 h-24" width="1920" height="1080"/>
    </div>
  );
};

export default LoadingImage;