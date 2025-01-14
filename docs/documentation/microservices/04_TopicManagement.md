# Správa Kafka tém (Topic Management)
<div style={{ textAlign: 'justify' }}>

## Popis
Systém implementuje dynamickú správu Kafka tém prostredníctvom AdminClient API z knižnice confluent_kafka.admin. Táto implementácia zabezpečuje programatické vytváranie, získavanie a odstraňovanie Kafka tém počas behu aplikácie bez nutnosti reštartu systému.

## Inicializácia
AdminClient sa inicializuje nasledovne:
```python
self.admin_client = AdminClient({
    'bootstrap.servers': os.environ.get('KAFKA_BOOTSTRAP_SERVERS', 'localhost:9092')
})
```

## Dostupné operácie
AdminClient poskytuje nasledujúce základné operácie:

1. **Vytvorenie témy**
   - Metóda: `create_topics()`
   - Účel: Vytvorenie novej Kafka témy

2. **Získanie zoznamu tém**
   - Metóda: `list_topics().topics`
   - Účel: Získanie kompletného zoznamu existujúcich tém

3. **Odstránenie témy**
   - Metóda: `delete_topics()`
   - Účel: Odstránenie existujúcej Kafka témy

## Poznámka
Všetky operácie sú vykonávané asynchrónne a nevyžadujú reštart aplikácie.

</div>