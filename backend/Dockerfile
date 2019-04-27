FROM mhart/alpine-node:10.15.3

RUN mkdir /server
WORKDIR /server
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --silent && mv node_modules ../

COPY . /server

EXPOSE 5000