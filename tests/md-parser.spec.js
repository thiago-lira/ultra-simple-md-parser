import { expect } from 'chai';
import MDParser, {
  strong,
  emphasis,
  anchor,
  paragraph,
  header,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  image,
  inlineCode,
  strike,
} from '../src/md-parser-factory';

describe('Markdown converter', () => {
  describe('Smoke tests', () => {
    it('should exist a function MDParser', () => {
      expect(MDParser).to.be.a('function');
    });

    it('should exist a function called strike', () => {
      expect(strike).to.be.a('function');
    });

    it('should exist a function called inlineCode', () => {
      expect(inlineCode).to.be.a('function');
    });

    it('should exist a function called header', () => {
      expect(header).to.be.a('function');
    });

    it('should exist a function called paragraph', () => {
      expect(paragraph).to.be.a('function');
    });

    it('should exist a function called strong', () => {
      expect(strong).to.be.a('function');
    });

    it('should exist a function called h1', () => {
      expect(h1).to.be.a('function');
    });

    it('should exist a function called h2', () => {
      expect(h2).to.be.a('function');
    });

    it('should exist a function called h3', () => {
      expect(h3).to.be.a('function');
    });

    it('should exist a function called h4', () => {
      expect(h4).to.be.a('function');
    });

    it('should exist a function called h5', () => {
      expect(h5).to.be.a('function');
    });

    it('should exist a function called h6', () => {
      expect(h6).to.be.a('function');
    });

    it('should exist a function called anchor', () => {
      expect(anchor).to.be.a('function');
    });

    it('should exist a function called emphasis', () => {
      expect(emphasis).to.be.a('function');
    });

    it('should exist a function called image', () => {
      expect(image).to.be.a('function');
    });
  });

  describe('header function', () => {
    it('should return empty string if passed empty string', () => {
      const htmlText = header('');

      expect(htmlText).to.be.equal('');
    });

    it('should convert multiline text with all valid header markup', () => {
      const htmlText = header(`
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

      expect(htmlText).to.be.equal(expected);
    });

    it('should ignore convertion if passed more than 6 hash chars', () => {
      expect('####### is an unknown markup').to.be.equal('####### is an unknown markup');
    });

    describe('h1 function', () => {
      it('should convert text single line started with # to h1', () => {
        const htmlText = h1('# Ipsum Lorem?');

        expect(htmlText).to.be.equal('<h1 class="md-h1">Ipsum Lorem?</h1>');
      });

      it('should convert text multiline started with # to h1', () => {
        const htmlText = h1('# Lorem Ipsum!\n# Ipsum Lorem?');

        expect(htmlText).to.be.equal('<h1 class="md-h1">Lorem Ipsum!</h1>\n<h1 class="md-h1">Ipsum Lorem?</h1>');
      });
    });

    describe('h2 function', () => {
      it('should convert text line started with ## to h2', () => {
        const htmlText = h2('## I am header 2!');

        expect(htmlText).to.be.equal('<h2 class="md-h2">I am header 2!</h2>');
      });
    });

    describe('h3 function', () => {
      it('should convert text line started with ### to h3', () => {
        const htmlText = h3('### I am header 3!');

        expect(htmlText).to.be.equal('<h3 class="md-h3">I am header 3!</h3>');
      });
    });

    describe('h4 function', () => {
      it('should convert text line started with #### to h4', () => {
        const htmlText = h4('#### I am header 4!');

        expect(htmlText).to.be.equal('<h4 class="md-h4">I am header 4!</h4>');
      });
    });

    describe('h5 function', () => {
      it('should convert text line started with ##### to h5', () => {
        const htmlText = h5('##### I am header 5!');

        expect(htmlText).to.be.equal('<h5 class="md-h5">I am header 5!</h5>');
      });
    });

    describe('h6 function', () => {
      it('should convert text line started with ###### to h6', () => {
        const htmlText = h6('###### I am header 6!');

        expect(htmlText).to.be.equal('<h6 class="md-h6">I am header 6!</h6>');
      });
    });
  });

  describe('strong function', () => {
    it('should convert the pattern **<text>** to <strong class="md-strong"><text></strong>', () => {
      const htmlText = strong('Axis: **Bold** as Love');

      expect(htmlText).to.be.equal('Axis: <strong class="md-strong">Bold</strong> as Love');
    });

    it('should convert the pattern __<text>__ to <strong class="md-strong"><text></strong>', () => {
      const htmlText = strong('Axis: __Bold__ as Love');

      expect(htmlText).to.be.equal('Axis: <strong class="md-strong">Bold</strong> as Love');
    });
  });

  describe('emphasis function', () => {
    it('should convert the pattern _<text>_ to <em class="md-emphasis"><text></em> in single line', () => {
      const htmlText = emphasis('this is an _emphasis_');

      expect(htmlText).to.be.equal('this is an <em class="md-emphasis">emphasis</em>');
    });

    it('should convert the pattern *<text>* to <em class="md-emphasis"><text></em> in single line', () => {
      const htmlText = emphasis('this is an *emphasis*');

      expect(htmlText).to.be.equal('this is an <em class="md-emphasis">emphasis</em>');
    });

    it('should convert the pattern _<text>_ to <em class="md-emphasis"><text></em> in multiline text', () => {
      const htmlText = emphasis('Testing a multiline text with _emphasis_\n\n\nthis is a new _line_');
      const expected = 'Testing a multiline text with <em class="md-emphasis">emphasis</em>\n\n\nthis is a new <em class="md-emphasis">line</em>';

      expect(htmlText).to.be.equal(expected);
    });
  });

  describe('anchor function', () => {
    it('should convert the pattern [<text>](<link>) to anchor link', () => {
      const htmlText = anchor('Testing my [super link](https://foo.com.br)');

      expect(htmlText).to.be.equal('Testing my <a class="md-anchor" href="https://foo.com.br">super link</a>');
    });
  });

  describe('paragraph function', () => {
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
      const htmlText = paragraph(text);

      expect(htmlText).to.be.equal(expected);
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
      const htmlText = MDParser(text);

      expect(htmlText).to.be.equal(expected);
    });
  });
  describe('image function', () => {
    it('should convert image markup to html', () => {
      const htmlText = image('Text with ![image](https://imgsrc.com/?param=_Teste_)');

      expect(htmlText).to.be.equal('Text with <img class="md-image" src="https://imgsrc.com/?param=_Teste_" alt="image" />');
    });
  });

  describe('inlineCode function', () => {
    it('should convert `<text>` to span.md-inline-code', () => {
      const htmlText = inlineCode('this is a `inline-code`');

      expect(htmlText).to.be.equal('this is a <span class="md-inline-code">inline-code</span>');
    });
  });

  describe('strike function', () => {
    it('should convert ~<text>~ to <strike><text></strike>', () => {
      const html = strike('~that~ this test is ~not~ passing ~failing~');
      const expected = strike('<strike class="md-strike">that</strike> this test is <strike class="md-strike">not</strike> passing <strike class="md-strike">failing</strike>');

      expect(html).to.be.equal(expected);
    });
  });
});
