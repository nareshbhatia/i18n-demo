import { getIntl } from './intl';
import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as React from 'react';

// This will generally come from an auth provider
const username = 'Naresh';

export interface HomePageProps {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const intl = await getIntl(locale, 'default');

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-10 px-4">
      <AppHeader title={intl.formatMessage({ id: 'app-name' })} />

      <Card>
        <CardHeader>
          <CardTitle>Where to, {username}?</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pickup-location">Pickup spot</Label>
                <Input id="pickup-location" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="dropoff-location">Your destination</Label>
                <Input id="dropoff-location" />
              </div>

              <Button aria-label="Request Ride" type="submit">
                REQUEST RIDE
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
