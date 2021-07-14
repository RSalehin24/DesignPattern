import{
    KickBehaviour
} from "./kickBehaviour";

import{
    JumpBehaviour
} from "./jumpBehaviour";

export class Fighter{
    private name: string;
    kickBehaviour: KickBehaviour
    jumpbehaviour: JumpBehaviour;

    constructor(name: string, kickBehaviour: KickBehaviour, jumpBehaviour: JumpBehaviour){
        this.name = name;
        this.kickBehaviour = kickBehaviour;
        this.jumpbehaviour = jumpBehaviour;
    }

    display(): void{
        console.log(`${this.name} is displaying.`);
    }

    setKickBehaviour(kickBehaviour: KickBehaviour): void{
        this.kickBehaviour = kickBehaviour;
    }

    setJumpBehaviour(jumpBehaviour: JumpBehaviour): void{
        this.jumpbehaviour = jumpBehaviour;
    }

    roll(): void{
        console.log(`${this.name} is rolling.`);
    }

    punch(): void{
        console.log(`${this.name} is punching.`);
    }
    
    kick(): void{
        this.kickBehaviour.kick();
    }

    jump(): void{
        this.jumpbehaviour.jump();
    }

}

