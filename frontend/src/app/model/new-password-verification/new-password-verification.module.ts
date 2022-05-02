export class NewPasswordVerificationModule {
  constructor (
    public userId: number,
    public email: string,
    public hash: string,
  ) { }
}
