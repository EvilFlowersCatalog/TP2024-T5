# Elasticsearch

<div style={{ textAlign: 'justify' }}>
   *Elasticsearch* je open-source distribuovaná databáza navrhnutá na rýchle vyhľadávanie a analýzu veľkých objemov dát. V našom projekte je využitý na indexovanie a vyhľadávanie dát, ktoré sme extrahovali z PDF dokumentov. V budúcnosti sa plánuje využitie *Elasticsearch*-u aj na indexovanie a vyhľadávanie dát z videzáznamov prednášok, konkrétne z transkripcie ich audia.
</div>

### Implementácia Elasticsearch-u do projektu

<div style={{ textAlign: 'justify' }}>
    *Elasticsearch* je v projekte nasadený prostredníctvom Docker kontajnera, ktorý je spúšťaný pomocou Docker Compose. K tomuto kontajneru sú pripojené jednotlivé mikroslužby, ktoré umožňujú indexovanie a vyhľadávanie dokumentov v *Elasticsearch*. Konektivita medzi *Elasticsearch*-om a mikroslužbami je aktuálne realizovaná cez **REST API**, pričom v budúcnosti je plánované nahradiť túto implementáciu technológiou **Kafka**. 

    K *Elasticsearch*-u sme taktiež pripojili nástroj **Kibana**, ktorý poskytuje vizualizáciu databázy *Elasticsearch*. Dobudúcna sa uvažuje aj nad integráciou nástroja *Logstash* na logovanie dát do *Elasticsearch*-u, avšak toto riešenie ešte nie je definitívne.

    *Elasticsearch* je navrhnutý ako samostatný modul spoločný pre všetky mikroslužby. Tento prístup umožňuje plné využitie funkcií *Elasticsearch*-u, slúži ako prevencia pred duplicitným kódom a minimalizuje potenciálne problémy s indexovaním, nakoľko eliminujeme potrebu implementovať *Elasticsearch* zvlášť pre každú mikroslužbu.
</div>

### Štruktúra projektu

<div style={{ textAlign: 'justify' }}>
    Integrácia *Elasticsearchu*-u do projektu je znázornená na diagrame nižšie. Diagram obsahuje nasledujúce elementy:

    - **Elasticsearch** - kontajner *Elasticsearch*-u,
    - **Kibana** - vizualizácia databázy *Elasticsearch*,
    - **Text microservice** - mikroslužba, ktorá indexuje text do *Elasticsearch*-u,
    - **Image microservice** - mikroslužba, ktorá indexuje obrázky do *Elasticsearch*-u,
    - **Equation microservice** - mikroslužba, ktorá indexuje rovnice do *Elasticsearch*-u,
    - **Video microservice** - mikroslužba, ktorá indexuje video do *Elasticsearch*-u.
</div>

![ilustration-image](/img/ai_doc/elasticsearch_diagram_02.png)

