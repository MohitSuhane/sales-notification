FROM node:10.11.0

# Create app directory
WORKDIR /usr/src/app

# ENV variable
ENV SENDGRID_API_KEY='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'

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]