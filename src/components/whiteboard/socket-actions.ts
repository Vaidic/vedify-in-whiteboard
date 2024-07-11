'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import useCanvasDrawing from './wb-actions';

interface DrawData {
  color: string;
  lineWidth: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

const useSocketClient = ({ roomId }: { roomId: string }) => {
  const { canvasRef } = useCanvasDrawing();
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const initSocket = async () => {
      await fetch('/api/socket');
      const newSocket = io();
      setSocket(newSocket);

      newSocket.emit('joinRoom', roomId);

      return () => {
        newSocket.emit('leaveRoom', roomId);
        newSocket.close();
      };
    };

    initSocket();
  }, [roomId]);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('draw', (data: DrawData) => {
      const context = canvasRef.current?.getContext('2d');
      if (context) {
        context.strokeStyle = data.color;
        context.lineWidth = data.lineWidth;
        context.beginPath();
        context.moveTo(data.x0, data.y0);
        context.lineTo(data.x1, data.y1);
        context.stroke();
        context.closePath();
      }
    });

    return () => {
      socket.off('draw');
    };
  }, [socket]);

  const emitDrawing = (data: DrawData) => {
    if (!socket) return;
    socket.emit('draw', data);
  };

  return { emitDrawing };
};

export default useSocketClient;
