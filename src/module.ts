import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'

export type * from './runtime/types'

// Module options TypeScript interface definition
export interface AudioUtilsOptions extends ModuleOptions {
  enabled?: boolean;
  defaultRenderHeight: number;
  defaultRenderWidth: number;
}

export default defineNuxtModule<AudioUtilsOptions>({
  meta: {
    name: '@sounds-designed/nuxt-audio-utils',
    configKey: 'audioUtils',
  },
  defaults: {
    enabled: true,
    defaultRenderHeight: 300,
    defaultRenderWidth: 400,
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addImportsDir(resolve('./runtime/composables'))
  },
})
