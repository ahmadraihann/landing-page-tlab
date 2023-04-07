import { createStore, createLogger } from "vuex";
import {
  store as documents,
  DocumentsStore,
  State as DocumentsState,
} from "@/store/modules/main";

export type RootState = {
  documents: DocumentsState;
};

export type Store = DocumentsStore<Pick<RootState, "documents">>;

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    documents,
  },
});

export function useStore(): Store {
  return store as Store;
}
