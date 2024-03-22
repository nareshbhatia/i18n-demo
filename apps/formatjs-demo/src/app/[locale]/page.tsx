import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getIntl } from '@/i18n/intl';
import Link from 'next/link';
import * as React from 'react';

// This will generally come from an auth provider
const username = 'Naresh';

export interface HomePageProps {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const intl = await getIntl(locale);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {intl.formatMessage({ id: 'where-to' }, { username })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pickup-location">
                  {intl.formatMessage({ id: 'pickup-spot' })}
                </Label>
                <Input id="pickup-location" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="dropoff-location">
                  {intl.formatMessage({ id: 'your-destination' })}
                </Label>
                <Input id="dropoff-location" />
              </div>

              <Button aria-label="Request Ride" type="submit">
                {intl.formatMessage({ id: 'request-ride' })}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <nav className="mt-8 flex items-center gap-6">
        <Link
          className="font-semibold text-foreground/60 transition-colors hover:text-foreground"
          href="/delivery"
        >
          {intl.formatMessage({ id: 'delivery' })} &gt;
        </Link>
      </nav>
    </>
  );
}
