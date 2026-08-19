// Editorial scope: Georgia is a source-linked regional case study within a continental and diaspora-facing Black Native encyclopedia, not its organizing center.
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen } from "lucide-react";

const GEORGIA_SECTIONS = [
  {
    id: "etowah",
    era: "Era I — Before 1732",
    eraColor: "#8b1a1a",
    title: "The Etowah Mounds — Cartersville, Georgia",
    subtitle: "The Ancient Mississippian Civilization That Preceded the Colony",
    content: `The Etowah Mounds in Cartersville, Georgia are among the most significant ancient Mississippian ceremonial sites in North America. At their peak (approximately 1000–1550 CE), the Etowah site was a major political and religious center with an estimated population of several thousand people. The largest mound — Mound A — rises 63 feet and covers 3 acres, making it the third-largest pre-Columbian earthwork in the United States.

The people who built the Etowah Mounds were the ancestors of the Muscogee (Creek) Nation. They were sophisticated urban planners, long-distance traders, and skilled artisans. The copper plates, shell gorgets, and ceremonial objects found at Etowah demonstrate trade networks extending from the Great Lakes to the Gulf of Mexico.

When the 1732 Georgia Charter described the land as "waste and desolate," the Etowah site had been continuously inhabited for over 500 years. The legal fiction of "waste and desolate" was not a description of reality — it was a legal instrument designed to erase the people who lived there.`,
    keyFact: "The Etowah Mounds site was continuously inhabited for over 500 years before the 1732 Georgia Charter described the land as 'waste and desolate.' The people who built those mounds were the ancestors of the Muscogee (Creek) Nation.",
    source: "King, Adam. Etowah: The Political History of a Chiefdom Capital (2003); National Park Service, Etowah Indian Mounds State Historic Site",
    chapterSlug: "etowah-mounds",
    image: "/manus-storage/scene_etowah_cartersville_1a3a3dd4.png",
  },
  {
    id: "charter",
    era: "Era I — 1732",
    eraColor: "#8b1a1a",
    title: "The 1732 Georgia Charter",
    subtitle: "The Legal Document That Erased the Creek and Cherokee Nations",
    content: `On April 21, 1732, King George II granted a charter to a corporate body of Trustees to establish the colony of Georgia. The charter described the territory as "waste and desolate" — a legal fiction that erased the Creek and Cherokee Nations who had inhabited the land for centuries.

The specific language of the charter is the Doctrine of Discovery applied to Georgia soil. It granted the Trustees the power to "have, hold, possess, and enjoy" the territory — territory that was already occupied by sovereign nations with established governance, agriculture, and trade networks.

The 1732 Georgia Charter is the foundational legal document of Georgia's history. Every subsequent land seizure — the Land Lottery, the Indian Removal Act, the Trail of Tears — flows directly from the legal framework established by this charter.`,
    keyFact: "The 1732 Georgia Charter described Creek and Cherokee territories as 'waste and desolate' while thousands of people lived there. This legal fiction is the foundation of every subsequent land seizure in Georgia.",
    source: "Georgia Charter (1732), Avalon Project, Yale Law School; Georgia Archives, Royal Charter Collection",
    chapterSlug: "georgia-charter",
    image: "/manus-storage/scene_georgia_charter_1f896a97.png",
  },
  {
    id: "land-lottery",
    era: "Era II — 1805–1832",
    eraColor: "#d4af37",
    title: "The Georgia Land Lottery",
    subtitle: "How Stolen Creek and Cherokee Land Was Distributed to White Settlers",
    content: `Between 1805 and 1832, the State of Georgia conducted a series of land lotteries to distribute the land seized from the Creek and Cherokee Nations to white settlers. The lotteries were administered through a system of land districts and lots — each lot approximately 160 to 490 acres, depending on the lottery.

The Georgia Land Lottery is one of the most direct and documented examples of wealth transfer in American history. The land was taken from the Creek and Cherokee Nations through fraudulent treaties and military force, then distributed to white Georgian citizens through a lottery system. The winners received the land for a nominal fee — often less than $20.

The specific districts and lots from the Georgia Land Lottery are documented in the Georgia Archives. Researchers can trace exactly which families received which parcels of land — land that had been Creek or Cherokee territory just years before.

The Etowah Mounds site itself in Cartersville was part of the Cherokee land distributed through the 1832 Cherokee Land Lottery. The mounds were on lot 145 of the 4th District, 3rd Section of Cherokee County.`,
    keyFact: "The Georgia Land Lottery distributed millions of acres of Creek and Cherokee land to white settlers for as little as $20 per lot. The Etowah Mounds site in Cartersville was distributed through the 1832 Cherokee Land Lottery.",
    source: "Georgia Archives, Land Lottery Records; Smith, James F. The Cherokee Land Lottery (1838); Georgia Genealogical Society",
    chapterSlug: "sovereignty",
    image: null,
  },
  {
    id: "worcester",
    era: "Era II — 1832",
    eraColor: "#d4af37",
    title: "Worcester v. Georgia — The Case Georgia Ignored",
    subtitle: "The Supreme Court Ruled for the Cherokee. Georgia Refused to Comply.",
    content: `In 1832, the U.S. Supreme Court ruled in Worcester v. Georgia that the State of Georgia had no authority over Cherokee territory. Chief Justice John Marshall wrote: "The Cherokee nation, then, is a distinct community, occupying its own territory, with boundaries accurately described, in which the laws of Georgia can have no force."

It was a complete legal victory for the Cherokee Nation. Georgia had passed laws extending state jurisdiction over Cherokee territory, imprisoning missionaries who worked with the Cherokee without a state license. The Supreme Court ruled these laws unconstitutional.

Georgia refused to comply. President Andrew Jackson reportedly said: "John Marshall has made his decision; now let him enforce it." The federal government did not enforce the ruling. Georgia continued to enforce its laws on Cherokee territory, and the Land Lottery proceeded.

Worcester v. Georgia is the most important Supreme Court ruling in Indigenous rights history — and the most completely ignored. It established the principle that Indigenous nations are "distinct communities" with sovereignty that state laws cannot override. That principle was vindicated 188 years later in McGirt v. Oklahoma (2020).`,
    keyFact: "Worcester v. Georgia (1832) ruled that Georgia's laws had 'no force' in Cherokee territory. Georgia ignored the ruling. The federal government did not enforce it. The Trail of Tears followed six years later.",
    source: "Worcester v. Georgia, 31 U.S. 515 (1832), Cornell Law School; Jackson, Andrew. Letter to John Coffee (April 7, 1832)",
    chapterSlug: "sovereignty",
    image: null,
  },
  {
    id: "atlanta-mecca",
    era: "Era III — 1880–1960",
    eraColor: "#2d6a4f",
    title: "Atlanta's Black Mecca — Sweet Auburn and the HBCU Corridor",
    subtitle: "The Most Prosperous Black Community in America — Before the Highway",
    content: `By the early 20th century, Atlanta had become the center of Black American intellectual, economic, and cultural life. Sweet Auburn Avenue — named "the richest Negro street in the world" by Fortune magazine in 1956 — was home to the Atlanta Life Insurance Company (founded by Alonzo Herndon, born enslaved), the Atlanta Daily World (the first Black daily newspaper in the South), and dozens of Black-owned businesses.

The HBCU corridor — Spelman College (1881), Morehouse College (1867), Clark Atlanta University, Morris Brown College, and the Interdenominational Theological Center — made Atlanta the intellectual capital of Black America. W.E.B. Du Bois taught at Atlanta University. Martin Luther King Jr. was born at 501 Auburn Avenue and baptized at Ebenezer Baptist Church.

The land on which these institutions stood had been Creek and Cherokee territory less than 100 years earlier. The same dispossession that removed the Creek and Cherokee created the space in which Black Atlanta was built — and then the same mechanisms of power that had been used against Indigenous people were turned against Black Atlanta.`,
    keyFact: "Sweet Auburn Avenue was named 'the richest Negro street in the world' by Fortune magazine in 1956. Within 10 years, the federal highway system had destroyed it.",
    source: "Fortune Magazine (1956); Atlanta History Center; Bayor, Ronald. Race and the Shaping of Twentieth-Century Atlanta (1996)",
    chapterSlug: "sleeping-giant",
    image: "/manus-storage/scene_black_church_a3b2c1d0.png",
  },
  {
    id: "highway",
    era: "Era V — 1950–1970",
    eraColor: "#6b3fa0",
    title: "The Highway That Destroyed Black Atlanta",
    subtitle: "How I-75/I-85 Was Deliberately Routed Through the Heart of Black Atlanta",
    content: `In the 1950s and 1960s, the federal Interstate Highway System provided the mechanism to destroy what Jim Crow laws had failed to destroy: the autonomous Black economic infrastructure of Atlanta.

The routing of I-75 and I-85 through Atlanta was not accidental. The highways were deliberately routed through the Vine City and Summerhill neighborhoods — the heart of Black Atlanta — rather than through less populated areas or along existing railroad corridors. The result was the displacement of tens of thousands of Black residents and the destruction of hundreds of Black-owned businesses.

The same pattern repeated across Atlanta: the construction of Georgia Tech's campus expansion, the Atlanta-Fulton County Stadium (1966), and the MARTA rail system all used eminent domain to acquire Black-owned property at below-market prices.

This use of eminent domain achieved through urban planning what the mob in Tulsa achieved with fire. It was legal. It was documented. And it was deliberate.`,
    keyFact: "The routing of I-75/I-85 through Black Atlanta was documented by urban planners as a deliberate choice. The highways displaced tens of thousands of Black residents and destroyed hundreds of Black-owned businesses.",
    source: "Bayor, Ronald. Race and the Shaping of Twentieth-Century Atlanta (1996); Atlanta Regional Commission Highway Records; Federal Highway Administration",
    chapterSlug: "sleeping-giant",
    image: null,
  },
  {
    id: "jim-crow-georgia",
    era: "Era III — 1877–1965",
    eraColor: "#2d6a4f",
    title: "Georgia's Jim Crow Laws — Specific Statutes",
    subtitle: "The Documented Legislative Architecture of Racial Segregation in Georgia",
    content: `Georgia's Jim Crow laws were not informal customs — they were specific, numbered statutes passed by the Georgia General Assembly. The following laws are documented in the Georgia Code and the Georgia Session Laws:

**Georgia Code § 2714 (1910)** — Required racial segregation on all railroad passenger cars operating within the state. Any railroad company that failed to provide separate cars faced fines of up to $5,000.

**Georgia Code § 2715 (1910)** — Required separate waiting rooms at all railroad stations. The law specified that the rooms must be "equal in all respects" — a provision that was never enforced.

**Georgia Code § 1065 (1908)** — Prohibited interracial marriage. Any person who married across racial lines was subject to imprisonment of up to two years.

**Georgia Poll Tax (1877)** — Required payment of a cumulative poll tax to vote. Because the tax was cumulative, a Black Georgian who had not voted since Reconstruction would owe decades of back taxes before being allowed to vote.

**Georgia White Primary (1900–1944)** — The Democratic Party of Georgia declared itself a private organization and excluded Black voters from primary elections. Since Georgia was a one-party state, winning the Democratic primary was equivalent to winning the election.`,
    keyFact: "Georgia's Jim Crow laws were specific, numbered statutes — not informal customs. Georgia Code § 1065 (1908) criminalized interracial marriage with up to two years imprisonment. The cumulative poll tax effectively disenfranchised every Black Georgian who had not voted since Reconstruction.",
    source: "Georgia Code (1910), Georgia State Law Library; Georgia Session Laws (1877–1965); Smith v. Allwright, 321 U.S. 649 (1944)",
    chapterSlug: "reconstruction",
    image: null,
  },
];

