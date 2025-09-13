import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class PositiveIntPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (value < 1) {
      throw new BadRequestException('Page must be a positive integer');
    }
    return value;
  }
}
