import logging
from pathlib import Path
from datetime import datetime

BASE_DIR = Path(__file__).resolve().parents[2]
LOG_DIR = BASE_DIR / "logs"
LOG_DIR.mkdir(exist_ok=True)

LOG_FILE = f"{datetime.now().strftime('%Y_%m_%d_%H_%M_%S')}.log"
LOG_FILE_PATH = LOG_DIR / LOG_FILE

logging.basicConfig(
    filename=str(LOG_FILE_PATH),
    level=logging.INFO,
    format="[%(asctime)s] [%(levelname)s] [%(name)s:%(lineno)d] %(message)s",
)

def get_logger(name: str):
    return logging.getLogger(name)
