'use client';

import { Box } from '@chakra-ui/react';
import useCanvasDrawing from './wb-actions';
import useSocketClient from './socket-actions';

const Whiteboard = ({ roomId }) => {
  const { canvasRef, startDrawing, draw, stopDrawing, isDrawing } =
    useCanvasDrawing();
  const { emitDrawing } = useSocketClient(roomId);

  function handleDraw(event): void {
    if (!isDrawing || !canvasRef.current) {
      return;
    }
    draw(event);
    emitDrawing({
      x0: event.nativeEvent.offsetX,
      y0: event.nativeEvent.offsetY,
      x1: event.nativeEvent.offsetX,
      y1: event.nativeEvent.offsetY,
      color: 'black',
      lineWidth: 5,
    });
  }

  return (
    <Box>
      <canvas
        style={{ border: '1px solid black', display: 'block' }}
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={handleDraw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        width={'100%'}
        height={'100%'}
      />
    </Box>
  );
};

export default Whiteboard;
