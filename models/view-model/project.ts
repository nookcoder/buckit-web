import { Project, ProjectModel } from '../model/project';
import { convertingToDay } from '../../utils';
import { ProjectStatus } from '../../constants';
import beforeThumbnail from '../../public/assets/before.png';

class ProjectViewModel {
  projectModel: ProjectModel;
  private readonly project: Project;

  constructor(projectModel: ProjectModel) {
    this.projectModel = projectModel;
    this.project = projectModel.get();
  }

  get(): Project {
    return this.projectModel.get();
  }

  getAppTitle() {
    if (this.project.title.length > 10) {
      return `${this.project.title.substring(0, 10)}...`;
    }

    return this.project.title;
  }

  getSummary() {
    if (this.project.status === ProjectStatus.Before) {
      return (
        '2030 취향 제대로 저격해버렸다\n' +
        '핵꿀잼 이벤트와 고퀄리티 안주와 주류가 시그니처인\n' +
        '신개념 테마 주점입니다.\n'
      );
    }

    return this.project.summary;
  }

  getTile(): string {
    if (this.project.status === ProjectStatus.Before) {
      const deadline = new Date(this.project.deadline);
      const month =
        deadline.getMonth() + 1 < 10
          ? `0${deadline.getMonth() + 1}`
          : deadline.getMonth() + 1;
      return `${month}월 프로젝트 오픈 준비 중!`;
    }
    return this.projectModel.project.title;
  }

  getThumbnailImage() {
    if (this.project.status === ProjectStatus.Before) {
      return beforeThumbnail;
    }

    return this.project.thumbnailImage;
  }

  getLocation() {
    const locationsChar = this.project.address.split(' ');
    return `${locationsChar[0]} ${locationsChar[1]}`;
  }

  getAchievementRate() {
    if (this.project.status === ProjectStatus.FUNDING_PROGRESS) {
      return this.projectModel.getAchievementRate();
    }
    return 100;
  }

  getAvailableBlockForPurchase() {
    return this.project.totalQuarter - this.project.soldQuarter;
  }

  getPricePerBlock() {
    return this.project.pricePerQuarter
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getTotalBlock() {
    return this.project.totalQuarter
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getDeadline() {
    const deadline = new Date(this.project.deadline);
    const year = deadline.getFullYear();
    const month =
      deadline.getMonth() + 1 < 10
        ? `0${deadline.getMonth() + 1}`
        : deadline.getMonth() + 1;
    if (this.project.status === ProjectStatus.Before) {
      return `오픈 예정 일정 : ${month}월 중 오픈`;
    }
    const date = deadline.getDate();
    const day = convertingToDay(deadline.getDay());

    return `마감일 : ${year}-${month}-${date} (${day})`;
  }

  getRemainingDays() {
    if (this.project.status === ProjectStatus.Before) {
      return '';
    }
    const now = new Date().getTime();
    const deadline = Date.parse(this.project.deadline.toString());
    const differenceMs = Math.abs(deadline - now);
    return `${Math.ceil(differenceMs / (1000 * 3600 * 24))}일 남음`;
  }

  getProjectStatus() {
    switch (this.project.status) {
      case ProjectStatus.Before:
        return '공동구매 예정';
      case ProjectStatus.FUNDING_PROGRESS:
        return `${this.getAchievementRate()}% 달성`;
      case ProjectStatus.FundingEnd:
        return '오픈 준비중';
      case ProjectStatus.Opening:
        return '오픈';
    }
  }

  getPurchasePrice(qty: number) {
    const total = this.project.pricePerQuarter * qty;
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getContentUrl() {
    return this.project.content;
  }
}

export default ProjectViewModel;
