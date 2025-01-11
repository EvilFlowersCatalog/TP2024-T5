# Text microservice

<div style={{ textAlign: 'justify' }}>
    *Text microservice* je mikroslužba je zodpovedná za extrakciu a ďalšie spracovanie textu a tabuliek z PDF dokumentov. 
</div>

### Spracovanie textu

<div style={{ textAlign: 'justify' }}>
    Pri extrakcii textu z PDF dokumentov sme využili metódu Optical Character Recognition (OCR), konkrétne Python knižnicu **ocrmypdf** v kombinácii s **pytesseract**, ktorá využíva strojové učenie a rozpoznávanie vzorov na identifikáciu a extrakciu textu z obrázkových dokumentov. Tento spôsob sme zvolili z dôvodu, že umožňuje získavanie textu vo forme súvislých paragrafov (pre potreby indexovania textu), čo bežné Python knižnice ako *PyMuPDF* či *pdfplumber* nedokázali uspokojivo dosiahnuť.
</div>

### Spracovanie tabuliek 

<div style={{ textAlign: 'justify' }}>
    Na extrakciu tabuliek z PDF dokumentov sme otestovali dostupné Python knižnice a identifikovali sme ich výhody a nevýhody:

    - **PyMuPDF** a **pdfplumber** - rýchla extrakcia, ale nie je možné extrahovať tabuľky, ktoré majú medzi bunkami tabuľky whitespaces a extrahované tabuľky, ktoré majú komplexné hlavičky (viacúrovňové), si vyžadujú dodatočné spracovanie
    - **camelot** - ponúka 2 módy: jeden pre extrakciu tabuliek s jasnými hranicami a druhý pre extrakciu tabuliek s whitespaces medzi bunkami, ale extrakcia je pomalšia a generuje príliš veľa irelevantných tabuliek

    Okrem toho sme chceli využiť aj prístup, kedy by sme tabuľky v dokumente detegovali pomocou AI modelu a detegované tabuľky by sme následne extrahovali pomocou jednej z Python knižníc. Na detekciu tabuliek sme otestovali modely **YOLOv8s Table Detection** a **Table Transformer** z Platformy *Hugging Face*, avšak, ich výsledky neboli dostatočne presné na to, aby sme toto riešenie mohli aplikovať v našej implementácii. Rozhodli sme sa preto pracovať s dostupnými Python knižnicami.
    
    V rámci našej implementácie bude možné pomocou environmentálnej premennej nastaviť jednu z vyššie spomínaných Python knižníc, ktorá bude použitá na extrakciu tabuliek. Tabuľky sú extrahované vo forme **.csv súborov** ako aj **DataFrame objektov** (z knižnice *pandas*).
</div>

### UML diagram

<div style={{ textAlign: 'justify' }}>
    Základná podoba UML diagramu so vzťahmi medzi hlavnými prvkami mikroslužby je zobrazená na obrázku nižšie.
</div>

![ilustration-image](/img/ai_doc/UML_diagram_text_microservice.png)

### Sekvenčný diagram
<!-- add diagrams -->

