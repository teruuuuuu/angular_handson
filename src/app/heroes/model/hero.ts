export class Hero {
  //id: number;
  //name: string;
  constructor(public id:number = 0, public name:string = '') { }
  clone() { return new Hero(this.id, this.name); }
}
