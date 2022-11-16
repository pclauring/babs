// import { getApiToken } from "../utils/getAuthToken";
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

type HttpMethod = `get` | `post` | `put` | `patch` | `delete`;

interface BaseRequestInit {
  headers?: AxiosRequestHeaders;
}

interface GetRequestInit extends BaseRequestInit {
  params?: any;
}

interface DeleteRequestInit extends BaseRequestInit {}

interface PostRequestInit extends BaseRequestInit {
  data?: any | null;
}

interface PutRequestInit extends BaseRequestInit {
  data?: any | null;
}

interface PatchRequestInit extends BaseRequestInit {
  data?: any | null;
}

interface FetchRequestInit extends BaseRequestInit {
  method: HttpMethod;
  data?: any | null;
}

export default class AxiosClient {
  private readonly _baseUrl: string;
  // private readonly _getToken: (() => Promise<string>) | undefined;

  constructor(
    baseUrlSegments: (string | undefined)[],
    tokenAudience?: string | undefined,
  ) {
    let baseUrl = "";

    baseUrlSegments.forEach((segment) => {
      if (segment) baseUrl += segment;
    });

    this._baseUrl = baseUrl;

    // this._getToken = tokenAudience
    //   ? () =>
    //       getApiToken({
    //         audience: tokenAudience,
    //       })
    //   : undefined;
  }

  public async fetchRaw(
    relativePath: string | undefined,
    init: FetchRequestInit,
  ): Promise<AxiosResponse> {
    // const getToken = this._getToken;
    // if (getToken) {
    //   const token = await getToken();
    //   let axiosHeaders: AxiosRequestHeaders = {};

    //   if (init.headers) {
    //     axiosHeaders = init.headers;
    //   }
    //   axiosHeaders[`Authorization`] = `Bearer ${token}`;
    //   init.headers = axiosHeaders;
    // }

    let path = this._baseUrl;

    if (relativePath) path += relativePath;
    let config: AxiosRequestConfig = {
      url: path,
      ...init,
    };
    return await axios(config);
  }

  public fetch<TResponseJson>(
    relativePath: string | undefined,
    init: FetchRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetchRaw(relativePath, init).then(
      (response) => response as AxiosResponse<TResponseJson>,
      onrejected,
    );
  }

  public get<TResponseJson>(
    relativePath?: string | undefined,
    init?: GetRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetch<TResponseJson>(
      relativePath,
      { ...init, method: `get` },
      onrejected,
    );
  }

  public delete<TResponseJson>(
    relativePath?: string | undefined,
    init?: DeleteRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetch<TResponseJson>(
      relativePath,
      { ...init, method: `delete` },
      onrejected,
    );
  }

  public post<TResponseJson>(
    relativePath?: string | undefined,
    init?: PostRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetch<TResponseJson>(
      relativePath,
      { ...init, method: `post` },
      onrejected,
    );
  }

  public patch<TResponseJson>(
    relativePath?: string | undefined,
    init?: PatchRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetch<TResponseJson>(
      relativePath,
      { ...init, method: `patch` },
      onrejected,
    );
  }

  public put<TResponseJson>(
    relativePath?: string | undefined,
    init?: PutRequestInit,
    onrejected?: (response: any) => never,
  ): Promise<AxiosResponse<TResponseJson>> {
    return this.fetch<TResponseJson>(
      relativePath,
      { ...init, method: `put` },
      onrejected,
    );
  }
}
