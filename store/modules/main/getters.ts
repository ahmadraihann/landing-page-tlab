import { GetterTree } from "vuex";
import { RootState } from "@/store";
import { State } from "./state";

export const getters: GetterTree<State, RootState> = {
  ["GET_CLIENTS"](state: State) {
    return state;
  },
};
