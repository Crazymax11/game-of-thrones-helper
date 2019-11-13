FROM node:12 as builder

COPY . .
RUN yarn
RUN yarn build
RUN yarn next export

FROM redsadic/docker-http-server
COPY --from=builder /out /public