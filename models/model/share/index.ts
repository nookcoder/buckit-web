import { IShare } from '../../../interface/share ';
import { ProjectStatus } from '../../../constants';

export class Shares {
  shares: IShare[];
  constructor(shares: IShare[]) {
    this.shares = shares;
  }

  get() {
    return this.shares;
  }
}

export class Share {
  share: IShare;
  constructor(share: IShare) {
    this.share = share;
  }

  get() {
    return this.share;
  }

  getProject() {
    return this.share.project;
  }

  getPurchaseDay() {
    const createdTime = new Date(this.share.createdAt);
    const year = createdTime.getFullYear();
    const month =
      createdTime.getMonth() < 10
        ? `0${createdTime.getMonth()}`
        : createdTime.getMonth();
    const date =
      createdTime.getDate() < 10
        ? `0${createdTime.getDate()}`
        : createdTime.getDate();
    const hour =
      createdTime.getHours() < 10
        ? `0${createdTime.getHours()}`
        : createdTime.getHours();
    const min =
      createdTime.getMinutes() < 10
        ? `0${createdTime.getMinutes()}`
        : createdTime.getMinutes();
    return `${year}-${month}-${date} ${hour}:${min}`;
  }

  getStatus() {
    switch (this.share.project.status) {
      case ProjectStatus.FUNDING_PROGRESS:
        return '펀딩 진행중';
      case ProjectStatus.FundingEnd:
        return '오픈 준비중';
      case ProjectStatus.Opening:
        return '영업중';
    }
  }
}
