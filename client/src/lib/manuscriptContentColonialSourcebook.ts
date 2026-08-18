// Royal Archive / Museum Catalog: source-critical guide to the transferred colonial corpus.
// Collaboratively stewarded source material. This chapter identifies what each source can and cannot establish.

type ChapterContent = {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  didYouKnow?: string;
  keyDocuments?: string[];
  sourceCards?: Array<{
    year: string;
    title: string;
    locator: string;
    establishes: string;
    limitation: string;
    source: string;
    sourceUrl?: string;
  }>;
};

export const COLONIAL_SOURCEBOOK_CONTENT: Record<string, ChapterContent> = {
  "colonial-archive-sourcebook": {
    slug: "colonial-archive-sourcebook",
    fullText: [
      "This sourcebook makes the transferred and subsequently acquired colonial corpus visible as an archive rather than a collection of automatic authorities. Its twenty-three transferred works, together with the newly acquired Purchas compilation, include charters, travel narratives, promotion tracts, religious texts, colonial histories, maps, and retrospective compilations published between the sixteenth and eighteenth centuries. Each can document what its author, publisher, or colonial institution said, planned, observed, or wanted readers to believe. None can independently settle the ancestry, citizenship, culture, or sovereignty of a present-day community.",
      "The Virginia and Powhatan record group includes Thomas Hariot’s 1588 report, George Percy’s early Jamestown account, Alexander Whitaker’s 1613 religious promotional tract, John Smith’s 1624 history, William Strachey’s early-seventeenth-century manuscript history, Robert Beverley’s 1705 Virginia history, and Edward Williams’s 1650 promotional text. Together, they help trace corporate settlement, land claims, mission language, commodity ambitions, and English representations of Powhatan peoples. They must be paired with Powhatan-centered scholarship, archaeology, and surviving Indigenous records because they were produced from colonial positions of power.",
      "The New England record group contains Edward Winslow’s 1624 account, William Bradford’s Plymouth history, William Wood’s 1634 promotional description, Roger Williams’s 1643 language study, Edward Johnson’s 1654 providential history, and John Josselyn’s 1672 natural-history narrative. Bradford’s account of Tisquantum’s forced Atlantic movement and the 1621 Plymouth–Pokanoket agreement must be read alongside Wampanoag-centered interpretation: they document English records of captivity and diplomacy, not a complete Indigenous archive. Williams’s linguistic work is especially valuable because it preserves words and observations about Narragansett language, but it remains a colonial author’s text. The group can illuminate changing English descriptions of Indigenous diplomacy, language, land, and religion; it cannot replace the self-representation of the nations it describes.",
      "The Carolina and southeastern record group is central to this encyclopedia. It includes Thomas Ashe’s 1682 promotional narrative, John Archdale’s 1707 Carolina description, John Lawson’s 1709 A New Voyage to Carolina and later History of Carolina edition, and the multi-author Narratives of Early Carolina collection. These materials preserve the colony’s commercial plans, its Indian trade, its wars, and its own vocabulary of land acquisition. They provide direct but partial evidence for the Carolina Indian slave trade and for the political controversies that preceded the Yamasee War; their claims require exact edition and page checking before quotation.",
      "The Atlantic and Caribbean record group includes John Ogilby’s 1671 America, the related Montanus tradition, Richard Ligon’s 1657 Barbados history, George Frere’s 1768 Barbados history, William Dampier’s 1697 voyage, Alexandre Olivier Exquemelin’s Buccaneers history, and Samuel Purchas’s 1625 compilation. These works locate English mainland colonies within a wider Atlantic world shaped by conquest, trade, maritime violence, plantation labor, captivity, and the circulation of enslaved people. Ligon and Exquemelin are important evidence of what their texts report about plantation and conflict worlds, but they are not neutral ethnography or complete demographic records. They should be read beside legal records, shipping data, African-diaspora scholarship, and Indigenous community histories.",
      "The six later-supplied books add a second layer of historical thought. The two Montanus/Ogilby issues preserve European representations and speculative origin theories; James Adair’s 1775 book presents a Hebrew-descent thesis about Southeastern nations; Benjamin Smith Barton’s 1798 work records an early U.S. comparative approach to origins; and the North American Aboriginal Society compilation provides a modern community index of portraits and local histories. The books are useful for studying how origin stories were made and circulated. They are not current archaeological, linguistic, genetic, or citizenship evidence.",
      "A source-critical archive therefore records both content and limitation. A colonial statute can establish the words a legislature enacted. A petition can establish an accusation and public controversy. A traveler’s narrative can establish what that writer claimed to observe. A later compilation can provide a lead. None of those records alone supplies a complete family history. For Black Native American research, the necessary unit of analysis is a specific person, family, community, place, time period, and record set—not a single imposed category.",
      "Readers using this sourcebook should keep an audit trail: repository URL, edition, page or plate, transcription status, authorial position, named people and places, corroborating source, and review status. Page images should be checked whenever wording, maps, portraits, or spelling are consequential. The public record becomes stronger when it says both what a source establishes and what it cannot establish.",
      "The grand chronology now connects this corpus to a documented sequence that includes Tisquantum's 1614 abduction, the 1621 Plymouth–Pokanoket agreement, the 1661 Barbados code, the 1690 Carolina code, the 1662 Virginia hereditary-status law, the Carolina Indian slave trade, the 1723 Virginia regime, the 1740 South Carolina code, the 1783 Treaty of Paris, the 1795 Treaty of San Lorenzo, and the 1865 land-order and Freedmen’s Bureau record. This is not a claim that all people placed under colonial labels shared one ancestry. It is a record of how colonial institutions produced, transferred, and enforced categories of land, labor, status, and belonging."
    ],
    pullQuote: {
      text: "A source is evidence of what its author or institution asserted; it becomes evidence of a past event only to the extent that its claim is dateable, locatable, and corroborated.",
      attribution: "The Archive Encyclopedia — Whole-Record Evidence Standard"
    },
    didYouKnow: "The transferred and expanded workspace preserves lawful access routes for twenty-four early-colonial works, plus modern scholarly and codex research leads. OCR is a research aid, not a substitute for checking the relevant page image before quoting a historical text.",
    keyDocuments: [
      "Thomas Hariot, A Briefe and True Report of the New Found Land of Virginia (1588) — Tier 1 colonial promotional text",
      "George Percy, Observations on the Southern Colony in Virginia (1607; later publication) — Tier 1 colonial narrative",
      "Alexander Whitaker, Good Newes from Virginia (1613) — Tier 1 missionary promotional tract",
      "John Smith, The Generall Historie of Virginia, New-England, and the Summer Isles (1624) — Tier 1 colonial narrative",
      "Edward Winslow, Good Newes from New-England (1624); William Bradford, Of Plymouth Plantation — Tier 1 colonial/Pilgrim records",
      "William Wood, New England’s Prospect (1634); Roger Williams, A Key into the Language of America (1643) — Tier 1 colonial descriptions",
      "Edward Johnson, Wonder-Working Providence (1654); John Josselyn, New-England’s Rarities (1672) — Tier 1 colonial narratives",
      "Richard Ligon, A True and Exact History of Barbados (1657); George Frere, A Short History of Barbados (1768) — Tier 1 Atlantic/Caribbean records",
      "Thomas Ashe, Carolina (1682); John Archdale, A New Description of Carolina (1707); Narratives of Early Carolina — Tier 1 colonial source cluster",
      "William Dampier, A New Voyage Round the World (1697); Alexandre Olivier Exquemelin, History of the Buccaneers of America — Tier 1 maritime narratives",
      "John Lawson, A New Voyage to Carolina (1709) and History of Carolina edition history — Tier 1 colonial narrative",
      "John Ogilby / Arnoldus Montanus, America (1670–1671); James Adair (1775); Benjamin Smith Barton (1798) — Tier 1 intellectual-history sources",
      "North American Aboriginal Society, The Book of North American Tribes, Chiefs, Warriors & Their Stories (2019) — Tier 3 community source index"
    ],
    sourceCards: [
      {
        year: "1588",
        title: "Thomas Hariot, A Briefe and True Report",
        locator: "1590 English de Bry facsimile (UNC-Chapel Hill); title-page image and page-marked text reproduction",
        establishes: "The tract provides direct evidence of an English promoter’s stated commodity, settlement, and investment program, including reliance on local knowledge for provisions.",
        limitation: "It is promotional colonial writing, not an Indigenous account of consent, sovereignty, or social life. A page image must be checked before a public direct quotation is added.",
        source: "Thomas Hariot, A Briefe and True Report of the New Found Land of Virginia (1588)",
        sourceUrl: "https://docsouth.unc.edu/nc/hariot/hariot.html"
      },
      {
        year: "1613",
        title: "Alexander Whitaker, Good Newes from Virginia",
        locator: "1613 London printing; EEBO-TCP main tract, stable division 1:4; Internet Archive scan retained as facsimile route",
        establishes: "The tract documents a Virginia Company–era minister’s effort to connect plantation, conversion, English settlement, and colonial legitimacy.",
        limitation: "It cannot establish Indigenous belief, consent, or the lived effect of mission policy. Its genre and advocacy must remain visible.",
        source: "Alexander Whitaker, Good Newes from Virginia (1613)",
        sourceUrl: "https://quod.lib.umich.edu/e/eebo/A15050.0001.001/1:4?rgn=div1;view=fulltext"
      },
      {
        year: "1621",
        title: "William Bradford, Of Plymouth Plantation",
        locator: "1898 state edition, p. 58 page-image anchor (within pp. 57–59, Tisquantum passage); original manuscript held by the State Library of Massachusetts",
        establishes: "Bradford records an English account of Thomas Hunt’s seizure of Tisquantum and other captives, supporting the timeline’s narrowly stated captivity event when paired with institutional context.",
        limitation: "The citation is a later transcription of a colonial manuscript, not a complete Wampanoag archive. The account does not prove a complete route, sale outcome, or Indigenous interpretation on its own.",
        source: "William Bradford, Of Plymouth Plantation; Plimoth Patuxet Museums contextual materials",
        sourceUrl: "https://archive.org/details/bradfordsh00brad/page/58/mode/1up"
      },
      {
        year: "1657",
        title: "Richard Ligon, A True and Exact History of Barbados",
        locator: "1657 Getty Research Institute copy, printed p. 22 (500-acre plantation passage immediately before printed p. 23); Internet Archive page-image anchor",
        establishes: "Ligon’s text provides firsthand-era evidence of one writer’s description of sugar production, forced labor, provisions, and plantation organization in Barbados.",
        limitation: "It is neither a full demographic record nor a complete legal account. The Barbados code and other records remain stronger evidence for statutory rules and enslaved people’s experience requires additional sources.",
        source: "Richard Ligon, A True and Exact History of the Island of Barbados (1657)",
        sourceUrl: "https://archive.org/details/trueexacthistory00ligo/page/n43/mode/1up"
      },
      {
        year: "1624",
        title: "John Smith, The Generall Historie",
        locator: "1907 printed edition of Smith’s 1624 work; Internet Archive page-image anchor at the title/front-matter scan",
        establishes: "The work is a colonial author’s retrospective narrative of English ventures in Virginia, New England, and Bermuda and is a traceable source for the author’s representations of settlement and Indigenous peoples.",
        limitation: "A later printed edition does not independently verify every retrospective claim. The narrative cannot substitute for Powhatan- or other Indigenous-centered records, and no direct quotation is used here without a page-specific check.",
        source: "John Smith, The Generall Historie of Virginia, New-England, and the Summer Isles (1624; 1907 edition)",
        sourceUrl: "https://archive.org/details/generallhistorie01smit/page/n5/mode/1up"
      },
      {
        year: "1624",
        title: "Edward Winslow, Good Newes from New-England",
        locator: "1624 London printing; Boston Public Library / John Adams Library copy; Internet Archive title-page image anchor",
        establishes: "The work documents a Plymouth colonist’s account of the plantation and of the author’s stated descriptions of Indigenous laws and customs.",
        limitation: "It is a colonial English narrative and cannot replace Wampanoag self-representation or establish the complete meaning of diplomacy, law, or community life from an Indigenous perspective.",
        source: "Edward Winslow, Good Newes from New-England (1624)",
        sourceUrl: "https://archive.org/details/goodnewesfromnew00wins/page/n5/mode/1up"
      },
      {
        year: "1634",
        title: "William Wood, New Englands Prospect",
        locator: "1634 London printing; John Carter Brown Library copy; Internet Archive title-page and map-image route",
        establishes: "The text documents an English promotional description addressed to potential planters and includes a surviving Massachuset vocabulary section and 1634 map context.",
        limitation: "Promotion and colonial description are not neutral ethnography. The work cannot establish Indigenous consent, sovereignty, or the complete meaning of the language it records.",
        source: "William Wood, New Englands Prospect (1634)",
        sourceUrl: "https://archive.org/details/newenglandsprosp01wood/page/n5/mode/1up"
      },
      {
        year: "1612 / 1849",
        title: "William Strachey, The Historie of Travaile into Virginia Britannia",
        locator: "Strachey manuscript completed c. 1612; Hakluyt Society printed edition, 1849; Internet Archive title-page image anchor",
        establishes: "The edition makes available an early Virginia manuscript narrative concerned with cosmography, commodities, and English descriptions of the colony and the people it encountered.",
        limitation: "The public version is an 1849 edited printing of an earlier manuscript. It requires manuscript and page comparison before a consequential quotation, and it cannot stand alone for Indigenous history.",
        source: "William Strachey, The Historie of Travaile into Virginia Britannia (c. 1612; ed. 1849)",
        sourceUrl: "https://archive.org/details/historietravail00majogoog/page/n5/mode/1up"
      },
      {
        year: "1643",
        title: "Roger Williams, A Key into the Language of America",
        locator: "Original London publication, 1643; public facsimile edition with title-page image anchor",
        establishes: "Williams’s work preserves a colonial-era linguistic and observational record concerning Narragansett language and English contact in the region.",
        limitation: "The text is not a Narragansett-authored authority, and a later facsimile does not remove the need for language-community and Indigenous scholarship before interpreting a word or practice.",
        source: "Roger Williams, A Key into the Language of America (1643; facsimile edition)",
        sourceUrl: "https://archive.org/details/bub_gb_wOfpAPRxlVYC/page/n5/mode/1up"
      },
      {
        year: "1672",
        title: "John Josselyn, New-England’s Rarities",
        locator: "1672 London work; 1865 edition reproducing the original title page; Internet Archive title-page image anchor",
        establishes: "The work records a colonial author’s natural-history and regional observations, including statements about Indigenous people and practices as the author represented them.",
        limitation: "Its natural-history genre, later edition, and colonial standpoint limit what it can establish about Indigenous knowledge, social life, or sovereignty without corroboration.",
        source: "John Josselyn, New-England’s Rarities Discovered (1672; 1865 edition)",
        sourceUrl: "https://archive.org/details/newenglandsrarit00joss/page/n5/mode/1up"
      },
      {
        year: "1705",
        title: "Robert Beverley, The History and Present State of Virginia",
        locator: "1705 London edition; UNC-Chapel Hill page-marked electronic facsimile and Internet Archive page-image route",
        establishes: "The book organizes a Virginia colonist’s account into settlement history, natural productions, descriptions of Native Indians, and colonial government, making its authorial representations traceable by page.",
        limitation: "Beverley’s claims about Indigenous religion, law, custom, and colonial history are colonial representations, not self-authored Indigenous records or standalone proof of community identity.",
        source: "Robert Beverley, The History and Present State of Virginia (1705)",
        sourceUrl: "https://docsouth.unc.edu/southlit/beverley/beverley.html"
      }
    ]
  }
};
