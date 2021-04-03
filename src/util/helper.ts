export function findByProperty(array: any[], propertyName: string, keyword: string) {
  array.forEach((item: any) => {
    if (item[propertyName] === keyword) {
      return item;
    }
  });

  return null;
}