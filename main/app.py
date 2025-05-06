from flask import Flask, jsonify, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/api/words')
def get_words():
    url = "https://hayakutikotoba.com/"
    res = requests.get(url)
    soup = BeautifulSoup(res.content, 'html.parser')

    # 早口言葉を抽出し、<br>などで改行されているものを個別に分割
    quotes = soup.find_all('div', class_='col-lg-12 col-md-12 col-12 mb-2')
    easy=[]
    nomal=[]
    hard=[]
    veryhard=[]
    for q in quotes:
        text=q.get_text(separator='/n',strip=True)
        if '難易度1' in text:
            easy.append(text)
        elif '難易度2' in text:
            nomal.append(text)
        elif '難易度3' in text:
            hard.append(text)
        elif '難易度4' in text:
            veryhard.append(text)
        elif '難易度5' in text:
            veryhard.append(text)
    words = [
        line
        for q in easy
        for line in q.split('/n')
        if '難易度1' not in line
        if line  # 空行を除外
    ]
    print(text)
    print()
    print(easy)
    return jsonify(words)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
