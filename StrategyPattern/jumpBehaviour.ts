export interface JumpBehaviour{
    jump(): void;
}

export class ShortJump implements JumpBehaviour{
    jump(): void{
        console.log("Doing short jump");
    }
}

export class LongJump implements JumpBehaviour{
    jump(): void{
        console.log("Doing Long jump");
    }
}

export class NoJump implements JumpBehaviour{
    jump(): void{
        console.log("Has no jump");
    }
}