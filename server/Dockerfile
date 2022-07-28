ARG NODE_TAG
FROM node:${NODE_TAG}

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
# COPY . .

RUN npm install -g --save-dev nodemon && \
    npm install express date-utils morgan body-parser ejs \
                sequelize sqlite3 joi node-cron mongodb
    
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080
CMD [ "nodemon", "/usr/src/app/app.js" ]
