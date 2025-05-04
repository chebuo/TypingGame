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
    
    words = [
        line
        for q in quotes
        for line in q.get_text(separator='\n', strip=True).split('\n')
        if line  # 空行を除外
    ]
    
    return jsonify(words)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
