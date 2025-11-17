import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return {
      message: 'Welcome to the Projects API',
      endpoints: {
        getAllProjects: 'GET /projects',
        getProjectById: 'GET /projects/:id',
        createProject: 'POST /projects',
        updateProject: 'PUT /projects/:id',
        deleteProject: 'DELETE /projects/:id'
      },
      timestamp: new Date().toISOString()
    };
  }
}