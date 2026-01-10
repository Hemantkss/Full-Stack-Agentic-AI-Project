import sys
import traceback

def error_message_details(error: Exception) -> str:
    exc_type, exc_value, exc_tb = sys.exc_info()

    if exc_tb:
        tb = traceback.extract_tb(exc_tb)[-1]
        return (
            f"File: {tb.filename}, "
            f"Line: {tb.lineno}, "
            f"Error: {error}"
        )

    return str(error)


class CustomException(Exception):
    def __init__(self, error: Exception):
        self.error_message = error_message_details(error)
        super().__init__(self.error_message)

    def __str__(self):
        return self.error_message
