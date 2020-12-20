import { expect } from 'chai';
import MDParser from '../src/md-parser-factory';

describe('Markdown converter', () => {
  describe('Smoke tests', () => {
    const md = MDParser('Smoke Tests');

    it('should exist a method called parse', () => {
      expect(md.parse).to.be.a('function');
    });

    it('should exist a method called inlineCode', () => {
      expect(md.inlineCode).to.be.a('function');
    });

    it('should exist a method called header', () => {
      expect(md.header).to.be.a('function');
    });

    it('should exist a method called paragraph', () => {
      expect(md.paragraph).to.be.a('function');
    });

    it('should exist a method called strong', () => {
      expect(md.strong).to.be.a('function');
    });

    it('should exist a method called h1', () => {
      expect(md.h1).to.be.a('function');
    });

    it('should exist a method called h2', () => {
      expect(md.h2).to.be.a('function');
    });

    it('should exist a method called h3', () => {
      expect(md.h3).to.be.a('function');
    });

    it('should exist a method called h4', () => {
      expect(md.h4).to.be.a('function');
    });

    it('should exist a method called h5', () => {
      expect(md.h5).to.be.a('function');
    });

    it('should exist a method called h6', () => {
      expect(md.h6).to.be.a('function');
    });

    it('should exist a method called anchor', () => {
      expect(md.anchor).to.be.a('function');
    });

    it('should exist a method called emphasis', () => {
      expect(md.emphasis).to.be.a('function');
    });

    it('should exist a method called image', () => {
      expect(md.image).to.be.a('function');
    });
  });

  describe('MDParser.header', () => {
    it('should return empty string if passed empty string', () => {
      const md = MDParser('');

      md.header();
      expect(md.text).to.be.equal('');
    });

    it('should convert multiline text with all valid header markup', () => {
      const md = MDParser(`
# Header 1
Nomo no nomomno ono ipsum

## Header 2
Nomo no nomomno ono ipsum

### Header 3
Nomo no nomomno ono ipsum

#### Header 4
Nomo no nomomno ono ipsum

##### Header 5
Nomo no nomomno ono ipsum

###### Header 6
Nomo no nomomno ono ipsum

######## Is An INVALID
Nomo no nomomno ono ipsum
`);

      const expected = `
<h1 class="md-h1">Header 1</h1>
Nomo no nomomno ono ipsum

<h2 class="md-h2">Header 2</h2>
Nomo no nomomno ono ipsum

<h3 class="md-h3">Header 3</h3>
Nomo no nomomno ono ipsum

<h4 class="md-h4">Header 4</h4>
Nomo no nomomno ono ipsum

<h5 class="md-h5">Header 5</h5>
Nomo no nomomno ono ipsum

<h6 class="md-h6">Header 6</h6>
Nomo no nomomno ono ipsum

######## Is An INVALID
Nomo no nomomno ono ipsum
`;

      md.header();
      expect(md.text).to.be.equal(expected);
    });

    it('should ignore convertion if passed more than 6 hash chars', () => {
      expect('####### is an unknown markup').to.be.equal('####### is an unknown markup');
    });

    describe('MDParser.h1', () => {
      it('should convert text single line started with # to h1', () => {
        const md = MDParser('# Ipsum Lorem?');

        md.h1();
        expect(md.text).to.be.equal('<h1 class="md-h1">Ipsum Lorem?</h1>');
      });

      it('should convert text multiline started with # to h1', () => {
        const md = MDParser('# Lorem Ipsum!\n# Ipsum Lorem?');

        md.h1();
        expect(md.text).to.be.equal('<h1 class="md-h1">Lorem Ipsum!</h1>\n<h1 class="md-h1">Ipsum Lorem?</h1>');
      });
    });

    describe('MDParser.h2', () => {
      it('should convert text line started with ## to h2', () => {
        const md = MDParser('## I am header 2!');

        md.h2();
        expect(md.text).to.be.equal('<h2 class="md-h2">I am header 2!</h2>');
      });
    });

    describe('MDParser.h3', () => {
      it('should convert text line started with ### to h3', () => {
        const md = MDParser('### I am header 3!');
        md.h3();

        expect(md.text).to.be.equal('<h3 class="md-h3">I am header 3!</h3>');
      });
    });

    describe('MDParser.h4', () => {
      it('should convert text line started with #### to h4', () => {
        const md = MDParser('#### I am header 4!');
        md.h4();

        expect(md.text).to.be.equal('<h4 class="md-h4">I am header 4!</h4>');
      });
    });

    describe('MDParser.h5', () => {
      it('should convert text line started with ##### to h5', () => {
        const md = MDParser('##### I am header 5!');

        md.h5();
        expect(md.text).to.be.equal('<h5 class="md-h5">I am header 5!</h5>');
      });
    });

    describe('MDParser.h6', () => {
      it('should convert text line started with ###### to h6', () => {
        const md = MDParser('###### I am header 6!');

        md.h6();
        expect(md.text).to.be.equal('<h6 class="md-h6">I am header 6!</h6>');
      });
    });
  });

  describe('MDParser.strong', () => {
    it('should convert the pattern **<text>** to <strong class="md-strong"><text></strong>', () => {
      const md = MDParser('Axis: **Bold** as Love');

      md.strong();
      expect(md.text).to.be.equal('Axis: <strong class="md-strong">Bold</strong> as Love');
    });

    it('should convert the pattern __<text>__ to <strong class="md-strong"><text></strong>', () => {
      const md = MDParser('Axis: __Bold__ as Love');

      md.strong();
      expect(md.text).to.be.equal('Axis: <strong class="md-strong">Bold</strong> as Love');
    });
  });

  describe('MDParser.emphasis', () => {
    it('should convert the pattern _<text>_ to <em class="md-emphasis"><text></em> in single line', () => {
      const md = MDParser('this is an _emphasis_');

      md.emphasis();
      expect(md.text).to.be.equal('this is an <em class="md-emphasis">emphasis</em>');
    });

    it('should convert the pattern *<text>* to <em class="md-emphasis"><text></em> in single line', () => {
      const md = MDParser('this is an *emphasis*');

      md.emphasis();
      expect(md.text).to.be.equal('this is an <em class="md-emphasis">emphasis</em>');
    });

    it('should convert the pattern _<text>_ to <em class="md-emphasis"><text></em> in multiline text', () => {
      const md = MDParser('Testing a multiline text with _emphasis_\n\n\nthis is a new _line_');
      const expected = 'Testing a multiline text with <em class="md-emphasis">emphasis</em>\n\n\nthis is a new <em class="md-emphasis">line</em>';

      md.emphasis();
      expect(md.text).to.be.equal(expected);
    });
  });

  describe('MDParser.anchor', () => {
    it('should convert the pattern [<text>](<link>) to anchor link', () => {
      const md = MDParser('Testing my [super link](https://foo.com.br)');

      md.anchor();
      expect(md.text).to.be.equal('Testing my <a class="md-anchor" href="https://foo.com.br">super link</a>');
    });
  });

  describe('MDParser.paragraph', () => {
    it('should wrap which line without markups with paragraph tag', () => {
      const text = `
## My Super Cool Title
This should be wrapped with paragraph.

Here is fine ## should wrap

This should be <em class="md-emphasis">wrapped</em> too...

And this _one_

<h7>Here is not title</h7>


<h1 class="md-h1">Here No More</h1>


It's a paragraph
`;
      const expected = `
## My Super Cool Title
<p class="md-paragraph">This should be wrapped with paragraph.</p>

<p class="md-paragraph">Here is fine ## should wrap</p>

<p class="md-paragraph">This should be <em class="md-emphasis">wrapped</em> too...</p>

<p class="md-paragraph">And this _one_</p>

<p class="md-paragraph"><h7>Here is not title</h7></p>


<h1 class="md-h1">Here No More</h1>


<p class="md-paragraph">It's a paragraph</p>
`;
      const md = MDParser(text);
      md.paragraph();

      expect(md.text).to.be.equal(expected);
    });
  });

  describe('MDParser.parse', () => {
    it('should parse all markups', () => {
      const text = `
# MDConverter Factory

A simple _md_ __parser__

## Header 2

It parse links ! [like this](http://pudim.com.br)

### Header 3

It parse emphasis _like this_

#### Header 4

It parse bold **like this** using asterisks

##### Header 5
It parse emphasis *like this* using asterisks

###### Header 6

this is \`inline\` \`code\`

It parse image ![bar](http://foo.com/)
`;
      const expected = `
<h1 class="md-h1">MDConverter Factory</h1>

<p class="md-paragraph">A simple <em class="md-emphasis">md</em> <strong class="md-strong">parser</strong></p>

<h2 class="md-h2">Header 2</h2>

<p class="md-paragraph">It parse links ! <a class="md-anchor" href="http://pudim.com.br">like this</a></p>

<h3 class="md-h3">Header 3</h3>

<p class="md-paragraph">It parse emphasis <em class="md-emphasis">like this</em></p>

<h4 class="md-h4">Header 4</h4>

<p class="md-paragraph">It parse bold <strong class="md-strong">like this</strong> using asterisks</p>

<h5 class="md-h5">Header 5</h5>
<p class="md-paragraph">It parse emphasis <em class="md-emphasis">like this</em> using asterisks</p>

<h6 class="md-h6">Header 6</h6>

<p class="md-paragraph">this is <span class="md-inline-code">inline</span> <span class="md-inline-code">code</span></p>

<p class="md-paragraph">It parse image <img class="md-image" src="http://foo.com/" alt="bar" /></p>
`;
      const md = MDParser(text);

      md.parse();
      expect(md.text).to.be.equal(expected);
    });
  });
  describe('MDParser.image', () => {
    it('should convert image markup to html', () => {
      const md = MDParser('Text with ![image](https://imgsrc.com)');

      md.image();
      expect(md.text).to.be.equal('Text with <img class="md-image" src="https://imgsrc.com" alt="image" />');
    });
  });

  describe('MDParser.inlineCode', () => {
    it('should convert `<text>` to span.md-inline-code', () => {
      const md = MDParser('this is a `inline-code`');

      md.inlineCode();
      expect(md.text).to.be.equal('this is a <span class="md-inline-code">inline-code</span>');
    });
  });
});
