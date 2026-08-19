// Royal Manuscript evidence index: midnight archive field, antique-gold labels, and explicit limits on every record.
// This initial public dataset exposes only source cards and legal records that already carry a public route and a limit statement.

import { COLONIAL_SOURCEBOOK_CONTENT } from "./manuscriptContentColonialSourcebook";
import { FINAL_3_CONTENT } from "./manuscriptContentFinal3";
import { GAPS_CONTENT } from "./manuscriptContentGaps";
import { LEGAL_RECORDS } from "./legalRecordMetadata";

export type SourceClaimIndexItem = {
  id: string;
  yearLabel: string;
  sortYear: number;
  title: string;
  tier: "Tier 1 — Primary record" | "Tier 2 — Scholarly analysis" | "Tier 3 — Community historical tradition";
  topic: string;
  region: string;
  sourceType: string;
  verification: "Institutional record" | "Nation-authored record" | "Stable facsimile / edition route" | "Linked chapter evidence card" | "Author-attributed research";
  establishes: string;
  limitation: string;
  citation: string;
  sourceUrl?: string;
  chapterSlug: string;
};

const firstYear = (value: string) => Number(value.match(/\d{4}/)?.[0] ?? 9999);

function legalTopic(recordKey: string) {
  if (recordKey.includes("cherokee") || recordKey.includes("indian_appropriations")) {
    return { topic: "Treaty & Sovereignty", chapterSlug: "treaties-broken-promises" };
  }
  if (recordKey.includes("freedmens") || recordKey.includes("field_order") || recordKey.includes("land_restoration")) {
    return { topic: "Freedmen’s Bureau & Land", chapterSlug: "freedmens-bureau" };
  }
  if (
    /fifteenth|enforcement|kkk_act|reese|smith_allwright|twenty_fourth|harper|katzenbach|allen|gaston|city_of_rome|vra|mississippi|alabama|north_carolina/.test(recordKey)
  ) {
    return { topic: "Voting Rights & Enforcement", chapterSlug: "civil-rights-acts" };
  }
  if (/civil_rights|fourteenth|fair_housing/.test(recordKey)) {
    return { topic: "Civil Rights Law", chapterSlug: "civil-rights-acts" };
  }
  return { topic: "Classification & State Law", chapterSlug: "captivity-classification-colonial-law" };
}

const legalItems: SourceClaimIndexItem[] = Object.entries(LEGAL_RECORDS).map(([id, record]) => {
  const { topic, chapterSlug } = legalTopic(id);
  return {
    id: `legal-${id}`,
    yearLabel: record.citation.match(/\b\d{4}\b/)?.[0] ?? "Undated",
    sortYear: firstYear(record.citation),
    title: record.citation,
    tier: "Tier 1 — Primary record",
    topic,
    region: record.jurisdiction,
    sourceType: record.recordType,
    verification: "Institutional record",
    establishes: record.mechanism,
    limitation: record.documentedLimit,
    citation: record.citation,
    sourceUrl: record.sourceUrl,
    chapterSlug,
  };
});

const colonialCards = COLONIAL_SOURCEBOOK_CONTENT["colonial-archive-sourcebook"].sourceCards ?? [];

const colonialItems: SourceClaimIndexItem[] = colonialCards.map((card, index) => ({
  id: `colonial-${index}-${card.year}`,
  yearLabel: card.year,
  sortYear: firstYear(card.year),
  title: card.title,
  tier: "Tier 1 — Primary record",
  topic: "Colonial Archive",
  region: "Atlantic, Caribbean, and colonial North America",
  sourceType: "Colonial narrative / edition",
  verification: "Stable facsimile / edition route",
  establishes: card.establishes,
  limitation: card.limitation,
  citation: card.source,
  sourceUrl: card.sourceUrl,
  chapterSlug: "colonial-archive-sourcebook",
}));

type ChapterSourceCard = {
  year: string;
  title: string;
  locator: string;
  establishes: string;
  limitation: string;
  source: string;
  sourceUrl?: string;
};

