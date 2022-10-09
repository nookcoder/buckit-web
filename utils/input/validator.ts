const koRex = /[^가-힣|ㄱ-ㅎ]/g;

export const getOnlyNumber = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

export const isPhoneNumber = (value: string): RegExpMatchArray | null => {
  return value.match(/^01([0|1|6|7|8|9])-?(\d{3,4})-?(\d{4})$/);
};

export const isEmail = (value: string): RegExpMatchArray | null => {
  return value.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  );
};

export const getOnlyKorean = (value: string): string => {
  // console.log('after' + value.match(koRex));
  return value.replace(/[^가-힣|ㄱ-ㅎ]/g, '');
};
