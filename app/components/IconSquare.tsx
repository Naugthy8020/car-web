import React from 'react';

type IconSquareProps = {
  icon: string;
  label: string;
};

const IconSquare: React.FC<IconSquareProps> = React.memo(({ icon, label }) => {
  return (
    <a
      href="#"
      className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-gray-300 text-gray-800 text-sm font-medium hover:border-gray-500 transition-border duration-300"
    >
      <span className="text-3xl md:text-4xl lg:text-5xl">{icon}</span>
      <span className="text-xs md:text-sm lg:text-base">{label}</span>
    </a>
  );
});

export default IconSquare;
