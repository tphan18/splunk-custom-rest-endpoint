# DEMO

1. On 1st terminal, start the `splunk` service.

```sh
docker-compose up --build --renew-anon-volumes
```

2. On 2nd terminal, we create symbolic link so the changes can be reflected and we can avoid the volumes permission issues.

```
$ docker exec -it splunk /bin/bash
$ cd $SPLUNK_HOME/etc/apps/
$ sudo ln -s /apps/custom_rest_app/ .
$ sudo $SPLUNK_HOME/bin/splunk restart
```

3. Test custom endpoint at

```
http://127.0.0.1:8000/en-US/splunkd/__raw/services/my_custom_endpoint
```
