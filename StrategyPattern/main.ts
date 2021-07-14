import{
    Fighter1
} from "./fighter1";

import{
    Fighter2
} from "./fighter2";

import{
    Fighter3
} from "./fighter3";

import{
    NoKick,
    TornadoKick,
    LightningKick
} from "./kickBehaviour";

import{
    NoJump,
    LongJump,
    ShortJump
} from "./jumpBehaviour";

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
