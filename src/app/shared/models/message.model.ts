export class Message {
  constructor(
    public text: string,
    public type: string = 'info-message'
  ) {}

  delayMessage(time: number = 0) {
    window.setTimeout(() => { this.text = ''; }, time);
  }

}
