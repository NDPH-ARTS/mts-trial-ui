# base image
FROM node:15.5.1

# set working directory
WORKDIR /app
COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install
# RUN npm install -g @angular/cli

CMD bash -c "ng serve --host 0.0.0.0"
