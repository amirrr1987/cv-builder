import { reactive, readonly } from "vue";

const State = reactive<any>({});

export const GetDataStore = (key: string):any => {
  return State[key];
};
export const SetDataStore = (key: string, value: any) => {
  State[key] = value;
};

export default { state: readonly(State), GetDataStore, SetDataStore };
