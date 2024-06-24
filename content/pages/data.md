---
title: 'Daten'
url: "/data/"
layout: data
---

[Data2](/data2/)

## Warum wir eine Datenauswertung machen

![](/images/wordcloud.png)

In fünf Panels, mit 12 Vorträgen von 16 Speaker*innen, moderiert durch 5 Chairs, durch Panel-Diskussionen und einen Keynote Vortrag hat die Konferenz Einblicke in aktuelle marxistische Perspektiven in der Kunstwissenschaft geliefert und politische Diskussionen darüber aufgemacht.

Um die Diskussionen und Referenzen der Konferenz systematisch zu untersuchen, führen wir eine umfassende Datenauswertung durch. Unser Ziel ist es, die Vielfalt und Repräsentanz der referenzierten Quellen zu beleuchten. Dabei geht es um die Untersuchung von Häufigkeiten, Lebzeiten, Geschlecht, akademischen Graden, Wirkungs- und Geburtsorten der genannten Personen. 

Die Auswertungen helfen uns, ein besseres Verständnis für die Referenzierungspraktiken, wissenschaftliche Netzwerke und Beziehungen in der marxistischen Kunstwissenschaft zu entwickeln und bieten eine Grundlage für weitere Diskussionen über Diversität und Repräsentanz.

## Limitationen

Aufgrund der Datenverfügbarkeit sind unsere Analysen vorerst auf die Kategorien Kontinent und Lebenszeit beschränkt. Nicht alle benötigten Informationen zu Geschlecht, akademischem Grad, Wirkungsort und Geburtsort der referenzierten Personen wurden vollständig erfasst, und dies bedeutet, dass wir derzeit nur die beiden erwähnten Aspekte untersuchen. Für weitere Arbeiten könnten die Daten in diesen zusätzlichen Kategorien umfassender gesammelt werden um dann auch diese zu analysieren.

### Gender im Datensatz

Für die Kategorie Geschlecht haben wir uns auf Informationen aus Wikipedia-Einträgen beschränkt, da diese eine eindeutige Geschlechtszuweisung enthalten. Wir sind uns jedoch bewusst, dass diese Zuweisung keine selbstgewählte Bezeichnung darstellt und damit eine gewisse Fremdzuschreibung beinhaltet. Dies stellt einen Kompromiss dar, um diese wichtige Kategorie dennoch abbilden zu können. Personen ohne Wikipedia Eintrag werden in dieser Kategorie nicht erfasst.

## Visualisierte Daten

Die Ergebnisse unserer Analyse werden durch verschiedene Charts visualisiert, um die Daten zugänglich und verständlich zu machen. Auf den folgenden Grafiken können Sie sehen, welche Personen in den Vorträgen referenziert wurden, geordnet nach den Kriterien Kontinent und Lebenszeit.

1. Referenzen nach Kontinent und nach Gender:

Diese Grafik zeigt die geografische Verteilung der referenzierten Personen. Sie bietet einen Überblick darüber, welche Kontinente in den Vorträgen dominieren und ob es eine ausgewogene globale Repräsentation gibt.

<!-- Create a div where the graph will take place -->
<input type="checkbox" id="cbAliveOnly_gender" onClick='parseData("gender")'>nur lebende Berücksichtigen</input>
<div id="piedata_gender"></div>

<input type="checkbox" id="cbAliveOnly_POB" onClick='parseData("POB")'>nur lebende Berücksichtigen</input>
<div id="piedata_POB"></div>

2. Referenzen nach Lebenszeit:

Diese Grafik illustriert die zeitliche Verteilung der referenzierten Personen. Sie zeigt, in welchen Zeiträumen die am häufigsten genannten Personen gelebt haben und ob es eine Tendenz zur Referenzierung historischer oder zeitgenössischer Persönlichkeiten gibt.

Diese Auswertungen helfen uns, ein besseres Verständnis für die Referenzierungspraktiken in der marxistischen Kunstwissenschaft zu entwickeln und bieten eine Grundlage für weitere Diskussionen über Diversität und Repräsentanz.

<div id="histdata"></div>

