import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateListDto } from './create-list.dto';

export class UpdateListDto extends PartialType(CreateListDto) {
  @ApiProperty()
  name: string;
}
