import { AppErrors } from './app-errors.model';

export interface AppResponse
{
		codigo : string;
    data? : any;
    responseError? : AppErrors,
    mensaje? : string,
    invalidSession? : boolean
}
