import { createContext } from 'react';

import type { WrapperContext } from './types';

export const WrapperCtx = createContext<null | WrapperContext>(null);
