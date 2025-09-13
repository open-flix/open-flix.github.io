import { BadGatewayException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, throwError } from 'rxjs';

// can be moved to an interceptor
// this is an example of a code that is working yet misleading
// FIXME: improve this to cover different error cases
export function handleApiError() {
  return catchError((error: AxiosError<{ status_message?: string }>) => {
    const apiMessage = error.response?.data?.status_message;
    return throwError(
      () => new BadGatewayException(apiMessage || error.message)
    );
  });
}
