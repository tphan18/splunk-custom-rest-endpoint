FROM splunk/splunk:7.3


WORKDIR /apps/custom_rest_app
COPY ./custom_rest_app /apps/custom_rest_app