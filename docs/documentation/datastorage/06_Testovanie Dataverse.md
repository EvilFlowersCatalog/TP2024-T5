# Testovanie Dataverse aplikácie

## Aplikačné objekty 

Existujú dva základné typy organizačných jednotiek v rámci systému:
- Dataverse
- Dataset

Všetky ostatné objekty môžu existovať iba v rámci týchto základných organizačných jednotiek.

### Dataverse

Dataverse predstavuje najvyššiu organizačnú jednotku. Táto jednotka slúži ako kontajner, ktorý môže obsahovať ďalšie dataversy alebo dataset-y. V praxi je možné použiť dataverse na organizáciu údajov podľa tém, projektov alebo akéhokoľvek iného logického rozdelenia. Vďaka tejto hierarchii je možné efektívne riadiť a spravovať veľké množstvo údajov. 

### Dataset

Dataset je základná jednotka, ktorá obsahuje konkrétne údaje. Tieto údaje môžu zahŕňať rôzne typy súborov, ako napríklad:
- Obrázky
- Dokumenty
- Dalšie typy dátových súborov

Datasety sú obvykle prepojené s konkrétnymi dataversami, čo umožňuje ich jednoduché vyhľadávanie, zdieľanie a správu v rámci celej štruktúry. Táto modularita zaručuje flexibilitu pri ukladaní a práci s údajmi.


### Príklady
Vytvorenie datasetu/dataversu:
![Datase and Dataverse create example](/img/data_doc/create-data-TP.png)

Dataset a dataverse môžeme v UI rozpoznať podľa farieb ohraničenie. Modré ohraničenie definuje objekt datasetu a oranžové ohraničenie označuje dataverse.
![Datase and Dataverse example](/img/data_doc/create-data-TP.png)

## Persistencia údajov v repozitári Dataverse
Pri ukladaní blob objektov (napríklad súborov alebo obrázkov) Dataverse ponúka niekoľko možností. Každá z nich má svoje výhody a nevýhody, pričom výber závisí od požiadaviek na dostupnosť, správu a náklady.

### Lokálne ukladanie na serveri so systémom úložiska

**Výhody:**
- Jednoduché mapovanie úložného priestoru medzi kontajnermi Elvira a Dataverse.
- Úložisko je priamo na serveri, čo znamená, že nie je potrebné nastavovať externé služby alebo infraštruktúru.

**Nevýhody:**
- Na získanie údajov o uložených súboroch je potrebné exportovať metadáta datasetu a následne ich analyzovať.

### S3 uložisko
**Výhody:**
- Flexibilné a škálovateľné riešenie na správu a ukladanie dát.
- Možnosť použitia externých služieb na zabezpečenie dostupnosti.

**Nevýhody:**
- Vyššie náklady na správu a údržbu.
- Cloudové služby sú spoplatnené.
- Potreba konfigurácie Dataverse na použitie S3 úložiska.

## Dataverse API
Dataverse API je dobre zdokumentované v oficiálnej dokumentácii Dataverse.

### Autentifikačné metódy
1.	Základný API kľúč: 
API kľúč je jednoduchý spôsob autentifikácie, ktorý sa dá vygenerovať priamo v profile používateľa v webovom rozhraní Dataverse. Po prihlásení do svojho účtu môže používateľ vygenerovať kľúč, ktorý je unikátny pre jeho účet.
2.	Bearer tokeny:
Bearer tokeny poskytujú dynamickejší spôsob autentifikácie. Môžu byť generované pomocou API požiadavky, ktorá obsahuje meno používateľa a heslo. Po úspešnej autentifikácii systém vráti token, ktorý sa používa na ďalšiu komunikáciu s API bez potreby opätovného zadávania prihlasovacích údajov.
3.	Podpísané URL adresy:
Táto metóda umožňuje prístup k zdrojom pomocou špeciálne podpísaných URL odkazov, ktoré obsahujú kryptografický podpis. Tieto odkazy sú zvyčajne časovo obmedzené a špecifikujú presne, aké akcie môžu byť vykonané. Táto metóda je ideálna pre zdieľanie súborov alebo datasetov bez toho, aby sa priamo poskytovali prihlasovacie údaje.

### Dôležité API endpointy
V rámci testovanie API endpointov Dataverse, bolo vybraných niekoľko dôležitých endpointov, ktoré sú potrebné na správu a manipuláciu s údajmi v systéme. Nakoľko dataverse využíva ako organizačné jednotky dataverse a dataset väčšina endpointov je priamo závislá na existencii týchto objektov. 

Na zistenie informácií o tom ako sú uložené súbory v datasete z exportovania informácií o dataverse môžeme využiť nasledný skript.
``` shell
apiToken="XXXXXX"
serverUrl="url"

curl -H X-Dataverse-key:$apiToken "$serverUrl/api/datasets/export?exporter=[format]&persistentId=[PersistentId]"
```

Ďalší spôsob je zistiť informácie o ukladaní súborov priamo v datasete. Na toto môžeme využiť nasledovný skript.
``` shell
serverUrl="url"
id=X
version=X

curl "$serverUrl/api/datasets/$id/versions/$version/files"
```

Obi dvoma spôsobmi zistíme všetky potrebné informácie o uložených súboroch ako:
1. Cesta k súboru
2. Názov
3. Veľkosť
4. Metadáta