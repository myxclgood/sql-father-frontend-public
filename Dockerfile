# nginx作为基础镜像
FROM nginx

# 定义作者
MAINTAINER xcl

# 移除基础镜像内部的nginx的默认配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 将自己定义的nginx文件 拷贝到原nginx文件的位置
ADD default.conf /etc/nginx/conf.d/

# 将前端build好生成的dist文件拷贝 nginx代理的文件夹内
COPY dist/ /usr/share/nginx/html/

