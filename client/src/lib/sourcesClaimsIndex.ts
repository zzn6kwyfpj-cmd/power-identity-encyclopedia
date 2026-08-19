// Royal Manuscript evidence index: midnight archive field, antique-gold labels, and explicit limits on every record.
// This initial public dataset exposes only source cards and legal records that already carry a public route and a limit statement.

import { COLONIAL_SOURCEBOOK_CONTENT } from "./manuscriptContentColonialSourcebook";
import { LEGAL_RECORDS } from "./legalRecordMetadata";

export type SourceClaimIndexItem = {
  id: string;
  yearLabel: string;
  sortYear: number;
  title: string;
  tier: "Tier 1 — Primary record";
  topic: string;
  region: string;
  sourceType: string;
  verification: "Institutional record" | "Stable facsimile / edition route";
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

export const SOURCES_CLAIMS_INDEX: SourceClaimIndexItem[] = [...legalItems, ...colonialItems].sort(
  (a, b) => a.sortYear - b.sortYear || a.title.localeCompare(b.title),
);

export const SOURCE_INDEX_FILTERS = {
  tiers: ["Tier 1 — Primary record"],
  topics: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.topic))).sort(),
  sourceTypes: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.sourceType))).sort(),
  verifications: Array.from(new Set(SOURCES_CLAIMS_INDEX.map((item) => item.verification))).sort(),
};
