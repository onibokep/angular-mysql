"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
    }
    index(req, res) {
        res.json({ text: '/index' });
    }
}
exports.indexController = new IndexController();
