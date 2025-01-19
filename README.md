# BMedia Web UI

## Running

The pipeline of this repo generates a docker image with everything to run the web UI.

### Configuration

There are a couple of files that should be modified before running the web UI container. These files can be found in `template_files` in this repo. The editted files should be put somewhere the docker compose (or docker run command) can easily point to when running this container.

##### Template.css

There are two variables that are meant to be edited: `accent-color-primary` and `background-color-primary`. These just change the background and accent color of the webapp. You do not need to edit this file if you don't want to customize any of the template webapp's styling.

##### Settings.js

Here is a list the properties contained in `settings.js`. You must fill out this file before starting Docker or you will get errors:
 - `db_table_name`: This should be the name of the image DB table you want the webapp to pull from. This should match a table name from your `db_config.json`.
 - `default_images_per_page`: Number of images shown per page.
 - `webapp_name`: Short name of the webapp.
 - `webapp_long_name`: Long name of the webapp.
 - `server_addr`: This address should point to the tomcat server's address. This is the address you will use to access the webapp. Should include the port (default `8080`).
 - `api_addr`: This address should point to the API server's address. The webapp uses this address to make requests to the database and filesystem. Should include the port (default `38001`).
 - `thumb_height`: Size of the images shown on the webapp.

##### .keystore

The web UI uses HTTPS to more securely host the UI and improve performance. This requires a SSL cert/kestore, but for security reasons, the built image does not include a keystore. You can run `./tomcat/createSSLCert.[bat/sh]` to quickly create a cert. It would be better to set up a cert authority service, but that is not covered in this repo, at least not yet.

### Running the Container

There are a few things you will need to set to run the web UI container.

#### Port

The container port `443` must be forwarded to the host. The host port can be differnt, but you will need to specify the port in the URL when accessing the web UI if you do not user port `443`.

#### Template.css/Settings.js

These files must be mounted at `/tomcat/webapps/mediadb_gui/template.css` and `/tomcat/webapps/mediadb_gui/settings.js` respectively. If you are running multiple instances of this UI, it may be helpful to rename these files on the host and then re-rename them when mounting them when running the container. e.g. save `settings.js` as `webapp1_settings.js` on the host and then mount `webapp1_settings.js` as `settings.js` in the container.

#### .keystore

Make sure your keysore file is mounted at `/root/.keystore`.

#### Example

Below is an example compose.yml example service deffinition for running the web UI:

```
webui:
    image: [refence to pre-built web UI image]
    ports:
        - "443:443"
    volumes
        - [host/path/to/settings.js]:/tomcat/webapps/mediadb_gui/settings.js
        - [host/path/to/template.css]:/tomcat/webapps/mediadb_gui/template.css
        - [host/path/to/.keystore]:/root/.keystore
    
```