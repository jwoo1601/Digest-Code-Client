import axios, { AxiosRequestConfig, Method } from 'axios';

export interface IDigestCodeValidationErrorResponse
    extends IDigestCodeResponse {
    errors: IDigestCodeValidationError[];
}

export interface IDigestCodeCredentials {
    authenticationToken: string;
    authorizationToken: string;
    clientAccessToken: string;
}

export default class DigestCodeAPI {
    private static credentials: IDigestCodeCredentials = {
        authenticationToken: null,
        authorizationToken: null,
        clientAccessToken: null,
    };

    static get Credentials(): IDigestCodeCredentials {
        return this.credentials;
    }

    static setAuthenticationToken(token: string): void {
        this.credentials.authenticationToken = token || null;
    }

    static setAuthorizationToken(token: string): void {
        this.credentials.authorizationToken = token || null;
    }

    static setClientAccessToken(token: string): void {
        this.credentials.clientAccessToken = token || null;
    }

    static encodeAuthenticationCredentials(
        config: AxiosRequestConfig,
    ): AxiosRequestConfig {
        return {
            ...config,
            headers: {
                'X-Digest-Code-Authentication': `v1.0 ${this.credentials.authenticationToken}`,
            },
        };
    }

    static encodeAuthorizationCredentials(
        config: AxiosRequestConfig,
    ): AxiosRequestConfig {
        return {
            ...config,
            headers: {
                Authorization: `Bearer ${this.credentials.authorizationToken}`,
            },
        };
    }

    static encodeFirstPartyCredentials(
        config: AxiosRequestConfig,
    ): AxiosRequestConfig {
        return {
            ...config,
            headers: {
                'X-Digest-Code-Access': `--fp ${this.credentials.clientAccessToken}`,
            },
        };
    }

    static encodeUserCredentials(
        config: AxiosRequestConfig,
    ): AxiosRequestConfig {
        return this.encodeAuthorizationCredentials(
            this.encodeAuthenticationCredentials(config),
        );
    }

    static async request<Response extends IDigestCodeResponse>(
        method: Method,
        url: string,
        body: object = {},
        config?: AxiosRequestConfig,
    ): Promise<Response> {
        try {
            const response = await axios.request({
                url,
                method,
                baseURL: 'https://api.digest-code.azurewebsites.net/v1',
                data: {
                    ...body,
                },
                ...config,
            });

            const { code, message } = response.data;
            return {
                code,
                message,
                ...response.data,
            };
        } catch (err) {
            return null;
        }
    }

    static async requestWithUserCredentials<
        Response extends IDigestCodeResponse
    >(
        method: Method,
        url: string,
        body: object = {},
        config?: AxiosRequestConfig,
    ): Promise<Response> {
        return this.request<Response>(
            method,
            url,
            body,
            this.encodeUserCredentials(config),
        );
    }
}
