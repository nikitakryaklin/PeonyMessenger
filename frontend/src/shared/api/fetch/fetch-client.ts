import { FetchError } from "./fetch-error";
import { RequestOptions, TypeSearchParams } from "./fetch-types";

export class FetchClient {
  private baseURL: string;
  public headers?: Record<string, string>;
  public params?: TypeSearchParams;
  public options?: RequestOptions;

  public constructor(init: {
    baseURL: string;
    headers?: Record<string, string>;
    params?: TypeSearchParams;
    options?: RequestOptions;
  }) {
    this.baseURL = init.baseURL;
    this.headers = init.headers;
    this.params = init.params;
    this.options = init.options;
  }

  private createSerchParams(params: TypeSearchParams) {
    const setchParams = new URLSearchParams();

    for (const key in { ...this.params, ...params }) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const value = params;

        if (Array.isArray(value)) {
          value.forEach((carrentValue) => {
            if (carrentValue) {
              setchParams.append(key, value.toString());
            }
          });
        } else if (value) {
          setchParams.set(key, value.toString());
        }
      }
    }
    return `?${setchParams.toString()}`;
  }
  private async request<T>(
    endpoint: string,
    method: RequestInit["method"],
    options: RequestOptions = {}
  ) {
    let url = `${this.baseURL}/${endpoint}`;

    if (options.params) {
      url += this.createSerchParams(options.params);
    }

    const config: RequestInit = {
      ...options,
      method,
      ...(!!this.options && { ...this.options }),
      headers: {
        ...(!!options?.headers && options.headers),
        ...this.headers,
      },
    };

    const response: Response = await fetch(url, config);

    if (!response.ok) {
      const error = (await response.json()) as { error: string } | undefined;
      throw new FetchError(
        response.status,
        error?.error || response.statusText
      );
    }

    if (response.headers.get("Content-Type")?.includes("application/json")) {
      return (await response.json()) as unknown as T;
    } else {
      return (await response.text()) as unknown as T;
    }
  }

  public get<T>(endpoint: string, options: Omit<RequestOptions, "body"> = {}) {
    return this.request<T>(endpoint, "GET", options);
  }
  // Record<string, string>

  public post<T, K>(endpoint: string, body?: K, options: RequestOptions = {}) {
    const isFormData = body instanceof FormData;

    return this.request<T>(endpoint, "POST", {
      ...options,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }), // убрать Content-Type если FormData
        ...(options?.headers || {}),
      },
      ...(!!body && (isFormData ? { body } : { body: JSON.stringify(body) })),
    });
  }

  public put<T>(
    endpoint: string,
    body?: Record<string, any>,
    options: RequestOptions = {}
  ) {
    return this.request<T>(endpoint, "PUT", {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      ...(!!body && { body: JSON.stringify(body) }),
    });
  }

  public delete<T>(
    endpoint: string,
    options: Omit<RequestOptions, "body"> = {}
  ) {
    return this.request<T>(endpoint, "DELETE", options);
  }

  public patch<T>(
    endpoint: string,
    body?: Record<string, string>,
    options: RequestOptions = {}
  ) {
    return this.request<T>(endpoint, "PATCH", {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      ...(!!body && { body: JSON.stringify(body) }),
    });
  }
}
