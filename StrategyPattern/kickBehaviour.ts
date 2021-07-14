export interface KickBehaviour{
    kick(): void;
}

//Concerte Strategy
export class TornadoKick implements KickBehaviour{
    kick(): void{
        console.log("Tornado kicking");
    }
}


export class LightningKick implements KickBehaviour{
    kick(): void{
        console.log("Lightning kicking");
    }
}

export class NoKick implements KickBehaviour{
    kick(): void{
        console.log("Has no kick");
    }
}