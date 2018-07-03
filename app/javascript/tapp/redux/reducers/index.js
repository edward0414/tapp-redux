import { combineReducers } from "redux";
import abc from "./abc";
import assigned from "./assigned";
import database from "./database";
import instructorModal from "./instructorModal";
import nav from "./nav";
import unassigned from "./unassigned";

const reducers = combineReducers({
    abc,
    assigned,
    database,
    instructorModal,
    nav,
    unassigned
});

export const reducers;