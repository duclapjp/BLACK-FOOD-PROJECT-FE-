export class SignUpForm{
  public name: string;
  public username: string;
  public email: string;
  public password: string;
  public roles: string[];


  constructor(name: string, username: string, email: string,password: string, roles: string[]) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ["admin"];
  }

}
