---
title: 02. Překlad v plném proudu
date: 2023-10-29
---

<PBlogHeader>
Překlad je v plném proudu
</PBlogHeader>

Vítejte u druhého hlášení o postupu překladu hry Starfield. Na překladu pracujeme přes jeden měsíc a nadešel čas jak na vyhodnocení postupu, tak i na krátké seznámení se způsobem naší práce.

Samozřejmě stále hledáme do týmu posily. Pokud ovládáte angličtinu a češtinu a chtěli byste zkusit pracovat na velkém projektu, neváhejte a vyplňte náš [náborový formulář](https://forms.gle/u8Br18iB89UpXM9N8).


## Pár čísel na začátek

Texty hry mají něco málo přes 10 milionů znaků, tedy zhruba 6000 normostran textu. To náš projekt řadí po boku největších herních překladů. Náš tým má aktuálně 8 aktivních překladatelů, kteří již přeložili 300 normostran, tedy okolo 5 %.


## Jak rozdělujeme práci

Texty k překladu máme rozdělené do 2300 překladových dávek. Každou dávku pak zpracovává jeden překladatel. Rozdělení překladu na smysluplné celky byl jeden z prvních větších technických úkolů, které jsme na začátku dělali. Někdo má za úkol přeložit názvy zbraní, jiný názvy zvířat atp.

Překlad jsme, podobně jako u Fallout 4, začali překladem nedialogových textů (statické texty, jako jsou názvy předmětů, jména postav, uživatelské rozhraní, popisky herních mechanik, …).

<PBlogFigure src="/02-rozdeleni.png" title="Tabulka s rozdělením práce" />

Největší počet dávek reprezentuje texty pro konkrétní herní questy a jejich dialogy – cca. 1800 dávek. Tyto texty zatím necháváme být a doufáme, že relativně brzy Bethesda vydá modderské nástroje, ve kterých je možné zobrazit posloupnost dialogů. Pokud by si Bethesda dávala příliš na čas, budeme si muset naprogramovat něco sami po vzoru [prohlížeče dialogů z Disco Elysium](http://prekladyher.github.io/disco-website).


## Postupně budujeme slovníček​

Začátek každého překladu je spojený s vymýšlením názvů a budováním slovníčku. Náš slovníček evidujeme ve sdílené tabulce na Google Drive. Aktuálně má již 850 hesel.


<PBlogFigure src="/02-slovnicek.png" title="Postupně budovaný slovníček" />


## Vsuvka o generovaných názvech​

Věděli jste, že názvy nestvůr ve Starfieldu jsou automaticky generované ze seznamu přívlastků a jednoduchých názvů? Názvy zvířat vznikají na základě přiřazených vlastností. Při překládání jde tedy o stejný problém, jako u zbraní a zbroje. Ve hře tak budou možná některé názvy působit kostrbatě, protože skloňování vývojáři samozřejmě řešit nepotřebovali.

<PBlogVideo src="/02-innrs.mp4" title="Ukázka generovaných názvů" />


## Technické okénko pro zvídavé​

Aby bylo možné překlad efektivně řídit, využíváme k tomu několik nástrojů. V základu máme překladatelský projekt na GitHubu, kde jsou veškeré skripty pro práci s herními soubory a se soubory překladu, které máme ve formátu Gettext PO, což je velmi rozšířený formát pro lokalizační soubory. To nám umožňuje využívat řadu dalších nástrojů.

<PBlogFigure src="/02-github.png" title="Projekt překladu na GitHubu​" />

Do lokalizačních souborů máme vytažená metadata hry tak, aby překladatel viděl, co vlastně překládá:

<PBlogFigure src="/02-gettext.png" title="Ukázka PO souboru s překladem​" />

Překladatelé nicméně nejsou nuceni pracovat s textovým souborem. Naším hlavním překladatelským nástrojem je Weblate. Jde o skvělý open-source nástroj od českých autorů.

<PBlogFigure src="/02-weblate.png" title="Přehled překladu v nástroji Weblate​​" />

Weblate nabízí hned několik výhod oproti ručnímu překládání v textových souborech nebo v obyčejné tabulce. Umožňuje evidovat slovníček a zvýrazňování slovníkových hesel v překládaném textu. Samozřejmostí je také evidence tzv. paměti překladu – tu využíváme i pro nabízení varianty strojového překladu (překladatel vidí, jak by text přeložil DeepL). A v neposlední řadě vidí překladatel polskou variantu překladu, což je velmi cenná pomůcka při řešení některých záludností (skloňování, vykání, …).

<PBlogFigure src="/02-translate.png" title="Rozhraní pro překládání v nástroji Weblate​" />


K celému mechanismu překladu je toho samozřejmě mnohem více, ale to třeba někdy příště.
