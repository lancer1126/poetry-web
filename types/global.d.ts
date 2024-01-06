declare global {
  type ViteCompression =
    | "none"
    | "gzip"
    | "brotli"
    | "both"
    | "gzip-clear"
    | "brotli-clear"
    | "both-clear";

  type PoemCharType = "zh-simplified" | "zh-traditional";

  interface ViteEnv {
    VITE_PUBLIC_PATH: string;
    VITE_PORT: number;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
    [key: string]: number | string | boolean;
  }

  interface CharContent {
    body: string;
    charType: PoemCharType;
  }

  interface Poetry {
    eraName: string;
    authorName: string;
    poemName: string;
    anthology: string;
    originCharType: PoemCharType;
    contentWithChar: Array<CharContent>;
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
    records: Array<Poetry>
  }
}

export {}
