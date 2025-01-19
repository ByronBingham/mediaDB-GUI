#!/bin/sh

if [ -v WEBAPP_NAME ]; then
    mv /usr/local/tomcat/webapps/mediadb_gui/ /usr/local/tomcat/webapps/${WEBAPP_NAME}
else    
    echo "No webapp name specified. Defaulting to 'mediadb_gui'"
fi

catalina.sh run