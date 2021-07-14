import{
    Fighter
} from "./fighter";

import{
    KickBehaviour
} from "./kickBehaviour";

import{
    JumpBehaviour
} from "./jumpBehaviour";

export class Fighter3 extends Fighter{
    constructor(name: string, kickBehaviour: KickBehaviour, jumpBehaviour: JumpBehaviour){
        super(name, kickBehaviour, jumpBehaviour); 
    }
}