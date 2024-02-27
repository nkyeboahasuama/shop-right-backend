export class UserEntity {
  constructor(
    public email: string,
    public password: any,

    public name?: string
  ) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  private validatePassword() {
    const password = this.password;
    if (password.length < 6) {
      throw Error("Password is too short");
    }
    return true;
  }

  private validateEmail() {
    const email = this.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw Error("Invalid email format");
    }
    return true;
  }
  public validate() {
    this.validateEmail();
    this.validatePassword();
  }
}
