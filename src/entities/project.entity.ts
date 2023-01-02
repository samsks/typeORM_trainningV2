import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { User, TechnologyToProject } from "../entities";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 360 })
  description: string;

  @Column({ type: "float" })
  estimated_time: number;

  @Column({ type: "date" })
  start_date: string;

  // type: 'date' -> 2020-01-01
  // type: 'time' -> 12:00:00
  // type: 'timestamp' -> 2020-01-01 12:00:00
  @Column({ type: "date", nullable: true })
  end_date?: string;

  @Column({ length: 120 })
  repository: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  @OneToMany(
    () => TechnologyToProject,
    (technologyToProject) => technologyToProject.project
  )
  technologiesToProjects: TechnologyToProject[];
}

export default Project;
