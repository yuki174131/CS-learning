function twosComplement(bits: string): string {
  const complement = onesComplement(bits);
  const result = flipBits(complement);
  return setHighestBit(result);
}

function onesComplement(bits: string): string {
  let complement = '';
  for (let i = 0; i < bits.length; i++) {
      complement += bits[i] === '0' ? '1' : '0';
  }
  return complement;
}

function flipBits(bits: string): string {
  const flipped: string[] = [];
    for (let i = 0; i < bits.length; i++) {
      flipped.push(bits[i] === '0' ? '1' : '0');
  }
  return flipped.join('');
}

function setHighestBit(bits: string): string {
  return '1' + bits.substring(1);
}


// twosComplement("00000000") 100000000
// twosComplement("00000010") 11111110
// twosComplement("11111111") 00000001