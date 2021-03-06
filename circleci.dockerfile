## Build Environment
FROM node:12.14.1

### Build app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# docker build -f dockerfile -t cw-alan-codes:prod .
# docker run -d --name alan-codes-cw -it -p 5000:5005 --rm cw-alan-codes:prod
