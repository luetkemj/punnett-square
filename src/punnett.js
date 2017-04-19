import * as _ from 'lodash';

export default class PunnettSquare {
  constructor(traits) {
    this.traits = traits;
  }

  cross(mom, dad) {
    const square = [];
    _.each(mom, (momTrait) => {
      _.each(dad, (dadTrait) => {
        if (this.traits.indexOf(momTrait) > -1 && this.traits.indexOf(dadTrait) > -1) {
          square.push([momTrait, dadTrait]);
        }
      });
    });

    return square;
  }

  visible(alleles) {
    return this.traits.indexOf(alleles[0]) < this.traits.indexOf(alleles[1]) ?
           alleles[0] : alleles[1];
  }

  breed(mom, dad) {
    const alleles = _.sample(this.cross(mom, dad));
    const trait = this.visible(alleles);

    return {
      alleles,
      trait,
    };
  }
}