const chapterSourceUrlOverrides: Record<string, string> = {
  "Civil Rights Act of 1866": LEGAL_RECORDS["1866_civil_rights_act"].sourceUrl,
  "Fourteenth Amendment": LEGAL_RECORDS["1868_fourteenth_amendment"].sourceUrl,
  "Enforcement Acts and the Ku Klux Klan Act": LEGAL_RECORDS["1870_enforcement_act"].sourceUrl,
  "Civil Rights Act of 1875": LEGAL_RECORDS["1875_civil_rights_act"].sourceUrl,
  "United States v. Cruikshank": LEGAL_RECORDS["1876_cruikshank"].sourceUrl,
  "United States v. Reese": LEGAL_RECORDS["1876_reese"].sourceUrl,
};

function chapterCardType(title: string) {
  if (/v\.|county|city of rome|katzenbach|harper|allen/i.test(title)) return "Court decision";
  if (/amendment/i.test(title)) return "Constitutional amendment";
  if (/circular/i.test(title)) return "Administrative circular";
  if (/field orders/i.test(title)) return "Executive / military order";
  if (/register|case file/i.test(title)) return "Archival register / case file";
  return "Statute / chapter evidence card";
}

function chapterCardsToIndex(
  cards: ChapterSourceCard[],
  chapterSlug: string,
  topic: string,
  region: string,
  collection: string,
): SourceClaimIndexItem[] {
  return cards.map((card, index) => ({
    id: `chapter-${collection}-${index}-${card.year}`,
    yearLabel: card.year,
    sortYear: firstYear(card.year),
    title: card.title,
    tier: "Tier 1 — Primary record",
    topic,
    region,
    sourceType: chapterCardType(card.title),
    verification: "Linked chapter evidence card",
    establishes: card.establishes,
    limitation: card.limitation,
    citation: `${card.source} · ${card.locator}`,
    sourceUrl: card.sourceUrl ?? chapterSourceUrlOverrides[card.title],
    chapterSlug,
  }));
}

const freedmensCards = (GAPS_CONTENT["freedmens-bureau"]?.sourceCards ?? []) as ChapterSourceCard[];
const civilRightsCards = (FINAL_3_CONTENT["civil-rights-acts"]?.sourceCards ?? []) as ChapterSourceCard[];

const chapterEvidenceItems = [
  ...chapterCardsToIndex(freedmensCards, "freedmens-bureau", "Freedmen’s Bureau & Land", "Federal Reconstruction and Louisiana", "freedmens-bureau"),
  ...chapterCardsToIndex(civilRightsCards, "civil-rights-acts", "Civil Rights & Voting", "Federal and state civil-rights enforcement", "civil-rights"),
];

