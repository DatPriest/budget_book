export class UpdatePasswordModule {
  constructor (
    public email: string,
    public hash: string
  ) { }
}
