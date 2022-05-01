export class LoginUserModule {
  constructor (
    public userId: number, // temp, keine Ahnung ob man das brauch
    public email: string,
    public hash: string,
  ) { }
}
