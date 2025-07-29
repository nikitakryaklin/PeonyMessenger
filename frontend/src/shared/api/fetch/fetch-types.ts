export type TypeSearchParams = {
  [kay: string]:
    | string
    | number
    | boolean
    | undefined
    | Array<string | number | boolean | undefined>;
};

export interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
  params?: TypeSearchParams;
}

export type TypeFetchRequestCinfig<Params = undefined> =
  Params extends undefined
    ? { config?: RequestOptions }
    : { params: Params; config?: RequestOptions };
