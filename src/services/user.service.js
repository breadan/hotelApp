"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedUserId = exports.createNewUser = exports.deleteUser = exports.getAllUsers = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.user.findMany();
});
exports.getAllUsers = getAllUsers;
const createNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield prisma_1.default.user.findUnique({
        where: { email: user.email },
    });
    if (!existEmail) {
        return yield prisma_1.default.user.create({
            data: user,
        });
    }
    //   if (existEmail) {
    //     return res.status(400).json({ message: 'Email already exists' });
    //   }
    //   return await prisma.user.create({
    //     data: user,
    //   });
});
exports.createNewUser = createNewUser;
const updatedUserId = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data, id, }) {
    return yield prisma_1.default.user.update({
        data,
        where: {
            id,
        },
    });
});
exports.updatedUserId = updatedUserId;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
});
exports.deleteUser = deleteUser;
