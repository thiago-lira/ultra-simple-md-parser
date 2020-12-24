export const strong = (text) => text
  .replace(/(\*\*|__)(.*?)\1/gi, '<strong class="md-strong">$2</strong>');

export const strike = (text) => text
  .replace(/~(.+?)~/g, '<strike class="md-strike">$1</strike>');

export const blockquote = (text) => {
  const pattern = /^>\s(.*)$/gm;
  return text.replace(pattern, '<span class="md-blockquote">$1</span>');
};

export const emphasis = (text) => text
  .replace(/\s(\*)((?!\*)\S(.*?))\1(?!\*)/g, ' <em class="md-emphasis">$2</em>')
  .replace(/\b(_)((?!_)\S(.*?))(_)/g, '<em class="md-emphasis">$2</em>');

export const anchor = (text) => text
  .replace(/[^!]\[(.*?)\]\((.*?)\)/g, ' <a class="md-anchor" href="$2">$1</a>');

export const paragraph = (text) => text
  .replace(/^(?!<h[1-6])([^(#{1,6}|\n)].+$)/gm, '<p class="md-paragraph">$1</p>');

export const h1 = (text) => text
  .replace(/^# (.*$)/gm, '<h1 class="md-h1">$1</h1>');

export const h2 = (text) => text
  .replace(/^## (.*$)/gm, '<h2 class="md-h2">$1</h2>');

export const h3 = (text) => text
  .replace(/^### (.*$)/gm, '<h3 class="md-h3">$1</h3>');

export const h4 = (text) => text
  .replace(/^#### (.*$)/gm, '<h4 class="md-h4">$1</h4>');

export const h5 = (text) => text
  .replace(/^##### (.*$)/gm, '<h5 class="md-h5">$1</h5>');

export const h6 = (text) => text
  .replace(/^###### (.*$)/gm, '<h6 class="md-h6">$1</h6>');

export const image = (text) => text
  .replace(/!\[(.*?)\]\((.*?)\)/gm, '<img class="md-image" src="$2" alt="$1" />');

export const inlineCode = (text) => text
  .replace(/`(.*?)`/gm, '<span class="md-inline-code">$1</span>');

export const header = (text) => h1(h2(h3(h4(h5(h6(text))))));

export default (text) => {
  const funcs = [
    emphasis, anchor, paragraph, strong, image, inlineCode, h1, h2, h3, h4, h5, h6, strike,
  ];

  return funcs.reduce((acc, fn) => fn(acc), text);
};
