FROM nginx:1.23.1-alpine

EXPOSE 80

# Install node
RUN apk add --no-cache --update \
  nodejs=16.17.1-r0 \
  npm=8.10.0-r0

# Install and configure SSH
EXPOSE 2222
ENV WEBSITE_SSH_USER "root"
ENV WEBSITE_SSH_PASSWORD "Docker!"
RUN apk --update add --no-cache openssh bash \
  && ssh-keygen -A \
  && echo "$WEBSITE_SSH_USER:$WEBSITE_SSH_PASSWORD" | chpasswd \
  && rm -rf /var/cache/apk/* \
  && echo -e "\
Port 			2222\n\
ListenAddress 		0.0.0.0\n\
LoginGraceTime 		180\n\
X11Forwarding 		yes\n\
Ciphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr\n\
MACs                    hmac-sha1,hmac-sha1-96\n\
StrictModes 		yes\n\
SyslogFacility 		DAEMON\n\
PasswordAuthentication 	yes\n\
PermitEmptyPasswords 	no\n\
PermitRootLogin 	yes\n\
  " > /etc/ssh/sshd_config

# Install PM 2
RUN npm config set unsafe-perm true
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY r9i87khv2kpm6n1
ENV PM2_SECRET_KEY unghs34qqxuatym

# Create app directory
WORKDIR /usr/src/app/

# Install application dependencies
COPY src/package.json src/package-lock.json ./
RUN npm ci --ignore-scripts

# Copy and build application
COPY src .
RUN npm run build

# Copy Nginx configuration
COPY docker/nginx/template.conf /etc/nginx/template.conf
COPY docker/nginx/redirect-map.conf /etc/nginx/redirect-map.conf
COPY docker/nginx/errors/ /usr/src/app/views/errors/

EXPOSE 80

ENTRYPOINT /bin/ash -c 'envsubst \$API_HOSTNAME,\$API_URL,\$SITEMAP_HOSTNAME < /etc/nginx/template.conf > /etc/nginx/nginx.conf; exec nginx -g "daemon off;" & /usr/sbin/sshd -e & pm2-runtime ecosystem.config.js'
