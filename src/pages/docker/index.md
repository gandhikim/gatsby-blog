---
title: docker
date: "2018-10-23T02:00:00.000Z"
---


1. [install docker in mac](https://docs.docker.com/toolbox/toolbox_install_mac/)

2. [docker command docu](http://pyrasis.com/docker.html)

3. [docker hub](https://hub.docker.com)

4. image download
    > docker pull alpine <br />
    > 우분투를 쓰다가 최근에 가벼운 알파인리눅스로 갈아탔다 <br />
    > 명령어도 심플해 적응하기도 빨랐다 추천합니다

5. make container
    > docker run -p 3000:3000 -v /Users/gandhikim/docker-dev/web1:/docker-dev --name web1 -d -italpine /bin/sh <br />
    > docker exec -it web1 sh



