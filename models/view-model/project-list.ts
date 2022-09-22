import { ProjectListModel } from '../model/project-list';
import { Project } from '../model/project';

export class ProjectListViewModel {
  private readonly projectListModel: ProjectListModel;
  constructor(projectListModel: ProjectListModel) {
    this.projectListModel = projectListModel;
  }

  get(): Project[] {
    return this.projectListModel.get();
  }
}
