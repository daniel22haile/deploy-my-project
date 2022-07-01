export class ILogin {
  constructor(public email: string, public password: string) {}
}

export class LoginRes {
  constructor(public auth: string, public token: string) {}
}


export class UserRes {
  constructor(
    public _id: string,
    public firstname: string,
    public lastname: string,
    public phone: string,
    public role: string,
    public __v: number
  ) {}
}
