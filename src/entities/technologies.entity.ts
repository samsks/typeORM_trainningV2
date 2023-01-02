import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TechnologyToProject } from "../entities";

@Entity("technologies")
class Technology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @OneToMany(
    () => TechnologyToProject,
    (technologyToProject) => technologyToProject.technology
  )
  technologiesToProjects: TechnologyToProject[];
}

export default Technology;
