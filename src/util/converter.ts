export function formatAccount(rawAccount: any) {
  const result: any = {};

  rawAccount.forEach((asset: string) => {
    result[asset.split('@')[1].toLowerCase()] = asset.split('@')[0];
  })

  return result;
}

export function formatBasepath(path: string) {
  const isComplexPath = path.split('/').length - 2;
  if (isComplexPath) {
    return path.split('/')[1];
  }

  return null;
}

export function formatPath(path: string) {
  const startIndex = path.lastIndexOf('/') + 1;
  return capitalize(path.substring(startIndex));
}

export function capitalize(string: string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}