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
  status: string;
  total: number;
  totalQuarter: number;
  soldQuarter: number;
  pricePerQuarter: number;
  category: any;
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
    return (this.project.soldQuarter / this.project.totalQuarter) * 100;
  }
}
