## Build Environment
FROM node:12.14.1

### Build app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build
RUN npm install -g serve

EXPOSE 5000
CMD ["serve", "-s", "build"]

# docker build -f dockerfile -t cw-alan-codes:prod .
# docker run -d --name cw-alan-codes -it -p 5000:5000 --rm cw-alan-codes:prod
