import{
    Password
} from "./password";

abstract class LengthCoding extends Password{
    public abstract getText(): string;
}


export class LengthEncoding extends LengthCoding{

    password: Password;

    constructor(password: Password){
        super();
        this.password = password;
    }


    public getText(): string {
       return this.password.getText().replace(
        /(.)\1+/g,
        (capture) => (capture.length > 1 ? capture.length : "") + capture[0]
      );
    }
}

export class LengthDecoding extends LengthCoding{

  password: Password;

  constructor(password: Password){
      super();
      this.password = password;
  }

  public getText(): string {
    return this.password.getText().replace(/([0-9]+)(.)/g, (_match, count, char) =>
      char.repeat(Number(count))
    );
  }
}