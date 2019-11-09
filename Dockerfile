FROM node:12 as builder

COPY . .
RUN yarn
RUN yarn build

FROM redsadic/docker-http-server
COPY --from=builder /build /public