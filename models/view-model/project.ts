import { Project, ProjectModel } from '../model/project';

class ProjectViewModel {
  projectModel: ProjectModel;
  constructor(projectModel: ProjectModel) {
    this.projectModel = projectModel;
  }

  get(): Project {
    return this.projectModel.get();
  }

  getTile(): string {
    return this.projectModel.project.title;
  }

  getAchievementRate() {
    return this.projectModel.getAchievementRate();
  }
}

export default ProjectViewModel;
