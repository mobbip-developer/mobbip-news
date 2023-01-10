import { ErrorPage } from '~/components/ErrorPage';
import { ErrorEnum } from '~/constants/error.constants';

export default function Error500() {
  return <ErrorPage code={ErrorEnum.InternalServerError} />;
}
