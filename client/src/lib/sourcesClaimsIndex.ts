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
  verification: "Institutional record" | "Stable facsimile / edition route" | "Linked chapter evidence card" | "Author-attributed research";
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

export const SOURCES_CLAIMS_INDEX: SourceClaimIndexItem[] = [...legalItems, ...colonialItems, ...chapterEvidenceItems, ...leeMcQueenEvidenceItems].sort(
  (a, b) => a.sortYear - b.sortYear || a.title.localeCompare(b.title),
);

export const SOURCE_INDEX_FILTERS = {
  tiers: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.tier))).sort(),
  topics: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.topic))).sort(),
  regions: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.region))).sort(),
  sourceTypes: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.sourceType))).sort(),
  verifications: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.verification))).sort(),
};
