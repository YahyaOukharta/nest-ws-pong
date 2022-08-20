FROM node:16-alpine

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g npm@8.17.0

# start app
CMD ["bash", "run.sh"]
