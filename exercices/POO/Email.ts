import { IValidator } from "./IValidator";

export class Email implements IValidator {
  private value: string;
  constructor(value: string | null | undefined) {
    if (!value) throw new Error("Value is not provided");
    this.value = value;
  }

  validate(): void {
    //Regex from stackoverflow
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(this.value)) {
      throw new Error("Email format invalid");
    }
  }

  public isSpam(spamArray: string[]): boolean {
    const domain = this.getDomain();
    return spamArray.includes(domain);
  }

  public getDomain(): string {
    const emailSplited = this.value.split("@");
    if (emailSplited.length !== 2)
      throw new Error("The Email has not a valid format");
    return emailSplited[1];
  }
}
