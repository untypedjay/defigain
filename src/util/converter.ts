export function formatAccount(rawAccount: any) {
  const result: any = {};

  rawAccount.forEach((asset: string) => {
    result[asset.split('@')[1].toLowerCase()] = asset.split('@')[0];
  })

  return result;
}