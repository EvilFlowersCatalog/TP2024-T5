# Správa Kafka Producentov a Konzumentov (Producer and Consumer Management)
<div style={{ textAlign: 'justify' }}>
## Popis
Systém implementuje robustné spracovanie správ pomocou Kafka producentov a konzumentov využívajúc knižnicu confluent_kafka. Táto dokumentácia popisuje základné operácie s producentom a konzumentom, nezávislé od konkretnej implementácie.

## Producent (Producer)
### Inicializácia
Producent sa inicializuje nasledovne:
```python
self.producer = Producer({
    'bootstrap.servers': bootstrap_servers,
    'client.id': socket.gethostname()
})
```
- bootstrap_servers: Adresa Kafka broker serveru
- client_id: ID Kafka klienta

### Hlavné operácie
1. **Odoslanie správy**
   - Metóda: `produce_message()`
   - Parametre:
        - `topic`: Názov témy, do ktorej sa správa odosiela
        - `message`: Správa, ktorá sa má odoslať
        - `callback`: Funkcia, ktorá sa volá po úspešnom doručení správy
   - Učel: Odoslanie správy do Kafka

## Konzument (Consumer)
### Inicializácia
Konzument sa inicializuje s nasledujúcou konfiguráciou:
```python
self.consumer = Consumer({
    'bootstrap.servers': bootstrap_servers,
    'group.id': group_id,
    'auto.offset.reset': 'earliest'
})
```
- bootstrap_servers: Adresa Kafka broker serveru
- group_id: ID skupiny konzumentov
- auto.offset.reset: Počiatočný offset pre nové konzumenty
    - earliest: Začína čítať od začiatku témy
    - latest: Začína čítať od poslednej správy
    - none: Konzument sa pripojí na poslednú správu v téme

### Hlavné operácie
1. **Začatie konzumácie**
   - Metóda: `subscribe()`
   - Účel: Pripojenie k téme (alebo témam) a začatie prijímania správ

2. **Prijmanie správ**
   - Metóda: `poll()`
   - Učel: Prijmanie správ z Kafka brokeru

3. **Spracovanie prijatých správ**
   - Metóda: `msg.value().decode('utf-8')()`
   - Účel: Dekodovanie správy a na jej bližšie spracovanie 
        - `msg` reprezentuje správu prijatú z Kafka brokeru pomocou metódy `poll()`
</div>