import { IApiRequest } from './api/request';
import { IApiRequestNlu } from './api/nlu';
import { IApiResponseBody } from './api/response';
import { ISession } from './session/session'
export interface IContext {
    readonly data: IApiRequest;
    readonly message: string;
    readonly originalUtterance: string;
    readonly sessionId: string;
    readonly session: ISession;
    readonly messageId: number;
    readonly userId: string;
    readonly payload?: object;
    readonly nlu?: IApiRequestNlu;
    response?: IApiResponseBody;
}
