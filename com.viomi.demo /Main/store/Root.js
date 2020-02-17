import State from "./State";
import Action from "./Action";

class Root {
    constructor() {
        this.state = new State(this);
        this.action = new Action(this);
    }
}

const r = new Root();

export default r;