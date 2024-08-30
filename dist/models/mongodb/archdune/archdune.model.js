"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsDataModelMongoDbMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    data: {
        type: mongoose_1.default.Schema.Types.Mixed,
        required: true,
    },
});
exports.projectsDataModelMongoDbMongoose = mongoose_1.default.model("trash2", projectSchema);
//
