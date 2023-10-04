FROM php:8.2-apache

RUN a2enmod rewrite
RUN service apache2 restart

RUN apt update -y && apt upgrade -y
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

ADD ./backend/* /var/www/html/
