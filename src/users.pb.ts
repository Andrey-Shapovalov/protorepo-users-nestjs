/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty.pb";

export const protobufPackage = "users";

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

export const USERS_PACKAGE_NAME = "users";

export interface UsersServiceClient {
  getAllUsers(request: GetAllUsersRequest): Observable<GetAllUsersResponse>;

  createUser(request: CreateUserRequest): Observable<Empty>;

  deleteUser(request: DeleteUserRequest): Observable<Empty>;
}

export interface UsersServiceController {
  getAllUsers(
    request: GetAllUsersRequest,
  ): Promise<GetAllUsersResponse> | Observable<GetAllUsersResponse> | GetAllUsersResponse;

  createUser(request: CreateUserRequest): void;

  deleteUser(request: DeleteUserRequest): void;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAllUsers", "createUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
