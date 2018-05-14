import Observer from './Observer'

class FesAudio extends Observer {
    constructor(input) {
        super(); // 调用父类的constructor(x, y)
        this.input = input;
    }

    getInput() {
        console.log(this.input);
    }

}
export default FesAudio;