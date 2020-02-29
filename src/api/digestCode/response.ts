export enum EClientErrors {
    INVALID_QUERY_STRING = 4000,
    INVALID_PARAMETER,
    INVALID_FIELD_INPUT,
    NO_PERMISSION,
    NO_SUCH_RESOURCE,
    NO_MATCHING_RESULT,
    NO_MATCHING_ROUTE,
    MEMBERSHIP_NOT_MATCHED,
    REQUEST_SESSION_EXPIRED,
    INVALID_REQUEST_SESSION_KEY,
    DUPLICATE_IDENTIFIER,
    INCORRECT_USER_DATA,
    SERVICE_VERSION_NOT_SUPPORTED,
    AUTHENTICATION_TOKEN_EXPIRED,
    ACCESS_TOKEN_EXPIRED,
    REFRESH_TOKEN_EXPIRED,
    INVALID_AUTHENTICATION_TOKEN,
    INVALID_ACCESS_TOKEN,
    INVALID_REFRESH_TOKEN,
    AUTHENTICATION_REQUIRED,
    USER_NOT_FOUND,
    CLIENT_NOT_FOUND,
    USER_ALREADY_AUTHENTICATED,
}

export enum EServerErrors {
    GENERAL_OPERATION_FAILURE = 5000,
    DATABASE_OPERATION_FAILURE,
    TEMPORARY_OUT_OF_SERVICE,
}

export interface IDigestCodeValidationError {
    field: string;
    message: string;
}

export interface IDigestCodeResponseData {
    [property]: any;
}

export default class DigestCodeResponse<T> {
    private code: number;

    private message: string;

    private data: object;

    private validationErrors: IDigestCodeValidationError[] = [];

    constructor(code: number, message: string, data?: object) {
        this.code = code;
        this.message = message;
        this.data = data || null;

        if (
            this.isClientError() &&
            this.code === EClientErrors.INVALID_FIELD_INPUT &&
            this.data
        ) {
            const { errors } = this.data as {
                errors: IDigestCodeValidationError[];
            };
            this.validationErrors.push(...errors);
        }
    }

    get Code(): number {
        return this.code;
    }

    get Message(): string {
        return this.message;
    }

    get Data(): 

    isClientError(): boolean {
        return this.code >= 4000 && this.code < 5000;
    }

    isServerError(): boolean {
        return this.code >= 5000 && this.code < 6000;
    }

    isError(): boolean {
        return this.isClientError() || this.isServerError();
    }
}
