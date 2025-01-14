# Equation microservice
<div style={{ textAlign: 'justify' }}>
*Equation microservice* je mikroslužba zodpovedná za extrakciu a ďalšie spracovanie rovníc z PDF dokumentov.

Na prácu s rovnicami sme použili Python knižnicu **sympy**, ktorá nám umožňuje manipuláciu s matematickými výrazmi a rovnicami. Ceľový proces sa rozdeluje na extrakciu a processovanie rovníc.
   
</div>

### Extrakcia rovníc
<div style={{ textAlign: 'justify' }}>
   Pri extrakcii rovníc sme použili model **Nougat**, ktorý nám umožňuje extrahovať rovnice z obrázkových dokumentov. Tento model je dostupný na platforme *Hugging Face*. Pričom, model **Nougat** je vhodný pre extrakciu rovníc z obrázkových dokumentov, ktoré majú veľké množstvo textu a rovníc. No nie vždy tieto texty extrahoval dobre preto bolo potrebné aplikovať *post-processing* na extrahované texty.
</div>

### Spracovanie rovníc

<div style={{ textAlign: 'justify' }}>
    Na spracovanie rovníc sme použili Python knižnicu **sympy**, ktorá nám umožňuje manipuláciu s matematickými výrazmi a rovnicami. Hlavnou časťou čo sme vykonali v tejto fáze bolo post-processing extrahovaných textov, pomocou regex výrazov, ktoré nám pomohli vyčistiť text a poprípade opraviť niektoré anomálie.
</div>

### UML diagram

<div style={{ textAlign: 'justify' }}>
Vzťahy medzi hlavnými triedami mikroslužby sme znázornili pomocou UML diagramu nižšie. Tento diagram obsahuje nasledujúce elementy:

<br></br>

- **EquationExtractor** - extrahuje rovnice z PDF dokumentov
- **EquationProcessor** - spracováva extrahované rovnice
- **EquationService** - hlavná trieda, ktorá zabezpečuje celý proces: volá *EquationExtractor* na extrakciu rovníc a *EquationProcessor* na ich spracovanie
</div>

![ilustration-image](/img/ai_doc/UML_equation_service.png)


### Sekvenčný diagram

<div style={{ textAlign: 'justify' }}>
   Sekvenčný diagram znázorňuje postupnosť krokov pri spracovaní rovníc z PDF dokumentov:

   1. Používateľ poskytne cestu k PDF dokumentu
   2. EquationHandler inicializuje proces spracovania
   3. EquationExtractor konvertuje PDF na obrázky a extrahuje oblasti s rovnicami
   4. Model Nougat konvertuje identifikované oblasti na LaTeX formát
   5. EquationProcessor spracuje LaTeX a prevedie ho do Python kódu
   6. Výsledkom je súbor obsahujúci rovnice v LaTeX aj Python formáte

   Tento proces zabezpečuje komplexné spracovanie matematických rovníc od ich identifikácie až po konverziu do programovateľnej podoby.
</div>