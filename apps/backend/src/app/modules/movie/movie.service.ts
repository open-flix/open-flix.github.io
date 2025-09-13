import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { DetailedMovie, MovieResponse } from '@open-flix/shared';
import { AxiosResponse } from 'axios';
import { handleApiError } from './movie.helpers';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  findByQuery(query: string, page: number) {
    return this.httpService
      .get<MovieResponse, AxiosResponse<MovieResponse>>(`/search/movie`, {
        params: { page, query },
      })
      .pipe(
        map((response) => response.data),
        handleApiError()
      );
  }

  findPopular(page: number) {
    return this.httpService
      .get<MovieResponse, AxiosResponse<MovieResponse>>(`/movie/popular`, {
        params: { page },
      })
      .pipe(
        map((response) => response.data),
        handleApiError()
      );
  }

  findOne(id: string) {
    return this.httpService
      .get<DetailedMovie, AxiosResponse<DetailedMovie>>(`/movie/${id}`)
      .pipe(
        map((response) => response.data),
        handleApiError()
      );
  }
}
