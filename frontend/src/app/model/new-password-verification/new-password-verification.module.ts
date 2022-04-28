export class NewPasswordVerificationModule {
  constructor (
    public hash: string,
    public id: number,
    public email: string,
  ) { }
}
