import { Project } from './project';

export class ProjectListModel {
  projects: Project[];

  constructor(projects: Project[]) {
    this.projects = projects;
  }

  get(): Project[] {
    return this.projects;
  }
}
