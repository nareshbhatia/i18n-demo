'use client';

import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import * as React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

export default function DeliveryPage() {
  const intl = useIntl();

  return (
    <>
      <form>
        <div className="relative">
          <Icons.search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
          <Input
            className="pl-8"
            placeholder={intl.formatMessage({
              id: 'what-would-you-like-to-eat',
              defaultMessage: 'What would you like to eat?',
            })}
          />
        </div>
      </form>
      <nav className="mt-8 flex items-center gap-6">
        <Link
          className="font-semibold text-foreground/60 transition-colors hover:text-foreground"
          href="/"
        >
          <FormattedMessage defaultMessage="Rides" id="rides" />
        </Link>
      </nav>
    </>
  );
}
