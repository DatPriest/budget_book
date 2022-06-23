export class NewExpensesModule {
  constructor (
    public groupId: number,
    public userId: number,
    public amount: number,
    public categoryId: number,
    public description: string
  ) { }
}
