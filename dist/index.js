"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Info {
    get name() {
        return this._name;
    }
    set name(inputName) {
        if (inputName && inputName.length > 10) {
            throw new Error(`이름은 최대 10글자가 넘으면 안되요. 현재 글자 수: ${inputName.length}`);
        }
        this._name = inputName;
    }
}
const personInfo1 = new Info();
personInfo1.name = "master Jung";
const helloMaster = (person) => {
    console.log(`Hello ${person.name}!`);
};
helloMaster(personInfo1);
//# sourceMappingURL=index.js.map