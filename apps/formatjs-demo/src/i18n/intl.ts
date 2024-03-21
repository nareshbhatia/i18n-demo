'server-only';

import { createIntl } from '@formatjs/intl';
import type { MessageFormatElement } from 'react-intl';

const getMessages = async (
  locale: string
): Promise<Record<string, MessageFormatElement[]> | Record<string, string>> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  (await import(`@/messages/${locale}/default.json`)).default;

export async function getIntl(locale: string) {
  return createIntl({
    locale,
    messages: await getMessages(locale),
  });
}
