export default (text) => ({
  text,
  parse() {
    this.header();
    this.anchor();
    this.strong();
    this.paragraph();
    this.emphasis();
    this.image();
    this.inlineCode();
  },
  inlineCode() {
    this.text = this.text.replace(/`(.*?)`/gm, '<span class="md-inline-code">$1</span>');
  },
  header() {
    this.h1();
    this.h2();
    this.h3();
    this.h4();
    this.h5();
    this.h6();
  },
  anchor() {
    this.text = this.text.replace(/[^!]\[(.*?)\]\((.*?)\)/gm, ' <a class="md-anchor" href="$2">$1</a>');
  },
  strong() {
    this.text = this.text.replace(/__(.*?)__/gm, '<strong class="md-strong">$1</strong>');
    this.text = this.text.replace(/\*\*(.*?)\*\*/gm, '<strong class="md-strong">$1</strong>');
  },
  paragraph() {
    this.text = this.text.replace(/^(?!<h[1-6])([^(#{1,6}|\n)].+$)/gm, '<p class="md-paragraph">$1</p>');
  },
  emphasis() {
    this.text = this.text.replace(/\*(.*?)\*/g, '<em class="md-emphasis">$1</em>');
    this.text = this.text.replace(/_(.*?)_/g, '<em class="md-emphasis">$1</em>');
  },
  image() {
    this.text = this.text.replace(/!\[(.*?)\]\((.*?)\)/gm, '<img class="md-image" src="$2" alt="$1" />');
  },
  h1() {
    this.text = this.text.replace(/^# (.*$)/gm, '<h1 class="md-h1">$1</h1>');
  },
  h2() {
    this.text = this.text.replace(/^## (.*$)/gm, '<h2 class="md-h2">$1</h2>');
  },
  h3() {
    this.text = this.text.replace(/^### (.*$)/gm, '<h3 class="md-h3">$1</h3>');
  },
  h4() {
    this.text = this.text.replace(/^#### (.*$)/gm, '<h4 class="md-h4">$1</h4>');
  },
  h5() {
    this.text = this.text.replace(/^##### (.*$)/gm, '<h5 class="md-h5">$1</h5>');
  },
  h6() {
    this.text = this.text.replace(/^###### (.*$)/gm, '<h6 class="md-h6">$1</h6>');
  },
});
