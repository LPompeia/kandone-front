export interface editCard {
  id: number,
  description: string,
  status: number,
  board : Board
}

interface Board {
  id : number
}
