// The Archive Encyclopedia — manuscriptContentGaps.ts
// Collaboratively stewarded source material; no individual authorship claim
// The 7 Critical Gap Chapters — completing the encyclopedia to 10/10 standard

export interface ChapterContent {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  didYouKnow?: string;
  keyDocuments?: string[];
  sourceCards?: Array<{
    year: string;
    title: string;
    locator: string;
    establishes: string;
    limitation: string;
    source: string;
    sourceUrl?: string;
  }>;
}

export const GAPS_CONTENT: Record<string, ChapterContent> = {

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: ETOWAH MOUNDS — THE DEEP CHAPTER
  // ─────────────────────────────────────────────────────────────────────────
  'etowah-mounds-deep': {
    slug: 'etowah-mounds-deep',
    fullText: [
      'There is a longstanding question at the base of the Etowah Mounds in Cartersville, Georgia: who built this place, and what became of the people who made it? The mound is 63 feet tall, built one basket of earth at a time over centuries. That question frames this chapter’s documentary investigation.',

      'The Etowah Indian Mounds are a 54-acre site on the Etowah River in Bartow County, Georgia. They are among the most intact Mississippian culture sites in the entire Southeast. The site comprises six earthen mounds, a central plaza, a village area, borrow pits where earth was excavated for construction, and a defensive ditch. The largest mound — Mound A — stands 63 feet tall and covers three acres. It was built as a platform for the residence or temple of the priest-chief, the supreme political and religious authority of the Etowah chiefdom. Mound B was a ceremonial and public mound. Mound C was a burial mound for the Etowah elite — the place where the most important people of this civilization were laid to rest with the objects that defined their lives.',

      'The Etowah site was occupied from approximately 1000 CE to 1550 CE — a continuous civilization of 550 years. To put that in perspective: the United States has existed for 250 years. The Etowah civilization was more than twice as old as the country that now occupies its land.',

      '— WHO BUILT THEM —',

      'The builders of the Etowah Mounds were the Mississippian people — a sophisticated civilization that stretched across the entire Eastern Woodlands of North America, from the Great Lakes to the Gulf of Mexico. The Mississippian culture was not a single nation but a network of chiefdoms connected by trade, ceremony, and shared cultural practices. Their largest city, Cahokia, near present-day St. Louis, had a population of 10,000 to 20,000 people at its peak — larger than London at the same time. The Etowah chiefdom was one of the most powerful in the Southeast.',

      'The archaeological record from Etowah is extraordinary. The Smithsonian Institution Bureau of Ethnology conducted the first major excavations of Mound C between 1883 and 1885. Warren K. Moorehead conducted a full-scale excavation in 1925. Arthur R. Kelly excavated Mound B between 1954 and 1958; his findings were published by Adam King in 2001 as part of the University of Georgia Laboratory of Archeology Series (Report No. 37). These excavations revealed elaborate ceremonial outfits, ritual paraphernalia, shell masks, copper plates, and the remains of at least 21 individuals buried with grave goods that indicate high social status. The burials included flexed individuals, bundle burials, and cremated remains. Associated artifacts included bone combs, chunky stones, polished celts, beaver teeth, burnished water bottles, bone awls, and shell hoes.',

      'The Etowah site was permanently abandoned around 1700 CE. The question of what happened to the Etowah people — where they went, who their descendants are — is the question at the heart of this chapter.',

      '— THE CREEK/MUSCOGEE CONNECTION —',

      'The scholarly consensus is unambiguous: the Etowah Mound Builders are the ancestors of the Muscogee (Creek) Nation. The Georgia Department of Natural Resources, which manages the Etowah Indian Mounds State Historic Site, formally recognizes cultural affiliation with five Muskogean-speaking tribes: the Muscogee (Creek) Nation, Thlopthlocco Tribal Town, the Poarch Band of Creek Indians, Alabama, Quassarte Tribal Town, and Kialegee Tribal Town. Since 2023, the Georgia DNR has been working under the Native American Graves Protection and Repatriation Act (NAGPRA) to return 404 ancestors and over 187,000 cultural artifacts from Etowah to these lineal descendants. The process is expected to be completed by 2028.',

      'This chapter follows the documented record of the peoples who built the Etowah Mounds and their later connection to the Creek/Muscogee Nation. The Creek/Muscogee Nation was forcibly removed from Georgia by the Indian Removal Act of 1830. The Battle of Horseshoe Bend (1814) — fought on Creek territory in present-day Alabama — resulted in the forced cession of 23 million acres. The Trail of Tears removed the Creek to Indian Territory in present-day Oklahoma. Their original homeland — including the land where the Etowah Mounds stand — was seized, sold to white settlers, and eventually incorporated into the state of Georgia.',

      '— THE BLACK CREEK CONNECTION —',

      'The Creek/Muscogee Nation enslaved Black people before and during the antebellum period. The 1832 Parsons and Abbott Census of the Creek Nation (National Archives, Record Group 75, M275) documents slaveholding within Creek households. When the Creek were removed to Indian Territory, approximately 1,500 enslaved Black people accompanied them. After the Civil War, the 1866 Treaty with the Creek Nation required them to grant citizenship to their Freedmen. The Dawes Commission (1898–1907) enrolled Black Creek people as "Freedmen" rather than "Creek by blood" — regardless of their actual Indigenous ancestry.',

      'The documented connection between the Etowah Mound Builders and the people later classified as "Black" in Georgia runs through the Creek/Muscogee Nation: the Mound Builders became the Creek; the Creek enslaved and intermarried with Black people over generations; the Dawes Commission enrolled the descendants of those relationships as Freedmen rather than Creek by blood; and the 1930 Census classified anyone with any "Negro blood" as Negro, regardless of Indigenous ancestry. The child standing at the base of the Etowah Mounds asking "am I connected to the people who built this?" — the documented answer is: possibly yes, through the Creek/Muscogee Nation, through the Freedmen enrollment, through the renaming chain. The connection cannot be proven for any individual without genealogical research. But the chain of connection is documented.',

      'The Etowah Mounds are a State Historic Site. The people who built them are the ancestors of the Muscogee (Creek) Nation. The Muscogee (Creek) Nation was removed from this land. Their descendants — including those enrolled as Freedmen — carry the history of this place in their ancestry. The mounds are still here. The question is still here. And now, for the first time, the documented answer is here too.',
    ],
    pullQuote: {
      text: 'The Etowah site was permanently abandoned around 1700 CE. The builders became the Creek/Muscogee Nation. The Creek/Muscogee Nation was forcibly removed from Georgia in 1838. Their original homeland — including the land where the Etowah Mounds stand — was seized and sold. The mounds are still there. The people are in Oklahoma. The distance between those two facts is the Trail of Tears.',
      attribution: 'The Archive Encyclopedia, citing Georgia DNR Archaeological Reports and NAGPRA Repatriation Records (2023)'
    },
    didYouKnow: 'Since 2023, the Georgia Department of Natural Resources has been working to return 404 ancestors and over 187,000 cultural artifacts from the Etowah Mounds to five Muskogean-speaking tribes under NAGPRA. The process is expected to be completed by 2028 — 125 years after the first major excavation of Mound C by the Smithsonian in 1883.',
    keyDocuments: [
      'King, Adam. Excavations at Mound B, Etowah: 1954–1958 (2001), University of Georgia Laboratory of Archeology Series, Report No. 37 — Tier 2 Scholarly',
      'Georgia Department of Natural Resources, Etowah Indian Mounds State Historic Site NAGPRA Repatriation Records (2023) — Tier 1 Primary Source',
      'Parsons and Abbott Census of the Creek Nation (1832), National Archives, Record Group 75, M275 — Tier 1 Primary Source',
      'Native American Graves Protection and Repatriation Act (NAGPRA), 25 U.S.C. § 3001 (1990) — Tier 1 Primary Source',
      'Smithsonian Institution Bureau of Ethnology, Etowah Mound C Excavation Reports (1883–1885) — Tier 1 Primary Source',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: THE FREEDMEN'S BUREAU
  // ─────────────────────────────────────────────────────────────────────────
  'freedmens-bureau': {
    slug: 'freedmens-bureau',
    fullText: [
      'The Bureau of Refugees, Freedmen, and Abandoned Lands—commonly called the Freedmen\'s Bureau—was established by Congress on March 3, 1865, inside the War Department. The founding statute assigned it responsibility for abandoned lands and for matters relating to refugees and freedpeople in the former Confederate states and areas under Army operations. It authorized temporary relief and created a limited framework for land assignments, rental, and possible purchase. These were federal powers with real practical consequences, but the statute did not automatically give permanent title or guarantee equal enforcement in every locality.',

      'The Bureau\'s records document relief, hospitals and camps, labor contracts, apprenticeship disputes, schooling, marriage recognition, transportation, claims, and land/property administration. National Archives Record Group 105 preserves both central-office files and local field-office records. A Bureau record can therefore be an unusually valuable trace of a person, family, place, or request. At the same time, the archive reflects the Bureau\'s administrative vocabulary, jurisdiction, and unequal capacity; it is not a complete or neutral record of every freedperson\'s life.',

      '— THE RECORDS —',

      'Record Group 105 includes Commissioner\'s Office correspondence and reports; Land Division records; Complaint Branch records; Education Division records; and field-office material. National Archives guidance identifies field-office letters, contracts, certificates, registers, affidavits, marriage documents, school information, hospital records, complaints, relief rolls, land applications, requests for legal aid, and trial summaries. The holdings are rich in individual names and relationships, but they must be read at the level of the document: an application is not a grant, a complaint is not an adjudicated finding, and a classification is not a complete identity.',

      'The National Museum of African American History and Culture\'s Freedmen\'s Bureau Search Portal and the Smithsonian Transcription Center make discovery across images and transcriptions more feasible. Their value for genealogy is substantial: a researcher can use a Bureau item to identify names, locations, household relationships, labor arrangements, or a land request, then test those details against tribal, treaty, census, court, enrollment, and local records. The Brister English Project and related genealogy practice offer useful source-first workflows, but no Bureau record by itself establishes a person\'s tribal citizenship or a universal Black-Indigenous ancestry claim.',

      '— THE BUREAU AS INSTRUMENT OF ERASURE —',

      '— CLASSIFICATION, RECORDS, AND LIMITS —',

      '“Freedmen” was a nineteenth-century legal and administrative term for people emerging from slavery. It does not, by itself, adjudicate a person\'s ancestry, community relationship, or the citizenship law of an Indigenous nation. The later Dawes Commission used distinct enrollment categories, including “by blood” and “Freedmen,” in a different statutory and historical setting. The two archives can be compared in a documented family history, but this chapter does not treat the Bureau as the direct cause of every later Dawes enrollment decision. Any Black Native case requires a person-specific chain of records and the relevant nation\'s own citizenship standards.',

      '— THE BUREAU AS TOOL OF RECOVERY —',

      '— LAND: AUTHORITY, APPLICATION, AND RESTORATION —',

      'The federal record makes the limits of Reconstruction land policy unusually visible. Sherman\'s Special Field Orders No. 15, issued January 16, 1865, set aside a defined coastal region for settlement, allowed plots of no more than forty acres, and described the relevant writings as possessory titles pending future congressional action. The order was geographically bounded and was not a nationwide permanent land-grant statute. The March 1865 Bureau Act separately authorized limited assignments of abandoned or confiscated land, short-term use, and potential purchase under stated conditions.',

      'A Louisiana register in Record Group 105, covering applications made in September and October 1865, shows how freedpeople applied for government land. The entries record names, household composition, acreage requested, locations, resources, and comments. They are powerful evidence of application and stated need; they are not evidence that every applicant received a lease, possession, title, or a lasting recovery from dispossession. Circular No. 15, issued September 12, 1865, simultaneously set procedures that permitted restoration of abandoned lands to pardoned former owners, while requiring crop protection or compensation for loyal freedpeople already cultivating land.',

      '— LOCAL RESEARCH CASE FILE: LOUISIANA, 1865 —',

      'One local record cluster illustrates both the promise and the discipline of Bureau research. The land-application register records “Robert Butler and 5 others” applying in New Orleans on October 7, 1865, naming Logan Plantation in St. Charles Parish and listing horses, plows, rice, and wages due. A separate Louisiana Plantation Department register records a Robert Butler in St. Charles Parish as a twenty-seven-year-old male. The original image improves the research trail, but the land-application entry does not supply a matching age or another shared identifier. The records therefore remain a useful local research path, not a completed identity claim.',

      'This is a source-complete local case file at the administrative level. It links a named land application, the governing Bureau land framework, an adjacent plantation-department register, and the National Archives finding aid for the Louisiana field-office series. It demonstrates how a researcher should proceed: compare original images; extract every identifier; search contracts, complaints, hospital, school, court, census, treaty, and local records; and publish a person-level conclusion only when the chain is independently supported. It establishes no Indigenous affiliation, land title, or later outcome for Robert Butler or any other applicant.',

      '— THE BUREAU\'S LEGACY —',

      'Congress continued and amended the Bureau in July 1866 over President Andrew Johnson\'s veto. Yet its authority remained time-limited, local enforcement was uneven, and most district-level operations were withdrawn after 1868; the Bureau was abolished in 1872. The institution belongs in the encyclopedia because it documents an essential Reconstruction struggle over relief, work, family, schooling, legal claims, and land. Its records can support careful Black Native genealogy when combined with community-specific sources; they cannot replace nation-specific evidence or decide sovereign membership.',
    ],
    pullQuote: {
      text: 'A Freedmen\'s Bureau record can document an application, a complaint, a relationship, a place, or an official action. It cannot by itself prove a completed land title, a universal outcome, or a person\'s tribal citizenship. Its value is greatest when it is read alongside the other records that a documented family and community history requires.',
      attribution: 'The Archive Encyclopedia, citing National Archives Record Group 105'
    },
    didYouKnow: 'The Smithsonian states that its Freedmen’s Bureau Transcription Project has transcribed more than 1.7 million image files. The Search Portal allows research across indexed names, places, and dates, and across transcribed terms and institutions—but every result should still be checked against its original document image and archival locator.',
    keyDocuments: [
      'Freedmen’s Bureau Act (1865), 13 Stat. 507–09 — Tier 1 Primary Source',
      'Freedmen’s Bureau Act extension (1866), 14 Stat. 173–77 — Tier 1 Primary Source',
      'Special Field Orders No. 15 (1865), National Archives Record Group 94 — Tier 1 Primary Source',
      'Register of Applications of Freedmen for Land (1865), National Archives Record Group 105, NAID 595044 — Tier 1 Primary Source',
      'Circular No. 15 (1865), Bureau of Refugees, Freedmen, and Abandoned Lands — Tier 1 Primary Source',
      'Bureau of Refugees, Freedmen, and Abandoned Lands Records, National Archives, Record Group 105 (1865–1872) — Tier 1 Primary Source',
      'Walton-Raji, Angela Y. Black Indian Genealogy Research (1993), Heritage Books — Tier 2 Scholarly',
      'Parsons and Abbott Census of the Creek Nation (1832), National Archives, Record Group 75, M275 — Tier 1 Primary Source',
      'Walter English, The Brister English Project (2021), bristerep.org — Tier 2 Scholarly/Community',
    ],
    sourceCards: [
      {
        year: '1865',
        title: 'Freedmen’s Bureau Act',
        locator: '13 Stat. 507–09, ch. 90; approved March 3, 1865',
        establishes: 'Congress created the Bureau in the War Department, assigned it responsibilities over abandoned lands and matters involving refugees and freedpeople, authorized temporary relief, and provided a limited land-assignment and purchase framework.',
        limitation: 'The statute did not automatically provide permanent title, establish uniform local enforcement, or determine an individual’s ancestry or tribal citizenship.',
        source: 'An Act to establish a Bureau for the Relief of Freedmen and Refugees, 13 Stat. 507–09 (1865)',
        sourceUrl: 'https://www.freedmen.umd.edu/fbact.htm'
      },
      {
        year: '1865',
        title: 'Special Field Orders No. 15',
        locator: 'January 16, 1865; National Archives Record Group 94, Orders & Circulars, series 44',
        establishes: 'Sherman’s order reserved specified coastal lands for settlement, capped plots at forty acres, and described related writings as possessory titles pending later congressional action.',
        limitation: 'It was a geographically limited wartime military order, not a permanent nationwide land-grant statute.',
        source: 'Special Field Orders No. 15, Headquarters, Military Division of the Mississippi',
        sourceUrl: 'https://www.freedmen.umd.edu/sfo15.htm'
      },
      {
        year: '1865',
        title: 'Louisiana Land-Application Register',
        locator: 'Register of Applications of Freedmen for Land, September–October 1865; RG 105; National Archives Identifier 595044',
        establishes: 'Named freedpeople applied to lease abandoned or confiscated land, with the register recording household information, acreage sought, location, means, and remarks.',
        limitation: 'An application is not proof of an approved lease, possession, title, or long-term ownership; it also does not establish Indigenous affiliation.',
        source: 'National Archives DocsTeach, Applications of Freedmen for Land',
        sourceUrl: 'https://docsteach.org/document/land-applications/'
      },
      {
        year: '1865',
        title: 'Circular No. 15: Land Restoration Policy',
        locator: 'Bureau of Refugees, Freedmen, and Abandoned Lands; September 12, 1865',
        establishes: 'The circular rescinded Circular No. 13, set procedures for Bureau land administration, permitted restoration of abandoned land to pardoned owners under stated conditions, and protected existing crops or required compensation.',
        limitation: 'The document states policy; it does not itself establish the outcome for every settlement, claimant, or former owner.',
        source: 'Circular No. 15, approved by President Andrew Johnson',
        sourceUrl: 'https://www.presidency.ucsb.edu/documents/circular-no-15'
      },
      {
        year: '1865–1872',
        title: 'Louisiana Local Research Case File: Robert Butler (Unresolved)',
        locator: 'Land application no. 187, New Orleans, October 7, 1865, RG 105, NAID 595044; adjacent Plantation Department register, M1905 roll 27, volume 110',
        establishes: 'The land register records “Robert Butler and 5 others” applying for land connected to St. Charles Parish. An original-image review of the separate Plantation Department register identifies a Robert Butler in St. Charles Parish as a twenty-seven-year-old male, creating a more specific—but still unresolved—research path.',
        limitation: 'The land application does not supply a matching age or another independent identifier. The records do not establish that both entries identify the same person, and do not prove an approved lease, a later land outcome, Indigenous affiliation, or tribal citizenship.',
        source: 'National Archives RG 105 land-application register; NMAAHC Freedmen’s Bureau Digital Collection, M1905 roll 27, volume 110',
        sourceUrl: 'https://nmaahc.si.edu/freedmens-bureau/record/fbs-1662423774659-1662425557069-0'
      },
      {
        year: '1866',
        title: 'Freedmen’s Bureau Act Extension',
        locator: '14 Stat. 173–77, ch. 200; approved July 16, 1866',
        establishes: 'Congress continued and amended the Bureau’s authority after overriding President Andrew Johnson’s veto.',
        limitation: 'Statutory continuation does not establish effective protection for every claimant or continued district-level operations after the Bureau’s later contraction.',
        source: 'An Act to continue in force and to amend the Act establishing a Bureau for the Relief of Freedmen and Refugees',
        sourceUrl: 'https://www.govinfo.gov/app/details/STATUTE-14/STATUTE-14-Pg173'
      }
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: BLOOD QUANTUM — THE INVENTED SYSTEM
  // ─────────────────────────────────────────────────────────────────────────
  'blood-quantum-invented-system': {
    slug: 'blood-quantum-invented-system',
    fullText: [
      'No Indigenous nation in North America used blood quantum before European contact. Not the Cherokee. Not the Creek. Not the Choctaw. Not the Seminole. Not the Haudenosaunee. Not any of the hundreds of nations that had governed themselves on this continent for thousands of years before European arrival. Blood quantum — the requirement that Indigenous people prove a specific percentage of "Indian blood" to be recognized as tribal members — was invented by the United States government in the late nineteenth century. It was designed to reduce the number of people who could claim Indigenous identity over time. It is still operating today.',

      'Before European contact, Indigenous nations determined membership through kinship, clan affiliation, adoption, and community recognition. A person was Cherokee because they lived as Cherokee, spoke Cherokee, participated in Cherokee governance, and were recognized as Cherokee by their community. A person could become Cherokee through adoption — a practice documented across virtually every Indigenous nation in North America. The concept of a fixed biological percentage of "Indian blood" as the criterion for identity was entirely foreign to Indigenous governance systems.',

      '— THE INVENTION OF BLOOD QUANTUM —',

      'The first federal use of blood quantum as a legal standard for Indigenous identity appears in the Indian Reorganization Act of 1934 (48 Stat. 984), which defined "Indian" as including "all persons of Indian descent who are members of any recognized Indian tribe now under Federal jurisdiction, and all persons who are descendants of such members who were, on June 1, 1934, residing within the present boundaries of any Indian reservation, and shall further include all other persons of one-half or more Indian blood." The one-half blood quantum threshold — the requirement that a person be at least half "Indian" by blood — was the federal government\'s first explicit use of blood quantum as a legal definition of Indigenous identity.',

      'But the blood quantum system was operationalized earlier, through the Dawes Commission (1893–1907). The Curtis Act of 1898 (30 Stat. 495) authorized the Dawes Commission to enroll members of the Five Civilized Tribes for land allotment. The enrollment process created separate categories: "Indians by blood," "intermarried whites," and "Freedmen." The blood quantum threshold used by the Dawes Commission was not fixed — commissioners made individual determinations about whether a person had "sufficient" Indian blood to be enrolled "by blood" rather than as a Freedman. The criteria were subjective, racially biased, and applied inconsistently. A person with a Cherokee father and an African mother was typically enrolled as a Freedman — not as Cherokee by blood — regardless of their actual Indigenous ancestry.',

      '— THE MATHEMATICS OF ERASURE —',

      'The logic of blood quantum, applied over generations, is a mathematics of erasure. A person who is "full blood" Cherokee has children with a non-Cherokee person: their children are "half blood." Those children have children with non-Cherokee people: the grandchildren are "quarter blood." Those grandchildren have children with non-Cherokee people: the great-grandchildren are "one-eighth blood." Under the blood quantum thresholds used by many tribes today, those great-grandchildren are no longer legally Cherokee. In four generations — roughly 100 years — a family can be legally defined out of existence as Cherokee. This is not a coincidence. It is the design. Vine Deloria Jr., the Standing Rock Sioux scholar and author of Custer Died for Your Sins (1969), documented this explicitly: "The only real Indians are those who are enrolled in a tribe, and enrollment requires blood quantum. The blood quantum system is a slow-motion termination policy."',

      'The specific impact on Black Native Americans is documented in the Dawes Rolls. Angela Y. Walton-Raji\'s research reveals that Dawes Commission enrollment cards for Freedmen enrollees frequently listed the mother\'s race as "Negro" and the father\'s race as blank — not because the father was unknown, but because the commissioners did not record Indigenous paternity for Freedmen enrollees. The "blood" was not recorded. The Indigenous ancestry was administratively erased at the moment of enrollment. The blood quantum system then made it impossible for subsequent generations to prove the ancestry that had been erased.',

      '— THE SYSTEM TODAY —',

      'Blood quantum requirements vary across the Five Civilized Tribes today. The Cherokee Nation eliminated blood quantum requirements for tribal citizenship in 1975, basing membership instead on documented descent from a person on the original Dawes Rolls — but the Dawes Rolls themselves enrolled Black Native Americans as Freedmen rather than by blood, so the "documented descent" requirement perpetuates the original erasure. The 2007 Cherokee Nation vote to strip Freedmen descendants of citizenship was explicitly a vote to enforce the Dawes Rolls\' racial classification rather than the 1866 Treaty\'s guarantee of equal rights. The 2017 federal court ruling restoring Freedmen citizenship was a ruling that the 1866 Treaty superseded the blood quantum-based citizenship requirements.',

      'Kim TallBear, a Sisseton-Wahpeton Oyate scholar and author of Native American DNA: Tribal Belonging and the False Promise of Genetic Science (2013), has documented how blood quantum and genetic ancestry testing both fail to capture the complexity of Indigenous identity. TallBear argues that "DNA ancestry tests are not tribal enrollment applications" — they cannot determine tribal membership, they cannot prove or disprove Indigenous identity, and they are being used by some to claim Indigenous identity without community recognition. The blood quantum system created the problem that genetic testing is now being asked to solve. Neither system captures what Indigenous nations themselves used to determine membership: kinship, community, and recognition.',

      'Blood quantum was invented by the United States government to reduce the number of people who could claim Indigenous identity. It has worked. The Indigenous population of the United States, estimated at 5 to 10 million at the time of European contact, was reduced to 237,196 by the 1900 Census — a 95% to 97% reduction. Blood quantum did not cause that reduction alone. Disease, warfare, forced removal, and deliberate starvation caused most of it. But blood quantum ensured that the survivors and their descendants would face a legal system designed to classify them out of existence over time. The system is still operating. The question is whether the people it was designed to erase will be allowed to reclaim what was taken.',
    ],
    pullQuote: {
      text: '"The only real Indians are those who are enrolled in a tribe, and enrollment requires blood quantum. The blood quantum system is a slow-motion termination policy." — Vine Deloria Jr., Standing Rock Sioux scholar, author of Custer Died for Your Sins (1969). No Indigenous nation used blood quantum before European contact. It was invented by the United States government. It is still operating today.',
      attribution: 'The Archive Encyclopedia, citing Vine Deloria Jr., Custer Died for Your Sins (1969); Indian Reorganization Act (1934); Curtis Act (1898)'
    },
    didYouKnow: 'The Cherokee Nation eliminated blood quantum requirements for tribal citizenship in 1975 — but based membership on documented descent from the Dawes Rolls. Since the Dawes Rolls enrolled Black Native Americans as Freedmen rather than by blood, the "documented descent" requirement perpetuates the original erasure even without an explicit blood quantum threshold.',
    keyDocuments: [
      'Curtis Act (1898), 30 Stat. 495 — Tier 1 Primary Source',
      'Indian Reorganization Act (1934), 48 Stat. 984 — Tier 1 Primary Source',
      'Deloria, Vine Jr. Custer Died for Your Sins: An Indian Manifesto (1969), Macmillan — Tier 2 Scholarly',
      'TallBear, Kim. Native American DNA: Tribal Belonging and the False Promise of Genetic Science (2013), University of Minnesota Press — Tier 2 Scholarly',
      'Walton-Raji, Angela Y. Black Indian Genealogy Research (1993), Heritage Books — Tier 2 Scholarly',
      'Dawes Commission Enrollment Cards (1898–1907), National Archives, Record Group 75 — Tier 1 Primary Source',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: TURTLE ISLAND — SCHOLARLY FRAMING
  // ─────────────────────────────────────────────────────────────────────────
  'turtle-island-niji': {
    slug: 'turtle-island-niji',
    fullText: [
      '"Turtle Island" is not a metaphor. It is a name. Specifically, it is the Haudenosaunee (Iroquois Confederacy) name for the North American continent, documented in their oral tradition and confirmed by anthropologists, linguists, and historians who have studied Haudenosaunee culture for over two centuries. The Anishinaabe, Lenape, and many other Indigenous nations use the same or similar terms for this continent. The name predates the word "America" by thousands of years. It is the oldest documented name for this land.',

      'The Haudenosaunee creation story — documented in the oral tradition of the Onondaga, Mohawk, Oneida, Cayuga, Seneca, and Tuscarora nations — describes the world as resting on the back of a great turtle. When the world was flooded, a woman fell from the sky and landed on the turtle\'s back; the animals brought mud from the bottom of the water to build the land she needed to survive. The land grew into the continent. The continent is the turtle\'s back. The name is not symbolic. It is geographic. It is the name of this place.',

      '— THE ARCHAEOLOGICAL RECORD —',

      'The archaeological evidence for continuous Indigenous habitation of North America extends back at least 15,000 years — and possibly much longer. The Clovis culture, identified by distinctive stone tools found at sites across North America, dates to approximately 13,000 BCE. Pre-Clovis sites — including Pedra Furada in Brazil (dated to 30,000–60,000 years ago by Niède Guidon, though disputed by some scholars) and the Meadowcroft Rockshelter in Pennsylvania (dated to at least 16,000 years ago) — suggest human presence in the Americas significantly earlier than the Clovis culture.',

      'The genetic evidence is unambiguous: Indigenous Americans are the oldest continuous population in the Western Hemisphere. A 2018 study published in Science analyzed ancient DNA from 49 individuals across the Americas and confirmed that all Indigenous American populations descend from a single founding population that crossed from Siberia into North America approximately 15,000 to 20,000 years ago. This founding population then diversified into the hundreds of distinct nations, languages, and cultures that European colonists encountered after 1492. The people who built the Etowah Mounds, the people who formed the Haudenosaunee Confederacy, the people who created the Aztec Empire — all descended from this single founding population that has been on this land for at least 15,000 years.',

      '— THE COMPLEXITY OF EARLY AMERICAN POPULATIONS —',

      'The question of whether early American populations included dark-skinned people of African or Australo-Melanesian ancestry is a legitimate area of scholarly inquiry, though the evidence is contested. The Luzia skeleton — found in Minas Gerais, Brazil, dated to approximately 11,500 years ago — was analyzed by Walter Alves Neves and colleagues, who noted that its cranial morphology differed from that of later Siberian-derived populations and showed similarities to Australo-Melanesian populations. The Naia skeleton — found in the Yucatán Peninsula, Mexico, dated to approximately 12,000 years ago — showed similar characteristics. These findings suggest that the earliest Americans may have included populations with physical characteristics different from the Siberian-derived populations that arrived later.',

      'This is a Tier 2 scholarly finding — supported by peer-reviewed research but contested within the field. The mainstream consensus remains that all Indigenous American populations descend from the single Siberian founding population. The Luzia and Naia findings are interpreted by some scholars as evidence of population diversity within that founding group, not as evidence of a separate African migration. The question is not settled. It is an active area of research.',

      '— THE NIJI AND THE COMMUNITY TRADITION —',

      'Within the Black Native American community, the term "Niji" is used by some groups to describe the original dark-skinned Indigenous people of Turtle Island — the people who were here before the Siberian migration, or who represent a distinct lineage within the founding population. This is a Tier 3 claim — Community Historical Tradition — because it has not been confirmed by primary source documentation or peer-reviewed genetic research at the level of specificity the claim requires. The Niji tradition draws on the Luzia and Naia skeletal evidence, on Bartolomé de las Casas\'s 1498 account of Columbus learning of dark-skinned people trading gold-tipped spears in the Americas, and on the oral traditions of various Indigenous and Black Indigenous communities.',

      'The Archive Encyclopedia presents the Niji tradition with respect and with precision. The documented evidence — the Luzia skeleton, the Naia skeleton, the de las Casas account — is real and is presented at its proper evidence tier. The specific claim that these findings prove the Niji were the original inhabitants of Turtle Island is Tier 3. The documented evidence that dark-skinned people were present in the Americas before European contact is Tier 2. The documented evidence that the people now called "Black" include descendants of the original inhabitants of this continent — through the Creek/Muscogee Nation, through the Freedmen enrollment, through the renaming chain — is Tier 1.',

      'Turtle Island is the name of this place. The people who named it have been here for at least 15,000 years. The people who were renamed and reclassified as "Negro" and "Black" include, in documented cases, the descendants of those original inhabitants. The name was taken. The land was taken. The identity was taken. The work of this encyclopedia is to document the taking — and to begin the work of return.',
    ],
    pullQuote: {
      text: '"Turtle Island" is not a metaphor. It is the Haudenosaunee name for the North American continent — documented in their oral tradition and confirmed by anthropologists. The people who named it have been here for at least 15,000 years. The people who were renamed "Negro" include, in documented cases, their descendants.',
      attribution: 'The Archive Encyclopedia, citing Haudenosaunee oral tradition; Raghavan et al., Science (2015); Neves and Hubbe, Proceedings of the National Academy of Sciences (2005)'
    },
    didYouKnow: 'The Haudenosaunee Confederacy — the alliance of the Onondaga, Mohawk, Oneida, Cayuga, Seneca, and Tuscarora nations — is one of the oldest continuously operating democratic governments in the world, with a constitution (the Great Law of Peace) that historians and legal scholars have documented as an influence on the U.S. Constitution. The people who named this land "Turtle Island" were governing it democratically centuries before European contact.',
    keyDocuments: [
      'Raghavan, M. et al. "Genomic evidence for the Pleistocene and recent population history of Native Americans," Science (2015) — Tier 2 Scholarly',
      'Neves, W.A. and Hubbe, M. "Cranial morphology of early Americans from Lagoa Santa, Brazil: implications for the settlement of the New World," Proceedings of the National Academy of Sciences (2005) — Tier 2 Scholarly',
      'Las Casas, Bartolomé de. Historia de las Indias (1552–1561) — Tier 1 Primary Source',
      'Haudenosaunee oral tradition, documented in: Parker, Arthur C. The Constitution of the Five Nations (1916), New York State Museum — Tier 2 Scholarly',
      'Guidon, Niède. Pedra Furada archaeological site reports (1986–present), Museu do Homem Americano, Brazil — Tier 2 Scholarly (contested)',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: THE COUNTER-NARRATIVE
  // ─────────────────────────────────────────────────────────────────────────
  'counter-narrative': {
    slug: 'counter-narrative',
    fullText: [
      'A rigorous encyclopedia must engage the strongest version of the opposing argument. This chapter does exactly that. The mainstream scholarly consensus on the ancestry of African Americans is clear, well-documented, and supported by the largest genetic studies ever conducted on this population. This encyclopedia presents that consensus in full — and then shows, with primary source evidence, where it is incomplete and where it relies on the same administrative records that this encyclopedia documents as instruments of erasure.',

      'The mainstream argument runs as follows: The Transatlantic Slave Trade transported approximately 12.5 million Africans from West and West-Central Africa to the Americas between the 16th and 19th centuries. Of these, approximately 10.7 million survived the Middle Passage. Approximately 388,000 arrived in what became the United States. The genetic evidence confirms that African Americans are primarily of West African descent: the 2015 Bryc et al. study, published in the American Journal of Human Genetics and based on 23andMe data from 5,269 self-described African Americans, found an average genetic admixture of 73.2% West African, 24.0% European, and 0.8% Native American ancestry. Henry Louis Gates Jr., the Harvard historian and genetic genealogist, has stated publicly that genetic tests reveal minimal Native American ancestry among African Americans, with European ancestry being far more prevalent — often contradicting family narratives of Native American ancestry.',

      '— WHERE THE MAINSTREAM ARGUMENT IS STRONGEST —',

      'The mainstream argument is strongest on the demographic evidence. The scale of the Transatlantic Slave Trade is documented in the Trans-Atlantic Slave Trade Database (slavevoyages.org) — the most comprehensive historical database ever assembled on the subject, containing records of over 36,000 individual slave voyages. The database documents the specific African ports of embarkation, the specific American ports of arrival, the number of people transported, and the number who died during the Middle Passage. This is Tier 1 primary source evidence of extraordinary quality. The demographic foundation of the African American population is primarily West African. This is not in dispute.',

      'The genetic evidence is also strong. The Bryc 2015 study is the largest genetic study of African American ancestry ever conducted. Its finding that the average African American has 73.2% West African ancestry is a Tier 2 scholarly finding based on a large, well-designed study. The 0.8% average Native American ancestry is real but small. Henry Louis Gates Jr.\'s observation that genetic tests frequently contradict family narratives of Native American ancestry is documented and accurate.',

      '— WHERE THE MAINSTREAM ARGUMENT IS INCOMPLETE —',

      'The mainstream argument has three significant gaps that this encyclopedia documents with primary source evidence.',

      'First: the mainstream argument does not account for the documented reclassification of Indigenous people as "Negro" in the colonial and post-colonial record. The 1719 South Carolina statute — "all such slaves as are not entirely Indian shall be accounted as negroe" — is a Tier 1 primary source that documents the legal transformation of Indigenous identity into Black identity. The Virginia county records showing "Robin an Indian" reclassified as "Robin a negro" between 1715 and 1717 are Tier 1 primary sources. The 1930 Census enumerator instructions classifying anyone with any "Negro blood" as "Negro" regardless of Indigenous ancestry are a Tier 1 primary source. These documents show that the administrative category of "Negro" was applied to people of Indigenous ancestry — and that the genetic record of those people would show up in the Bryc study as "West African" ancestry if their Indigenous ancestors had been reclassified as Negro before having children. The reclassification happened before the genetic record was created.',

      'Second: the mainstream argument does not account for the documented erasure of Indigenous ancestry in the Dawes Rolls. The Dawes Commission enrolled Black Native Americans as Freedmen rather than by blood, regardless of their actual Indigenous ancestry. Angela Y. Walton-Raji\'s research documents specific cases where a person\'s Indigenous paternity was not recorded on their Dawes enrollment card. If a person\'s Indigenous ancestry was not recorded in the Dawes Rolls, it would not appear in the genealogical record that genetic ancestry companies use to interpret DNA results. The genetic test would show "West African" ancestry where there was actually Indigenous ancestry — because the Indigenous ancestry was administratively erased from the record that the genetic test uses to interpret the DNA.',

      'Third: the 0.8% average Native American ancestry in the Bryc study is an average across all African Americans — but the study also found significant regional variation, with higher concentrations of Native American ancestry in the Southeast. The people most likely to have had Indigenous ancestry reclassified as Negro — the descendants of the Yamasee War, the Tuscarora War, the Creek removal — are concentrated in the Southeast. The 0.8% average masks the possibility of significantly higher concentrations in specific populations.',

      '— THE HONEST CONCLUSION —',

      'The mainstream argument is correct that the primary ancestry of African Americans is West African, and that the Transatlantic Slave Trade is the primary demographic foundation of the African American population. This encyclopedia does not dispute that. What this encyclopedia documents is that the administrative category of "Negro" — and later "Black" and "African American" — was applied to people of Indigenous ancestry through a documented chain of legal reclassification. The scale of that reclassification is not yet fully quantified. It may have been large. It may have been small. The primary source evidence documents that it happened. The genetic evidence cannot fully resolve the question because the reclassification happened before the genetic record was created. The genealogical evidence — the cross-referencing of Freedmen\'s Bureau records, Dawes Rolls, tribal census rolls, and county records — is the most powerful tool available for answering the question at the individual and family level. That work is ongoing.',
    ],
    pullQuote: {
      text: 'The mainstream argument is correct that the primary ancestry of African Americans is West African. This encyclopedia does not dispute that. What this encyclopedia documents is that the administrative category of "Negro" was applied to people of Indigenous ancestry through a documented chain of legal reclassification — and that the reclassification happened before the genetic record was created.',
      attribution: 'The Archive Encyclopedia, citing Bryc et al., American Journal of Human Genetics (2015); Trans-Atlantic Slave Trade Database, slavevoyages.org; South Carolina Slave Code (1719)'
    },
    didYouKnow: 'The Trans-Atlantic Slave Trade Database (slavevoyages.org) contains records of over 36,000 individual slave voyages — the most comprehensive historical database ever assembled on the subject. It documents the specific African ports of embarkation, the specific American ports of arrival, and the number of people transported on each voyage. It is the strongest Tier 1 primary source evidence for the demographic foundation of the African American population.',
    keyDocuments: [
      'Bryc, K. et al. "The Genetic Ancestry of African Americans, Latinos, and European Americans across the United States," American Journal of Human Genetics, 96(1), 37–53 (2015) — Tier 2 Scholarly',
      'Trans-Atlantic Slave Trade Database, slavevoyages.org — Tier 1 Primary Source (aggregated)',
      'South Carolina Slave Code (1719), Colonial Records of South Carolina — Tier 1 Primary Source',
      '1930 U.S. Census Enumerator Instructions, National Archives Record Group 29 — Tier 1 Primary Source',
      'Gates, Henry Louis Jr. "The Myth of African and Indian Ancestry" (2014), The Root — Tier 2 Scholarly',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: THE PSYCHOLOGICAL AND CULTURAL IMPACT
  // ─────────────────────────────────────────────────────────────────────────
  'psychological-cultural-impact': {
    slug: 'psychological-cultural-impact',
    fullText: [
      'The legal record documents the erasure. The genealogical record documents the mechanism. The genetic record documents the ancestry. But none of these records capture what it feels like to be told that the identity you know to be true is not recognized by the institution that has the power to confirm or deny it. This chapter documents the human cost of the paper genocide — in the words of the people who lived it.',

      'Johnnie Mae Austin was a Creek Freedmen descendant whose grandfather, Jake Simmons, was, in her words, "Creek to the bone." He spoke fluent Creek. He lived on Creek land. He was recognized as Creek by his community. When the Creek Nation amended its citizenship rules in 1979 to require documented descent from the "Creek by blood" section of the Dawes Rolls, Johnnie Mae Austin lost her tribal mail. She lost her connection to the institution that was supposed to recognize her identity. Her grandson, Damario Solomon-Simmons, has spent years fighting in federal court to reclaim what was taken. "My grandfather was Creek," Solomon-Simmons has said. "The Dawes Rolls said he was Freedmen. The Dawes Rolls were wrong. And we have been paying for that mistake ever since."',

      'Sharon Lenzy-Scott, another Creek Freedmen descendant, recalled the specific moment when her family\'s connection to the Creek Nation was severed: "My mother was told we were Freedmen and weren\'t entitled to any more checks. Just like that. No explanation. No appeal. Just: you\'re not Creek anymore." The "checks" were tribal benefit payments — the economic expression of tribal citizenship. When the citizenship was stripped, the benefits stopped. The healthcare stopped. The educational assistance stopped. The connection to the land stopped.',

      '— THE CHEROKEE FREEDMEN —',

      'The 2007 Cherokee Nation vote to strip Freedmen descendants of citizenship affected approximately 2,800 people. These were people whose ancestors had been guaranteed "all the rights of native Cherokees" by the 1866 Treaty — a treaty the U.S. Senate had ratified and which remained legally binding. The vote stripped them of citizenship, healthcare, housing assistance, educational benefits, and the right to vote in tribal elections. It took a decade of federal litigation and a 2017 U.S. District Court ruling to restore what the 1866 Treaty had promised.',

      'The psychological impact of the 2007 disenrollment has been documented by scholars and journalists. Lolita Buckner Inniss, in her 2015 article "Cherokee Freedmen and the Color of Belonging" (Columbia Journal of Race and Law), describes the experience as "deep psychic harm" — the harm of being told that the community you belong to does not recognize you as belonging. "The denial of citizenship," Inniss writes, "is not merely an administrative act. It is a statement about who counts as a person within the community. And when that statement is made on the basis of race — when the criterion for belonging is the absence of African ancestry — it is a statement with a specific historical meaning in the American context."',

      '— THE BLACK SEMINOLES —',

      'The Black Seminoles of Brackettville, Texas, and Nacimiento, Coahuila, Mexico, are the most complete surviving community of Black Indigenous people in North America. They are the descendants of escaped enslaved Africans who found refuge among the Seminole Nation in Spanish Florida, fought alongside the Seminoles in the Second Seminole War (1835–1842), were removed to Indian Territory, and then — facing re-enslavement under Creek and Cherokee rule — migrated to Mexico in the 1850s under the leadership of John Horse (Juan Caballo). Some returned to Texas to serve as U.S. Army scouts, settling near Fort Clark and eventually Brackettville.',

      'The Black Seminoles maintain a distinct Afro-Indigenous identity. They speak Seminole (a Creole language that blends English, Spanish, and Seminole vocabulary). They maintain Seminole cultural practices. They identify as Seminole. The Seminole Nation of Oklahoma now considers Freedmen descendants as enrolled tribal citizens — but full rights are not always extended, and the struggle for complete recognition and access to resources continues. The Black Seminoles of Nacimiento, Mexico, have maintained their community for over 170 years — a living proof that Black Indigenous identity can survive forced displacement, colonial reclassification, and a century and a half of pressure to assimilate.',

      '— THE COST OF DENIAL —',

      'The denial of Indigenous identity is not only psychological. It is material. Tribal citizenship provides access to healthcare through the Indian Health Service. It provides access to educational assistance through tribal scholarship programs. It provides access to housing assistance, economic development programs, and — in some cases — land rights and per capita payments from tribal revenues. When Black Native Americans are denied tribal citizenship on the basis of their Freedmen enrollment status, they are denied access to all of these material benefits. The denial is not symbolic. It is economic. It is medical. It is generational.',

      'The documented cases — Johnnie Mae Austin, Sharon Lenzy-Scott, the 2,800 Cherokee Freedmen stripped of citizenship in 2007, the Black Seminoles of Brackettville and Nacimiento — are not isolated incidents. They are the human face of the paper genocide. The Dawes Rolls enrolled their ancestors as Freedmen rather than by blood. The blood quantum system made it impossible to prove the ancestry that had been erased. The tribal citizenship rules enforced the erasure. And the people who knew who they were — who had always known who they were — were told, by the institutions with the power to confirm or deny, that they were wrong.',
    ],
    pullQuote: {
      text: '"My grandfather was Creek to the bone. He spoke fluent Creek. He lived on Creek land. The Dawes Rolls said he was Freedmen. The Dawes Rolls were wrong. And we have been paying for that mistake ever since." — Damario Solomon-Simmons, Creek Freedmen descendant, federal court plaintiff',
      attribution: 'The Archive Encyclopedia, citing Inniss, "Cherokee Freedmen and the Color of Belonging," Columbia Journal of Race and Law (2015); Gayle, "The black Americans suing to reclaim their Native American identity," The Guardian (2018)'
    },
    didYouKnow: 'The Black Seminoles of Nacimiento, Coahuila, Mexico, have maintained their community for over 170 years — since their migration from Indian Territory in the 1850s under the leadership of John Horse (Juan Caballo). They speak Seminole, maintain Seminole cultural practices, and identify as Seminole. They are the longest-surviving Black Indigenous community in North America.',
    keyDocuments: [
      'Inniss, Lolita Buckner. "Cherokee Freedmen and the Color of Belonging" (2015), Columbia Journal of Race and Law — Tier 2 Scholarly',
      'Cherokee Nation v. Nash, No. 1:03-cv-01209 (D.D.C. 2017) — Tier 1 Primary Source',
      'Gayle, Caleb. "The black Americans suing to reclaim their Native American identity" (2018), The Guardian — Tier 2 Scholarly/Journalistic',
      'Etienne-Gray, Tracé. "The History of Black Seminole Indians: From Florida to Mexico" (1995, updated 2020), Texas State Historical Association — Tier 2 Scholarly',
      'Wamba, Liam M. "Asserting Identity: An Afro-Indigenous Community Demands Recognition" (2023), YES! Magazine — Tier 2 Scholarly/Journalistic',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER: THE GARIFUNA — INTERNATIONAL PROOF OF CONCEPT
  // ─────────────────────────────────────────────────────────────────────────
  'garifuna-international': {
    slug: 'garifuna-international',
    fullText: [
      'If you want to understand what happened to Black Native Americans in North America, look at what happened to the Garifuna people of the Caribbean. Their story is the same story — the same colonial attempt to reclassify a Black Indigenous people as "Negro" and strip them of their land claims, their sovereignty, and their identity. The difference is that the Garifuna survived with their identity intact. They are still here. They are recognized by UNESCO. And their survival is the proof of concept for everything this encyclopedia argues.',

      'The Garifuna people — also known as the Garinagu — are a distinct Afro-Indigenous ethnic group whose origins lie on the Caribbean island of Saint Vincent (known to them as Yurumein). Their ancestry is a documented blend of the Indigenous Arawak and Kalinago (Island Carib) peoples of the Caribbean and West African individuals who escaped slavery. The first Africans arrived on Saint Vincent around 1635, primarily from shipwrecked Spanish slave ships. They were from the Ibibio ethnic group of modern-day Nigeria. They survived and integrated with the Indigenous Carib population, forming independent communities. Over the following century, more escaped enslaved people arrived from neighboring islands — Barbados, St. Lucia, Grenada — and were offered protection by the Caribs. The intermingling of African and Indigenous peoples on Saint Vincent produced the Garifuna: a people who were neither African nor Indigenous in the colonial sense, but both.',

      '— THE COLONIAL ATTEMPT AT RECLASSIFICATION —',

      'The British colonial administration on Saint Vincent attempted to reclassify the Garifuna as "Negro" — to strip them of their Indigenous status by emphasizing their African heritage. The mechanism was the same as in North America: administrative labeling. British Governor William Young\'s 1795 report, "Account of the Black Charaibs," framed the Indigenous St. Vincent population as "mere interlopers from Africa" to undermine their land claims. By calling them "Black Caribs" rather than "Caribs," the British administration attempted to reclassify them as African slaves rather than Indigenous landowners. This was not a description. It was a legal strategy. If the Garifuna were African, they had no land rights. If they were Indigenous, they did.',

      'The Garifuna resisted. Chief Joseph Chatoyer led the First Carib War (1769–1773), successfully defending Garifuna territory and forcing a peace treaty that delineated their lands. When tensions reignited, the Second Carib War (1795–1796) ended in defeat. General Ralph Abercromby led a major British military expedition that overwhelmed the Garifuna resistance. Chief Chatoyer was killed in battle on March 14, 1795 — he is now recognized as the first national hero of Saint Vincent and the Grenadines.',

      '— THE 1797 DEPORTATION —',

      'Following their defeat, the British authorities decided to deport the Garifuna from Saint Vincent to prevent further revolts. In 1797, over 5,000 Garifuna were forcibly removed. Those who exhibited more African features were specifically targeted for deportation — a racial selection process that mirrored the "one-drop rule" being applied simultaneously in North America. They were initially sent to Baliceaux, where many perished from hunger and disease. Then they were transported to the island of Roatán, Honduras, arriving on April 12, 1797. Only approximately 2,500 survived the journey — a mortality rate of 50%.',

      'From Roatán, the Garifuna expanded along the Caribbean coast of Central America, establishing communities in present-day Honduras, Belize, Guatemala, and Nicaragua. Today, the Garifuna population is estimated at approximately 400,000 globally: 200,000 in Honduras, 200,000 in the United States (primarily in New York, Los Angeles, and Houston), 15,000 in Belize, 5,000 in Guatemala, and 2,000 in Nicaragua.',

      '— UNESCO RECOGNITION —',

      'In 2001, UNESCO proclaimed the Language, Dance, and Music of the Garifuna as a "Masterpiece of the Oral and Intangible Heritage of Humanity." The designation recognizes the Garifuna language — an Arawakan language with influences from Carib, French, English, and African languages — and the Garifuna cultural practices of punta dance, paranda music, and the dügü ceremony. This is the highest international recognition of cultural heritage available. The same colonial administration that tried to classify the Garifuna as "mere interlopers from Africa" in 1795 has been superseded by a UNESCO designation that recognizes them as a distinct Indigenous people with a unique and irreplaceable cultural heritage.',

      '— THE PROOF OF CONCEPT —',

      'The Garifuna story is the proof of concept for everything this encyclopedia argues. A Black Indigenous people existed. They were targeted for reclassification by a colonial administration that used administrative labeling — "Black Caribs" instead of "Caribs" — to strip them of their land claims. They resisted. They were defeated militarily. They were forcibly displaced. They survived. They maintained their identity. They are still here. And they are recognized by UNESCO as a distinct people with a unique and irreplaceable cultural heritage.',

      'The difference between the Garifuna and the Black Native Americans of North America is not that the colonial attempt at reclassification was different. The attempt was the same. The difference is that the Garifuna had a geographic and cultural coherence — a specific island, a specific language, a specific community — that made their survival as a distinct people possible even after forced displacement. The Black Native Americans of North America were dispersed across a continent, enrolled in separate racial categories by the Dawes Commission, classified as "Negro" by the 1930 Census, and denied the institutional recognition that would have allowed them to maintain their identity as a distinct people. The Garifuna survived because they stayed together. The Black Native Americans of North America were separated — by the Dawes Rolls, by the one-drop rule, by the 1930 Census — and the separation was the instrument of erasure.',

      'The Garifuna are not a historical curiosity. They are a living community of 400,000 people who carry the proof that Black Indigenous identity is real, that it can survive colonial attempts at erasure, and that the people who were reclassified as "Negro" in North America had counterparts in the Caribbean who were reclassified as "Black Caribs" — and who refused to accept the reclassification. Their survival is the answer to the question this encyclopedia asks. The identity was real. The erasure was deliberate. And the people who survived it are still here.',
    ],
    pullQuote: {
      text: 'British Governor William Young\'s 1795 report framed the Garifuna as "mere interlopers from Africa" to undermine their land claims. By calling them "Black Caribs" rather than "Caribs," the British administration attempted to reclassify them as African slaves rather than Indigenous landowners. This was not a description. It was a legal strategy. The same strategy was applied in North America. The Garifuna refused to accept it.',
      attribution: 'The Archive Encyclopedia, citing Young, William. An Account of the Black Charaibs in the Island of St. Vincent\'s (1795); UNESCO Intangible Cultural Heritage Designation (2001)'
    },
    didYouKnow: 'April 12, 1797 — the date the Garifuna arrived on Roatán, Honduras after their forced deportation from Saint Vincent — is celebrated as Garifuna Settlement Day, a national holiday in Belize. Chief Joseph Chatoyer, who died defending Garifuna territory in 1795, is recognized as the first national hero of Saint Vincent and the Grenadines. The colonial administration that tried to erase the Garifuna has been replaced by nations that honor them.',
    keyDocuments: [
      'Young, William. An Account of the Black Charaibs in the Island of St. Vincent\'s (1795) — Tier 1 Primary Source',
      'UNESCO, Language, Dance and Music of the Garifuna, Intangible Cultural Heritage Designation (2001) — Tier 1 Primary Source',
      'Minority Rights Group International. "Garifuna (Garinagu) in Belize" (Undated) — Tier 2 Scholarly',
      'Gonzalez, Nancie L. Sojourners of the Caribbean: Ethnogenesis and Ethnohistory of the Garifuna (1988), University of Illinois Press — Tier 2 Scholarly',
      'Palacio, Joseph O. The Garifuna: A Nation Across Borders (2005), Cubola Productions — Tier 2 Scholarly',
    ],
  },

};

export function getGapsContent(slug: string): ChapterContent | undefined {
  return GAPS_CONTENT[slug];
}
