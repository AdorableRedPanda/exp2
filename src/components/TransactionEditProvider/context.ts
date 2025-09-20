import { createContext } from 'react';

import type { TransactionEditContext } from './types';

export const TxnEditCtx = createContext<null | TransactionEditContext>(null);
