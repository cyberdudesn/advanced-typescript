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
  [K in keyof T as IsOptional<T, K> extends true ? K : never]: T[K];
};

type IsRequiredOfExampleOptional = IsOptional<Example, 'required'>;
// false

type IsOptionalOfExampleOptional = IsOptional<Example, 'optional'>;
// true

type OnlyOptionalsOfExample = OptionalProperties<Example>;
// type OnlyOptionals = {
//     optional?: number;
//     optionalWithUndefined?: number | undefined;
// }
