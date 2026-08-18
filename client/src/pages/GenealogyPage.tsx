import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const GUIDES = [
  {
    id: "freedmens-bureau",
    title: "Freedmen's Bureau Records",
    subtitle: "The Most Important Genealogical Resource for Black American Families",
    color: "#d4af37",
    intro: "The Bureau of Refugees, Freedmen, and Abandoned Lands (1865–1872) generated millions of records documenting the lives of formerly enslaved people. These records include marriage registers, labor contracts, ration records, hospital records, and letters — many of which contain the names of enslaved ancestors that no other record preserves.",
    steps: [
      { step: "1", title: "Access the Records Online (Free)", content: "The Freedmen's Bureau records have been digitized and indexed by FamilySearch in partnership with the Smithsonian. Go to FamilySearch.org and search 'Freedmen's Bureau' in the catalog. The records are free to access." },
      { step: "2", title: "Search by Georgia Microfilm Numbers", content: "For Georgia-specific records, search for Microfilm Publication M798 (Assistant Commissioner Records) and M1903 (Field Office Records). These contain Georgia marriage certificates, labor contracts, and ration records from 1865–1872." },
      { step: "3", title: "What to Look For", content: "Search for: marriage registers (which often list the names of enslaved parents), labor contracts (which list the names and ages of family members), ration records (which list household members), and letters (which sometimes contain family information)." },
      { step: "4", title: "Cross-Reference with the 1870 Census", content: "The 1870 Census was the first to list all Americans by name, including formerly enslaved people. Cross-reference Freedmen's Bureau records with the 1870 Census to build out your family tree. The 1870 Census is available free on FamilySearch.org." },
      { step: "5", title: "Contact the National Archives", content: "For records not yet digitized, contact the National Archives at archives.gov. The Freedmen's Bureau records are in Record Group 105. Staff can assist with research requests." },
    ],
    resources: [
      { name: "FamilySearch — Freedmen's Bureau", url: "https://www.familysearch.org/en/wiki/Freedmen%27s_Bureau" },
      { name: "National Archives — Record Group 105", url: "https://www.archives.gov/research/african-americans/freedmens-bureau" },
      { name: "Smithsonian — Freedmen's Bureau Project", url: "https://transcription.si.edu/freedmens-bureau" },
    ],
  },
  {
    id: "dawes-rolls",
    title: "Dawes Rolls — Tracing Indigenous Ancestry",
    subtitle: "The Official Enrollment Records of the Five Civilized Tribes (1898–1914)",
    color: "#4ade80",
    intro: "The Dawes Rolls are the official enrollment records of the Cherokee, Creek, Choctaw, Chickasaw, and Seminole Nations compiled by the Dawes Commission between 1898 and 1914. If you have Cherokee, Creek, Choctaw, Chickasaw, or Seminole ancestry, your ancestor may be on these rolls. The rolls are critical for establishing tribal citizenship and for understanding how mixed Black-Indigenous identity was classified.",
    steps: [
      { step: "1", title: "Access the Dawes Rolls Online (Free)", content: "The Dawes Rolls are available free online through the National Archives. Go to archives.gov and search 'Dawes Rolls' or access them directly through the Oklahoma Historical Society." },
      { step: "2", title: "Understand the Four Rolls", content: "The Dawes Commission created four separate rolls: (1) Citizens by Blood — tribal members with documented Indigenous ancestry; (2) Citizens by Intermarriage — non-Indigenous people who married tribal citizens; (3) Delaware Cherokees — a specific subgroup; (4) Freedmen — formerly enslaved people and their descendants. If your ancestor was of mixed Black-Indigenous heritage, they may have been placed on the Freedmen roll rather than the Citizens by Blood roll, regardless of their actual Indigenous ancestry." },
      { step: "3", title: "Search by Name and Nation", content: "Search the rolls by your ancestor's name and the specific nation (Cherokee, Creek, Choctaw, Chickasaw, or Seminole). Note that names were often anglicized or misspelled. Try multiple spellings." },
      { step: "4", title: "Request the Full Enrollment Jacket", content: "Each person on the Dawes Rolls has an 'enrollment jacket' — a file containing their application, testimony, and any supporting documents. These jackets often contain family history information. Request them from the National Archives." },
      { step: "5", title: "Contact the Tribal Nation Directly", content: "For citizenship questions, contact the tribal nation directly. The Cherokee Nation, Muscogee (Creek) Nation, Choctaw Nation, Chickasaw Nation, and Seminole Nation all have citizenship offices that can assist with research." },
    ],
    resources: [
      { name: "National Archives — Dawes Rolls", url: "https://www.archives.gov/research/native-americans/dawes" },
      { name: "Oklahoma Historical Society — Dawes Rolls", url: "https://www.okhistory.org/research/dawes" },
      { name: "Cherokee Nation Citizenship Office", url: "https://www.cherokee.org/all-services/citizenship/" },
      { name: "Muscogee (Creek) Nation Citizenship", url: "https://www.muscogeenation.com/services/citizenship/" },
    ],
  },
  {
    id: "dna",
    title: "DNA Testing for Black and Indigenous Ancestry",
    subtitle: "Using Genetic Evidence to Supplement Documentary Research",
    color: "#d4af37",
    intro: "DNA testing can provide evidence of Indigenous and African ancestry that documentary records may not capture — especially given the deliberate erasure of mixed Black-Indigenous identity documented in this encyclopedia. However, DNA results must be interpreted carefully and in combination with documentary research.",
    steps: [
      { step: "1", title: "Choose the Right Test", content: "For genealogical research, use an autosomal DNA test (AncestryDNA, 23andMe, or MyHeritage). These tests examine DNA inherited from all your ancestors and can identify both African and Indigenous ancestry. Y-DNA tests (for paternal line) and mtDNA tests (for maternal line) can provide additional information about specific ancestral lines." },
      { step: "2", title: "Understand the Limitations", content: "DNA ethnicity estimates are approximations based on reference populations. Indigenous American DNA may show up as 'Native American' or may be categorized under broader regional categories. The absence of Indigenous DNA in a test result does not mean you have no Indigenous ancestry — DNA is inherited randomly and some ancestral lines may not appear in your results." },
      { step: "3", title: "Use DNA Matches", content: "The most powerful use of DNA testing for genealogy is not ethnicity estimates but DNA matches — other people who share segments of your DNA and are therefore your relatives. Build out your family tree and compare it with your DNA matches to identify shared ancestors." },
      { step: "4", title: "Cross-Reference with Documentary Records", content: "DNA results are most powerful when combined with documentary research. Use the Freedmen's Bureau records and Dawes Rolls to identify potential Indigenous or African ancestors, then use DNA testing to confirm or expand those connections." },
      { step: "5", title: "Connect with Community Researchers", content: "Organizations like the Black Indian Genealogy Research community (based on Angela Y. Walton-Raji's work) specialize in helping Black Americans trace Indigenous ancestry. Connect with these communities for specialized guidance." },
    ],
    resources: [
      { name: "AncestryDNA", url: "https://www.ancestry.com/dna/" },
      { name: "23andMe", url: "https://www.23andme.com/" },
      { name: "ISOGG — International Society of Genetic Genealogy", url: "https://isogg.org/" },
      { name: "Black Indian Genealogy Research (Walton-Raji)", url: "https://www.blackindian.com/" },
    ],
  },
  {
    id: "brister-english",
    title: "The Brister English Project — No-Cost Genealogy Support",
    subtitle: "A Community Research Project for American Descendants of Slavery",
    color: "#d4af37",
    intro: "The Brister English Project, founded by Walter English (FormerLovePoet), helps American descendants of chattel slavery begin or extend documentary family research. Its public work centers the recovery of names, relationships, and records that were fragmented by enslavement and later administrative classification. This guide uses the project as a practical starting point, alongside the official archives named throughout this encyclopedia.",
    steps: [
      { step: "1", title: "Begin With What Your Family Knows", content: "Gather the names of parents, grandparents, and great-grandparents; the counties and states where they lived; any family Bibles, obituaries, funeral programs, photographs, or military papers; and oral histories. Write down name variants exactly as remembered, because census and enrollment records often changed spelling." },
      { step: "2", title: "Request Research Support", content: "Visit bristerep.org to review its research-support process and resource library. The project can help readers organize an initial research question and identify documentary sources to pursue. Its services and availability may change, so confirm current requirements directly with the organization." },
      { step: "3", title: "Build a Documentary Trail", content: "Use the 1870 Census as a named starting point, then work backward through Freedmen's Bureau labor contracts, marriages, ration records, military files, probate records, cemetery records, newspapers, and 1850–1860 slave schedules. Treat every connection as a hypothesis until it is supported by multiple records." },
      { step: "4", title: "Preserve the Evidence", content: "For each finding, save the repository name, collection title, record date, page or image number, URL, and a transcription of the relevant passage. A research log protects families from repeating work and makes every conclusion reviewable by relatives, archivists, and tribal citizenship offices." },
      { step: "5", title: "Separate Ancestry Research From Citizenship Decisions", content: "Documentary or genetic evidence may illuminate family history, but it does not by itself establish citizenship in a sovereign Indigenous nation. Each nation determines its own citizenship requirements. Contact the relevant tribal citizenship office directly before making any claim about enrollment or affiliation." },
    ],
    resources: [
      { name: "The Brister English Project", url: "https://bristerep.org/" },
      { name: "National Archives — African American Research", url: "https://www.archives.gov/research/african-americans" },
      { name: "FamilySearch — African American Genealogy", url: "https://www.familysearch.org/en/wiki/African_American_Genealogy" },
    ],
  },
  {
    id: "blood-quantum-research",
    title: "Blood Quantum, Enrollment, and the Documentary Record",
    subtitle: "Researching Historical Classification Without Treating a Record as a Citizenship Decision",
    color: "#8b1a1a",
    intro: "Federal and tribal enrollment systems have used different definitions of identity at different times. The Indian Reorganization Act of 1934 included a federal blood-quantum definition, while individual sovereign nations retain authority over their own citizenship rules. For Black Native American family research, the central task is to read enrollment, census, and family records critically — including the ways they separated people into 'by blood' and Freedmen categories.",
    steps: [
      { step: "1", title: "Read the Roll Category Before Drawing a Conclusion", content: "On the Dawes Rolls, record the nation, roll number, enrollment category, age, relationship, and residence for every potential ancestor. A Freedmen enrollment category is an administrative record; it is not a complete account of a person's kinship, culture, or ancestry." },
      { step: "2", title: "Request the Full Enrollment Jacket", content: "An enrollment jacket can include applications, testimony, correspondence, and supporting documents absent from the published roll. Request the relevant Dawes Commission file from the National Archives and compare it with earlier tribal censuses and family documents." },
      { step: "3", title: "Cross-Reference Earlier Community Records", content: "Compare enrollment files with pre-allotment tribal censuses, Freedmen's Bureau records, county deeds, probate files, military records, and the 1870 Census. For Creek research, investigate the 1832 Parsons and Abbott Census alongside later enrollment records. The goal is to document relationships over time rather than rely on one label." },
      { step: "4", title: "Use DNA Carefully and as Supplementary Evidence", content: "DNA matches can suggest family connections, but ethnicity estimates cannot determine tribal citizenship or replace documentary research. Use them to generate questions, then test those questions against records and the requirements of the relevant nation." },
      { step: "5", title: "Consult the Nation and a Specialized Researcher", content: "For a citizenship question, contact the relevant tribal citizenship office. For historical-method questions, review Angela Y. Walton-Raji's Black Indian genealogy guidance and seek assistance from qualified archival or genealogical researchers." },
    ],
    resources: [
      { name: "National Archives — Dawes Rolls", url: "https://www.archives.gov/research/native-americans/dawes" },
      { name: "Oklahoma Historical Society — Dawes Rolls", url: "https://www.okhistory.org/research/dawes" },
      { name: "National Archives — Native American Research", url: "https://www.archives.gov/research/native-americans" },
      { name: "Black Indian Genealogy Research — Angela Y. Walton-Raji", url: "https://www.blackindian.com/" },
    ],
  },
  {
    id: "georgia-specific",
    title: "Georgia-Specific Research Resources",
    subtitle: "Archives, Records, and Institutions for Georgia Family History Research",
    color: "#8b1a1a",
    intro: "Georgia has some of the most extensive genealogical records in the American South, including the Georgia Land Lottery records, the Georgia Archives, and the Atlanta History Center. These resources are essential for tracing both Black and Indigenous ancestry in Georgia.",
    steps: [
      { step: "1", title: "Georgia Archives", content: "The Georgia Archives (georgiaarchives.org) holds the Georgia Land Lottery records, county deed books, probate records, and state census records. The Land Lottery records can help you trace which white families received Creek and Cherokee land — and therefore which Indigenous families were displaced." },
      { step: "2", title: "Atlanta History Center", content: "The Atlanta History Center holds extensive records on Black Atlanta, including records from the Freedmen's Bureau, the Atlanta Daily World newspaper archives, and records from Atlanta's HBCUs." },
      { step: "3", title: "Freedmen's Bureau Georgia Records", content: "For Georgia-specific Freedmen's Bureau records, search for Microfilm Publication M798 (Assistant Commissioner Records, Georgia) and M1903 (Field Office Records, Georgia) at FamilySearch.org. These are free to access." },
      { step: "4", title: "Georgia Vital Records", content: "Georgia began keeping vital records (birth, death, marriage) in 1919. For records before 1919, use county courthouse records, church records, and cemetery records. The Digital Library of Georgia (dlg.usg.edu) has digitized many of these records." },
      { step: "5", title: "Cherokee County Land Lottery Records", content: "If your family is from the Cartersville/Etowah area, search the 1832 Cherokee Land Lottery records at the Georgia Archives. These records show which white families received which lots of former Cherokee land — and can help you identify the Indigenous families who previously occupied that land." },
    ],
    resources: [
      { name: "Georgia Archives", url: "https://www.georgiaarchives.org/" },
      { name: "Atlanta History Center", url: "https://www.atlantahistorycenter.com/" },
      { name: "Digital Library of Georgia", url: "https://dlg.usg.edu/" },
      { name: "FamilySearch — Georgia Records", url: "https://www.familysearch.org/en/wiki/Georgia_Genealogy" },
    ],
  },
];

