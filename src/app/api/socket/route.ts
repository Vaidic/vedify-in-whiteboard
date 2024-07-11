import { NextApiResponseWithSocket } from '@/interfaces';
import { initSocket } from '@/lib/socket/socketServer';
import { NextApiRequest } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket,
) {
  if (req.method === 'GET') {
    try {
      const io = initSocket(req, res);
      res
        .status(200)
        .json({ message: 'Socket server initialized successfully' });
    } catch (error) {
      console.error('Failed to initialize socket server:', error);
      res.status(500).json({ message: 'Failed to initialize socket server' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
