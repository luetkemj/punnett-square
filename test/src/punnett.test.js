import should from 'should';
import * as _ from 'lodash';
import { PunnettSquare } from '../../src';

const TRAITS = [
  'black',
  'brown',
  'blonde',
  'red',
];

const MOM = ['brown', 'red'];

const DAD = ['black', 'red'];

describe('the PunnettSquare class', () => {
  let hair;
  beforeEach(() => {
    hair = new PunnettSquare(TRAITS);
  });

  it('should exist', () => {
    should.exist(PunnettSquare);
  });

  describe('cross method', () => {
    it('should exist', () => {
      should.exist(hair.cross);
    });

    it('should work', () => {
      should(hair.cross(MOM, DAD)).deepEqual([
        ['brown', 'black'],
        ['brown', 'red'],
        ['red', 'black'],
        ['red', 'red'],
      ]);
    });
  });

  describe('visible method', () => {
    it('should exist', () => {
      should.exist(hair.visible);
    });

    it('should work with different alleles', () => {
      should(hair.visible(MOM)).equal('brown');
    });

    it('should work with identical alleles', () => {
      should(hair.visible(['black', 'black'])).equal('black');
    });
  });

  describe('breed method', () => {
    it('should exist', () => {
      should.exist(hair.breed);
    });

    it('should work', () => {
      const spawn = hair.breed(MOM, DAD);

      should.exist(spawn.alleles);
      should.exist(spawn.trait);
      _.includes(spawn.alleles, spawn.trait).should.be.true();
      _.includes(TRAITS, spawn.trait).should.be.true();
    });
  });
});
