FROM php:8.3-apache
RUN a2enmod rewrite
RUN docker-php-ext-install mysqli
RUN apt-get update \
    && apt-get install -y libzip-dev \
    && apt-get install -y libjpeg-dev \
    && apt-get install -y locales \
    && apt-get install -y zlib1g-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install zip


RUN apt-get update -y && apt-get install -y libwebp-dev libjpeg62-turbo-dev libpng-dev libxpm-dev libfreetype6-dev
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg --with-webp --with-xpm --with-freetype
RUN docker-php-ext-install gd

RUN locale-gen nl_NL && locale-gen nl_NL.UTF-8
RUN dpkg-reconfigure locales
RUN a2enmod headers
