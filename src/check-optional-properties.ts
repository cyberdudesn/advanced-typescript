type Example = {
  required: number;
  optional?: number;
  requiredAsUndefined: undefined;
  requiredWithUndefined: number | undefined;
  optionalWithUndefined?: number | undefined;
};

type IsOptional<T, K extends keyof T> = undefined extends T[K]
  ? {} extends Pick<T, K>
    ? true
    : false
  : false;

type OptionalProperties<T> = {
  [K in keyof T]: IsOptional<T, K> extends true ? T[K] : never;
};

type IsRequiredOfExampleOptional = IsOptional<Example, 'required'>;
// false

type IsOptionalOfExampleOptional = IsOptional<Example, 'optional'>;
// true

type OnlyOptionals = OptionalProperties<Example>;
// type OnlyOptionals = {
//     required: never;
//     optional?: number;
//     requiredAsUndefined: never;
//     requiredWithUndefined: never;
//     optionalWithUndefined?: number | undefined;
// }
