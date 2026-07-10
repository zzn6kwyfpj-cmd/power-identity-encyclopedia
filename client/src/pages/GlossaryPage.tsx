import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const TERMS = [
  { term: "Allotment", tier: 1, definition: "The process by which communally held tribal land was broken into individual parcels and assigned to individual tribal members under the Dawes Act (1887). Any land remaining after allotments were assigned was declared 'surplus' and sold to non-Native settlers. Between 1887 and 1934, allotment resulted in the loss of approximately 90 million acres of Indigenous land.", source: "General Allotment Act (Dawes Act), 24 Stat. 388 (1887)" },
  { term: "Black Codes", tier: 1, definition: "Laws passed by Southern states immediately after the Civil War (1865–1866) to restrict the freedom of formerly enslaved people and ensure their continued availability as a cheap labor force. The Mississippi Black Code (1865) declared freedmen without employment to be vagrants subject to fines; those unable to pay were 'hired out by the sheriff' to any white person who paid the fine. The Black Codes exploited the 13th Amendment's 'except as punishment for crime' loophole.", source: "Mississippi Black Code (1865), National Archives" },
  { term: "COINTELPRO", tier: 1, definition: "The FBI's Counterintelligence Program, active from 1956 to 1971. A series of covert, illegal projects conducted by the FBI to surveil, infiltrate, discredit, and disrupt domestic political organizations. Targets included the Black Panther Party, the NAACP, the Southern Christian Leadership Conference, the American Indian Movement, and Dr. Martin Luther King Jr. The program was exposed by the Senate's Church Committee in 1976.", source: "FBI COINTELPRO directive (August 25, 1967), FBI Vault; Church Committee Report, U.S. Senate (1976)" },
  { term: "Convict Leasing", tier: 1, definition: "A system of forced penal labor practiced in the American South from approximately 1865 to 1928. Under convict leasing, state governments leased the labor of prisoners to private companies, plantations, and railroads. The system was explicitly designed to exploit the 13th Amendment's 'except as punishment for crime' loophole. In Georgia, former Governor Joseph E. Brown's Dade Coal Company ('Penitentiary Company No. 1') was one of the primary beneficiaries.", source: "Blackmon, Douglas. Slavery by Another Name (2008); Georgia Prison Records, Georgia Archives" },
  { term: "Dawes Rolls", tier: 1, definition: "The official enrollment records of the Five Civilized Tribes (Cherokee, Creek, Choctaw, Chickasaw, and Seminole) compiled by the Dawes Commission between 1898 and 1914. The rolls were used to assign individual land allotments under the Dawes Act. The enrollment process created a racial classification system that erased the identity of thousands of mixed Black-Indigenous people by placing them on a separate 'Freedmen' roll rather than the tribal rolls.", source: "Dawes Commission Records, National Archives Record Group 75" },
  { term: "Doctrine of Discovery", tier: 1, definition: "A legal principle derived from a series of 15th-century Papal Bulls (Dum Diversas, 1452; Romanus Pontifex, 1455; Inter Caetera, 1493) that authorized European Christian nations to claim sovereignty over any land not already occupied by Christians. The doctrine was incorporated into U.S. law in Johnson v. M'Intosh (1823), in which Chief Justice John Marshall ruled that Indigenous people had only a 'right of occupancy' — not full ownership — of their land. The Vatican formally repudiated the Doctrine of Discovery in 2023.", source: "Johnson v. M'Intosh, 21 U.S. 543 (1823); Vatican Statement on the Doctrine of Discovery (March 2023)" },
  { term: "Encomienda", tier: 1, definition: "A Spanish colonial labor system established during Columbus's second voyage (1493–1496) that required Indigenous people to work for Spanish colonists in exchange for 'protection' and religious instruction. In practice, it was slavery. The encomienda system was the first institutionalized forced labor system in the Americas and the direct predecessor of the plantation system.", source: "Torres Memorandum (1494), Columbus's report to the Spanish Crown; Las Casas, A Brief Account of the Destruction of the Indies (1542)" },
  { term: "Enforcement Gap", tier: 2, definition: "The space between legal rights and actual power. The term describes situations where a legal ruling or statute exists that should protect a group's rights, but the political will or enforcement mechanism to implement it is absent. The most documented example is Worcester v. Georgia (1832), in which the Supreme Court ruled in the Cherokee Nation's favor but President Jackson refused to enforce the ruling.", source: "Worcester v. Georgia, 31 U.S. 515 (1832); Dunbar-Ortiz, Roxanne. An Indigenous Peoples' History of the United States (2014)" },
  { term: "Freedmen", tier: 1, definition: "In the context of the Five Civilized Tribes, 'Freedmen' refers to the formerly enslaved Black people held by tribal members, and their descendants. After the Civil War, the tribes were required by treaty to grant citizenship to their Freedmen. The Dawes Commission enrolled Freedmen on a separate roll from tribal citizens, creating a two-tier citizenship system. The Cherokee Nation stripped Freedmen descendants of citizenship in 2007; a U.S. District Court restored it in 2017.", source: "Treaty of 1866 (Cherokee), National Archives; Cherokee Nation v. Nash, 267 F. Supp. 3d 86 (D.D.C. 2017)" },
  { term: "Freedmen's Bureau", tier: 1, definition: "The Bureau of Refugees, Freedmen, and Abandoned Lands, established by Congress in 1865 to assist formerly enslaved people and poor white Southerners in the aftermath of the Civil War. The Bureau provided food, housing, medical care, and legal assistance, and established schools and negotiated labor contracts. It was chronically underfunded and politically opposed by President Andrew Johnson, who vetoed its reauthorization in 1866. Its records — available at the National Archives — are one of the most important genealogical resources for Black American families.", source: "Bureau of Refugees, Freedmen, and Abandoned Lands, Record Group 105, National Archives" },
  { term: "HOLC / Redlining", tier: 1, definition: "The Home Owners' Loan Corporation (HOLC) was a New Deal agency that created 'Residential Security Maps' for 239 American cities between 1935 and 1940. The maps color-coded neighborhoods by perceived investment risk: green (best), blue (still desirable), yellow (declining), and red (hazardous). The HOLC's own underwriting manuals explicitly listed 'infiltration of Negro occupancy' as a negative factor. Neighborhoods marked red — 'redlined' — were denied federal mortgage insurance, making it nearly impossible for residents to obtain home loans.", source: "HOLC Residential Security Maps (1935–1940), National Archives; Rothstein, Richard. The Color of Law (2017)" },
  { term: "Indian Removal Act", tier: 1, definition: "Federal legislation signed by President Andrew Jackson on May 28, 1830, authorizing the forced relocation of the Five Civilized Tribes from their ancestral homelands in the Southeast to 'Indian Territory' west of the Mississippi River. The Act passed the Senate by only 5 votes (28 to 19). It directly violated the Supreme Court's ruling in Worcester v. Georgia (1832), which Jackson refused to enforce.", source: "Indian Removal Act, 4 Stat. 411 (1830), National Archives" },
  { term: "Intersectionality", tier: 2, definition: "A framework for understanding how different aspects of a person's social and political identities (race, gender, sexuality, class, disability) combine to create unique modes of discrimination and privilege. The term was coined by legal scholar Kimberlé Crenshaw in 1989, but the concept was articulated earlier by the Combahee River Collective (1977) and Audre Lorde.", source: "Crenshaw, Kimberlé. 'Demarginalizing the Intersection of Race and Sex.' University of Chicago Legal Forum (1989)" },
  { term: "McGirt v. Oklahoma", tier: 1, definition: "A 2020 U.S. Supreme Court ruling (5-4) that the Muscogee (Creek) Nation's reservation — established by treaty in the 1830s — was never formally disestablished by Congress. Justice Neil Gorsuch wrote for the majority: 'On the far end of the Trail of Tears was a promise.' The ruling recognized that nearly half of Oklahoma, including most of Tulsa, remains 'Indian Country' under federal law.", source: "McGirt v. Oklahoma, 591 U.S. ___ (2020); Justice Neil Gorsuch, majority opinion" },
  { term: "One Drop Rule", tier: 1, definition: "A social and legal principle in the United States that classified any person with any known African ancestry as Black, regardless of their appearance or other ancestry. The rule was codified in various state laws and enforced through the U.S. Census classification system. The 1930 Census enumerator instruction that 'a person of mixed Indian and Negro blood should be returned a Negro' is the most consequential application of the one drop rule to mixed Black-Indigenous Americans.", source: "U.S. Census Bureau, 1930 Enumerator Instructions, National Archives Record Group 29" },
  { term: "Paper Genocide", tier: 3, definition: "A term used in Indigenous and Black-Indigenous communities to describe the administrative erasure of identity through government classification systems. In the context of this encyclopedia, it refers specifically to the 1930 Census instruction that classified mixed Black-Indigenous people as Negro by default, effectively erasing their Indigenous identity from the official record. The term is a community historical tradition (Tier 3) rather than an established academic term.", source: "Community historical tradition; Walton-Raji, Angela. Black Indian Genealogy Research (1993)" },
  { term: "PowerNomics", tier: 2, definition: "An economic framework developed by Dr. Claud Anderson in his 2001 book of the same name. PowerNomics argues that Black Americans must build group economic power through vertical integration, group economics, and political leverage rather than relying on social integration or individual advancement. The framework identifies the racial wealth gap as the product of deliberate policy rather than individual failure.", source: "Anderson, Claud. PowerNomics: The National Plan to Empower Black America (2001)" },
  { term: "Sovereignty", tier: 1, definition: "In the context of Indigenous nations, sovereignty refers to the inherent right of Indigenous peoples to govern themselves, their territories, and their members. The U.S. Supreme Court recognized Indigenous sovereignty in Worcester v. Georgia (1832), establishing that Indigenous nations are 'distinct communities' with rights that state laws cannot override. The enforcement of Indigenous sovereignty has been inconsistent throughout American history, with the federal government alternately recognizing and undermining it.", source: "Worcester v. Georgia, 31 U.S. 515 (1832); McGirt v. Oklahoma, 591 U.S. ___ (2020)" },
  { term: "Stereotype Threat", tier: 2, definition: "A psychological phenomenon in which awareness of a negative stereotype about one's group can impair performance on tasks related to that stereotype. The concept was developed by psychologist Claude Steele and Joshua Aronson in their 1995 study published in the Journal of Personality and Social Psychology. Stereotype threat has been replicated in over 300 peer-reviewed studies and provides scientific evidence for the measurable psychological harm caused by media stereotypes.", source: "Steele, Claude M. and Joshua Aronson. 'Stereotype Threat and the Intellectual Test Performance of African Americans.' Journal of Personality and Social Psychology (1995)" },
  { term: "Trail of Tears", tier: 1, definition: "The forced relocation of the Five Civilized Tribes from their ancestral homelands in the Southeast to Indian Territory (present-day Oklahoma) between 1830 and 1850. The Cherokee call it 'Nunna daul Tsuny' — 'The Trail Where They Cried.' An estimated 4,000 to 8,000 Cherokee died during the march — approximately one quarter of the entire nation. The land they were removed from was immediately distributed to white settlers via the Georgia Land Lottery.", source: "Grant Foreman, Indian Removal (1932); Cherokee Nation v. Georgia, 30 U.S. 1 (1831)" },
  { term: "Vertical Integration", tier: 2, definition: "An economic strategy in which a company controls multiple stages of its supply chain — from raw materials to finished product to distribution. In the context of PowerNomics, Dr. Claud Anderson argues that Black Americans must build vertically integrated economic systems that keep wealth circulating within the community rather than flowing out to external businesses. Berry Gordy's Motown Records is the most cited historical example of Black vertical integration.", source: "Anderson, Claud. PowerNomics (2001); Gordy, Berry. To Be Loved (1994)" },
  { term: "Worcester v. Georgia", tier: 1, definition: "A landmark 1832 U.S. Supreme Court case in which Chief Justice John Marshall ruled that the State of Georgia had no authority over Cherokee territory. The ruling established that Indigenous nations are 'distinct communities' with sovereignty that state laws cannot override. President Andrew Jackson refused to enforce the ruling, allowing Georgia to proceed with Cherokee removal. The case is the most documented example of the 'enforcement gap' in American history.", source: "Worcester v. Georgia, 31 U.S. 515 (1832), Cornell Law School" },
  { term: "Dawes Act", tier: 1, definition: "See 'Allotment.' The General Allotment Act of 1887, commonly known as the Dawes Act after its sponsor Senator Henry L. Dawes, authorized the President to survey tribal land and divide it into individual allotments. The Act was the primary mechanism by which Native Americans lost approximately 90 million acres between 1887 and 1934.", source: "General Allotment Act, 24 Stat. 388 (1887), National Archives" },
  { term: "Epigenetics", tier: 2, definition: "The study of changes in gene expression that do not involve changes to the underlying DNA sequence. In the context of this encyclopedia, epigenetics research (particularly Dr. Rachel Yehuda's work on Holocaust survivors and their descendants) provides scientific evidence that trauma can be biologically inherited. A 2017 study by Janusek et al. found that childhood adversity in young African American men directly alters the methylation of the IL6 gene, causing chronic inflammation.", source: "Yehuda, Rachel et al. 'Holocaust Exposure Induced Intergenerational Effects on FKBP5 Methylation.' Biological Psychiatry (2016); Janusek et al., Brain, Behavior, and Immunity (2017)" },
  { term: "Encomienda", tier: 1, definition: "See main entry above.", source: "" },
];

