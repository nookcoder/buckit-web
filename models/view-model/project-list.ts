import { ProjectListModel } from '../model/project-list';
import { Project } from '../model/project';
import { ProjectStatus } from '../../constants';

export class ProjectListViewModel {
  private readonly projectListModel: ProjectListModel;
  constructor(projectListModel: ProjectListModel) {
    this.projectListModel = projectListModel;
  }

  get(): Project[] {
    return this.projectListModel.get();
  }

  getCount(): number {
    return this.projectListModel.projects.length;
  }

  getDeadline(project: Project) {
    if (project.status === ProjectStatus.Before) {
      return '오픈예정';
    }
    const now = new Date().getTime();
    const deadline = Date.parse(project.deadline.toString());
    const differenceMs = Math.abs(deadline - now);
    return `${Math.ceil(differenceMs / (1000 * 3600 * 24))}일 남음`;
  }

  getAchievementRate(project: Project) {
    if (project.status === ProjectStatus.Before) {
      return 100;
    }
    return (project.soldQuarter / project.totalQuarter) * 100 + 29;
  }

  getAchievement(project: Project) {
    const money = project.total / 100000000;
    switch (project.status) {
      case ProjectStatus.Before:
        return `미진행`;
      case ProjectStatus.FUNDING_PROGRESS:
        return `${Math.round(this.getAchievementRate(project))}% / ${money}억`;
      case ProjectStatus.FundingEnd:
        return `마감 / ${money}억`;
    }
  }
}
