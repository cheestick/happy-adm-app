type TObjectKeys = string | number | symbol

export type TUnionKeysToObject<T extends TObjectKeys, O> = {
  [key in T ]: O
}
