import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="w-full py-8" aria-hidden="true">
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;


