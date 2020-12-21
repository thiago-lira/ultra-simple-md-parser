const applyHeader = (markup, text, currentPosition) => {
  const beginLineIndex = text.lastIndexOf('\n', currentPosition);
  const chars = text.split('');
  chars.splice(beginLineIndex + 1, 0, `${markup} `);

  return chars.join('');
};

export const applyH1 = (text, currentPosition) => applyHeader('#', text, currentPosition);

export const applyH2 = (text, currentPosition) => applyHeader('##', text, currentPosition);

export const applyH3 = (text, currentPosition) => applyHeader('###', text, currentPosition);

export const applyH4 = (text, currentPosition) => applyHeader('####', text, currentPosition);

export const applyH5 = (text, currentPosition) => applyHeader('#####', text, currentPosition);

export const applyH6 = (text, currentPosition) => applyHeader('######', text, currentPosition);
