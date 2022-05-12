export class LoginUserModule {
  constructor (
    public userId: number,
    public email: string,
    public hash: string,
  ) { }
}
