export function findByProperty(array: any[], propertyName: string, keyword: string) {
  let found = null;
  array.forEach((item: any) => {
    if (item[propertyName] === keyword) {
      found = item;
      return;
    }
  });

  return found;
}

export function getToken(balanceString: string) {
  return balanceString.split('@')[1].toLowerCase();
}

export function getAmount(balanceString: string) {
  return parseFloat(balanceString.split('@')[0]);
}