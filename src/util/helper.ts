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