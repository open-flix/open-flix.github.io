import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { PositiveIntPipe } from './movie-validation.pipe';

@Controller('/movie')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @Get()
  find(
    @Query('query') query: string,
    @Query('page', ParseIntPipe, PositiveIntPipe) page: number
  ) {
    // this is tricky, tmdb api cannot handle empty query param, so we choose another endpoint. popular movies are attractive
    if (query) {
      return this.service.findByQuery(query, page);
    } else {
      return this.service.findPopular(page);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
