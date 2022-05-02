class Comportamento {
    constructor(emotion, force) {
        this.emotion = emotion;
        this.force = force;
    }


    work() {
        console.log("Working... Force:" + this.force + ". The employee is " + this.emotion + ".");
    }


    repose() {
        this.force += 10;
        console.log("Resting...");
        this.force >= 50
            ? this.emotion = "happy"
            : this.emotion = "sad";
    }
}
module.exports = Comportamento;