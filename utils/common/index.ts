import { val } from 'dom7';

function convertingToDay(day: number) {
  switch (day) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function withComma(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { convertingToDay, withComma };
