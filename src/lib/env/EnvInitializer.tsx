'use client';

import { useEffect } from 'react';
import { useEnvStore } from './useEnvStore';

export function EnvInitializer() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (baseUrl) {
      useEnvStore.setState({ baseUrl });
    }
  }, []);

  return null;
}
