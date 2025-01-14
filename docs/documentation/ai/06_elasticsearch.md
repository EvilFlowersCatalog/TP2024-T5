# Elasticsearch
<div style={{ textAlign: 'justify' }}>
   Elasticsearch je open-source distribuovaná databáza, ktorá umožňuje rýchle vyhľadávanie a analýzu velkých objemov dat. V našom projekte sme ho použili na indexovanie a vyhľadávanie dokumentov, ktoré sme extrahovali z PDF dokumentov. 
</div>

### Implementácia Elasticsearch do projektu

<div style={{ textAlign: 'justify' }}>
Elasticsearch je implementovaný v projekte pomocou Docker kontajnera, ktorý je spustený v rámci Docker Compose súboru. K tomuto kontajneru sú napojené jednotlivé mikroslužby, ktoré nám umožňujú indexovať a vyhľadávať dokumenty v Elasticsearch. No samostatná konektivita Elasticsearchu s jednotlivými mikroslužbami je realizovaná pomocou *REST API*, v tejto fáze projektu, pri čom neskôr bude táto implementácia vyriešená pomocou technológie *Kafka*.

<br>

K Elasticsearchu sme taktiež pripojili *Kibana*, ktorý nám umožňuje vizualizáciu databázy Elasticsearch. Taktiež sa uvažuje aj na integráciu *Logstashu*, ktorý nám umožňuje logovanie do Elasticsearchu, no toto riešenie ešte nie je isté.


Elasticsearch je v pláne implementovaný ako samostatný module, ktorý bude rovnaký medzi všetkými mikroslužbami, kvôli tomu, aby sme mohli využiť všetky funkcie Elasticsearchu a nestávalo sa nám, že by sme museli v každej mikroslužbe implementovať Elasticsearch a aby nevznikali duplicitné kódy, či problémy s indexovaním.
</div>

### Štruktúra projektu

<div style={{ textAlign: 'justify' }}>
    Štruktúra projektu Elasticsearchu je znázornená na diagrame nižšie. Tento diagram obsahuje nasledujúce elementy:

- **Elasticsearch** - kontajner Elasticsearchu
- **Kibana** - vizualizácia databázy Elasticsearchu
- **Text microservice** - mikroslužba, ktorá indexuje text do Elasticsearchu
- **Image microservice** - mikroslužba, ktorá indexuje obrázky do Elasticsearchu
- **Equation microservice** - mikroslužba, ktorá indexuje rovnice do Elasticsearchu
- **Video microservice** - mikroslužba, ktorá indexuje video do Elasticsearchu
</div>

![ilustration-image](/img/ai_doc/elastic_diagram.png)

