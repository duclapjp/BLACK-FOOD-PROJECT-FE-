export class Role {
  id:number;
  name:string;
  status: any;

  constructor(id: number, name: string, status: any) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}
