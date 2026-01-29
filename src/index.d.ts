declare module "#app" {
  interface NuxtApp {
    $audioUtils: { [key: string]: Function };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $audioUtils: { [key: string]: Function };
  }
}

export {};