const leeMcQueenEvidenceItems: SourceClaimIndexItem[] = [
  {
    id: "institutional-1890-census-loss",
    yearLabel: "1921–1933",
    sortYear: 1921,
    title: "1890 U.S. Census: fire, salvage, and authorized disposal",
    tier: "Tier 1 — Primary record",
    topic: "Census & Classification",
    region: "United States federal records",
    sourceType: "Federal records / research guide",
    verification: "Institutional record",
    establishes: "Most 1890 population schedules were damaged or destroyed in the January 10, 1921 fire; limited fragments and related record series survive; Congress authorized disposal of unsalvageable schedules on February 21, 1933.",
    limitation: "The loss creates a documented research gap. It does not itself prove a person’s ancestry, an identity change, a motive for erasure, or a universal classification process.",
    citation: "U.S. Census Bureau, ‘History and the Census: 1890 Census Fire’; National Archives, ‘1890 Census’",
    sourceUrl: "https://www.archives.gov/research/census/1890",
    chapterSlug: "black-native-american-identity",
  },
  {
    id: "institutional-elaine-moore-dempsey",
    yearLabel: "1919–1923",
    sortYear: 1919,
    title: "Elaine violence and Moore v. Dempsey",
    tier: "Tier 1 — Primary record",
    topic: "Racial Violence & Due Process",
    region: "Phillips County, Arkansas; United States Supreme Court",
    sourceType: "Court decision / historical record",
    verification: "Institutional record",
    establishes: "Moore v. Dempsey held that a state trial hurried to conviction under mob domination, without due process, is void and may require federal factual review through habeas corpus.",
    limitation: "The decision does not determine the defendants’ factual guilt or innocence, resolve every reported event at Elaine, or establish a single uncontested death total for the 1919 violence.",
    citation: "Moore v. Dempsey, 261 U.S. 86 (1923); Federal Judicial Center; Encyclopedia of Arkansas",
    sourceUrl: "https://www.fjc.gov/history/cases/cases-that-shaped-the-federal-courts/moore-v-dempsey",
    chapterSlug: "civil-rights-acts",
  },
  {
    id: "lee-mcqueen-corpus",
    yearLabel: "2026",
    sortYear: 2026,
    title: "Lee McQueen: The Black Americans series and related essays",
    tier: "Tier 3 — Community historical tradition",
    topic: "Community Research & Theory",
    region: "United States and Atlantic-world claims",
    sourceType: "Author-attributed research corpus",
    verification: "Author-attributed research",
    establishes: "A credited community-research corpus that raises leads about archival classification, genealogy, Elaine, reparations, image provenance, and pre-Columbian/Atlantis interpretations.",
    limitation: "This corpus is not a substitute for a traceable primary record or peer-reviewed finding. Its Atlantis, Richat, Ice Age diaspora, and universal-origin propositions remain attributed Tier 3 theory; each historical lead requires independent verification before publication as fact.",
    citation: "Lee McQueen, supplied PDFs: The Black Americans, Parts 1–5; The Vanishing of Elaine; Juneteenth and the Texas Slave Narrative; Legal Brief and Open Letter on Reparations; This Is America photo album; Atlantis essays (reviewed 2026)",
    chapterSlug: "black-native-american-identity",
  },
];

const pre850TurtleIslandEvidenceItems: SourceClaimIndexItem[] = [
  {
    id: "oneida-haudenosaunee-creation-account",
    yearLabel: "Undated tradition; public page accessed 2026",
    sortYear: 0,
    title: "Oneida Indian Nation: Haudenosaunee creation account",
    tier: "Tier 1 — Primary record",
    topic: "Indigenous Knowledge Traditions",
    region: "Oneida Indian Nation / Haudenosaunee",
    sourceType: "Nation-authored history",
    verification: "Nation-authored record",
    establishes: "The Oneida Indian Nation publicly presents a Haudenosaunee creation account, attributed on the page to Keller George’s maternal great-grandmother’s telling, in which Sky Woman, water animals, and turtle-backed earth form North America as a great island.",
    limitation: "A nation-specific sacred/traditional account is not archaeological evidence, a universal Indigenous name for the Americas, or a factual geological chronology. The archive does not use it to infer a universal origin, phenotype, ancestry, or citizenship conclusion.",
    citation: "Oneida Indian Nation, ‘The Haudenosaunee creation story’",
    sourceUrl: "https://www.oneidaindiannation.com/the-haudenosaunee-creation-story",
    chapterSlug: "turtle-island-niji",
  },
  {
    id: "nps-indigenous-archaeological-deep-history",
    yearLabel: "Institutional overview accessed 2026",
    sortYear: 0,
    title: "National Park Service: Indigenous archaeological deep-history frame",
    tier: "Tier 2 — Scholarly analysis",
    topic: "Pre-850 Chronology",
    region: "Americas",
    sourceType: "Institutional archaeological overview",
    verification: "Institutional record",
    establishes: "The National Park Service states that archaeologists and Native Americans generally agree that a sustainable population lived in the Americas by the end of the last ice age, about 15,000 years before present, while recognizing disagreement about when and how the peopling of the Americas occurred.",
    limitation: "This is an archaeological overview, not a substitute for individual nations’ histories or knowledge traditions. It does not establish a universal origin story, a single population history, a person’s ancestry, or current citizenship.",
    citation: "National Park Service, ‘Native Americans – Archeology’",
    sourceUrl: "https://www.nps.gov/subjects/archeology/native-americans.htm",
    chapterSlug: "turtle-island-niji",
  },
];

