// TODO: add PR to the type definition package of `just-map-values`
module 'just-map-values' {
  declare function mapValues<TInput extends {}, TMappedValue>(
    item: TInput,
    callback: (value: TInput[keyof TInput], key: keyof TInput, object: TInput) => TMappedValue
  ): { [k in keyof TInput]: ReturnType<typeof callback> }

  export = mapValues
}
