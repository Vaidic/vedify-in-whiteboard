'use server';

import { Server, Socket } from 'socket.io';
import { NextApiRequest } from 'next';
import { NextApiResponseWithSocket } from '@/interfaces';

let io: Server | undefined;

export const initSocket = (
  req: NextApiRequest,
  res: NextApiResponseWithSocket,
): Server => {
  if (io) {
    console.log('Socket is already initialized');
    return io;
  }
  console.log('Initializing Socket');
  const server = res.socket.server;
  io = new Server(server, {
    path: '/api/socket',
  });

  server.io = io;

  io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    socket.on('leaveRoom', (roomId) => {
      socket.leave(roomId);
      console.log(`User left room: ${roomId}`);
    });

    socket.on('draw', ({ roomId, ...drawData }) => {
      socket.to(roomId).emit('draw', drawData);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  console.log('Socket is initialized');
  return io;
};

export default initSocket;