const censusInstructionEvidenceItems: SourceClaimIndexItem[] = [
  {
    id: "1930-census-racial-classification-instructions",
    yearLabel: "1930",
    sortYear: 1930,
    title: "1930 Census racial-classification instructions",
    tier: "Tier 1 — Primary record",
    topic: "Census Classification",
    region: "United States",
    sourceType: "Federal administrative instruction",
    verification: "Institutional record",
    establishes: "The Census Bureau directed enumerators to return mixed White–Negro ancestry as Negro regardless of percentage; mixed Indian–Negro ancestry as Negro unless Indian blood predominated and the person was generally accepted as Indian in the community; and mixed White–Indian ancestry as Indian subject to stated exceptions.",
    limitation: "The instructions are evidence of federal administrative sorting. They do not establish a person’s complete genealogy, quantify their aggregate impact, determine community affiliation, or decide sovereign tribal citizenship.",
    citation: "U.S. Census Bureau, ‘1930 Census Instructions to Enumerators’",
    sourceUrl: "https://www.census.gov/programs-surveys/decennial-census/technical-documentation/questionnaires/1930/1930-instructions.html",
    chapterSlug: "black-native-american-identity",
  },
];

const a00EvidenceItems: SourceClaimIndexItem[] = [
  {
    id: "mendez-2013-a00-y-chromosome",
    yearLabel: "2013",
    sortYear: 2013,
    title: "A00 Y-chromosome lineage in an African American sample",
    tier: "Tier 2 — Scholarly analysis",
    topic: "Genetics & Evidence Limits",
    region: "African diaspora; western Cameroon comparison sample",
    sourceType: "Peer-reviewed genetic study",
    verification: "Institutional record",
    establishes: "Mendez and colleagues reported an A00 Y chromosome in an African American consumer sample, sequenced approximately 240 kb, and identified related A00 lineages in a sampled Mbo population in western Cameroon. The paper acknowledges descendants of Albert Perry of South Carolina among contributors.",
    limitation: "A Y chromosome follows one direct paternal line only. The study cautions that a single locus cannot establish geographic population origins; it does not prove Indigenous ancestry in the Americas, nationality, tribal affiliation, citizenship, or a universal origin story. Its time estimates are model-dependent.",
    citation: "Mendez et al., American Journal of Human Genetics 92(3), 2013, PMCID: PMC3591855",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3591855/",
    chapterSlug: "counter-narrative",
  },
];

