export class TaskItem {
  constructor(public title: string) {}

  toggleTaskComplete() {
    this.isDone = !this.isDone;
  }

  public isDone = false;

  public id: string = '';
}
