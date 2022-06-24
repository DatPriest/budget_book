export class UpdatePasswordModule {
  constructor (
    public userId: number,
    public oldHash: string,
    public newHash: string
  ) { }
}
