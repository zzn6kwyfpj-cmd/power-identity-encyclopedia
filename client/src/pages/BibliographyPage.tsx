import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SOURCES = {
  "Tier 1 — Primary Sources": [
    { title: "Georgia Charter (1732)", url: "https://avalon.law.yale.edu/18th_century/ga01.asp", note: "Avalon Project, Yale Law School" },
    { title: "Worcester v. Georgia, 31 U.S. 515 (1832)", url: "https://supreme.justia.com/cases/federal/us/31/515/", note: "Cornell Law School" },
    { title: "Sherman's Special Field Orders No. 15 (1865)", url: "https://www.freedmen.umd.edu/sfoNo15.htm", note: "University of Maryland" },
    { title: "Treaty of Paris (1783)", url: "https://www.archives.gov/milestone-documents/treaty-of-paris", note: "National Archives" },
    { title: "Voting Rights Act (1965)", url: "https://www.archives.gov/milestone-documents/voting-rights-act", note: "National Archives" },
    { title: "Shelby County v. Holder, 570 U.S. 529 (2013)", url: "https://www.loc.gov/item/usrep570529/", note: "Library of Congress" },
    { title: "McGirt v. Oklahoma, 591 U.S. ___ (2020)", url: "https://www.supremecourt.gov/opinions/19pdf/18-9526_new_olp1.pdf", note: "Supreme Court" },
    { title: "FBI COINTELPRO Black Extremist Part 01 (1967)", url: "https://vault.fbi.gov/cointel-pro/cointel-pro-black-extremists", note: "FBI Vault" },
    { title: "Church Committee Report (1976)", url: "https://www.intelligence.senate.gov/wp-content/uploads/2024/08/sites-default-files-94755-ii.pdf", note: "U.S. Senate" },
    { title: "1930 U.S. Census Enumerator Instructions", url: "https://www.archives.gov/research/census/1930", note: "National Archives" },
    { title: "Freedmen's Bureau Records (Record Group 105)", url: "https://www.archives.gov/research/african-americans/freedmens-bureau", note: "National Archives" },
    { title: "Dawes Rolls", url: "https://www.archives.gov/research/native-americans/dawes", note: "National Archives" },
    { title: "Indian Appropriations Act (1871)", url: "https://coloradoencyclopedia.org/article/indian-appropriations-act-1871", note: "Colorado Encyclopedia" },
    { title: "Treaty of Guadalupe Hidalgo (1848)", url: "https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo", note: "National Archives" },
    { title: "Georgia Code of 1910, Section 2714 (Railroad Segregation)", url: "https://dlg.usg.edu/record/dlg_zlgl_37038824", note: "Digital Library of Georgia" },
    { title: "Georgia Black Codes (1865-1866)", url: "https://dlg.usg.edu/record/dlg_zlgl_37038824", note: "Digital Library of Georgia" },
    { title: "Smith, James F. The Cherokee Land Lottery (1838)", url: "https://archive.org/details/cherokeelandlott00smit", note: "Archive.org" },
  ],
  "Tier 2 — Scholarly Analysis": [
    { title: "Dunbar-Ortiz, Roxanne. An Indigenous Peoples' History of the United States (2014)", url: "https://www.beacon.org/An-Indigenous-Peoples-History-of-the-United-States-P1164.aspx", note: "Beacon Press" },
    { title: "Blackmon, Douglas. Slavery by Another Name (2008)", url: "https://www.doubleday.com/books/slavery-by-another-name", note: "Pulitzer Prize Winner" },
    { title: "Anderson, Claud. PowerNomics (2001)", url: "https://www.powernomics.com", note: "PowerNomics Corporation" },
    { title: "Alexander, Michelle. The New Jim Crow (2010)", url: "https://newjimcrow.com", note: "The New Press" },
    { title: "Muhammad, Khalil Gibran. The Condemnation of Blackness (2010)", url: "https://www.hup.harvard.edu/books/9780674062115", note: "Harvard University Press" },
    { title: "Thompson, W.F. & Olsen, K.N. The Science and Psychology of Music (2020)", url: "https://www.abc-clio.com/products/a5885c/", note: "Greenwood/ABC-CLIO" },
    { title: "Janusek et al. Epigenetics and Childhood Adversity in African American Men (2017)", url: "https://doi.org/10.1016/j.bbi.2016.10.006", note: "Brain, Behavior, and Immunity" },
    { title: "Yehuda, Rachel. Holocaust Survivor Epigenetics (2015)", url: "https://doi.org/10.1016/j.biopsych.2015.08.005", note: "Biological Psychiatry" },
    { title: "Washington, Harriet A. Medical Apartheid (2008)", url: "https://www.anchor.com/books/medical-apartheid", note: "Anchor Books" },
    { title: "Woodson, Carter G. The Mis-Education of the Negro (1933)", url: "https://archive.org/details/mis-education-of-the-negro", note: "Archive.org — Free Access" },
    { title: "Du Bois, W.E.B. The Souls of Black Folk (1903)", url: "https://archive.org/details/soulofblackfolk00dubo", note: "Archive.org — Free Access" },
    { title: "Whisnant & Whisnant. Black Lives and Whitened Stories (NPS, 2020)", url: "https://www.nps.gov/carl/learn/historyculture/upload/BlackLives.pdf", note: "National Park Service" },
    { title: "Zucchino, David. Wilmington's Lie (2021)", url: "https://www.simonandschuster.com/books/Wilmington-s-Lie/David-Zucchino/9780802148377", note: "Pulitzer Prize Winner" },
  ],
  "Tier 3 — Community Historical Traditions": [
    { title: "Washitaw-Turner Goston El-Bey, Verdiacee. Return of the Ancient Ones (1993)", url: "https://archive.org/details/returnofanciento00wash", note: "Archive.org" },
    { title: "Rogers, J.A. Nature Knows No Color-Line (1952)", url: "https://archive.org/details/natureknowsnocol0000roge", note: "Archive.org — Free Access" },
    { title: "Rogers, J.A. Sex and Race (3 volumes, 1940-1944)", url: "https://archive.org/details/sexrace01rogeuoft", note: "Archive.org — Free Access" },
    { title: "Welsing, Frances Cress. The Isis Papers (1991)", url: "https://archive.org/details/isisyssispapers0000wels", note: "Archive.org — Free Access" },
  ],
};

export default function BibliographyPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 60 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ BIBLIOGRAPHY ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Primary Sources & Bibliography</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
              All sources used in this encyclopedia, organized by evidence tier. This work is protected under Fair Use (17 U.S.C. § 107).
            </p>
          </div>

          {Object.entries(SOURCES).map(([tier, sources]) => (
            <div key={tier} style={{ marginBottom: 48 }}>
              <div style={{
                fontFamily: "Cinzel, serif",
                color: tier.includes("Tier 1") ? "#4ade80" : tier.includes("Tier 2") ? "#d4af37" : "#f87171",
                fontSize: 12,
                letterSpacing: "0.2em",
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: `1px solid ${tier.includes("Tier 1") ? "rgba(74,222,128,0.2)" : tier.includes("Tier 2") ? "rgba(212,175,55,0.2)" : "rgba(248,113,113,0.2)"}`,
              }}>
                {tier}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sources.map(source => (
                  <div key={source.title} style={{ background: "#0f1923", padding: "14px 20px", borderLeft: "2px solid rgba(212,175,55,0.2)" }}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", marginBottom: 4, lineHeight: 1.5 }}>
                        {source.title}
                      </div>
                    </a>
                    <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 10, letterSpacing: "0.05em" }}>{source.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
