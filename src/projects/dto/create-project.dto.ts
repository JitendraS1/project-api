import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNumber()
  id: number;

  @IsString()
  type: string;

  @IsString()
  title: string;

  @IsString()
  location: string;

  @IsString()
  area: string;

  @IsString()
  image: string;

  @IsString()
  description: string;
}