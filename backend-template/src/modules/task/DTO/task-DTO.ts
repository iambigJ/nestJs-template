import { IsNotEmpty, IsOptional } from 'class-validator';

export class taskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()

    description: string;

    @IsNotEmpty()
    user?: number;
}
