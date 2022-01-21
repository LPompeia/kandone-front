export class CardStatusDragDraw {

  private status : number

  constructor(status : string) {
      this.status = parseInt(status.slice(-1));
  }

}
