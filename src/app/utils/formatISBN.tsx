const formatISBN = (input: string): string => {
  if (input.length !== 13) {
    throw new Error(
      'Input string does not have the expected length of 13 characters.'
    );
  }

  const part1 = input.slice(0, 3);
  const part2 = input.slice(3, 4);
  const part3 = input.slice(4, 8);
  const part4 = input.slice(8, 12);
  const part5 = input.slice(12);

  return `${part1}-${part2}-${part3}-${part4}-${part5}`;
};

export default formatISBN;
