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
        locator: "1588 edition; Internet Archive / Project Gutenberg working text; exact page-image quotation not yet published",
        establishes: "The tract provides direct evidence of an English promoter’s stated commodity, settlement, and investment program, including reliance on local knowledge for provisions.",
        limitation: "It is promotional colonial writing, not an Indigenous account of consent, sovereignty, or social life. A page image must be checked before a public direct quotation is added.",
        source: "Thomas Hariot, A Briefe and True Report of the New Found Land of Virginia (1588)"
      },
      {
        year: "1613",
        title: "Alexander Whitaker, Good Newes from Virginia",
        locator: "1613 John Carter Brown Library scan; working text indexed; exact page-image quotation not yet published",
        establishes: "The tract documents a Virginia Company–era minister’s effort to connect plantation, conversion, English settlement, and colonial legitimacy.",
        limitation: "It cannot establish Indigenous belief, consent, or the lived effect of mission policy. Its genre and advocacy must remain visible.",
        source: "Alexander Whitaker, Good Newes from Virginia (1613)"
      },
      {
        year: "1621",
        title: "William Bradford, Of Plymouth Plantation",
        locator: "1898 transcription, pp. 57–59, for the Tisquantum passage; colonial manuscript tradition",
        establishes: "Bradford records an English account of Thomas Hunt’s seizure of Tisquantum and other captives, supporting the timeline’s narrowly stated captivity event when paired with institutional context.",
        limitation: "The citation is a later transcription of a colonial manuscript, not a complete Wampanoag archive. The account does not prove a complete route, sale outcome, or Indigenous interpretation on its own.",
        source: "William Bradford, Of Plymouth Plantation; Plimoth Patuxet Museums contextual materials"
      },
      {
        year: "1657",
        title: "Richard Ligon, A True and Exact History of Barbados",
        locator: "1657 Internet Archive / Getty Research Institute scan; plantation-labor passages indexed; exact page-image quotation not yet published",
        establishes: "Ligon’s text provides firsthand-era evidence of one writer’s description of sugar production, forced labor, provisions, and plantation organization in Barbados.",
        limitation: "It is neither a full demographic record nor a complete legal account. The Barbados code and other records remain stronger evidence for statutory rules and enslaved people’s experience requires additional sources.",
        source: "Richard Ligon, A True and Exact History of the Island of Barbados (1657)"
      }
    ]
  }
};
