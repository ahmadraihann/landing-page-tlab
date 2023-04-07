import { MutationTree } from "vuex";

import { State } from "./state";
import { DocumentsMutationTypes } from "./mutation-types";

export type Mutations<S = State> = {
  [DocumentsMutationTypes.SET_DATA_CLIENTS](state: S, payload: []): void;
  [DocumentsMutationTypes.SET_ERROR_DATA_CLIENTS](
    state: S,
    payload: string
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [DocumentsMutationTypes.SET_DATA_CLIENTS](state: State, data: []) {
    state.dataClients = data;
  },
  [DocumentsMutationTypes.SET_ERROR_DATA_CLIENTS](
    state: State,
    errorData: string
  ) {
    state.errorDataClients = errorData;
  },
};
