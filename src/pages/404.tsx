import { ErrorPage } from '~/components/ErrorPage';
import { ErrorEnum } from '~/constants/error.constants';

export default function Error404() {
  return <ErrorPage code={ErrorEnum.NotFound} />;
}
