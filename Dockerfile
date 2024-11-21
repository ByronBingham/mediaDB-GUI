FROM tomcat:latest

COPY ./dist/* /tomcat/webapps/mediadb_gui/

CMD [ "catalina.sh run" ]