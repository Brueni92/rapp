import pandas as pd

PATH = "../web-app/src/data/"
CSV_FILENAME = "oberbau - Liste.csv"
JSON_FILENAME = "sorten.json"

df = pd.read_csv(PATH+CSV_FILENAME)

df.to_json(PATH+JSON_FILENAME, orient='records')