"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ansi_regex_1 = __importDefault(require("ansi-regex"));
class Fir {
    constructor() {
        this.formatter = message => message;
    }
    format(callback) {
        this.formatter = callback;
        return this;
    }
    save(file) {
        this.logfile = file;
        return this;
    }
    log(...output) {
        output = output.map(element => {
            if (typeof element == "object") {
                element = JSON.stringify(element, null, 2);
            }
            return element;
        });
        const message = this.formatter(output.join(" "));
        process.stdout.write(`${message}\r\n`);
        if (this.logfile) {
            try {
                fs_1.default.appendFileSync(this.logfile, `${message.replace(ansi_regex_1.default(), "")}\r\n`);
            }
            catch (exception) {
                console.log(exception);
            }
        }
        return this;
    }
}
exports.Fir = Fir;
if (!global["__fir"]) {
    global["__fir"] = new Fir();
}
exports.default = global["__fir"];
