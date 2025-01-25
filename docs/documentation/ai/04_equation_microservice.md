# Equation microservice

<div style={{ textAlign: 'justify' }}>
   *Equation microservice* je mikroslužba zodpovedná za extrakciu a následné spracovanie rovníc z PDF dokumentov.

   Na prácu s rovnicami sme použili Python knižnicu **SymPy**, ktorá nám umožňuje manipuláciu s matematickými výrazmi a rovnicami. Celý proces je rozdelený na dve hlavné časti, a to extrakciu a spracovanie rovníc. 

   Táto mikroslužba zabezpečuje proces komplexného spracovania matematických rovníc od ich identifikácie až po konverziu do programovateľnej podoby.
</div>

### Extrakcia rovníc

<div style={{ textAlign: 'justify' }}>
   Na extrakciu rovníc sme použili model **Nougat**, ktorý je dostupný na platforme *Hugging Face* a umožňuje získavať rovnice z obrázkových dokumentov. Tento model je obzvlášť vhodný na spracovanie dokumentov obsahujúcich veľké množstvo textu a rovníc. Avšak, nie vždy dokázal texty extrahovať spoľahlivo dobre, čo si vyžadovalo aplikáciu post-processingu na získané výstupy.
</div>

### Spracovanie rovníc

<div style={{ textAlign: 'justify' }}>
    Na spracovanie rovníc sme použili Python knižnicu **SymPy**, ktorá poskytuje nástroje na manipuláciu s matematickými výrazmi a rovnicami. Kľúčovým krokom v tejto fáze bol post-processing extrahovaných výstupov, pri ktorom sme použili regulárne výrazy (regex) na vyčistenie textu a opravu prípadných anomálií.
</div>

### UML diagram

<div style={{ textAlign: 'justify' }}>
   Vzťahy medzi hlavnými triedami mikroslužby sme znázornili pomocou UML diagramu nižšie. Diagram obsahuje nasledujúce elementy:
   
   - **EquationExtractor** - extrahuje rovnice z PDF dokumentov
   - **EquationProcessor** - spracováva extrahované rovnice
   - **EquationService** - hlavná trieda, ktorá zabezpečuje celý proces: volá *EquationExtractor* na extrakciu rovníc a *EquationProcessor* na ich spracovanie

</div>

![ilustration-image](/img/ai_doc/UML_diagram_equation_service.png)


### Sekvenčný diagram

<div style={{ textAlign: 'justify' }}>
   Sekvenčný diagram znázorňuje postupnosť krokov pri spracovaní rovníc z PDF dokumentov:

   1. Používateľ poskytne cestu k PDF dokumentu.
   2. V rámci *main* funkcie *EquationHandler* inicializuje proces spracovania.
   3. *EquationExtractor* konvertuje PDF na obrázky a extrahuje oblasti s rovnicami.
   4. Model *Nougat* konvertuje identifikované oblasti na LaTeX formát.
   5. *EquationProcessor* spracuje LaTeX formát a prevedie ho do Python kódu.
   6. Výsledkom je súbor obsahujúci rovnice v LaTeX aj Python formáte.
</div>
