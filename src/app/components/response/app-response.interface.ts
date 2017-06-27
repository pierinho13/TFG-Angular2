import { AppErrors } from './app-errors.interface';

export interface AppResponse
{
		codigo : string;
    data? : any;
    responseError? : AppErrors,
    mensaje? : string,
    invalidSession? : boolean
}
