import { expect } from 'chai';
import {
  applyH1, applyH2, applyH3, applyH4, applyH5, applyH6,
} from '../src/formatters';

describe('Formatters', () => {
  describe('Smoke tests', () => {
    it('should to exist a function called applyH1', () => {
      expect(applyH1).to.be.a('function');
    });

    it('should to exist a function called applyH2', () => {
      expect(applyH2).to.be.a('function');
    });

    it('should to exist a function called applyH3', () => {
      expect(applyH3).to.be.a('function');
    });

    it('should to exist a function called applyH4', () => {
      expect(applyH4).to.be.a('function');
    });

    it('should to exist a function called applyH5', () => {
      expect(applyH5).to.be.a('function');
    });

    it('should to exist a function called applyH6', () => {
      expect(applyH6).to.be.a('function');
    });
  });

  describe('applyH1 function', () => {
    it('should to apply a h1 at the beginning of line', () => {
      expect(applyH1('A simple title', 4)).to.be.equal('# A simple title');
    });

    it('should to apply a h1 at the beginning of current line', () => {
      const multilineText = `
First Line
Second Line
`;
      const expected = `
First Line
# Second Line
`;

      expect(applyH1(multilineText, 20)).to.be.equal(expected);
    });
  });

  describe('applyH2 function', () => {
    it('should to apply a h2 at the beginning of current line', () => {
      const text = `
Header 2
Another Header
`;
      const expected = `
Header 2
## Another Header
`;
      expect(applyH2(text, 10)).to.be.equal(expected);
    });
  });

  describe('applyH3 function', () => {
    it('should to apply a h3 at the beginning of current line', () => {
      const text = `
Header 3
Another Header
`;
      const expected = `
### Header 3
Another Header
`;
      expect(applyH3(text, 1)).to.be.equal(expected);
    });
  });

  describe('applyH4 function', () => {
    it('should to apply a h4 at the beginning of current line', () => {
      const text = `
Header 4
Another Header
`;
      const expected = `
Header 4
#### Another Header
`;
      expect(applyH4(text, 11)).to.be.equal(expected);
    });
  });

  describe('applyH5 function', () => {
    it('should to apply a h5 at the beginning of current line', () => {
      const text = `
Header 5
Another line
Another Header
`;
      const expected = `
Header 5
Another line
##### Another Header
`;
      expect(applyH5(text, 23)).to.be.equal(expected);
    });
  });

  describe('applyH6 function', () => {
    it('should to apply a h5 at the beginning of current line', () => {
      const text = `
Header 6
Another line
Another Header
`;
      const expected = `
Header 6
Another line
###### Another Header
`;
      expect(applyH6(text, 23)).to.be.equal(expected);
    });
  });
});
