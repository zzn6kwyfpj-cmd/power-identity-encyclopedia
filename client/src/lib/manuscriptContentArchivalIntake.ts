// Royal Archive / Museum Catalog: evidence-led archival intake chapters for The Archive Encyclopedia.
// Collaboratively stewarded source material. Gold marks verified record; crimson signals contested community claims.

type ChapterContent = {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  didYouKnow?: string;
  keyDocuments?: string[];
};

export const ARCHIVAL_INTAKE_CONTENT: Record<string, ChapterContent> = {
  "captivity-classification-colonial-law": {
    slug: "captivity-classification-colonial-law",
    fullText: [
      "The archive does not support a simple origin story. It supports a documented sequence of war, captivity, forced labor, law, and recordkeeping. In colonial North America, Indigenous people were captured in war, sold within and beyond the colonies, and entered systems of servitude and slavery alongside people forcibly transported from Africa. These histories intersected, but they were not identical. The task is to recover each system in its place and then show where colonial administrations made them overlap.",
      "The Pequot War provides an early northern example. After the 1637 conflict, Pequot women and children were divided among colonial and allied authorities; records and Indigenous-partnered public history document captivity, forced labor, sale, and transfer to Caribbean and other English possessions. The same architecture developed in different forms in the Southeast, where Carolina traders and officials made captive-taking, sale, and Atlantic export part of colonial political economy.",
      "A 1701–1702 South Carolina petition accused a former governor's network of turning the Indian trade into an 'Indian or Slave-Making' enterprise. The petition is not a neutral account: it is a political charge by adversaries. Yet it is contemporaneous evidence that captive-taking was publicly recognized as a colonial issue. John Lawson's 1709 description of Carolina gives a second, independent colonial voice: he described Indigenous captives sold as slaves to the islands and referred to 'Indian Slaves in South-Carolina.'",
      "Law became the mechanism that made these practices durable. In December 1662, Virginia enacted that children born in the colony would be 'held bond or free only according to the condition of the mother.' The statute did not create every form of bondage in the English colonies, but it created a specifically hereditary rule that expanded an enslaved labor system across generations. It is one of the clearest archival links between colonial power, reproduction, and property.",
      "South Carolina and Virginia also show how administrative categories could overlap. South Carolina slavery law used Negro, mulatto, mestizo, and Indian categories within one slave-property regime. Richard B. Forbes's record-based work identifies a 1719 rule that treated enslaved people 'not entirely Indian' as Negro and documents individual Virginia cases in which labels changed across records. The original statutory facsimile remains a research priority; the responsible conclusion is narrow: some people and some communities could be reclassified by the state, and the resulting label cannot be read as a complete account of ancestry.",
      "Virginia's 1723 statute makes the machinery visible. Its title governed 'Negros, Mulattos, and Indians, bond or free,' and its provisions restricted movement, arms, testimony, manumission, taxation, and voting. The law did not erase all differences among those groups; it assigned them different exceptions and penalties. But it demonstrates that colonial government could place distinct populations in a common regime of surveillance and control.",
      "The 1740 South Carolina code intensified this pattern. It organized people described as Negro, Indian, mulatto, and mestizo within a slave-law structure while making freedom something that had to be proven. That legal arrangement is essential context for later census and enrollment records. A label on a single document often tells us what an administrator needed to record; it does not, by itself, settle a family's kinship, cultural affiliation, or citizenship.",
      "For this reason, the Encyclopedia treats the record as an archive to be read against its purpose. A family research path should move across records: census pages, Freedmen's Bureau papers, probate files, tribal censuses, enrollment jackets, military records, deeds, newspapers, and oral history. Documentary ancestry research can reconstruct relationships and historical classifications. It cannot independently confer citizenship in a sovereign Indigenous nation, which remains for each nation to determine."
    ],
    pullQuote: {
      text: "All children borne in this country shalbe held bond or free only according to the condition of the mother.",
      attribution: "Virginia General Assembly, December 1662 — Hening's Statutes at Large"
    },
    didYouKnow: "The 1790 federal census did not contain separate 'Colored' or 'Mulatto' boxes. It enumerated free White males by age, free White females, 'all other free persons,' and enslaved people. Accurate genealogy begins by checking the form actually used in the year being studied.",
    keyDocuments: [
      "Virginia General Assembly, 'Negro womens children to serve according to the condition of the mother' (1662), Hening's Statutes at Large — Tier 1",
      "Virginia General Assembly, 'An Act ... for the better government of Negros, Mulattos, and Indians, bond or free' (1723), Hening's Statutes at Large — Tier 1",
      "John Lawson, A New Voyage to Carolina (1709; supplied edition) — Tier 1 colonial narrative",
      "Almon Wheeler Lauber, Indian Slavery in Colonial Times (1913) — Tier 2 legal-history synthesis",
      "Jack D. Forbes, 'The Use of the Terms Negro and Black...' (1984) — Tier 2 record-based analysis",
      "National Archives, First Census of the United States (1790) — Tier 1"
    ]
  },
  "community-traditions-and-the-archive": {
    slug: "community-traditions-and-the-archive",
    fullText: [
      "An archive must preserve more than official power. Community historical traditions carry memory through dispossession, silence, and documents that were never created or were created to misclassify. This chapter preserves those traditions without asking them to carry an evidentiary burden they do not claim to carry. The distinction between a community tradition and a verified historical event is not a hierarchy of human worth; it is the discipline that lets both survive scrutiny.",
      "Verdiacee 'Tiara' Washitaw-Turner Goston's Return of the Ancient Ones, published in 1993, is a central community-authored text in the Washitaw de Dugdahmoundyah movement. It connects family genealogy, mound-building history, Louisiana land memory, the Louisiana Purchase, the Maison Rouge instrument, and a Black Indigenous account of the Mississippi Valley. The book is a Tier 1 source for what its author and movement asserted in 1993, and a Tier 3 source for its broad historical conclusions unless corroborated independently.",
      "The Maison Rouge question shows why this distinction matters. The United States Supreme Court held in United States v. Turner (1850) that the Carondelet–Maison Rouge instrument conveyed no private interest in land to Maison Rouge. That holding is a Tier 1 legal fact. The Washitaw community's reading of the instrument as evidence of older sovereignty is a Tier 3 historical-legal tradition. The Encyclopedia records both without presenting the court's rejected private-title theory as settled law.",
      "The same rule applies to claims about Columbus's voyage. The available public record supports the existence and sovereignty of Taíno communities encountered by Columbus. It does not authenticate the specific claim that Pietro El Negro navigated the Niña or that Columbus's journal describes a Black king, city, or cotton factory. Those assertions may be recorded as claims in a transparent dossier, with the cited page in the community text and the absence of a corroborating authenticated journal passage made visible.",
      "Earlier books in the supplied corpus demonstrate that origin theories have a long history. Montanus and Ogilby proposed multiple speculative origins for American peoples. James Adair argued for Israelite descent among Southeastern nations. Benjamin Smith Barton compared languages and traditions before modern archaeology, historical linguistics, genetics, and Indigenous-led scholarship. These works are invaluable evidence of European and early U.S. intellectual history. They are not current proof of a present-day community's ancestry or citizenship.",
      "The North American Aboriginal Society portrait and tribal-history compilation is likewise valuable as a community source index. It can lead researchers to people, photographs, place names, and local histories that deserve further work. Its incomplete citation apparatus means that every image, date, and assertion must be verified before it is used as an encyclopedia fact.",
      "The Archive Encyclopedia therefore adopts a visible claim-status method: Verified, Corroborated, Partially Verified, Contradicted, or Community Historical Tradition. Every future community submission should preserve its source image or repository link, a transcription, date, place, named people, and the exact claim. Review status—not a blanket endorsement—should be what becomes public."
    ],
    pullQuote: {
      text: "The record has to tell readers both what is known and what still requires proof.",
      attribution: "The Archive Encyclopedia — Evidence Tier Method"
    },
    didYouKnow: "A community text can be a primary source about a movement's own memory even when its historical conclusions remain unverified. That is why Tier 3 material belongs in the archive—clearly labeled, source-traceable, and never silently converted into Tier 1 fact.",
    keyDocuments: [
      "Washitaw-Turner Goston El-Bey, Verdiacee, Return of the Ancient Ones (1993) — Tier 1 for publication and stated claims; Tier 3 for historical conclusions",
      "United States v. Turner, 52 U.S. 663 (1850) — Tier 1 legal counterevidence on Maison Rouge",
      "Journal materials on Columbus and the Taíno, Library of Congress — Tier 2 source presentation",
      "James Adair, The History of the American Indians (1775) — Tier 1 intellectual-history source",
      "Benjamin Smith Barton, New Views of the Origin of the Tribes and Nations of America (1798) — Tier 1 intellectual-history source"
    ]
  }
};
