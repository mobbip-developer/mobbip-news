import { AES } from 'crypto-js';

import {
  PROXY_DATE_SECRET,
  PROXY_AUTH_TEXT,
  PROXY_SECRET,
} from '~/constants/proxy.constants';

export const generateToken = (): string => {
  const encryptedAuthText = AES.encrypt(PROXY_AUTH_TEXT, PROXY_SECRET);
  const encryptedDate = AES.encrypt(
    new Date().toISOString(),
    PROXY_DATE_SECRET,
  );

  return `${encryptedAuthText}::${encryptedDate}`;
};
