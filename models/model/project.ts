import { Category } from '../../interface';
import { ProjectStatus } from '../../constants';

export type Project = {
  id: number;
  createdAt: string | Date;
  updateAt: string | Date;
  title: string;
  content: string[];
  address: string;
  thumbnailImage: string;
  fundingOpenDate: string | Date;
  deadline: string | Date;
  status: ProjectStatus;
  total: number;
  totalQuarter: number;
  soldQuarter: number;
  pricePerQuarter: number;
  category: Category;
  summary: string;
};

export class ProjectModel {
  project: Project;

  constructor(project: Project) {
    this.project = project;
  }

  get(): Project {
    return this.project;
  }

  getAchievementRate() {
    return (
      Math.round((this.project.soldQuarter / this.project.totalQuarter) * 100) +
      29
    );
  }
}
