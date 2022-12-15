type TObjectKeys = string | number | symbol

export type TUnionKeysToObject<K extends TObjectKeys, V> = {
  [key in K ]: V
}
