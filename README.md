# DEMO

```
$ docker exec -it splunk /bin/bash
ansible@76bb13bc216e:/apps$ cd $SPLUNK_HOME/etc/apps/
ansible@76bb13bc216e:/opt/splunk/etc/apps$ sudo ln -s /apps/sony_code_react_app/ .
ansible@76bb13bc216e:/opt/splunk/etc/apps$ sudo $SPLUNK_HOME/bin/splunk restart
```