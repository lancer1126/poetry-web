import { resolve } from "path";

/** 处理环境变量 */
const wrapperEnv = (envConf: Recordable): ViteEnv => {
  /** 此处为默认值 */
  const ret: ViteEnv = {
    VITE_PORT: 8801,
    VITE_PUBLIC_PATH: "",
    VITE_ROUTER_HISTORY: "",
    VITE_CDN: false,
    VITE_HIDE_HOME: "false",
    VITE_COMPRESSION: "none"
  };

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
};

/** 当前执行node命令时文件夹的地址（工作目录） */
const rootPath = (): string => process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

export { wrapperEnv, rootPath, pathResolve };
export * from "./plugins";
