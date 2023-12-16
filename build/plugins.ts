import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const unplugins = (): PluginOption[] => [
  AutoImport({
    dts: "types/auto-imports.d.ts",
    resolvers: [ElementPlusResolver()]
  }),
  Components({
    dts: "types/components.d.ts",
    resolvers: [ElementPlusResolver()]
  })
];

export function setupPlugins(): PluginOption[] {
  return [vue(), ...unplugins()];
}
