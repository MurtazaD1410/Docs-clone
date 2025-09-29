import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam(keys: string) {
  return useQueryState(
    keys,
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
