// Treaties Chapter Content — The Archive Encyclopedia
// Collaboratively stewarded source material; no individual authorship claim

export interface ChapterContent {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  didYouKnow?: string;
  keyDocuments?: string[];
}

export const TREATIES_CONTENT: Record<string, ChapterContent> = {
  'treaties-broken-promises': {
    slug: 'treaties-broken-promises',
    fullText: [
      'Between 1778 and 1871, the United States government signed over 370 treaties with Indigenous nations. These were not informal agreements or handshake deals. They were sovereign-to-sovereign contracts, negotiated between the United States — a nation that claimed to be founded on the rule of law — and the sovereign nations whose land it sought. Every treaty was ratified by the U.S. Senate. Every treaty carried the full force of federal law. And every single one was broken, modified, or violated by the United States government.',

      'The pattern began immediately. The Treaty of Hopewell (1785) — the first treaty between the U.S. and the Cherokee Nation — promised "the hatchet shall be forever buried." The U.S. violated it within years by failing to prevent illegal white settlements on Cherokee lands. The Treaty of Holston (1791) promised permanent boundaries. The U.S. violated those boundaries within years. The Treaty of New York (1790) — the first treaty under the new U.S. Constitution — promised to guarantee Creek/Muscogee territory. The U.S. immediately failed to police the borders it had just guaranteed. The pattern was not accidental. It was systematic.',

      'The Georgia treaties tell the most concentrated story of betrayal. The Treaty of Fort Wilkinson (1802) began the Creek cessions in Georgia. The Treaty of Washington (1805) took Cherokee lands in Tennessee and Georgia. The Treaty of Fort Jackson (1814) — imposed by Andrew Jackson after the Battle of Horseshoe Bend — forced the Creek Nation to cede 23 million acres, including land belonging to Creek factions that had fought alongside Jackson. The first Treaty of Indian Springs (1821) took 4.3 million more acres. The second Treaty of Indian Springs (1825) was signed by William McIntosh without tribal authorization — he was executed by his own people for the betrayal. The Treaty of Washington (1826) took the remaining Creek lands in Georgia. By 1838, the Creek Nation had been removed entirely from the state where the Etowah Mounds still stand.',

      'The Treaty of New Echota (1835) represents the most documented act of treaty fraud in American history. A minority faction of the Cherokee Nation — the Treaty Party — signed away 7 million acres of ancestral land without authorization from Principal Chief John Ross or the Cherokee National Council. Sixteen thousand Cherokee signed a petition rejecting the treaty. The U.S. Senate ratified it by a single vote. The result was the Trail of Tears, in which approximately 4,000 Cherokee people — one quarter of the nation — died during forced removal in the winter of 1838. The Supreme Court had already ruled in Worcester v. Georgia (1832) that Georgia had no jurisdiction over Cherokee territory. The U.S. government ignored its own Supreme Court.',

      'The Fort Laramie Treaty of 1868 is the most famous broken promise in American treaty history. The Lakota Nation was guaranteed the Black Hills "as long as the grass shall grow and the water flow." The U.S. promised to protect the Great Sioux Reservation from all intrusion. In 1874, General Custer\'s expedition discovered gold in the Black Hills. The U.S. violated the treaty and seized the land. In 1980, the Supreme Court ruled in United States v. Sioux Nation of Indians that the Black Hills had been taken illegally and awarded $105 million in compensation. The Lakota Nation refused the money. They want their land back. The Black Hills have never been returned. In 2026, the compensation fund, with interest, stands at over $1 billion. The Lakota still refuse it. The land is worth more than the money.',
    ],
    pullQuote: {
      text: 'The United States has made over 370 treaties with Indigenous nations. It has broken every single one. This is not a pattern of negligence. It is a pattern of policy.',
      attribution: 'The Archive Encyclopedia, citing Kappler\'s Indian Affairs Laws and Treaties (1904)'
    },
    didYouKnow: 'The 1871 Indian Appropriations Act ended treaty-making with Indigenous nations entirely — not because the U.S. had honored its obligations, but because Congress decided it no longer needed to negotiate. From that point forward, Indigenous peoples were governed by federal legislation rather than negotiated agreements.',
    keyDocuments: [
      'Kappler, Charles J. Indian Affairs: Laws and Treaties, Vol. II (1904), Oklahoma State University Digital Library',
      'Treaty of Hopewell with the Cherokee (1785), National Archives',
      'Treaty of New Echota (1835), National Archives',
      'Fort Laramie Treaty (1868), National Archives',
      'United States v. Sioux Nation of Indians, 448 U.S. 371 (1980)',
    ],
  },
};

export function getTreatiesContent(slug: string): ChapterContent | undefined {
  return TREATIES_CONTENT[slug];
}
