import React, { useState } from 'react';

interface MosaicFilterProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  originalWidth: number;
  originalHeight: number;
  eraseMode: boolean;
}

const MosaicFilter: React.FC<MosaicFilterProps> = ({ canvasRef, originalWidth, originalHeight, eraseMode }) => {
  const [blockSize, setBlockSize] = useState(10); // Initial block size

  const applyMosaicFilter = () => {
    if (!eraseMode) {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          for (let y = 0; y < originalHeight; y += blockSize) {
            for (let x = 0; x < originalWidth; x += blockSize) {
              const averageColor = calculateAverageColor(imageData, x, y, blockSize);
              fillRectWithColor(context, x, y, blockSize, blockSize, averageColor);
            }
          }
        }
      }
    }
  };

  const calculateAverageColor = (
    imageData: ImageData,
    startX: number,
    startY: number,
    blockSize: number
  ) => {
    let sumR = 0,
      sumG = 0,
      sumB = 0,
      sumA = 0;
    let count = 0;
    for (let y = startY; y < Math.min(startY + blockSize, originalHeight); y++) {
      for (let x = startX; x < Math.min(startX + blockSize, originalWidth); x++) {
        const index = (y * imageData.width + x) * 4;
        sumR += imageData.data[index];
        sumG += imageData.data[index + 1];
        sumB += imageData.data[index + 2];
        sumA += imageData.data[index + 3];
        count++;
      }
    }
    return {
      r: sumR / count,
      g: sumG / count,
      b: sumB / count,
      a: sumA / count,
    };
  };

  const fillRectWithColor = (
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    color: { r: number; g: number; b: number; a: number }
  ) => {
    context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    context.fillRect(x, y, width, height);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlockSize(Number(e.target.value));
  };

  return (
    <div>
      <button onClick={applyMosaicFilter}>Apply Mosaic Filter</button>
      <label>
        Block Size:
        <input type="number" value={blockSize} onChange={handleChange} />
      </label>
    </div>
  );
};

export default MosaicFilter;
