import React, { useState, useRef } from "react";
import LassoSelect from "react-lasso-select";

const ImageEditor: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [censoredImage, setCensoredImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleLassoSelect = (selection: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => {
    setSelectedArea(selection);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setCensoredImage(null);
          setSelectedArea(null);
          if (imageRef.current) {
            imageRef.current.src = e.target.result;
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCensor = () => {
    if (!imageRef.current || !selectedArea) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = imageRef.current;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    if (selectedArea) {
      ctx.fillStyle = "black";
      ctx.fillRect(
        selectedArea.x,
        selectedArea.y,
        selectedArea.width,
        selectedArea.height
      );
    }

    const censoredDataURL = canvas.toDataURL();
    setCensoredImage(censoredDataURL);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex justify-center">
        <div className="w-600 h-800 border border-gray-400 rounded-lg overflow-hidden relative">
          {selectedArea && (
            <div
              className="absolute border-2 border-red-500"
              style={{
                left: selectedArea.x,
                top: selectedArea.y,
                width: selectedArea.width,
                height: selectedArea.height,
              }}
            ></div>
          )}
        </div>
        <div className="w-600 h-800 border border-gray-400 rounded-lg ml-4 overflow-hidden relative">
          {censoredImage ? (
            <img
              src={censoredImage}
              alt="Censored"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-200">
              <span className="text-gray-600">Censored Image</span>
            </div>
          )}
        </div>
      </div>
      {/* Image upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
      {/* Censor button */}
      <button
        onClick={handleCensor}
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={!selectedArea}
      >
        Censor
      </button>
    </div>
  );
};

export default ImageEditor;
