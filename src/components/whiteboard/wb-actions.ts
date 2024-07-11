'use client';

import { useBoolean } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';

interface NativeEvent {
  nativeEvent: MouseEvent;
}

const useCanvasDrawing = () => {
  const [isDrawing, { on: startDrawingFlag, off: stopDrawingFlag }] =
    useBoolean(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const stopDrawing = () => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.closePath();
      }
    }
    stopDrawingFlag();
  };

  const startDrawing = ({ nativeEvent }: NativeEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.beginPath();
        context.moveTo(offsetX, offsetY);
      }
    }
    startDrawingFlag();
  };

  const draw = ({ nativeEvent }: NativeEvent) => {
    if (!isDrawing || !canvasRef.current) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext('2d');
    if (context) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle = 'black';
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 5;
      }
    }
  }, []);

  return { startDrawing, draw, stopDrawing, canvasRef, isDrawing };
};

export default useCanvasDrawing;
