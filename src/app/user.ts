export class User {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly disabled: boolean = false,
  ) {
  }

  toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
