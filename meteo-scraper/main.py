
import pandas as pd
import requests
import json

STATIONS = {
"Graenichen": 179,
"Frick": 164,
"Tegenfeld": 169,
"Oberflachs": 167,
"Birmensdorf": 191}

YEARS = 13

URL = 'https://www.agrometeo.ch/backend/api/meteo/data?from=2008-01-01&to=2020-12-28&scale=day&stations=179%2C164%2C169%2C167%2C191&sensors=1%3Aavg%2C1%3Amax%2C6%3Asum%2C11%3Aavg%2C41%3Asum&show_cflag=0&language=de'
response = requests.get(URL).content
string = response.decode('utf-8')
json_obj = json.loads(string)
df = pd.DataFrame(json_obj['data'])

df['month'] = pd.DatetimeIndex(df['date']).month
df['day'] = pd.DatetimeIndex(df['date']).day
df = df[((df['month'] >= 4) & (df['month'] <=9))]
values = {}
for key, station in STATIONS.items():
    df[f'{station}_daily_huglin'] = (pd.to_numeric(df[f'{station}_1_avg']) + pd.to_numeric(df[f'{station}_1_max']) - 20) / 2
    huglin = pd.to_numeric(df[f'{station}_daily_huglin']).sum()/YEARS * 1.045
    rain = pd.to_numeric(df[f'{station}_6_sum']).sum()/YEARS
    temp = df[pd.DatetimeIndex(df['date']).year >= 2016]
    sun = pd.to_numeric(temp[f'{station}_11_avg']).sum() / 5
    values[key] = {'huglin': huglin, 'rain': rain, 'sun': sun}

with open('meteo.json', 'w') as fp:
    json.dump(values, fp)
