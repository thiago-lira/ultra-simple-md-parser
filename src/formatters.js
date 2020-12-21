const applyHeader = (markup, text, currentPosition) => {
  const chars = text.split('');
  const startLineIndex = text.lastIndexOf('\n', currentPosition);
  const line = text.substring(startLineIndex);
  const headerPattern = /#{1,6}\s/;

  if (line.startsWith(`${markup} `)) {
    return line.replace(headerPattern, '');
  }

  if (headerPattern.test(line)) {
    const newLine = line.replace(headerPattern, '');
    const isChangingMarkup = line.match(headerPattern)[0] !== `${markup} `;
    const newMarkup = isChangingMarkup ? `${markup} ` : '';

    return text.substring(0, startLineIndex) + newMarkup + newLine;
  }

  chars.splice(startLineIndex + 1, 0, `${markup} `);

  return chars.join('');
};

const applyH1 = (text, currentPosition) => applyHeader('#', text, currentPosition);

const applyH2 = (text, currentPosition) => applyHeader('##', text, currentPosition);

const applyH3 = (text, currentPosition) => applyHeader('###', text, currentPosition);

const applyH4 = (text, currentPosition) => applyHeader('####', text, currentPosition);

const applyH5 = (text, currentPosition) => applyHeader('#####', text, currentPosition);

const applyH6 = (text, currentPosition) => applyHeader('######', text, currentPosition);

export default {
  applyH1,
  applyH2,
  applyH3,
  applyH4,
  applyH5,
  applyH6,
};
