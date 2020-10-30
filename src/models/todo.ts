export class Todo {
  deadline: Date;
  todo: string;
  status: boolean = false;

  constructor(todo: string, deadline: Date) {
    this.deadline = deadline;
    this.todo = todo;
  }

  changeStatus() {
    if (this.status === false) {
      this.status = true;
    }
    this.status = false;
  }
}