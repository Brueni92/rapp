import pandas as pd
import requests
from bs4 import BeautifulSoup








def scrape_grape(link):
    page = requests.get(link)
    soup = BeautifulSoup(page.content, 'html.parser')
    name = soup.find('h1').text
    desc = soup.find('div', id='description').find('p').text
    needs = soup.find(class_='needs').find_all(class_='field__item')
    color = needs[0].text
    wuchs = needs[1].text
    reifezeit = needs[2].text
    lageansprüche = needs[3].text
    wine_desc = soup.find('div', id='wine').find('p').text
    pilzresistenz = True if soup.find('ul', class_='characteristics').find_all('li')[1].find(class_='glyphicon-screenshot') else False
    image_url = soup.find('img', class_='img-responsive')['src']
    return {
        'name': name,
        'desc': desc,
        'wuchs': wuchs,
        'reifezeit': reifezeit,
        'lageansprüche': lageansprüche,
        'color': color,
        'wine_desc': wine_desc,
        'pilzresistent': pilzresistenz,
        'img_url': f'https://www.rebschule-meier.ch{image_url}'
    }


def scrape_teaser_site(page):
    grapes = []
    URL = f"https://www.rebschule-meier.ch/de/grapevines?color=All&growth=All&harvest=All&needs=All&wine%5B1%5D=1&name=&page={page}"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    parent_content = soup.find(id='block-reben-content')
    content = parent_content.find("div", class_='content')
    elements = content.find_all("div", class_="teaser")
    for el in elements:
        href = el.find('h4').find('a')['href']
        grapes.append(scrape_grape(f'https://www.rebschule-meier.ch/{href}'))
    return grapes


all_sorts = []
for i in range(6):
    all_sorts += scrape_teaser_site(i)

df = pd.DataFrame(all_sorts)
df.to_csv('output.csv')
df.to_json('output.json')
