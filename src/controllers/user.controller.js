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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserId = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const user_service_1 = require("../services/user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, isAdmin } = req.body;
        const newUser = yield (0, user_service_1.createNewUser)({ name, email, isAdmin });
        res.status(201).json(newUser);
    }
    catch (error) {
        error: 'failed to Create user';
        console.log(error);
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get users from user service
        const users = yield (0, user_service_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Fail' });
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, isAdmin } = req.body;
        const updateUserId = yield (0, user_service_1.updatedUserId)({
            id: +id,
            data: { name, isAdmin },
        });
        res.status(201).json(updateUserId);
    }
    catch (error) {
        error: 'failed to update user';
        console.log(error);
    }
});
exports.updateUser = updateUser;
const deleteUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, user_service_1.deleteUser)(+id); //to convert to number
        res.status(200).json({ msg: 'deleted successfully' });
    }
    catch (error) {
        error: 'failed to delete user';
    }
});
exports.deleteUserId = deleteUserId;
