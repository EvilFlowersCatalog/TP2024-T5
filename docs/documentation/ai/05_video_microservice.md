# Video microservice
<div style={{ textAlign: 'justify' }}>
   *Video microservice* je mikroslužba zodpovedná za spracovanie audiovizuálnych záznamov z prednášok, ktoré by sa mali v budúcnosti stať súčasťou univerzitnej knižnice ELVIRA. Hlavná funkcionalita spočíva v extrakcii audia z videozáznamov a jeho následného prepisu do textovej podoby s podporou rôznych jazykov.

   Na prácu s videom sme použili Python knižnicu ***moviepy***, pomocou ktorej extrahujeme audio. Extrahované audio je uložené do dočasného súboru vo formáte .mp3, ktorý je po jeho spracovaní odstránený.
   
   Na samotný prepis textu používame model neurónovej siete ***Whisper large-v3***, ktorý je dostupný na platforme *Hugging Face*. Ide o robustný state-of-the-art model, ktorý podporuje až 99 jazykov a má vysokú schopnosť generalizácie, čo mu umožňuje efektívne fungovať v rôznych doménach a kontextoch. Avšak, architektúra mikroslužby umožňuje integrovať aj iné modely, ktoré sú súčasťou *Hugging Face*. Model použitý na prepis textu možno nastavovať pomocou environmentálnej premennej, pričom vybraný model musí byť implementovaný v rámci mikroslužby ako trieda vychádzajúca z rozhrania definujúceho modely so všetkými potrebnými metódami.  
</div>

### UML diagram

<div style={{ textAlign: 'justify' }}>
   Vzťahy medzi hlavnými triedami mikroslužby sme znázornili pomocou UML diagramu nižšie. Tento diagram obsahuje nasledujúce elementy:

   - **ModelInterface** - abstraktné rozhranie, ktoré definuje metódu *audio_to_text*
   - **Whisper** - predstavuje príklad modelu na transkripciu audia, ktorý je implementovaný pomocou rozhrania *ModelInterface*
   - **AudioExtractor** - obsahuje metódu *extract_audio*, ktorá spracováva video a extrahuje z neho audio
   - **AudioProcessor** - spracováva audio a používa zvolený model (napr. *Whisper*) na prepis audia na text
   - **VideoService** - hlavná trieda, ktorá zabezpečuje celý proces: volá *AudioExtractor* na získanie audia a *AudioProcessor* na jeho prepis
</div>

![ilustration-image](/img/ai_doc/UML_diagram_video_service.png)

### Sekvenčný diagram

<div style={{ textAlign: 'justify' }}>
   Sekvenčným diagramom sme znázornili postupnosť volaní medzi komponentmi mikroslužby. Poskytuje prehľad o dynamickej interakcii medzi jednotlivými časťami mikroslužby počas jej behu:

   1. Používateľ poskytne cestu k videozáznamu.
   2. V rámci *main* funkcie *VideoService* inicializuje proces spracovania.
   3. *AudioExtractor* extrahuje audio z videozáznamu.
   4. *AudioProcessor* získava transkripciu extrahovaného audia využitím príslušného modelu, napr. *Whisper*.
   5. Výsledkom procesu je transkripcia audia vo forme textu.
</div>

![ilustration-image](/img/ai_doc/sequence_diagram_video_service.png)
