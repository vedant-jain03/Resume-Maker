FROM node:14-alpine3.16
RUN mkdir -p /resume-maker
COPY . /resume-maker
WORKDIR /resume-maker
RUN npm install
CMD ["npm", "start"]