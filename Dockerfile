FROM tomcat:latest

COPY ./dist/* /usr/local/tomcat/webapps/mediadb_gui/
COPY ./tomcat/conf/server.xml /usr/local/tomcat/conf/server.xml
COPY ./tomcat/startup.sh /webui/startup.sh

CMD ["/bin/sh", "/webui/startup.sh"]