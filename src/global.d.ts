// TODO: add PR to the type definition package of `just-map-values`
module 'just-map-valuess' {
  declare function mapValues<Input extends {}, ItemOutput>(
    item: Input,
    callback: (value: Input[keyof Input], key: string, object: Input) => ItemOutput
  ): { [key in keyof Input]: ItemOutput }

  export = mapValues
}

module 'just-kebab-case' {
  declare function kebabCase(string: string): string

  export = kebabCase
}