function GuideSection({ guide }: { guide: typeof GUIDES[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "#0f1923", border: `1px solid ${guide.color}20`, borderLeft: `4px solid ${guide.color}`, marginBottom: 16 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "transparent", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, textAlign: "left" }}
      >
        <div>
          <div style={{ fontFamily: "Cinzel, serif", color: guide.color, fontSize: 8, letterSpacing: "0.22em", marginBottom: 6 }}>ARCHIVE DOSSIER · {guide.id.replace(/-/g, " ").toUpperCase()}</div>
          <div style={{ fontFamily: "Cinzel, serif", color: guide.color, fontSize: 14, marginBottom: 4 }}>{guide.title}</div>
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 13, fontStyle: "italic" }}>{guide.subtitle}</div>
        </div>
        {open ? <ChevronUp size={16} style={{ color: guide.color, flexShrink: 0, marginTop: 4 }} /> : <ChevronDown size={16} style={{ color: guide.color, flexShrink: 0, marginTop: 4 }} />}
      </button>

      {open && (
        <div style={{ padding: "0 24px 24px" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 24 }}>{guide.intro}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            {guide.steps.map(step => (
              <div key={step.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, background: `${guide.color}15`, border: `1px solid ${guide.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "Cinzel, serif", color: guide.color, fontSize: 11 }}>
                  {step.step}
                </div>
                <div>
                  <div style={{ fontFamily: "Cinzel, serif", color: guide.color, fontSize: 11, letterSpacing: "0.05em", marginBottom: 4 }}>{step.title}</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: `1px solid ${guide.color}20`, paddingTop: 16 }}>
            <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 9, letterSpacing: "0.2em", marginBottom: 12 }}>RESOURCES</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {guide.resources.map(r => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Cormorant Garamond, serif", color: guide.color, fontSize: 13, textDecoration: "none" }}>
                  <ExternalLink size={12} />
                  {r.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GenealogyPage() {
  return (
    <div style={{ backgroundColor: "#0a1118", minHeight: "100vh" }}>
      <Navigation />
      <section style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div style={{ color: "#d4af37", fontSize: 11, letterSpacing: "0.4em", fontFamily: "Cinzel, serif", marginBottom: 12 }}>✦ APPENDIX E ✦</div>
            <h1 style={{ fontFamily: "Cinzel, serif", color: "#d4af37", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Genealogy & Identity Research Guide</h1>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto" }}>
              The history documented in this encyclopedia is not abstract. It is your family's history. These guides will help you use primary source records to reclaim the identity that was systematically erased.
            </p>
          </div>

          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)", padding: "20px 24px", marginBottom: 40 }}>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "#d4af37" }}>A note on the 1930 Census erasure:</strong> If your family has oral traditions of Indigenous ancestry but you cannot find it in the documentary record, the 1930 Census instruction may be the reason. The instruction that 'a person of mixed Indian and Negro blood should be returned a Negro' erased generations of mixed Black-Indigenous identity from the official record. The Freedmen's Bureau records and Dawes Rolls may contain evidence of that ancestry that the Census erased.
            </p>
          </div>

          <div style={{ background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.22)", borderLeft: "4px solid #4ade80", padding: "18px 22px", marginBottom: 24 }}>
            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "#4ade80" }}>Research standard:</strong> Work from records outward, not from a desired conclusion inward. Genealogy can document ancestors, relationships, and the historical labels applied to them. It cannot independently confer tribal citizenship, which remains the authority of each sovereign nation.
            </p>
          </div>

          {GUIDES.map(guide => <GuideSection key={guide.id} guide={guide} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}
