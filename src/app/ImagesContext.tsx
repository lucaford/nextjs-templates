"use client";

import React, { createContext, useEffect, useState, ReactNode } from 'react';

// Define the shape of the image data with an index signature
interface ImageData {
  [key: string]: {
    [key: string]: string;
  };
}

// Create the ImagesContext
export const ImagesContext = createContext<ImageData | undefined>(undefined);

interface ImagesProviderProps {
  children: ReactNode;
}

// Define a component to fetch and provide images data
export const ImagesProvider: React.FC<ImagesProviderProps> = ({ children }) => {
  const [images, setImages] = useState<ImageData>({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/img-urls');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <ImagesContext.Provider value={images}>
      {children}
    </ImagesContext.Provider>
  );
};
