### **Témy a partície**
##### **Téma (Topic)**
<div style={{ textAlign: 'justify' }}>
Predstavuje kategóriu alebo tok udalostí, ktoré spolu súvisia, napríklad:
- registrácia používateľov,
- kliknutia na webovej stránke.
- Každá téma je rozdelená na **partície**.

##### **Partície**
- Partície sú usporiadané sekvencie udalostí.
- Každá partícia je replikovaná na viacerých brokeroch, aby bola zabezpečená odolnosť voči chybám.


### **Producenti a konzumenti**
##### **Producent (Producer)**
- Generuje udalosti a odosiela ich do tém v Kafke.

##### **Konzument (Consumer)**
- Číta udalosti z tém v Kafke a následne ich spracováva.
- Konzument môže byť súčasťou skupiny konzumentov (**consumer group**), čo umožňuje:
- rovnomerné rozdelenie záťaže pri spracovaní udalostí.


### **Brokeri a klastre**
##### **Brokeri (Brokers)**
- Servery, na ktorých beží Kafka a kde sú uložené dáta udalostí.

##### **Klastr (Cluster)**
- Skupina brokerov, ktorí spolupracujú na vytvorení vysoko dostupnej a škálovateľnej platformy.

##### **Správy (Messages)**
- Správy sú trvácne a predvolene sa uchovávajú 7 dní pred ich vymazaním.
- Ak spracovanie zlyhá, je možné reštartovať kód konzumenta od posledného neuloženého posunu správy (**offset**), pričom sa správa spracuje znova.

</div>