import type { NextApiRequest, NextApiResponse } from 'next';

import { strapiApi } from '~/services/cms-api/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug, ...queryWithoutSlug } = req.query;

  const { data } = await strapiApi({ proxy: false }).get(`/${slug}`, {
    params: { ...queryWithoutSlug },
  });

  return res.status(200).json(data);
}
