import { Component } from './base-components';

export class TodoInput extends Component<HTMLDivElement, HTMLTableElement> {
  todoInputElement: HTMLInputElement;
  deadlineInputElement: HTMLInputElement;

  constructor() {
    super('todo-input', 'app');

    this.todoInputElement = this.element.querySelector(
      '.todo'
    ) as HTMLInputElement;

    this.deadlineInputElement = this.element.querySelector(
      '.deadline'
    ) as HTMLInputElement;
  }

  getInputUser(): [string, string] {
    const todo = this.todoInputElement.value;
    const deadline = this.deadlineInputElement.value;

    return [todo, deadline];
  }

  submitHandler(event: Event) {
    event.preventDefault();

    // const userInput = this.getInputUser();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
  renderContent(){};

}