FROM tomcat:latest

COPY ./dist/* /tomcat/webapps/mediadb_gui/
COPY ./tomcat/conf/server.xml /usr/local/tomcat/conf/server.xml

CMD [ "catalina.sh run" ]