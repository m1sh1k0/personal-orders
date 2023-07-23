import { ApiHideProperty } from '@nestjs/swagger';
import { IsDateString, IsMongoId } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  facility: 'string';

  @IsDateString()
  date: Date;

  @ApiHideProperty()
  paid: boolean = false;
}
