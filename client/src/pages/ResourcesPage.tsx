import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const recommendedViewing = [
    {
      title: "13th (2016)",
      director: "Ava DuVernay",
      platform: "Netflix",
      desc: "Documents the 13th Amendment's 'except as punishment for crime' loophole and the direct line from slavery to mass incarceration. Named after the 13th Amendment.",
      tier: "Tier 1/2",
      url: "https://www.netflix.com/title/80091741"
    },
    {
      title: "Slavery by Another Name (2012)",
      director: "Sam Pollard",
      platform: "PBS",
      desc: "Based on Douglas Blackmon's Pulitzer Prize-winning book. Documents the convict leasing system from 1865 to 1941 using primary source records.",
      tier: "Tier 1",
      url: "https://www.pbs.org/tpt/slavery-by-another-name/"
    },
    {
      title: "The Banker (2020)",
      director: "George Nolfi",
      platform: "Apple TV+",
      desc: "Documents the true story of Bernard Garrett and Joe Morris, two Black entrepreneurs who used a white front man to purchase redlined properties in the 1950s and 1960s.",
      tier: "Tier 2",
      url: "https://tv.apple.com/us/movie/the-banker/umc.cmc.6jxzuqfpb6s0hq5f8yx0ycxj"
    },
    {
      title: "I Am Not Your Negro (2016)",
      director: "Raoul Peck",
      platform: "Amazon Prime",
      desc: "Based on James Baldwin's unfinished manuscript. Documents the psychological and cultural dimensions of American racism through Baldwin's analysis of Medgar Evers, Malcolm X, and MLK.",
      tier: "Tier 2",
      url: "https://www.amazon.com/I-Am-Not-Your-Negro/dp/B06XFNB9MX"
    },
    {
      title: "Dark Alliance (2021)",
      director: "Ric Esther Bienstock",
      platform: "Netflix",
      desc: "Documents Gary Webb's 'Dark Alliance' investigation and its aftermath. Cross-reference with the Kerry Committee Report (1989) and CIA IG Report (1998) for Tier 1 verification.",
      tier: "Tier 2",
      url: "https://www.netflix.com/title/81002250"
    },
    {
      title: "Whose Streets? (2017)",
      director: "Sabaah Folayan",
      platform: "Amazon Prime",
      desc: "Documents the Ferguson uprising following the killing of Michael Brown. Provides contemporary context for the documented pattern of police militarization.",
      tier: "Tier 2",
      url: "https://www.amazon.com/Whose-Streets-Sabaah-Folayan/dp/B07BXHM6S6"
    },
  ];

  const resources = [
    {
      category: "Genealogy Research",
      color: "#4ade80",
      items: [
        { title: "Freedmen's Bureau Records — Georgia", desc: "Search Microfilm Publication M798 (Assistant Commissioner Records) and M1903 (Field Office Records) at FamilySearch.org to find Georgia-specific marriage certificates and labor contracts.", url: "https://www.familysearch.org/search/catalog/results?count=20&query=%2BtitleKeywords%3A%22freedmen%27s+bureau%22+%2BsubjectKeywords%3A%22georgia%22", cta: "Search FamilySearch" },
        { title: "Dawes Rolls — Five Civilized Tribes", desc: "The official enrollment records of the Five Civilized Tribes (1898–1914). Search by name to find Cherokee, Creek, Choctaw, Chickasaw, and Seminole ancestors.", url: "https://www.archives.gov/research/native-americans/dawes", cta: "Access at National Archives" },
        { title: "Cherokee Phoenix Newspaper Archive", desc: "The first Native American newspaper (1828–1834), printed in English and the Cherokee syllabary. Searchable digital archive.", url: "https://www.wcu.edu/library/DigitalCollections/CherokeePhoenix/", cta: "Read the Archive" },
        { title: "Georgia Land Lottery Records", desc: "The specific records showing which white families received lots of seized Creek and Cherokee land in the 1832 Cherokee Land Lottery.", url: "https://archive.org/details/cherokeelandlott00smit", cta: "Access at Archive.org" },
      ]
    },
    {
      category: "Legal Rights and Advocacy",
      color: "#d4af37",
      items: [
        { title: "Native American Rights Fund (NARF)", desc: "The leading legal organization providing legal defense to enforce treaties and protect Indigenous land rights.", url: "https://www.narf.org", cta: "Visit NARF" },
        { title: "NDN Collective — Land Back", desc: "The leading Indigenous-led organization working to return land to Indigenous stewardship.", url: "https://ndncollective.org", cta: "Support Land Back" },
        { title: "Equal Justice Initiative (EJI)", desc: "Bryan Stevenson's organization documenting racial terror and fighting mass incarceration. Includes the National Memorial for Peace and Justice.", url: "https://eji.org", cta: "Visit EJI" },
        { title: "H.R. 40 — Reparations Study Commission", desc: "The Commission to Study and Develop Reparation Proposals for African Americans. Contact your representative to support passage.", url: "https://www.congress.gov/bill/117th-congress/house-bill/40", cta: "Track H.R. 40" },
      ]
    },
    {
      category: "Primary Source Archives",
      color: "#f87171",
      items: [
        { title: "National Archives — African American Records", desc: "The definitive federal archive for records related to African American history, including Freedmen's Bureau, Dawes Rolls, and Civil War records.", url: "https://www.archives.gov/research/african-americans", cta: "Search the Archives" },
        { title: "FBI Vault — COINTELPRO Documents", desc: "Declassified FBI documents proving the systematic targeting of Black and Indigenous political leaders. Free public access.", url: "https://vault.fbi.gov/cointel-pro", cta: "Access FBI Vault" },
        { title: "Avalon Project — Georgia Charter (1732)", desc: "Full text of the 1732 Georgia Charter — the foundational document of American dispossession.", url: "https://avalon.law.yale.edu/18th_century/ga01.asp", cta: "Read the Charter" },
        { title: "Gullah Geechee Cultural Heritage Corridor", desc: "The federally designated heritage area preserving the most intact African cultural traditions in North America.", url: "https://gullahgeecheecorridor.org", cta: "Explore the Corridor" },
      ]
    },
    {
      category: "Group Economics and Community Building",
      color: "#6b3fa0",
      items: [
        { title: "PowerNomics — Dr. Claud Anderson", desc: "The foundational framework for Black economic self-determination. Dr. Anderson's books and resources.", url: "https://www.powernomics.com", cta: "Learn PowerNomics" },
        { title: "NAACP — Legal Defense Fund", desc: "The oldest and most powerful civil rights legal organization in the United States.", url: "https://www.naacpldf.org", cta: "Visit NAACP LDF" },
        { title: "National Congress of American Indians (NCAI)", desc: "The oldest and largest national organization of American Indian and Alaska Native tribal governments.", url: "https://www.ncai.org", cta: "Visit NCAI" },
        { title: "Evanston Reparations Program", desc: "The first municipal reparations program in U.S. history. A model for local accountability.", url: "https://www.cityofevanston.org/government/city-council/reparations", cta: "Learn from Evanston" },
      ]
    },
  ];

  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX C ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Resources for Research and Engagement</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              This encyclopedia is a starting point. These resources allow you to go deeper — into your own genealogy, into legal advocacy, and into the primary sources that make this history undeniable.
            </p>
          </div>

          {resources.map(section => (
            <div key={section.category} style={{ marginBottom: 48 }}>
              <div style={{
                fontFamily: "Cinzel, serif",
                color: section.color,
                fontSize: 12,
                letterSpacing: "0.2em",
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: `1px solid ${section.color}30`,
              }}>
                {section.category}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {section.items.map(item => (
                  <div key={item.title} style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", borderLeft: `3px solid ${section.color}`, padding: "20px" }}>
                    <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13, marginBottom: 8 }}>{item.title}</div>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <button style={{
                        background: "transparent",
                        border: `1px solid ${section.color}50`,
                        color: section.color,
                        fontFamily: "Cinzel, serif",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        padding: "8px 16px",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}>
                        {item.cta} →
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Recommended Viewing */}
          <div style={{ marginTop: 48 }}>
            <div style={{
              fontFamily: "Cinzel, serif",
              color: "#d4af37",
              fontSize: 12,
              letterSpacing: "0.2em",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "1px solid rgba(212,175,55,0.2)",
            }}>
              Recommended Viewing — Documentaries and Films
            </div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
              These films provide visual context for the evidence documented in this encyclopedia. Each is labeled with its evidence tier. Always cross-reference film claims with the primary sources cited in the relevant chapters.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {recommendedViewing.map(film => (
                <div key={film.title} style={{ background: "#0f1923", border: "1px solid rgba(212,175,55,0.15)", borderLeft: "3px solid #6b3fa0", padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: 13 }}>{film.title}</div>
                    <span style={{ fontFamily: "Cinzel, serif", color: "#6b3fa0", fontSize: 9, letterSpacing: "0.1em", border: "1px solid #6b3fa040", padding: "2px 6px" }}>{film.tier}</span>
                  </div>
                  <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 10, letterSpacing: "0.05em", marginBottom: 8 }}>{film.director} · {film.platform}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{film.desc}</p>
                  <a href={film.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{
                      background: "transparent",
                      border: "1px solid rgba(107,63,160,0.4)",
                      color: "#6b3fa0",
                      fontFamily: "Cinzel, serif",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}>
                      Watch →
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