const TIER_COLORS: Record<number, string> = { 1: "#4ade80", 2: "#d4af37", 3: "#f87171" };
const TIER_LABELS: Record<number, string> = { 1: "TIER 1 — Primary Source", 2: "TIER 2 — Scholarly Analysis", 3: "TIER 3 — Community Historical Tradition" };

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const filtered = TERMS.filter(t => {
    const matchSearch = !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
    const matchTier = !selectedTier || t.tier === selectedTier;
    return matchSearch && matchTier && t.definition.length > 10;
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX D ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Glossary of Key Terms</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 8px" }}>
              Every term in this encyclopedia is defined here with its evidence tier, definition, and primary source citation.
            </p>
            <p style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 10, letterSpacing: "0.2em" }}>
              {filtered.length} TERMS SHOWN
            </p>
          </div>

          {/* Search and Filter */}
          <div style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.2)", padding: "20px 24px", marginBottom: 40 }}>
            <div style={{ position: "relative", marginBottom: 16 }}>
              <Search size={14} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
              <input
                type="text"
                placeholder="Search terms and definitions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: "100%", background: "#0a1118", border: "1px solid rgba(212,175,55,0.2)", color: "#e2e8f0", padding: "10px 14px 10px 40px", fontFamily: "Cormorant Garamond, serif", fontSize: 15, outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => setSelectedTier(null)} style={{ padding: "6px 14px", background: !selectedTier ? "#d4af37" : "transparent", color: !selectedTier ? "#0a1118" : "#94a3b8", border: "1px solid rgba(212,175,55,0.3)", fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", cursor: "pointer" }}>ALL TIERS</button>
              {[1, 2, 3].map(t => (
                <button key={t} onClick={() => setSelectedTier(selectedTier === t ? null : t)} style={{ padding: "6px 14px", background: selectedTier === t ? TIER_COLORS[t] : "transparent", color: selectedTier === t ? "#0a1118" : "#94a3b8", border: `1px solid ${TIER_COLORS[t]}40`, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.05em", cursor: "pointer" }}>
                  TIER {t}
                </button>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {filtered.map(term => (
              <div key={term.term} style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.12)", borderLeft: `4px solid ${TIER_COLORS[term.tier]}`, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <h3 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 16, margin: 0 }}>{term.term}</h3>
                  <span style={{ fontFamily: "Cinzel, serif", color: TIER_COLORS[term.tier], fontSize: 8, letterSpacing: "0.1em", border: `1px solid ${TIER_COLORS[term.tier]}40`, padding: "2px 8px", flexShrink: 0 }}>
                    {TIER_LABELS[term.tier]}
                  </span>
                </div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: 12 }}>{term.definition}</p>
                {term.source && (
                  <div style={{ fontFamily: "Cinzel, serif", color: "#475569", fontSize: 9, letterSpacing: "0.1em" }}>
                    <span style={{ color: "#334155" }}>SOURCE: </span>{term.source}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
