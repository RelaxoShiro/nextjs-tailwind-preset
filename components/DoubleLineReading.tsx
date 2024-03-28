// components/DoubleLineReading.tsx

import React from 'react';

const DoubleLineReading: React.FC<{ line1: string; line2: string }> = ({ line1, line2 }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
              <div className="mt-2 text-lg">{line1}</div>
            <div className="mt-2 text-lg">{line2}</div>
        </div>
    );
};

export default DoubleLineReading;
