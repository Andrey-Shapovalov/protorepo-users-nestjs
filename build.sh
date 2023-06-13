#!/bin/bash
protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=src \
 --ts_proto_opt=outputServices=grpc \
 --ts_proto_opt=esModuleInterop=true \
 --ts_proto_opt=nestJs=true \
 --ts_proto_opt=fileSuffix=.pb \
 --ts_proto_opt=snakeToCamel=false \
 -I=proto/ proto/users.proto