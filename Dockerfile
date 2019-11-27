FROM node:12 as builder

COPY components /components
COPY pages /pages
COPY public /public
COPY next.config.js tsconfig.json yarn.lock package.json .babelrc.js /

RUN yarn
RUN yarn build
RUN yarn next export

FROM redsadic/docker-http-server
COPY --from=builder /out /public
