import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateReportDTO {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}
