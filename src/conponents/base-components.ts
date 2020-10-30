export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostId: string,
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostId) as T;

    const importNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importNode.firstElementChild as U;

    this.attache();
  }

  abstract configure(): void;
  abstract renderContent(): void;

  private attache() {
    this.hostElement.insertAdjacentElement(
      'afterbegin',
      this.element
    );
  }
}