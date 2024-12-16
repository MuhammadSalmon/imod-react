FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default
COPY /etc/ssl/myapp /etc/ssl/myapp
EXPOSE 80 443
CMD ["nginx", "-g", "deamon off";]