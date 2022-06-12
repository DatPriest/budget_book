export class LoginUserModule {
  constructor (
    public id: number,
    public email: string,
    public hash: string,
  ) { }
}
