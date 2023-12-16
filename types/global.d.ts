declare global {
  type ViteCompression =
    | "none"
    | "gzip"
    | "brotli"
    | "both"
    | "gzip-clear"
    | "brotli-clear"
    | "both-clear";

  interface ViteEnv {
    VITE_PUBLIC_PATH: string;
    VITE_PORT: number;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
    [key: string]: number | string | boolean;
  }
}

export {}
