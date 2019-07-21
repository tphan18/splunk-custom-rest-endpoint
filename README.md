# DEMO

```
$ docker exec -it splunk /bin/bash
ansible@76bb13bc216e:/apps$ cd $SPLUNK_HOME/etc/apps/
ansible@76bb13bc216e:/opt/splunk/etc/apps$ sudo ln -s /apps/sony_code_react_app/ .
ansible@76bb13bc216e:/opt/splunk/etc/apps$ sudo $SPLUNK_HOME/bin/splunk restart
```

```bash
curl -k https://localhost:8089/services/apps/local/sony_code_react_app \
    -H "Authorization: Splunk hha9j8rNFcH2uOJE^1WDyr_EsBsUdqJSODUB2aK76pc5V1FwqrxfD5ahg^9m7GmhsgNCQGuKLG2TPUd1Y3gw4ERi9G2UjsslefMgEDoy4vwbv4Mpx3HXwFk77QWTtagJFg8OaE_5kOx"
```