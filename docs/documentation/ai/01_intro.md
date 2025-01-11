# Roadmapa
<div style={{ textAlign: 'justify', marginBottom: '60px' }}>
    Táto roadmapa predstavuje plán práce pre tím zameraný na vývoj a implementáciu AI riešení. Zahŕňa úlohy spojené so spracovaním textových, obrazových a audiovizuálnych dát. Plán je navrhnutý tak, aby postupne riešil rôzne aspekty spracovania údajov – od ich extrakcie, cez analýzu a interpretáciu, až po využitie pokročilých modelov neurónových sietí. Hlavným cieľom je efektívne spracovanie dát a implementácia štyroch AI mikroslužieb spracuvávajúcich získané dáta, a to:

    - **Text microservice** - extrakcia textu a tabuliek z PDF dokumentov, indexácia extrahovaného textu pomocou Elasticsearch
    - **Image microservice** - extrakcia obrázkov z PDF dokumentov a ich následné spracovanie
    - **Equation microservice** - rozpoznávanie matematických rovníc z PDF dokumentov a ich spracovanie
    - **Video microservice** - spracovanie audiovizuálnych záznamov z prednášok 

    Roadmapa pozostáva z nasledujúcich kľúčových fáz:
    - **Data extraction** - extrakcia rôznych typov dát z PDF dokumentov (text, tabuľky obrázky, rovnice)
    - **Data interpretation** - spracovanie extrahovaných dát, ktoré zahŕňa napr. automatické označovanie a opis obrázkov s využítim neurónových sietí či konverziu matematických rovníc do LaTeX/Python kódu
    - **Audio-to-Text conversion** - implementácia prevodu zvukovej stopy z prednášok na text s využítim neurónových sietí
    - **Indexing** - indexovanie extrahovaných dát (textu, obrázkov) za pomoci Elasticsearch-u s dôrazom na podporu viacerých jazykov
</div>

![ilustration-image](/img/ai_doc/AI_roadmap.jpg)