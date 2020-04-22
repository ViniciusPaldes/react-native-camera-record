import { mergeAll, flatten } from "ramda"

export const enhance = (styles: object[]) => {
  return mergeAll(flatten(styles))
}
