"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/users', (req, res) => {
    prisma_1.default.user.findMany().then((users) => {
        res.json(users);
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
