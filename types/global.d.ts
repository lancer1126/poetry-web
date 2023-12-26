declare global {
  type ViteCompression =
    | "none"
    | "gzip"
    | "brotli"
    | "both"
    | "gzip-clear"
    | "brotli-clear"
    | "both-clear";

  type PoemCharType = "zh-simple" | "zh-trad";

  interface ViteEnv {
    VITE_PUBLIC_PATH: string;
    VITE_PORT: number;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
    [key: string]: number | string | boolean;
  }

  interface Poetry {
    eraName: string;
    authorName: string;
    poemName: string;
    anthology: string;
    content: string;
    charType: PoemCharType;
  }

  interface SearchBody {
    word: string;
    index: string;
    size: string;
  }

  interface PageItem {
    total: number;
    offset: number;
    size: number;
    records: Array<PageItem>
  }
}

export {}
