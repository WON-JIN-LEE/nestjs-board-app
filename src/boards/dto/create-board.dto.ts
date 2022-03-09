import { IsEmail, IsNotEmpty } from 'class-validator';

export class createBoardDto {
    @IsEmail()
    userId: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    imgUrl: string;

    @IsNotEmpty()
    contents: string;

    @IsNotEmpty()
    stech: string[];

    @IsNotEmpty()
    period: Date;
}
