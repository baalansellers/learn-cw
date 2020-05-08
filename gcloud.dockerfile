## Build Environment
FROM us.gcr.io/sylvan-octagon-268211/learn-cw-static:latest AS build

## Host Environment
FROM node:12.14.1-buster
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build /app

EXPOSE 5000
CMD ["serve", "-s", "app"]