const tiktokHistoryVerifiedEvidenceItems: SourceClaimIndexItem[] = [
  {
    id: "king-philips-war-overseas-captivity",
    yearLabel: "1675–1677",
    sortYear: 1675,
    title: "King Philip’s War: Indigenous captivity and overseas forced movement",
    tier: "Tier 1 — Primary record",
    topic: "Indigenous Captivity & Forced Movement",
    region: "New England, Atlantic, and Tangier",
    sourceType: "Colonial record route / historical synthesis",
    verification: "Institutional record",
    establishes: "The Native Northeast Portal identifies a 1677 list of New England Indians held at the Bagnio in Tangier, a 1675 John Eliot letter opposing the sale of Indians as slaves, and a 1676 Admiralty record concerning Indian slaves. Fisher’s study independently documents forced overseas movement during and after King Philip’s War.",
    limitation: "The cited materials establish a coercive system of captivity and overseas movement; they do not substantiate the platform claim that Tangier captives wrote John Eliot asking to return, and they do not establish a universal identity conclusion.",
    citation: "Native Northeast Portal, King Philip’s War record routes; Linford D. Fisher, Ethnohistory 64(1), 2017",
    sourceUrl: "https://www.nativenortheastportal.com/browse/media-type/image/type/digital_heritage/keywords/king-philips-war",
    chapterSlug: "colonial-archive-sourcebook",
  },
  {
    id: "eastern-pequot-reservation-archaeology",
    yearLabel: "1683 / 2003–present",
    sortYear: 1683,
    title: "Eastern Pequot Tribal Nation: reservation continuity and archaeology",
    tier: "Tier 1 — Primary record",
    topic: "Nation-Specific Indigenous History",
    region: "North Stonington, Connecticut",
    sourceType: "Nation-authored history / university project record",
    verification: "Nation-authored record",
    establishes: "Nation and Connecticut sources identify the Eastern Pequot reservation as established in 1683; UMass Boston documents a community-engaged archaeology, preservation, heritage, and education project with the Nation on its historic reservation since 2003.",
    limitation: "These sources establish a particular nation, place, and project. They do not establish a universal Black Native identity, a person’s complete genealogy, or citizenship in any nation.",
    citation: "Eastern Pequot Tribal Nation; Connecticut State Department of Education; University of Massachusetts Boston",
    sourceUrl: "https://www.easternpequottribalnation.org/",
    chapterSlug: "turtle-island-niji",
  },
  {
    id: "eastern-pequot-federal-acknowledgment-2005",
    yearLabel: "2005",
    sortYear: 2005,
    title: "Eastern Pequot Indians of Connecticut: federal acknowledgment decision",
    tier: "Tier 1 — Primary record",
    topic: "Federal Recognition & Administrative Law",
    region: "Connecticut / United States Department of the Interior",
    sourceType: "Federal administrative determination",
    verification: "Institutional record",
    establishes: "The reconsidered final determination published at 70 FR 60099 declined federal acknowledgment, and the Bureau of Indian Affairs lists the Eastern Pequot petition as denied.",
    limitation: "Federal acknowledgment is an administrative determination under regulatory criteria; it does not determine cultural continuity, community self-understanding, the full history of the Eastern Pequot people, or any individual’s ancestry.",
    citation: "U.S. Department of the Interior, Bureau of Indian Affairs; Federal Register, 70 FR 60099 (2005)",
    sourceUrl: "https://www.federalregister.gov/documents/2005/10/14/05-20720/reconsidered-final-determination-to-decline-to-acknowledge-the-eastern-pequot-indians-of-connecticut",
    chapterSlug: "turtle-island-niji",
  },
  {
    id: "de-soto-coosa-hostage-sequence",
    yearLabel: "1540",
    sortYear: 1540,
    title: "De Soto and the Coosa chiefdom: hostage-taking record",
    tier: "Tier 2 — Scholarly analysis",
    topic: "Colonial Invasion & Indigenous Polities",
    region: "Coosa chiefdom / Southeast",
    sourceType: "Institutional historical synthesis",
    verification: "Institutional record",
    establishes: "National Park Service accounts describe De Soto’s time in the Coosa chiefdom and the taking of its leader hostage for passage, in the larger violent sequence that later included Mabila under Chief Tuskaloosa.",
    limitation: "The institutional synthesis does not verify the platform’s particular etymology quotation, and a place-name gloss cannot establish racial identity, ancestry, or a universal Black–Indigenous conclusion.",
    citation: "National Park Service, ‘De Soto Expedition, 1539–1542’ and ‘Hernando de Soto and the Coosa chiefdom’",
    sourceUrl: "https://www.nps.gov/chch/learn/historyculture/hernando-de-soto.htm",
    chapterSlug: "colonial-archive-sourcebook",
  },
];

export const SOURCES_CLAIMS_INDEX: SourceClaimIndexItem[] = [...legalItems, ...colonialItems, ...chapterEvidenceItems, ...leeMcQueenEvidenceItems, ...pre850TurtleIslandEvidenceItems, ...censusInstructionEvidenceItems, ...a00EvidenceItems, ...tiktokHistoryVerifiedEvidenceItems].sort(
  (a, b) => a.sortYear - b.sortYear || a.title.localeCompare(b.title),
);

export const SOURCE_INDEX_FILTERS = {
  tiers: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.tier))).sort(),
  topics: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.topic))).sort(),
  regions: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.region))).sort(),
  sourceTypes: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.sourceType))).sort(),
  verifications: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.verification))).sort(),
};
