from splunk.persistconn.application import PersistentServerConnectionApplication


class Spam(PersistentServerConnectionApplication):
    def __init__(self, command_line, command_arg):
        PersistentServerConnectionApplication.__init__(self)

    def handle(self, in_string):
        payload = {"text": "Hello from custom endpoint"}
        return {"payload": payload, "status": 200}
