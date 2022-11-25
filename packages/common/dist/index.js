"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayResults = void 0;
const DisplayResults = (web = false) => {
    if (web) {
        return "This is Displayed in Web";
    }
    else {
        return "This is Displayed in Mobile App";
    }
};
exports.DisplayResults = DisplayResults;
