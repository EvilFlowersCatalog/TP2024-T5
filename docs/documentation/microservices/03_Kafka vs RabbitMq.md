<div style={{ textAlign: 'justify' }}>

### **Kafka**
- Navrhnutý na spracovanie veľkého množstva dát.
- Nízka latencia umožňuje spracovanie a analýzu dát v reálnom čase.
- Poskytuje možnosť použitia voľby committed, ktorá zabezpečuje, že iný proces nemôže pristupovať k už spracovanej úlohe.
- Pri veľkých úlohách ich môžeme rozdeliť na menšie medzikroky a výsledky priebežne zapisovať ako medzivýsledky.
- Podporuje transakčné spracovanie – ak jeden konzument zlyhá, iný môže pokračovať tam, kde predchádzajúci skončil.
- Funkcia presného spracovania správ (**exactly-once semantics**) zabezpečuje, že každá správa sa spracuje iba raz.
- Skupiny konzumentov (**consumer groups**):
- Môžu obsahovať viacero konzumentov.
- Každú partíciu témy Kafka môže čítať len jeden konzument zo skupiny konzumentov.

### **RabbitMQ**
- Väčšia flexibilita pri smerovaní správ.
- **Push model**: Systém vie, či bola správa spotrebovaná.
- Navrhnutý na komplexné smerovanie správ.

**Možnosti a funkcie RabbitMQ:**
- Vytváranie základného pracovníka (**worker**), ktorý komunikuje s monolitickou aplikáciou.
- Efektívne využitie správy zdrojov v Kubernetes.
- Schopnosť zisťovať výsledky úloh vo fronte.
- Podpora spätného kroku (**steps reversing**) pri potrebe návratu v procese.
- Korelácia úloh a odhad časovej náročnosti.
- Správy môžu byť spustené v určitom čase po ich zaradení do fronty.
- Vytvorenie sekvenčného diagramu služieb:
- Znázorňuje komunikáciu medzi jednotlivými časťami systému.
- Identifikácia toho, čo bude predstavovať udalosť.
- Mikroslužby dokážu spravovať súbory.
- Možnosť vytvárať udalosti.
</div>