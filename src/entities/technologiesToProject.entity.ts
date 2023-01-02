import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Project, Technology } from "../entities";

@Entity("technologies_projects")
class TechnologyToProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  added_in: string;

  @ManyToOne(() => Project, (project) => project.technologiesToProjects)
  project: Project;

  @ManyToOne(
    () => Technology,
    (technology) => technology.technologiesToProjects
  )
  technology: Technology;
}

export default TechnologyToProject;
