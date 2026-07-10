// Expanded timeline event details
// Each entry links a timeline event (by year + partial event text) to a full description,
// key fact, primary source, visual image, and related chapter slug

export interface TimelineDetail {
  description: string;
  keyFact: string;
  primarySource: string;
  image?: string;
  chapterSlug?: string;
  chapterTitle?: string;
}

export const TIMELINE_DETAILS: Record<string, TimelineDetail> = {
  "1492": {
    description: "On August 3, 1492, Christopher Columbus departed Palos de la Frontera, Spain, with three ships — the Niña, the Pinta, and the Santa María — and approximately 90 men. On October 12, 1492, he made landfall on an island in the Bahamas he named San Salvador, which the Taíno people called Guanahani. Columbus's own journal — preserved through Bartolomé de las Casas's transcription — records his first assessment of the Taíno people with chilling clarity: 'They should be good servants and intelligent... with fifty men they can all be subjugated and made to do what is required of them.' He immediately seized seven Taíno people to bring back to Spain as proof of his discovery. The Taíno were a sophisticated, peaceful civilization of approximately 300,000 to 400,000 people across the Caribbean. Within 50 years of Columbus's arrival, they were effectively extinct — killed by disease, forced labor, and direct violence. Columbus himself governed Hispaniola with documented brutality: he required every Taíno over 14 years old to deliver a quota of gold every three months. Those who failed had their hands cut off. Las Casas, an eyewitness, documented that Columbus's governance reduced the Taíno population of Hispaniola from approximately 300,000 to fewer than 300 within decades.",
    keyFact: "Columbus's own journal entry from October 14, 1492 states: 'with fifty men they can all be subjugated and made to do what is required of them.' This is the Doctrine of Discovery stated in plain language — the first written expression of colonial intent in the Americas.",
    primarySource: "Journal of Christopher Columbus (1492-93), trans. Clements R. Markham (London: 1893), available at Internet Archive; Bartolomé de Las Casas, A Brief Account of the Destruction of the Indies (1542), Project Gutenberg",
    image: "/manus-storage/era_banner_1_1ad8b855.png",
    chapterSlug: "georgia-charter",
    chapterTitle: "The 1732 Georgia Charter",
  },
  "1493": {
    description: "Columbus's second voyage (1493–1496) transformed reconnaissance into colonization. He departed Spain on September 25, 1493, with a fleet of 17 ships and approximately 1,200 to 1,500 men — soldiers, priests, farmers, and administrators — with the explicit purpose of establishing a permanent colony. When he arrived at La Navidad on Hispaniola, he found the 40 men he had left behind on the first voyage all dead, killed in conflict with the Taíno. Columbus responded with systematic military campaigns against the Taíno population. He established the encomienda system — a form of forced labor that required Indigenous people to work for Spanish colonists in exchange for 'protection' and religious instruction. In practice, it was slavery. Columbus began shipping enslaved Taíno people back to Spain for sale — the first transatlantic slave trade in the Americas, predating the African slave trade to the New World by decades. Queen Isabella of Spain initially rejected the enslaved Taíno, declaring them Spanish subjects who could not be enslaved — but the encomienda system continued on the island. The Torres Memorandum, Columbus's own report to the Spanish Crown from the second voyage, documents the colony's brutal conditions: widespread disease, starvation, and the systematic exploitation of the Taíno population. By the end of the second voyage, the Taíno of Hispaniola had been reduced from an estimated 300,000 to fewer than 100,000. Columbus was eventually arrested by the Spanish Crown's own investigator, Francisco de Bobadilla, in 1500 and returned to Spain in chains — not for his treatment of the Taíno, but for his mismanagement of the colony and his brutal treatment of Spanish colonists.",
    keyFact: "Columbus's second voyage established the encomienda system — forced Indigenous labor — and initiated the first transatlantic slave trade in the Americas, shipping enslaved Taíno people to Spain for sale. He was eventually arrested by the Spanish Crown in 1500 — not for enslaving Indigenous people, but for mismanaging the colony.",
    primarySource: "Torres Memorandum (1494), Columbus's report to the Spanish Crown; Bartolomé de Las Casas, A Brief Account of the Destruction of the Indies (1542); Samuel Eliot Morison, Admiral of the Ocean Sea (1942)",
    image: "/manus-storage/era_banner_1_1ad8b855.png",
    chapterSlug: "georgia-charter",
    chapterTitle: "The 1732 Georgia Charter",
  },
  "1452": {
    description: "Pope Nicholas V issued the Papal Bull 'Dum Diversas,' authorizing the Portuguese Crown to 'invade, search out, capture, vanquish, and subdue all Saracens and pagans' and to reduce them to 'perpetual slavery.' This document, followed by 'Romanus Pontifex' in 1455, created the legal and theological foundation for European colonialism and the transatlantic slave trade. The Doctrine of Discovery — the legal principle that European Christian nations could claim sovereignty over any land not already occupied by Christians — flows directly from these papal edicts.",
    keyFact: "The Papal Bull 'Dum Diversas' (1452) is the foundational document of the Doctrine of Discovery — the legal fiction that justified 572 years of colonial land seizure and enslavement.",
    primarySource: "Papal Bull Dum Diversas (1452), Vatican Archives; Johnson v. M'Intosh, 21 U.S. 543 (1823)",
    chapterSlug: "georgia-charter",
    chapterTitle: "The 1732 Georgia Charter",
  },
  "1619": {
    description: "In August 1619, a Portuguese slave ship arrived at Point Comfort, Virginia, carrying approximately 20 to 30 enslaved Africans who had been captured in present-day Angola. They were traded to English colonists for food and supplies. This moment marks the beginning of chattel slavery in English North America — a system that would operate for 246 years and whose economic and social consequences are documented throughout this encyclopedia.",
    keyFact: "The 1619 arrival of the first enslaved Africans in English North America preceded the Mayflower by one year. The labor of enslaved people built the economic foundation of the United States.",
    primarySource: "Virginia General Assembly records; New York Times 1619 Project (2019); Nikole Hannah-Jones, The 1619 Project",
    chapterSlug: "psychological-warfare",
    chapterTitle: "The Architecture of Psychological Warfare",
  },
  "1732": {
    description: "King George II granted the 1732 Georgia Charter to a corporate body of Trustees, describing the inhabited territories of the Creek and Cherokee Nations as 'waste and desolate' — a legal fiction that erased thousands of Indigenous inhabitants with a single phrase. This charter established the legal framework for colonial land seizure in Georgia and became the template for subsequent land grants across the American Southeast. The specific language 'waste and desolate' is the Doctrine of Discovery applied to Georgia soil.",
    keyFact: "The 1732 Georgia Charter described Creek and Cherokee territories as 'waste and desolate' while thousands of Indigenous people lived there. This legal fiction is the foundation of every subsequent land seizure in Georgia.",
    primarySource: "Georgia Charter (1732), Avalon Project, Yale Law School",
    image: "/manus-storage/scene_georgia_charter_1f896a97.png",
    chapterSlug: "georgia-charter",
    chapterTitle: "The 1732 Georgia Charter",
  },
  "1791": {
    description: "The Haitian Revolution (1791–1804) was the only successful slave revolt in history that resulted in the founding of a new nation. Enslaved Haitians, led by Toussaint L'Ouverture and Jean-Jacques Dessalines, defeated the French, Spanish, and British armies and declared independence on January 1, 1804. The revolution terrified American slaveholders and directly caused the U.S. to tighten slave codes, restrict the movement of free Black people, and impose a devastating trade embargo on Haiti that lasted until 1862.",
    keyFact: "The Haitian Revolution caused Thomas Jefferson to impose a trade embargo on Haiti in 1806 — punishing the world's first Black republic for proving that enslaved people could win their freedom.",
    primarySource: "Thomas Jefferson, Embargo Act correspondence (1806), National Archives",
    image: "/manus-storage/scene_haitian_revolution_f378b7ef.png",
    chapterSlug: "haitian-revolution",
    chapterTitle: "The Haitian Revolution",
  },
  "1830": {
    description: "President Andrew Jackson signed the Indian Removal Act on May 28, 1830, authorizing the forced relocation of the Five Civilized Tribes — Cherokee, Creek, Choctaw, Chickasaw, and Seminole — from their ancestral homelands in the Southeast to 'Indian Territory' west of the Mississippi River. The Act passed Congress despite fierce opposition from Congressman Davy Crockett and others. It directly violated the Supreme Court's ruling in Worcester v. Georgia (1832), which Jackson famously refused to enforce.",
    keyFact: "The Indian Removal Act passed the Senate by only 5 votes — 28 to 19. It was one of the most contested pieces of legislation in early American history, yet its consequences were catastrophic and irreversible.",
    primarySource: "Indian Removal Act, 4 Stat. 411 (1830), National Archives",
    image: "/manus-storage/era_banner_2_76655c44.png",
    chapterSlug: "sovereignty",
    chapterTitle: "The Enforcement Gap",
  },
  "1832": {
    description: "In Worcester v. Georgia (1832), Chief Justice John Marshall ruled that the State of Georgia had no authority over Cherokee territory and that federal treaties with the Cherokee Nation were the supreme law of the land. It was a complete legal victory for the Cherokee. President Andrew Jackson reportedly responded: 'John Marshall has made his decision; now let him enforce it.' Jackson refused to use executive power to enforce the ruling, allowing Georgia to proceed with Cherokee removal. This is the most documented example of the 'enforcement gap' — the space between legal rights and actual power.",
    keyFact: "Worcester v. Georgia (1832) is the most important Supreme Court ruling in Indigenous rights history — and the most completely ignored. Jackson's refusal to enforce it proved that legal victory without political power is meaningless.",
    primarySource: "Worcester v. Georgia, 31 U.S. 515 (1832), Cornell Law School",
    chapterSlug: "sovereignty",
    chapterTitle: "The Enforcement Gap",
  },
  "1838": {
    description: "Between 1838 and 1839, approximately 16,000 Cherokee people were forcibly removed from their homeland in Georgia, Tennessee, Alabama, and North Carolina by U.S. Army troops and Georgia militia. They were marched over 1,000 miles to Indian Territory in present-day Oklahoma. An estimated 4,000 to 8,000 Cherokee died of cold, hunger, disease, and exhaustion during the march — approximately one quarter of the entire nation. The Cherokee called it 'Nunna daul Tsuny' — 'The Trail Where They Cried.'",
    keyFact: "An estimated 4,000 to 8,000 Cherokee died on the Trail of Tears — approximately one quarter of the entire nation. The land they were removed from was immediately distributed to white settlers via the Georgia Land Lottery.",
    primarySource: "Treaty of New Echota (1835), National Archives; Grant Foreman, Indian Removal (1932)",
    image: "/manus-storage/scene_trail_abac87b5.png",
    chapterSlug: "sovereignty",
    chapterTitle: "The Enforcement Gap",
  },
  "1865": {
    description: "The 13th Amendment to the U.S. Constitution, ratified on December 6, 1865, abolished slavery — with one critical exception: 'except as a punishment for crime whereof the party shall have been duly convicted.' Within months, Southern states enacted Black Codes that exploited this loophole with surgical precision. Mississippi's 1865 Vagrancy Law declared freedmen without employment to be vagrants subject to fines; those unable to pay were 'hired out by the sheriff to any white person who will pay said fine.' The convict leasing system — slavery by another name — was born.",
    keyFact: "The 13th Amendment abolished slavery 'except as a punishment for crime.' Within months, Southern states used this loophole to re-enslave Black labor through Black Codes and convict leasing.",
    primarySource: "13th Amendment to the U.S. Constitution (1865); Mississippi Black Code (1865), National Archives",
    chapterSlug: "reconstruction",
    chapterTitle: "The Reconstruction Betrayal",
  },
  "1887": {
    description: "The General Allotment Act (Dawes Act) of 1887 broke up communally held tribal reservation land into individual allotments of 160 acres per family head. Any land remaining after allotments were assigned was declared 'surplus' and sold to non-Native settlers, railroads, and corporations at below-market prices. Between 1887 and 1934, Native Americans lost approximately 90 million acres — nearly two-thirds of all the territory they held in 1887. The Dawes Rolls, which enrolled tribal members for allotments, also created a racial classification system that erased the identity of thousands of mixed Black-Indigenous people.",
    keyFact: "Between 1887 and 1934, Native Americans lost 90 million acres through the Dawes Act — nearly two-thirds of all the territory they held in 1887. This is the largest single transfer of land from Indigenous to non-Indigenous ownership in American history.",
    primarySource: "General Allotment Act (Dawes Act), 24 Stat. 388 (1887), National Archives",
    image: "/manus-storage/scene_dawes_act_34da5aae.png",
    chapterSlug: "dawes-act",
    chapterTitle: "The 1887 Dawes Act",
  },
  "1896": {
    description: "In Plessy v. Ferguson (1896), the U.S. Supreme Court ruled 7-1 that racial segregation was constitutional under the 'separate but equal' doctrine. The case arose when Homer Plessy, a man who was one-eighth Black, deliberately sat in a whites-only railroad car in Louisiana to challenge the state's Separate Car Act. Justice John Marshall Harlan wrote a powerful lone dissent: 'Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.' The ruling stood for 58 years until Brown v. Board of Education (1954).",
    keyFact: "Plessy v. Ferguson (1896) enshrined 'separate but equal' as constitutional law for 58 years. The facilities were always separate. They were never equal.",
    primarySource: "Plessy v. Ferguson, 163 U.S. 537 (1896), Cornell Law School",
    chapterSlug: "reconstruction",
    chapterTitle: "The Reconstruction Betrayal",
  },
  "1921": {
    description: "On the basis of a false accusation, a white mob attacked the Greenwood District of Tulsa, Oklahoma — known as 'Black Wall Street' — on May 31 and June 1, 1921. The mob burned 35 blocks of the most prosperous Black community in America, destroying 1,256 homes, 191 businesses, a hospital, a school, a library, and a dozen churches. An estimated 300 people were killed. The Dreamland Theatre, the Williams Confectionery, and the 54-room Stradford Hotel — the largest Black-owned hotel in the country — were all destroyed. Insurance claims were denied. No one was ever prosecuted.",
    keyFact: "The Tulsa Race Massacre destroyed 35 blocks of 'Black Wall Street' in 18 hours. The Greenwood District had 108 Black-owned businesses. Insurance claims were denied. No one was ever prosecuted.",
    primarySource: "Tulsa Race Riot Commission Report (2001); Equal Justice Initiative, Reconstruction in America (2020)",
    image: "/manus-storage/scene_tulsa_massacre_9e4c2b56.png",
    chapterSlug: "sleeping-giant",
    chapterTitle: "The Sleeping Giant",
  },
  "1930": {
    description: "The 1930 U.S. Census enumerator instructions contained a single sentence that erased the identity of hundreds of thousands of mixed Black-Indigenous Americans: 'A person of mixed Indian and Negro blood should be returned a Negro, unless the Indian blood predominates and the status as an Indian is generally accepted in the community.' This administrative rule — issued to census takers across the entire country — meant that any person with both Black and Indigenous ancestry was classified as Negro by default, regardless of their actual heritage, community ties, or self-identification.",
    keyFact: "The 1930 Census instruction erased mixed Black-Indigenous identity with one sentence. This 'paper genocide' is documented in the National Archives and directly explains why so many Black American families cannot trace their Indigenous ancestry.",
    primarySource: "U.S. Census Bureau, 1930 Enumerator Instructions, National Archives Record Group 29",
    image: "/manus-storage/scene_paper_genocide_36d39695.png",
    chapterSlug: "identity-erasure",
    chapterTitle: "The Paper Genocide",
  },
  "1944": {
    description: "The Servicemen's Readjustment Act of 1944 — the GI Bill — was one of the most transformative pieces of legislation in American history. It provided veterans with college tuition, low-interest home loans, and unemployment benefits. For white veterans, it created the American middle class. For Black veterans, it was administered through local VA offices, local banks, and local universities — all of which practiced racial discrimination. In Mississippi in 1947, 3,229 VA loans were issued. Only 2 went to Black veterans. The wealth gap created by this disparity compounds to this day.",
    keyFact: "In Mississippi in 1947, 3,229 VA home loans were issued. Only 2 went to Black veterans. The GI Bill created the American middle class — and deliberately excluded Black Americans from it.",
    primarySource: "Katznelson, Ira. When Affirmative Action Was White (2005); VA loan records, National Archives",
    chapterSlug: "wealth-extraction",
    chapterTitle: "The Racial Wealth Gap Was Engineered",
  },
  "1954": {
    description: "In Brown v. Board of Education (1954), the Supreme Court unanimously ruled that racial segregation in public schools was unconstitutional, overturning the 'separate but equal' doctrine established by Plessy v. Ferguson (1896). Chief Justice Earl Warren wrote: 'Separate educational facilities are inherently unequal.' The ruling was a landmark legal victory — but its implementation was resisted for decades. President Eisenhower sent the 101st Airborne Division to Little Rock, Arkansas in 1957 to enforce integration at Central High School, where nine Black students faced a violent white mob.",
    keyFact: "Brown v. Board of Education (1954) overturned Plessy v. Ferguson — but it took the 101st Airborne Division to enforce it. Legal victory without enforcement is the pattern documented throughout this encyclopedia.",
    primarySource: "Brown v. Board of Education, 347 U.S. 483 (1954), Cornell Law School",
    chapterSlug: "reconstruction",
    chapterTitle: "The Reconstruction Betrayal",
  },
  "1965": {
    description: "The Voting Rights Act of 1965, signed by President Lyndon B. Johnson on August 6, 1965, prohibited discriminatory voting practices that had been used to disenfranchise Black voters across the South since Reconstruction. It was the direct result of the Selma to Montgomery marches and the televised violence of Bloody Sunday on the Edmund Pettus Bridge on March 7, 1965. The Act transformed American democracy — and was systematically weakened by the Supreme Court's Shelby County v. Holder decision in 2013, which gutted its preclearance provisions.",
    keyFact: "The Voting Rights Act (1965) was gutted by Shelby County v. Holder (2013) — 48 years after its passage. Within hours of the ruling, several states passed new voter suppression laws.",
    primarySource: "Voting Rights Act of 1965, 79 Stat. 437; Shelby County v. Holder, 570 U.S. 529 (2013)",
    chapterSlug: "reconstruction",
    chapterTitle: "The Reconstruction Betrayal",
  },
  "1967": {
    description: "On August 25, 1967, FBI Director J. Edgar Hoover issued a directive launching COINTELPRO's 'Black Nationalist Hate Groups' program. The directive's stated goal was to 'expose, disrupt, misdirect, discredit, or otherwise neutralize the activities of Black nationalist, hate-type organizations.' Targets included the Black Panther Party, the NAACP, the Southern Christian Leadership Conference, and Dr. Martin Luther King Jr. — whom Hoover called 'the most dangerous Negro in America.' The program used surveillance, infiltration, false letters, and assassination to destroy Black political organizing.",
    keyFact: "The FBI's COINTELPRO directive (1967) explicitly targeted the NAACP — a civil rights organization — alongside the Black Panthers. The government classified peaceful civil rights organizing as a national security threat.",
    primarySource: "FBI COINTELPRO directive, August 25, 1967, FBI Vault (declassified); Church Committee Report (1976)",
    chapterSlug: "sleeping-giant",
    chapterTitle: "The Sleeping Giant",
  },
  "1971": {
    description: "President Nixon declared a 'War on Drugs' in 1971, calling drug abuse 'public enemy number one.' His domestic policy chief John Ehrlichman admitted in a 2016 Harper's Magazine interview: 'The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people... by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities... Did we know we were lying about the drugs? Of course we did.' This is a direct, first-person admission of racial intent.",
    keyFact: "John Ehrlichman, Nixon's domestic policy chief, admitted in 2016 that the War on Drugs was deliberately designed to target Black communities. 'Did we know we were lying about the drugs? Of course we did.'",
    primarySource: "Baum, Dan. 'Legalize It All.' Harper's Magazine (April 2016)",
    chapterSlug: "media-propaganda-behavioral-outcomes",
    chapterTitle: "Media, Stereotypes, and Documented Behavioral Outcomes",
  },
  "1986": {
    description: "The Anti-Drug Abuse Act of 1986 established a 100:1 sentencing disparity between crack cocaine and powder cocaine: 5 grams of crack triggered a mandatory 5-year sentence, while 500 grams of powder cocaine was required for the same penalty. In FY2010, 78.7% of crack cocaine trafficking defendants were Black; in FY2023, 78.9% were Black. The U.S. Sentencing Commission's own 2015 report stated the 100:1 ratio 'overstated the relative harmfulness of crack cocaine' and that 'their severity mostly impacted minorities.' The Fair Sentencing Act of 2010 reduced the disparity to 18:1.",
    keyFact: "The 100:1 crack/powder cocaine sentencing disparity meant a Black person with 5 grams of crack received the same mandatory sentence as a white person with 500 grams of powder cocaine. 78.7% of crack defendants were Black.",
    primarySource: "Anti-Drug Abuse Act of 1986, 21 U.S.C. § 841; U.S. Sentencing Commission, Report to Congress (2015)",
    chapterSlug: "prison-industrial-complex",
    chapterTitle: "The Economics of Incarceration",
  },
  "1994": {
    description: "The Violent Crime Control and Law Enforcement Act of 1994 — the Crime Bill — authorized $12.5 billion in grants for states adopting truth-in-sentencing laws requiring violent offenders to serve at least 85% of their sentences, and established a three-strikes mandatory life imprisonment provision (18 U.S.C. § 3559(c)). A 1994 House Judiciary Subcommittee report found 89% of defendants selected for federal capital prosecution under the 1988 Anti-Drug Abuse Act were Black or Hispanic; 78% were Black. The Crime Bill accelerated mass incarceration at a rate that disproportionately impacted Black communities.",
    keyFact: "The 1994 Crime Bill's three-strikes provision mandated life imprisonment for a third felony offense. 89% of defendants selected for federal capital prosecution under related drug laws were Black or Hispanic.",
    primarySource: "Violent Crime Control and Law Enforcement Act, 18 U.S.C. § 3559(c) (1994); House Judiciary Subcommittee Report (1994)",
    chapterSlug: "prison-industrial-complex",
    chapterTitle: "The Economics of Incarceration",
  },
  "2020": {
    description: "In McGirt v. Oklahoma (2020), the U.S. Supreme Court ruled 5-4 that the Muscogee (Creek) Nation's reservation — established by treaty in the 1830s — was never formally disestablished by Congress. Justice Neil Gorsuch, writing for the majority, stated: 'On the far end of the Trail of Tears was a promise.' The ruling recognized that nearly half of Oklahoma, including most of Tulsa, remains 'Indian Country' under federal law. It is the most significant Indigenous sovereignty ruling in decades and a direct vindication of the legal arguments the Creek Nation has made since the Trail of Tears.",
    keyFact: "McGirt v. Oklahoma (2020) ruled that the Muscogee (Creek) Nation's reservation — established by treaty in the 1830s — was never legally dissolved. Nearly half of Oklahoma is 'Indian Country.'",
    primarySource: "McGirt v. Oklahoma, 591 U.S. ___ (2020); Justice Neil Gorsuch, majority opinion",
    chapterSlug: "living-legacy",
    chapterTitle: "The Living Legacy",
  },
};
