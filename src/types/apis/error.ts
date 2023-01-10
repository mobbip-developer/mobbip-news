import { ErrorEnum } from '~/constants/error.constants';

export type ApiError = {
  error: ErrorEnum[number];
};
