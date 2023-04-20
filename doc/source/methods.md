# Methods

The following points are a little description of the methods, with
their inner implementation.

## Params
In all the methods we are going to have 2 parameters that are going to be available.
The first one is the `url` we are going to make the petition, and the second one is the `config`
of the request, additionally there are some methods that have the `data` isolated from the `config.params`.

## Operations
The first four operations described here are the CRUD methods.

#### get method 

```typescript
    $get<R = any, D = any>(
        url: string,
        config?: AxiosRequestConfig<D>
    ): Promise<R>;
```
The way to call this method from the components is:
```javascript
    async asyncData({ $axios }) {
        const config = useRuntimeConfig();
        const url = [config.apiUrl, '/ModelW/.github/main/profile/README.md'].join("")
        const data = await $axios.$get(url)
        return data
    };
```

#### post method

```typescript
    $post<R = any, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<R>;
```
The way to call this method from the components is:
```javascript
    async asyncData({ $axios }) {
        const config = useRuntimeConfig()
        const url = config.apiUrl
        const data = {product: "potatoes", id: 17}
        const response = await $axios.$post(url, data)
        return response
    };
```

#### put method 

```typescript
    $put<R = any, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<R>;
```
The way to call this method from the components is:
```javascript
    async asyncData({ $axios }) {
        const config = useRuntimeConfig()
        const url = config.apiUrl
        const data = {product: "potatoes", id: 17}
        const response = await $axios.$put(url, data)
        return response
    };
```

#### patch method 

```typescript
    $patch<R = any, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<R>;
```
The way to call this method from the components is:
```javascript
    async asyncData({ $axios }) {
        const config = useRuntimeConfig()
        const url = config.apiUrl
        const data = {product: "potatoes", id: 17}
        const response = await $axios.$patch(url, data)
        return response
    };
```

#### delete method 

```typescript
    $delete<R = any, D = any>(
        url: string,
        config?: AxiosRequestConfig<D>
    ): Promise<R>;
```
The way to call this method from the components is:
```javascript
    async asyncData({ $axios }) {
        const config = useRuntimeConfig()
        const url = config.apiUrl
        const configParams = {
            params: {
                product: "potatoes", 
                id:17
            }
        }
        const response = await $axios.$patch(url, configParams)
        return response
    };
```

