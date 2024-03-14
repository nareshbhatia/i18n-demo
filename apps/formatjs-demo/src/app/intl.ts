'server-only';

import { createIntl } from '@formatjs/intl';

export async function getIntl(locale: string, namespace: string) {
  console.log('getIntl', locale);
  return createIntl({
    locale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`@/messages/${locale}/${namespace}.json`)).default,
  });
}
