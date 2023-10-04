// import { IsNotEmpty, IsInstance, IsOptional } from 'class-validator';

export class taskDto {
    // @IsNotEmpty()
    title: string;

    // @IsNotEmpty()
    description: string;

    // @IsOptional()
    // @IsInstance(User)
    user?: number;
}
