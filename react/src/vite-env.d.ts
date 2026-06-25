/// <reference types="vite/client" />

import type { HTMLAttributes, DetailedHTMLProps } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** Original site markup uses this typo intentionally */
      secton: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};