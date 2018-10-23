---
title: gatsby
date: "2018-10-23T03:00:00.000Z"
---


1. [gatsbyjs](https://www.gatsbyjs.org)

2. install <br />
    > npm install --global gatsby-cli <br />
    > gatsby new gatsby-site https://github.com/gatsbyjsgatsby-starter-default <br />
    > gatsby develop <br />
    > gatsby 사이트에서 위와 같이 가이드해준다 <br />
    > 하지만 도커 알파인리눅스에서는 에러가 발생한다(우분투에서도 동일) <br />
    > 아래와 같이 설치해보길 바란다. <br />
    > apk update && apk add nodejs &&apk add npm && apk add git && apk add python <br />
    > apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat <br />
    > npm install --global gatsby --no-optional gatsby@2.0 <br />
    > gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog <br />
    > gatsby develop --host 0.0.0.0 <br />





