export interface IProjectReq {
  name: string;
  description: string;
  estimated_time: number;
  start_date: string;
  repository: string;
}

export interface ITechnology {
  name: string;
  added_in: string;
}

export interface ITechnologyToProject {
  technologies: Array<ITechnology>;
}
