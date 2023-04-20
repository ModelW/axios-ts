import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";

interface SuperAxiosStatic extends AxiosStatic {
  /**
   * @param url
   * @param config
   *
   * Interface from AxiosStatic, that extends it, to add the CRUD operations.
   * Also add some operations need to work with the preview of wagtail
   */
  $delete<R = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $get<R = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $head<R = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $options<R = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $patch<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $patchForm<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $post<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $postForm<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $put<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;

  $putForm<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

const axiosMethodNames = [
  "delete",
  "get",
  "head",
  "options",
  "patch",
  "patchForm",
  "post",
  "postForm",
  "put",
  "putForm",
];

type AxiosMethod<R, D> = (
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

function isAxiosMethod<R, D>(
  prop: any,
  name: string
): prop is AxiosMethod<R, D> {
  return typeof prop === "function" && axiosMethodNames.includes(name);
}

function superAxiosInstance(config: any) {
  const normalAxios = axios.create({
    baseURL: config.apiUrl ?? config.public.baseUrl,
    withCredentials: true,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "x-csrf-token",
  });

  const superAxios = new Proxy(normalAxios, {
    get(target: AxiosStatic, prop: string | symbol, receiver: any): any {
      if (typeof prop !== "string" || !prop.startsWith("$")) {
        return Reflect.get(target, prop, receiver);
      }

      const methodName = prop.substring(1);
      const axiosMethod = target[methodName as keyof typeof target];

      if (!isAxiosMethod(axiosMethod, methodName)) {
        return Reflect.get(target, prop, receiver);
      }

      return async function (this: AxiosStatic, ...args: any[]) {
        const axiosResponse = (await axiosMethod.apply(
          this,
          args as any
        )) as AxiosResponse;

        if (axiosResponse.status >= 400) {
          throw new Error(axiosResponse.statusText);
        }

        return axiosResponse.data;
      }.bind(target);
    },
  });
  return superAxios as SuperAxiosStatic;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const superAxios = superAxiosInstance(config);
  return {
    provide: {
      axios: superAxios,
    },
  };
});
