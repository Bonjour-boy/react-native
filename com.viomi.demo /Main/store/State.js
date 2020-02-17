import { observable, computed, decorate } from 'mobx';
import Config from '../Config'

class State {
    constructor(root) {
        this.root = root;

        for (const key in Config.states) {
            this[key] = Config.states[key];
        }
    }
}

const dict = {};

for (const key in Config.states) {
    dict[key] = observable;
}

decorate(State, {
    ...dict,
})

export default State;