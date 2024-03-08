import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from '@/i18n';
import { languages, fallbackLng } from '@/i18n/settings';
import * as React from 'react';

// This will generally come from an auth provider
const username = 'Naresh';

export interface HomePageProps {
  params: { lng: string };
}

export default async function HomePage({ params: { lng } }: HomePageProps) {
  if (!languages.includes(lng)) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-10 px-4">
      <AppHeader title={t('app-name')} />

      <Card>
        <CardHeader>
          <CardTitle>{t('where-to', { username })}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="pickup-location">{t('pickup-spot')}</Label>
                <Input id="pickup-location" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="dropoff-location">
                  {t('your-destination')}
                </Label>
                <Input id="dropoff-location" />
              </div>

              <Button aria-label="Request Ride" type="submit">
                {t('request-ride')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
