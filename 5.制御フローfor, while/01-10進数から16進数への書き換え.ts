function decimalToHexadecimal(decNumber: number): string {
  const hexadecimalAlphabet = "ABCDEF"
  let hexadecimal = ""

  while (decNumber > 0) {
    const surplus = decNumber % 16
    if (surplus >= 10) {
      const alphabetIndex = surplus - 10
      hexadecimal = hexadecimalAlphabet[alphabetIndex] + hexadecimal
    } else {
      hexadecimal = surplus.toString() + hexadecimal
    }

    decNumber = Math.floor(decNumber / 16)
  }

  return hexadecimal
}