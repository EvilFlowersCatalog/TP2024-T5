# Integrácia s Elvírou
Z funkcionálnych požiadaviek nášho riešenia vyplnulo že je potrebné dokázať sprístupniť údaje, ktoré sú uložené v repozitári Dataverse službám, ktoré bežia v rámci Evil Flowers infraštruktúry. Tento cieľ sme sa rozhodli zabezpečiť pomocou využitia API, ktoré repozitár Dataverse poskytuje. 

Funkcionálne požiadavky, ktoré potrebujeme zabezpečiť v rámci integrácii repozitára dataverse: 
1. Umožniť načítanie súborov podľa zadefinovaných meta informácií.
2. Umožniť odstránenie a pridávanie meta informácií pre súbory.
3. Zistenie informácií o fyzickom umiestnení súboru na diskovom úložisku pre priame sprístupnenie obsahu ostatným službám bez potreby HTTP dátového prenosu.
4. Napojenie riešenia na mikroslužbovú architektúru, ktoré zabezpečí zdieľanie informácií o uložených súboroch pre ostatné prvky v infraštruktúre, napríklad pre AI/ML služby, ktoré budú spracovávať súbory. 

V rámci analýzy sme objavili viaceré klientske API knižnice, ktoré zabezpečovali základné operácie s Dataverse objektami. Knižnice nepodporovali **3. funkcionálnu požiadavku**, ktorý nám umožňuje priame sprístupnenie obsahu súboru  ostatným službám pomcou cesty na diskovom úložisku. 

Toto nás viedlo k implementácií vlastnej klientskej knižnice, ktorá zabezpečí všetky potrebné operácie. 

## API klient class diagram
![API klient class diagram](.img/api_client.png)