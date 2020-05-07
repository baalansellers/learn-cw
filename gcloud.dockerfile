## learn-cw Build Environment
FROM us.gcr.io/sylvan-octagon-268211/learn-cw-static:latest AS build

EXPOSE 5000
CMD ["serve", "-s", "build"]