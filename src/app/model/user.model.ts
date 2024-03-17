export class User {
  private _username: string | undefined;
  private _password: string | undefined;


  constructor() {
  }


  get username(): string | undefined {
    return this._username;
  }

  set username(value: string | undefined) {
    this._username = value;
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(value: string | undefined) {
    this._password = value;
  }
}
