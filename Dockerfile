FROM tomcat:latest

COPY ./dist/* /usr/local/tomcat/webapps/mediadb_gui/
COPY ./tomcat/conf/server.xml /usr/local/tomcat/conf/server.xml
COPY ./tomcat/startup.sh /startup.sh

CMD ["/startup.sh"]