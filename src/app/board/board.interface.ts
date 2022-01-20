export interface Board {
  board : BoardView;
  cards_backlog : Array<CardView>
  cards_todo : Array<CardView>
  cards_inprogress : Array<CardView>
  cards_done : Array<CardView>
}

interface BoardView {
  id : number
  name : string
}

interface CardView {
  id: number
  description : string
  status : string
}
