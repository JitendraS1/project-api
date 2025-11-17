import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      type: 'residential',
      title: 'Dholera Bhoomi',
      location: 'Dholera SIR',
      area: 'Various sizes',
      image: 'dholeraBhoomi.jpg',
      description: 'Premium residential project offering a variety of plot sizes in a well-planned community.'
    }
  ];

  create(createProjectDto: CreateProjectDto): Project {
    const newProject = {
      id: createProjectDto.id,
      type: createProjectDto.type,
      title: createProjectDto.title,
      location: createProjectDto.location,
      area: createProjectDto.area,
      image: createProjectDto.image,
      description: createProjectDto.description
    };
    this.projects.push(newProject);
    return newProject;
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project {
    const project = this.projects.find(project => project.id === id);
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Project {
    const projectIndex = this.projects.findIndex(project => project.id === id);
    if (projectIndex === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    
    const updatedProject = {
      ...this.projects[projectIndex],
      ...updateProjectDto
    };
    
    this.projects[projectIndex] = updatedProject;
    return updatedProject;
  }

  remove(id: number): void {
    const projectIndex = this.projects.findIndex(project => project.id === id);
    if (projectIndex === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(projectIndex, 1);
  }
}