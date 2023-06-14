#!/bin/bash
PROTO_IMPORT_DIR="./proto"
GEN_OUT_DIR="./src"

# Create the generated output dir if it doesn't exist
if [ ! -d "$GEN_OUT_DIR" ]; then
  mkdir -p ${GEN_OUT_DIR}
fi

FILE_PATHS='./proto/*.proto'

$(npm root)/.bin/grpc_tools_node_protoc \
 --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
 --ts_proto_out=${GEN_OUT_DIR} \
 --ts_proto_opt=outputServices=grpc \
 --ts_proto_opt=esModuleInterop=true \
 --ts_proto_opt=nestJs=true \
 --ts_proto_opt=fileSuffix=.pb \
 --ts_proto_opt=snakeToCamel=false \
 -I ${PROTO_IMPORT_DIR} \
  ${FILE_PATHS}