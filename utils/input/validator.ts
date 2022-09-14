export const getOnlyNumber = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

export const isPhoneNumber = (value: string): RegExpMatchArray | null => {
  return value.match(/^(011|010)[0-9]{3,4}[0-9]{4}/);
};
