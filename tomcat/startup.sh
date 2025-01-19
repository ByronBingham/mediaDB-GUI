#!/bin/sh

if [ -n WEBAPP_NAME ]; then
    mv /usr/local/tomcat/webapps/mediadb_gui/ /usr/local/tomcat/webapps/${WEBAPP_NAME}
    echo "Changed webapp name to '${WEBAPP_NAME}'"
else    
    echo "No webapp name specified. Defaulting to 'mediadb_gui'"
fi

catalina.sh run