export default function GeorgiaPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />

      {/* Hero */}
      <section style={{
        paddingTop: 80,
        background: `linear-gradient(to bottom, rgba(5,11,16,0.5) 0%, rgba(10,17,24,0.85) 60%, #0a1118 100%), url('/manus-storage/scene_etowah_cartersville_1a3a3dd4.png') center/cover no-repeat`,
        minHeight: 320,
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: 48,
      }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ GEORGIA — A REGIONAL CASE STUDY ✦</div>
          <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 12 }}>Georgia: A Documented Regional Sequence</h1>
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1.2rem", fontStyle: "italic", maxWidth: 700 }}>
            From the Etowah Mounds to the 1732 Georgia Charter, from land lotteries to removal, from Sweet Auburn to highway construction, this page follows one source-linked regional sequence. It does not represent every Black Native history or stand in for the continent; it offers a focused case study alongside records from other regions and connected diasporas.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div className="container" style={{ maxWidth: 900 }}>

          {GEORGIA_SECTIONS.map((section, i) => (
            <div key={section.id} id={section.id} style={{ marginBottom: 72 }}>
              {/* Era badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "Cinzel, serif", color: section.eraColor, fontSize: 9, letterSpacing: "0.1em", border: `1px solid ${section.eraColor}40`, padding: "2px 8px" }}>
                  {section.era}
                </span>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${section.eraColor}30, transparent)` }} />
              </div>

              {/* Image if available */}
              {section.image && (
                <div style={{ height: 220, overflow: "hidden", marginBottom: 24, position: "relative" }}>
                  <img src={section.image} alt={section.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,17,24,0.6), transparent, rgba(10,17,24,0.6))" }} />
                </div>
              )}

              {/* Title */}
              <h2 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", marginBottom: 4 }}>{section.title}</h2>
              <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1rem", fontStyle: "italic", marginBottom: 20 }}>{section.subtitle}</p>

              {/* Content */}
              {section.content.split("\n\n").map((para, pi) => (
                <p key={pi} style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 20 }}
                  dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#d4af37">$1</strong>') }}
                />
              ))}

              {/* Key Fact */}
              <div style={{ background: `${section.eraColor}08`, borderLeft: `4px solid ${section.eraColor}`, padding: "16px 20px", marginBottom: 16 }}>
                <div style={{ fontFamily: "Cinzel, serif", color: section.eraColor, fontSize: 9, letterSpacing: "0.2em", marginBottom: 8 }}>✦ KEY FINDING</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>{section.keyFact}</p>
              </div>

              {/* Source and chapter link */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 11 }}>
                  <span style={{ fontFamily: "Cinzel, serif", fontSize: 8, letterSpacing: "0.1em", color: "#334155" }}>SOURCE: </span>
                  {section.source}
                </div>
                <Link href={`/chapter/${section.chapterSlug}`}>
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: `1px solid ${section.eraColor}40`, color: section.eraColor, fontFamily: "Cinzel, serif", fontSize: 9, letterSpacing: "0.1em", padding: "8px 14px", cursor: "pointer" }}>
                    <BookOpen size={10} />
                    READ FULL CHAPTER
                  </button>
                </Link>
              </div>

              {i < GEORGIA_SECTIONS.length - 1 && (
                <div style={{ marginTop: 48, height: 1, background: "rgba(212,175,55,0.1)" }} />
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
