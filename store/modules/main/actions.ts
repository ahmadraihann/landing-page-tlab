import { ActionTree, ActionContext } from "vuex";
import { RootState } from "@/store";
import { State } from "./state";
import { Mutations } from "./mutations";
import { DocumentsMutationTypes } from "./mutation-types";
import { DocumentsActionTypes } from "./action-types";
import axios from "axios";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [DocumentsActionTypes.FETCH_CLIENTS]({
    commit,
  }: AugmentedActionContext): Promise<any>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [DocumentsActionTypes.FETCH_CLIENTS]({ commit }) {
    try {
      const response = await axios.get("/json/connect.json");
      commit(DocumentsMutationTypes.SET_DATA_CLIENTS, response.data);
    } catch (error) {
      commit(DocumentsMutationTypes.SET_ERROR_DATA_CLIENTS, error as string);
    }
  },
};
