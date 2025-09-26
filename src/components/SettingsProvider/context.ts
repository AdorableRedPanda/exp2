import { createContext } from 'react';

import type { ActionHandler } from '@/types';

export const SettingsCtx = createContext<ActionHandler | null>(null);
