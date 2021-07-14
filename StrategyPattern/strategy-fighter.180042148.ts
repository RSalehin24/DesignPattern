class Fighter{
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

interface JumpBehaviour{
    jump(): void;
}

class ShortJump implements JumpBehaviour{
    jump(): void{
        console.log("Doing short jump");
    }
}

class LongJump implements JumpBehaviour{
    jump(): void{
        console.log("Doing Long jump");
    }
}

class NoJump implements JumpBehaviour{
    jump(): void{
        console.log("Has no jump");
    }
}

interface KickBehaviour{
    kick(): void;
}

//Concerte Strategy
class TornadoKick implements KickBehaviour{
    kick(): void{
        console.log("Tornado kicking");
    }
}


class LightningKick implements KickBehaviour{
    kick(): void{
        console.log("Lightning kicking");
    }
}

class NoKick implements KickBehaviour{
    kick(): void{
        console.log("Has no kick");
    }
}

class Fighter1 extends Fighter{
    constructor(name: string, kickBehaviour: KickBehaviour, jumpBehaviour: JumpBehaviour){
        super(name, kickBehaviour, jumpBehaviour); 
    }
}

class Fighter2 extends Fighter{
    constructor(name: string, kickBehaviour: KickBehaviour, jumpBehaviour: JumpBehaviour){
        super(name, kickBehaviour, jumpBehaviour); 
    }
}

class Fighter3 extends Fighter{
    constructor(name: string, kickBehaviour: KickBehaviour, jumpBehaviour: JumpBehaviour){
        super(name, kickBehaviour, jumpBehaviour); 
    }
}


 let Habib = new Fighter1("Habib", new TornadoKick, new NoJump);
Habib.display();
Habib.roll();
Habib.punch();
Habib.kick();
Habib.jump();
Habib.setKickBehaviour(new LightningKick);
Habib.kick();
Habib.setJumpBehaviour(new LongJump);
Habib.jump();

let Kasfi = new Fighter2("Kasfi", new NoKick,new NoJump);
Kasfi.display();
Kasfi.jump();
Kasfi.kick();
Kasfi.setKickBehaviour(new LightningKick);
Kasfi.setJumpBehaviour(new LongJump);
Kasfi.jump();
Kasfi.kick();
Kasfi.punch();
Kasfi.roll();

let Asmani = new Fighter3("Asmani", new LightningKick, new ShortJump)
Asmani.display();
Asmani.roll();
Asmani.punch();
Asmani.jump();
Asmani.kick();
Asmani.setJumpBehaviour(new NoJump);
Asmani.jump();
Asmani.setKickBehaviour(new NoKick);
Asmani.kick();
 