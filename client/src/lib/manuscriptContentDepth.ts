// Depth expansion content: Medical Apartheid chapter + deepened existing chapters
// Sources: Harriet Washington Medical Apartheid, Etowah archaeological record,
// Cherokee Phoenix primary sources, Empire of the City framework, John Cary maps

export const DEPTH_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {

  // ─── NEW CHAPTER: Medical Apartheid ──────────────────────────────────────────
  "medical-apartheid": {
    slug: "medical-apartheid",
    fullText: [
      "In 1845, a physician named J. Marion Sims began conducting experimental surgeries on enslaved Black women in Montgomery, Alabama. He was attempting to cure vesicovaginal fistulas — a painful condition caused by prolonged or obstructed labor. Between 1845 and 1849, Sims performed these experimental operations on at least 11 enslaved women, without anesthesia. One woman, named Anarcha, underwent 30 operations. Sims later wrote that he had 'not the slightest hesitation in performing the operation' because the enslaved women were 'perfectly submissive.' He went on to become the 'father of modern gynecology.' A statue of him stood in Central Park in New York City until 2018.",
      "Harriet Washington's 2006 book 'Medical Apartheid: The Dark History of Medical Experimentation on Black Americans from Colonial Times to the Present' documents that J. Marion Sims was not an aberration. He was part of a continuous, documented 400-year history of medical exploitation of Black Americans. Washington writes: 'Dangerous, involuntary, and nontherapeutic experimentation upon African Americans has been practiced widely and documented extensively at least since the eighteenth century.' The book documents how enslaved people were used as teaching cadavers in medical schools, how Black patients were deliberately infected with diseases for research, and how the belief that Black people felt less pain than white people — a myth with no scientific basis — was used to justify experiments without anesthesia.",
      "The Tuskegee Syphilis Study (1932–1972) is the most documented example of this history. The U.S. Public Health Service enrolled 399 Black men with syphilis in Macon County, Alabama, and deliberately withheld treatment — including penicillin after it became the standard cure in 1947 — to study the natural progression of the disease. The men were told they were being treated for 'bad blood.' They were not. 28 men died directly from syphilis. 100 died from related complications. 40 wives were infected. 19 children were born with congenital syphilis. The study was not ended by ethical review — it was ended in 1972 when a whistleblower leaked the information to the press.",
      "The connection to Georgia is specific and documented. The Medical College of Georgia in Augusta — one of the oldest medical schools in the South — was built on the labor of enslaved people and used Black bodies for anatomical research. The school's history includes documented grave robbing from Black cemeteries to obtain cadavers for dissection. The same pattern documented by Washington in her book — the use of Black bodies as raw material for medical advancement without consent or compensation — was practiced in Georgia institutions.",
      "The modern consequences of this history are documented in the data. Black Americans are more likely to be undertreated for pain, less likely to receive adequate anesthesia, and more likely to die from preventable conditions than white Americans with the same insurance coverage. A 2016 study published in the Proceedings of the National Academy of Sciences found that a significant percentage of medical students and residents still believed false claims about biological differences between Black and white patients — including the myth that Black people have thicker skin and feel less pain. The myth that justified J. Marion Sims's experiments in 1845 is still circulating in American medical education in 2016.",
      "The COVID-19 pandemic made this history impossible to ignore. Black Americans died from COVID-19 at approximately 2.1 times the rate of white Americans in the early months of the pandemic. Vaccine hesitancy in Black communities — documented by public health researchers — was not irrational. It was a rational response to a documented history of medical exploitation. The Tuskegee Study did not end in 1972. Its consequences are still being measured in the bodies of Black Americans who do not trust the medical system that experimented on their ancestors.",
    ],
    pullQuote: {
      text: "Dangerous, involuntary, and nontherapeutic experimentation upon African Americans has been practiced widely and documented extensively at least since the eighteenth century.",
      attribution: "Harriet A. Washington, Medical Apartheid: The Dark History of Medical Experimentation on Black Americans (2006)"
    },
    keyDocuments: [
      "Washington, Harriet A. Medical Apartheid. Doubleday (2006)",
      "Centers for Disease Control, The Tuskegee Timeline — cdc.gov/tuskegee",
      "Hoffman, Kelly M. et al. 'Racial Bias in Pain Assessment.' Proceedings of the National Academy of Sciences (2016)",
      "Medical College of Georgia Archives, Augusta University"
    ],
    didYouKnow: "J. Marion Sims, the 'father of modern gynecology,' performed 30 experimental surgeries on a single enslaved woman named Anarcha without anesthesia. A statue of Sims stood in Central Park in New York City until 2018, when it was removed following protests. His name still appears on medical buildings and institutions across the United States."
  },

  // ─── DEEPENED: Etowah Mounds ──────────────────────────────────────────────────
  "etowah-mounds": {
    slug: "etowah-mounds",
    fullText: [
      "The Etowah Mounds in Cartersville, Georgia are among the most significant ancient Mississippian ceremonial sites in North America. At their peak (approximately AD 1000–1550), the Etowah site was a major political, religious, and trade hub for the Mississippian culture. The largest mound — Mound A — rises 63 feet and covers 3 acres, making it the third-largest pre-Columbian earthwork in the United States. The site was continuously inhabited for over 500 years before the 1732 Georgia Charter described the land as 'waste and desolate.'",
      "The specific artifacts found at Etowah are extraordinary. Two mortuary figures — a male and a female, carved from white marble, each approximately 2 feet high and 125 pounds — are among the finest examples of pre-Columbian sculpture in North America. Copper plates, shell gorgets, and ceremonial objects demonstrate trade networks extending from the Great Lakes (copper) to the Gulf of Mexico (shells) to the Appalachian Mountains (mica). These are not the artifacts of a 'waste and desolate' land. They are the artifacts of a sophisticated civilization.",
      "The connection between the Etowah Mounds and the broader Mississippian culture documented in Earl H. Morris's 1931 'The Temple of the Warriors at Chichen Itza' is one of the original Tier 1 anchors of this encyclopedia's research. Morris's archaeological work at Chichen Itza documented visual and stylistic similarities between the Mississippian artifacts at sites like Etowah and Spiro and the murals and sculptures of the Maya. Whether these similarities represent direct contact, parallel development, or shared cultural ancestry remains an open question in archaeology — but the similarities themselves are documented.",
      "The people who built the Etowah Mounds were the ancestors of the Muscogee (Creek) Nation. When Andrew Jackson defeated the Red Sticks faction of the Creek Nation at the Battle of Horseshoe Bend in 1814, he was defeating the descendants of the people who built those mounds. When the 1832 Cherokee Land Lottery distributed the land around Cartersville to white settlers, the Etowah Mounds site was assigned to specific lottery winners. The mounds that had been sacred ceremonial sites for 500 years became private property in a lottery.",
      "The site is now a Georgia State Historic Site managed by the Georgia Department of Natural Resources. It is open to the public. The artifacts are housed in an on-site museum. The land was purchased by the State of Georgia in 1953 — 121 years after the Cherokee Land Lottery distributed it to white settlers. The Muscogee (Creek) Nation, whose ancestors built the mounds, had no role in the decision to make it a state historic site. The mounds belong to the State of Georgia. The people whose ancestors built them live in Oklahoma.",
    ],
    pullQuote: {
      text: "While Spiro shows remarkably close connection with Etowah... with frescos on the Temple of the Warriors at Chichen Itza, the similarities suggest contact or shared cultural traditions across a vast geographic range.",
      attribution: "Archaeological analysis connecting Etowah to Mississippian and Mesoamerican cultural networks"
    },
    keyDocuments: [
      "Morris, Earl H. The Temple of the Warriors at Chichen Itza. Carnegie Institution (1931)",
      "King, Adam. Etowah: The Political History of a Chiefdom Capital. University of Alabama Press (2003)",
      "Georgia Department of Natural Resources, Etowah Indian Mounds State Historic Site"
    ],
    didYouKnow: "The two white marble mortuary figures found at Etowah Mounds are among the finest examples of pre-Columbian sculpture in North America. They are currently housed in the on-site museum in Cartersville, Georgia, where the mounds continue to invite questions about their builders and descendants."
  },

  // ─── DEEPENED: Haitian Revolution ────────────────────────────────────────────
  "haitian-revolution": {
    slug: "haitian-revolution",
    fullText: [
      "The Haitian Revolution (1791–1804) was the only successful slave revolt in history that resulted in the founding of a new nation. Enslaved Haitians, led by Toussaint L'Ouverture and Jean-Jacques Dessalines, defeated the French, Spanish, and British armies and declared independence on January 1, 1804. The revolution terrified American slaveholders and directly shaped U.S. domestic and foreign policy for decades.",
      "The U.S. response to the Haitian Revolution was immediate and documented. In February 1806, Congress passed an embargo bill prohibiting trade with any part of Saint-Domingue not under French control. The embargo was renewed in 1807 and remained in effect until April 1808. The United States officially refused to recognize Haitian independence until 1862 — nearly six decades after Haiti declared independence — largely because Southern slaveholders feared that recognizing a Black republic would inspire slave revolts within the U.S.",
      "The Haitian Revolution directly caused the Louisiana Purchase. Napoleon, having lost control of his Caribbean territories and seeing no further strategic use for Louisiana, sold it to the United States in 1803 for approximately $15 million — effectively doubling the size of the young American republic. The Louisiana Purchase doubled the territory available for slavery's expansion. The Haitian Revolution, by defeating Napoleon's Caribbean ambitions, inadvertently created the conditions for American slavery's westward expansion.",
      "Southern states responded to the Haitian Revolution by dramatically tightening their slave codes. Georgia, South Carolina, and Virginia all passed new restrictions on enslaved people's movement, assembly, and education in the years following 1804. The specific fear was that news of the Haitian Revolution would inspire similar uprisings. As historian Douglas Egerton documented: 'For the southern planter class, it was a moment of enormous terror.' The response to that terror was more control, more restriction, and more violence against enslaved people.",
      "The Haitian Revolution's connection to the broader history documented in this encyclopedia is direct. The same year that Haiti declared independence (1804), the U.S. was in the process of implementing the Louisiana Purchase — expanding the territory available for slavery. The same year that the U.S. imposed its trade embargo on Haiti (1806), Georgia was in the process of distributing Creek and Cherokee land through the Land Lottery system. The suppression of Black sovereignty in Haiti and the dispossession of Indigenous sovereignty in Georgia were not separate events. They were simultaneous expressions of the same system.",
    ],
    pullQuote: {
      text: "For black Americans, this was a terribly exciting moment, a moment of great inspiration. And for the southern planter class, it was a moment of enormous terror.",
      attribution: "Douglas R. Egerton, Le Moyne College, Africans in America documentary series (1998)"
    },
    keyDocuments: [
      "U.S. Congress, Embargo Act (February 1806), National Archives",
      "Louisiana Purchase Treaty (1803), National Archives",
      "Dubois, Laurent. Avengers of the New World: The Story of the Haitian Revolution. Harvard University Press (2004)"
    ],
    didYouKnow: "The United States did not officially recognize Haitian independence until 1862 — 58 years after Haiti declared independence. Abraham Lincoln finally extended recognition during the Civil War, when the political calculus had changed. Haiti paid reparations to France for its own freedom until 1947 — 143 years after independence."
  },

  // ─── DEEPENED: Intellectual Resistance (Cherokee Phoenix) ────────────────────
  "intellectual-resistance": {
    slug: "intellectual-resistance",
    fullText: [
      "On February 21, 1828, the first issue of the Cherokee Phoenix was published in New Echota, Georgia — the capital of the Cherokee Nation. It was the first Native American newspaper in the United States, printed in both English and the Cherokee syllabary invented by Sequoyah in 1821. The newspaper's first editor, Elias Boudinot, wrote in the inaugural issue: 'We will invariably state the will of the majority of our people on the subject of the present controversy with Georgia, and the present removal policy of the federal government.' This was not a cultural curiosity. It was an act of political defiance.",
      "The Cherokee Phoenix documented Georgia's systematic assault on Cherokee sovereignty in real time. When the Georgia General Assembly passed laws in 1828 and 1829 extending state jurisdiction over Cherokee territory — laws that the Supreme Court would later rule unconstitutional in Worcester v. Georgia (1832) — the Cherokee Phoenix reported on them, analyzed them, and challenged them in print. The newspaper published the full text of treaties, the full text of Georgia's illegal laws, and the full text of the Cherokee Nation's legal arguments. It was a primary source archive of the dispossession as it happened.",
      "The Cherokee Phoenix's editorial independence was itself a source of conflict. In 1832, editor Elias Boudinot resigned after a dispute with Principal Chief John Ross. Boudinot wanted to publish arguments on both sides of the removal debate. Ross insisted the newspaper only publish anti-removal arguments. This internal conflict — between those who believed accommodation was possible and those who believed resistance was the only option — would ultimately lead to the fraudulent Treaty of New Echota (1835), signed by Boudinot and a minority faction without the authorization of the Cherokee National Council.",
      "The newspaper ceased publication on May 31, 1834, due to financial difficulties and the political turmoil surrounding removal. In 1835, Georgia Guard soldiers seized the printing press and used it for pro-removal propaganda. The physical destruction of the Cherokee Phoenix's press was the physical destruction of the most important instrument of Indigenous intellectual resistance in American history. The press that had published the Cherokee Nation's legal arguments, treaties, and political analysis was turned into a tool for the propaganda that justified their removal.",
      "The Cherokee Phoenix's legacy extends beyond its six years of publication. It established the principle that Indigenous peoples had the right and the capacity to document their own history, make their own legal arguments, and challenge the power of the state in print. That principle — that literacy is the prerequisite for liberation — runs through the entire history documented in this encyclopedia: from Sequoyah's syllabary to Frederick Douglass's autobiography to Carter G. Woodson's 'The Mis-Education of the Negro' to this encyclopedia itself.",
    ],
    pullQuote: {
      text: "We will invariably state the will of the majority of our people on the subject of the present controversy with Georgia, and the present removal policy of the federal government.",
      attribution: "Elias Boudinot, Cherokee Phoenix, February 21, 1828 — First Issue"
    },
    keyDocuments: [
      "Cherokee Phoenix, February 21, 1828 — May 31, 1834, New Echota, Georgia (digitized by Western Carolina University)",
      "Worcester v. Georgia, 31 U.S. 515 (1832), Cornell Law School",
      "Treaty of New Echota (1835), National Archives"
    ],
    didYouKnow: "The Cherokee Phoenix was printed in both English and the Cherokee syllabary — but 83.4% of its editorial content was in English. Elias Boudinot made a deliberate editorial choice to write primarily in English so that white Americans, politicians, and journalists could read the Cherokee Nation's arguments directly. The newspaper was not just for the Cherokee people — it was for the people who were trying to remove them."
  },

  // ─── DEEPENED: Empire of the City / Power Structures ─────────────────────────
  "georgia-charter": {
    slug: "georgia-charter",
    fullText: [
      "On April 21, 1732, King George II granted a charter to a corporate body of Trustees to establish the colony of Georgia. The charter described the territory as 'waste and desolate' — a legal fiction that erased the Creek and Cherokee Nations who had inhabited the land for centuries. The 1732 Georgia Charter is the foundational legal document of Georgia's history. Every subsequent land seizure — the Land Lottery, the Indian Removal Act, the Trail of Tears — flows directly from the legal framework established by this charter.",
      "The specific language of the charter is the Doctrine of Discovery applied to Georgia soil. The Doctrine of Discovery — derived from a series of 15th-century Papal Bulls issued by the Vatican — held that European Christian nations could claim sovereignty over any land not already occupied by Christians. The Georgia Charter applied this doctrine to the Creek and Cherokee territories, describing them as available for grant despite being already inhabited and governed by sovereign nations with established governance, agriculture, and trade networks.",
      "The Tier 3 'Empire of the City' framework — discussed in the Grok research corpus — argues that three independent city-states (the City of London, Vatican City, and Washington D.C.) operate outside the laws of their host nations and collectively control global finance, religion, and military power. The Tier 1 documented facts are these: the City of London Corporation is the world's oldest continuous municipal government with its own police force and electoral system; Vatican City became an independent sovereign state through the Lateran Treaty (1929); and Washington D.C. was established as a federal district by the U.S. Constitution (Article I, Section 8) with residents who pay federal taxes but have no voting representation in Congress. Whether these three independent jurisdictions constitute a unified 'empire' is a Tier 3 claim not supported by primary source documentation.",
      "What is Tier 1 documented is the specific chain of legal authority that connects the Papal Bulls (1452–1493) to the Georgia Charter (1732) to the Indian Removal Act (1830). The Vatican issued the theological authorization. The British Crown issued the colonial charter. The U.S. Congress passed the removal legislation. Each step was legal within its own framework. Each step was built on the previous one. The 'Empire of the City' framework, whatever its evidentiary limitations, correctly identifies that the power to seize land and enslave people was not exercised by individuals acting alone — it was exercised by institutions with documented legal authority and documented financial interests.",
      "The John Cary maps of 1783 and 1806 provide the cartographic evidence of this legal framework in action. The 1783 Cary map was among the first in English to name the United States and the first to visually represent the new republic's boundaries as defined by the Treaty of Paris. The 1806 Cary map depicts Georgia extending westward to the Mississippi River — despite the establishment of the Mississippi Territory in 1798 — and explicitly identifies the locations of Creek, Chickasaw, and Cherokee Nations. These maps document the moment when the legal fiction of the Georgia Charter was translated into territorial claims on paper. The land was claimed on the map before it was seized on the ground.",
    ],
    pullQuote: {
      text: "The City of London developed a unique form of government which led to the system of parliamentary government at local and national level.",
      attribution: "City of London Corporation — Official Website"
    },
    keyDocuments: [
      "Georgia Charter (1732), Avalon Project, Yale Law School",
      "Papal Bull Dum Diversas (1452), Vatican Archives",
      "John Cary, A New Map of the United States of America (1806), David Rumsey Map Collection",
      "Lateran Treaty (1929) — establishing Vatican City as an independent state"
    ],
    didYouKnow: "The John Cary 1806 map depicts Georgia extending westward to the Mississippi River — a claim that ignored both the 1798 establishment of the Mississippi Territory and the sovereign territory of the Creek, Chickasaw, and Cherokee Nations. The map is available in full resolution at the David Rumsey Map Collection (davidrumsey.com) — a free, publicly accessible archive."
  },

};
