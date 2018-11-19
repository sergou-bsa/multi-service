export class Page {
  constructor(
    public title: string,
    public description: string,
    public text: string,
    public isMenu: boolean,
    public isHomePage: boolean,
    public section: string,
    public id?: number
  ) {}
}
