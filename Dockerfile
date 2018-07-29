FROM node

# create app dir
RUN mkdir /home/node_service
WORKDIR /home/node_service

# bundle app resource
COPY . /home/node_service
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]