import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty.pb";
export declare const protobufPackage = "users";
/** users.proto */
export interface User {
    user_id: number;
    name: string;
    email: string;
}
export interface GetAllUsersRequest {
    limit: string;
    offset: string;
}
export interface GetAllUsersResponse {
    users: User[];
}
export interface CreateUserRequest {
    name: string;
    email: string;
}
export interface DeleteUserRequest {
    user_id: number;
}
export declare const USERS_PACKAGE_NAME = "users";
export interface UsersServiceClient {
    getAllUsers(request: GetAllUsersRequest): Observable<GetAllUsersResponse>;
    createUser(request: CreateUserRequest): Observable<Empty>;
    deleteUser(request: DeleteUserRequest): Observable<Empty>;
}
export interface UsersServiceController {
    getAllUsers(request: GetAllUsersRequest): Promise<GetAllUsersResponse> | Observable<GetAllUsersResponse> | GetAllUsersResponse;
    createUser(request: CreateUserRequest): void;
    deleteUser(request: DeleteUserRequest): void;
}
export declare function UsersServiceControllerMethods(): (constructor: Function) => void;
export declare const USERS_SERVICE_NAME = "UsersService";
