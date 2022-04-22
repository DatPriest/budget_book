export class NewIssues {
  constructor (
    public groupId: number,
    public unserId: number,
    public amount: number,
    public categoryId: number,
    public description: string
  ) { }
}
