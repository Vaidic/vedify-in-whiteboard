export interface Board {
  id: string;
  name: string;
}

export interface DrawData {
  x: number;
  y: number;
  color: string;
  size: number;
  boardId: string;
}
