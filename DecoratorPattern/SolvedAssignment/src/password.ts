export class Password{

    private text: string = "";

    public getText(): string{
        return this.text;
    };

    public setText(text: string): void{
        this.text = text;
    };
}