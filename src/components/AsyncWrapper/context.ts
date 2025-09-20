import { createContext } from 'react';

import type { AsyncContext } from './types';

export const AsyncCtx = createContext<AsyncContext | null>(null);
