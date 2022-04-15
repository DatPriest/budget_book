export class NewPasswordVerification {
  constructor (
    public hash: string,
    public id: number,
    public email: string
  ) { }
}
