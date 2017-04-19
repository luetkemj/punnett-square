# Punnett Square [![Build Status](https://travis-ci.org/luetkemj/punnett-square.svg?branch=master)](https://travis-ci.org/luetkemj/punnett-square)

[![NPM](https://nodei.co/npm/punnett-square.svg?downloads=true)](https://nodei.co/npm/punnett-square/)

A Punnett Square Calculator

## Getting started

**install the package:**

```npm install --save punnett-square```

**create a new class instance of PunnettSquare**

```javascript
import { PunnettSquare } from 'punnett-square';

// traits should be ordered from most dominant to least
const TRAITS = ['black', 'brown', 'blonde', 'red'];
const hair = new PunnettSquare(TRAITS);
```

**breed**

```javascript
const MOM = ['brown', 'red'];
const DAD = ['black', 'red'];

const spawn = hair.breed(MOM, DAD);

/**
spawn is now an object with alleles and the expressed trait
{
  alleles: ['black', 'red'],
  trait: 'black',
}
**/
```

## Documentation

### Method: cross
**Description:**

Returns the resultant Punnett Square from a cross of two sets of alleles.

**Usage**

cross(mom, dad);

  * **mom** {array} _required_
    * two strings that exist in the array of traits used to instantiate the class

  * **dad** {array} _required_
    * two strings that exist in the array of traits used to instantiate the class

  * @return {array}

**Example**
```javascript
const hair = new PunnettSquare(['black', 'brown', 'blonde', 'red']);
const MOM = ['brown', 'red'];
const DAD = ['black', 'red'];

const cross = hair.cross(MOM, DAD);

/**
cross is now an array of possible alleles
[
  ['brown', 'black'],
  ['brown', 'red'],
  ['red', 'black'],
  ['red', 'red'],
]
**/
```

### Method: visible
**Description:**

Returns the dominant trait from an allele pair.

**Usage**

visible(alleles);

  * **alleles** {array} _required_
    * two strings that exist in the array of traits used to instantiate the class

  * @return {string}

**Example**
```javascript
const hair = new PunnettSquare(['black', 'brown', 'blonde', 'red']);

const visible = hair.visible(['brown', 'red']);

// visible => 'brown'
```

### Method: breed
**Description:**

Returns an object with an allele pair and the expressed trait from the resultant cross between two allele pairs

**Usage**

breed(mom, dad);

  * **mom** {array} _required_
    * two strings that exist in the array of traits used to instantiate the class

  * **dad** {array} _required_
    * two strings that exist in the array of traits used to instantiate the class

  * @return {object}

**Example**
```javascript
const hair = new PunnettSquare(['black', 'brown', 'blonde', 'red']);
const MOM = ['brown', 'red'];
const DAD = ['black', 'red'];

const cross = hair.breed(MOM, DAD);

/**
cross is now an object that may look like
{
  alleles: ['red', 'black'],
  trait: 'black',
}
**/
```

## Contributing

Feature requests, issues, and contributions are all welcome.

[issues](https://github.com/luetkemj/punnett-square/issues/new)
