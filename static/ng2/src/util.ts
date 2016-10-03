let labelCache: { [label: string]: boolean } = {};
export function label<T>(label: T | ''): T {
  if (labelCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  labelCache[<string>label] = true;

  return <T>label;
}