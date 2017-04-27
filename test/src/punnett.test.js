import * as _ from 'lodash';
import PunnettSquare from '../../src';

const TRAITS = [
  'black',
  'brown',
  'blonde',
  'red',
];

const MOM = ['brown', 'red'];
const DAD = ['black', 'red'];
const WIERDO = ['four', 'rectangle'];

let hair;

beforeEach(() => {
  hair = new PunnettSquare(TRAITS);
});

test('cross method should work', () => {
  expect(hair.cross(MOM, DAD)).toEqual([
    ['brown', 'black'],
    ['brown', 'red'],
    ['red', 'black'],
    ['red', 'red'],
  ]);
});

test('cross method should not blow up when one partner has traits that do not exist', () => {
  expect(hair.cross(DAD, WIERDO)).toEqual([]);
});

test('visible method should work with different alleles', () => {
  expect(hair.visible(MOM)).toBe('brown');
});

test('visible method should work with identical alleles', () => {
  expect(hair.visible(['black', 'black'])).toBe('black');
});

test('breed method should work', () => {
  const spawn = hair.breed(MOM, DAD);

  expect(spawn.alleles).not.toBeUndefined();
  expect(spawn.trait).not.toBeUndefined();
  expect(_.includes(spawn.alleles, spawn.trait)).toBe(true);
  expect(_.includes(TRAITS, spawn.trait)).toBe(true);
});
