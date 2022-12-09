import { sortProducts } from './sortProducts';

const products = [{ title: 'Shoes' }, { title: 'Butter' }, { title: 'Milk' }, { title: 'Apples' }, { title: 'Lemon' }];

describe('Testing sortProducts utility function', () => {
  test('should return sorted a-z array', () => {
    const sortedAZ = [{ title: 'Apples' }, { title: 'Butter' }, { title: 'Lemon' }, { title: 'Milk' }, { title: 'Shoes' }];

    expect(sortProducts(products, 'ASC')).toEqual(sortedAZ);
  });

  test('should return sorted z-a array', () => {
    const sortedZA = [{ title: 'Shoes' }, { title: 'Milk' }, { title: 'Lemon' }, { title: 'Butter' }, { title: 'Apples' }];

    expect(sortProducts(products, 'DESC')).toEqual(sortedZA);
  });
});
