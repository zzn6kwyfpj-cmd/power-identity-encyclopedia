// Gap-fill content: 3 new chapters + deepened existing chapters
// Integrating: The New Jim Crow, Medical Apartheid, The Slave Ship, Blues People,
// Black Reconstruction, Capitalism and Slavery, The Mis-Education of the Negro,
// J.A. Rogers Sex and Race, Maison Rouge Land Grant, Richard B. Moore label critique

export const GAP_FILL_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {

  // ─── NEW CHAPTER: The Middle Passage ─────────────────────────────────────────
  "middle-passage": {
    slug: "middle-passage",
    fullText: [
      "The transatlantic slave trade was the largest forced migration in human history. Between approximately 1500 and 1900, an estimated 12.5 million people were forcibly embarked from the coasts of West and Central Africa and transported to the Americas. Of those, approximately 10.7 million survived the crossing. Nearly two million people — approximately 14% of all those embarked — died during the voyage known as the Middle Passage. These are not abstractions. They are documented in the Trans-Atlantic Slave Trade Database, which records over 36,000 individual slaving voyages.",
      "Marcus Rediker's 2007 book 'The Slave Ship: A Human History' provides the most detailed account of what happened on those ships. The enslaved were packed into holds with approximately 18 inches of vertical space — less than the height of a standard desk. They lay in their own waste for weeks. Disease spread rapidly. The most common killers were dysentery (called 'the bloody flux'), smallpox, and ophthalmia (an eye disease that blinded many survivors). Ship captains calculated acceptable mortality rates into their profit projections — typically 10 to 15 percent — as a cost of doing business.",
      "The psychological dimension of the Middle Passage was as devastating as the physical. Enslaved people were stripped of their names, their languages, their family connections, and their cultural identities. They were given new names — often the names of Roman emperors or classical figures, a practice that historians have documented as a deliberate act of psychological domination. The erasure of African identity that began on the slave ships continued through the plantation system, the Black Codes, the Dawes Rolls, and the 1930 Census enumerator instructions. The Middle Passage was not the beginning of a story about slavery. It was the beginning of a story about identity erasure that continues to the present day.",
      "The specific connection to Georgia is documented. The Port of Savannah was one of the primary entry points for enslaved Africans into the American Southeast. Ships arriving in Savannah carried enslaved people from the Gold Coast, the Bight of Benin, the Bight of Biafra, and West Central Africa. The rice and cotton plantations of coastal Georgia — the same region where the Gullah Geechee people preserved their African cultural heritage — were built on the labor of people who had survived the Middle Passage. The Etowah Mounds, the Cherokee and Creek Nations, and the enslaved Africans arriving through Savannah were all present in Georgia simultaneously — three distinct peoples whose histories would become permanently entangled through the mechanisms of colonial power.",
      "The 1808 Act Prohibiting Importation of Slaves formally ended the legal transatlantic slave trade to the United States. But as documented in the DaGhettoScholar 'Two Civil Wars' analysis (Tier 3), the enslaved population of Georgia continued to grow dramatically after 1808 — a demographic anomaly that some researchers argue points to the domestic slave trade, the capture of Indigenous people, and the reclassification of mixed Black-Indigenous people as enslaved. Whether or not those specific claims are verified, the documented fact is that the 13th Amendment's 'except as punishment for crime' loophole immediately recreated the conditions of forced labor through convict leasing — proving that the legal end of the slave trade did not end the economic system it had built.",
    ],
    pullQuote: {
      text: "Nearly two million people died during the barbaric Middle Passage across the ocean. The slave ship was the first instrument of the racial order that would define the Americas for centuries.",
      attribution: "Marcus Rediker, The Slave Ship: A Human History (2007)"
    },
    keyDocuments: [
      "Trans-Atlantic Slave Trade Database — slavevoyages.org (36,000+ documented voyages)",
      "Rediker, Marcus. The Slave Ship: A Human History. Viking (2007)",
      "Act Prohibiting Importation of Slaves, 2 Stat. 426 (1807), effective January 1, 1808 — National Archives"
    ],
    didYouKnow: "The Trans-Atlantic Slave Trade Database documents 36,000 individual slaving voyages between 1514 and 1866. It is the largest historical database of its kind and is freely accessible at slavevoyages.org — one of the most important primary source tools for Black genealogical research."
  },

  // ─── NEW CHAPTER: The Name They Gave Us — Richard B. Moore Label Critique ─────
  "label-critique": {
    slug: "label-critique",
    fullText: [
      "In 1960, Richard B. Moore published a study titled 'The Name \"Negro\": Its Origin and Evil Use.' Moore argued that the words 'Negro,' 'Black,' and 'Colored' were not neutral descriptors and that imposed labels could reproduce unequal power. This is an attributed political and scholarly interpretation. Moore's best-known line is: 'Dogs and Slaves are Named by Their Masters; Free Men Name Themselves.'",
      "Moore's argument invites careful study of administrative classification. The 1790 census used five columns: free White males by age, free White females, all other free persons, and enslaved persons. Later censuses adopted and changed racial categories. In 1930, the Census Bureau instructed enumerators to return a person of mixed Indian and Negro ancestry as Negro unless Indian blood predominated and the person was generally accepted as Indian in the community. The rule is evidence of federal sorting, not proof of a particular person’s ancestry or tribal citizenship.",
      "The critique of colonial naming is not merely semantic. It is structural. Community accounts and the scholarly record should be distinguished: claims from videos or other community materials are Tier 3 unless independently verified; census manuals, statutes, and enrollment files are Tier 1 records whose meaning must be read in their specific administrative context. Contemporary identity terms are diverse, self-chosen, contextual, and not reducible to a single government category.",
      "Dawes Commission records contain multiple enrollment categories, including Citizens by Blood, Citizens by Intermarriage, Delaware Cherokees, and Freedmen. A category can be essential evidence in a family history, but the effect on a particular person requires review of the application, enrollment jacket, linked rolls, land records, and the relevant nation’s own citizenship law. The archive therefore treats a category neither as automatic proof nor as automatic disproof of Indigenous kinship.",
      "The evidence-tier distinction is important here. Moore's argument (Tier 2) is a scholarly analysis of naming and power. The specific claims made in some of the videos analyzed — that 'Black' was a legal term for property, that 'Negro' was a slave brand with specific legal consequences — are Tier 3 community historical traditions that are not fully supported by primary source documentation. What is Tier 1 documented fact is this: the federal government assigned racial categories to people without their consent, changed those categories 11 times between 1790 and 2020, and used those categories to determine who received land, who received benefits, and who was classified as property. The naming was not neutral. It was power.",
    ],
    pullQuote: {
      text: "Dogs and Slaves are Named by Their Masters; Free Men Name Themselves!",
      attribution: "Richard B. Moore, The Name 'Negro': Its Origin and Evil Use (1960)"
    },
    keyDocuments: [
      "Moore, Richard B. The Name 'Negro': Its Origin and Evil Use. Afroamerican Publishers (1960)",
      "U.S. Census Bureau, Racial Classification Labels (1790–2020), National Archives Record Group 29",
      "Dawes Commission Records, National Archives Record Group 75"
    ],
    didYouKnow: "The word 'Negro' appeared in U.S. Census racial classification categories from 1870 to 2010 — 140 years. It was finally removed in the 2020 Census. The people it described were never consulted about its use."
  },

  // ─── NEW CHAPTER: The Washitaw Nation and the Maison Rouge Land Grant ─────────
  "washitaw-maison-rouge": {
    slug: "washitaw-maison-rouge",
    fullText: [
      "The Washitaw de Dugdahmoundyah is a reclamation movement centered on the claim that a pre-Columbian Black Indigenous people — the Washitaw — were the original inhabitants of the Mississippi Valley and the mound-building civilization of the American Southeast. The movement's primary text is 'Return of the Ancient Ones' (1993) by Verdiacee 'Tiara' Washitaw-Turner Goston El-Bey, which argues that the Washitaw people predate both European colonization and the arrival of the Five Civilized Tribes in the region. This is a Tier 3 community historical tradition — it is not supported by current archaeological or genetic consensus, but it is internally coherent and represents a serious engagement with the documented history of land dispossession.",
      "The Tier 1 anchor of the Washitaw claim is the Maison Rouge Land Grant — a real, documented French colonial land grant. In 1795, the Baron de Carondelet, acting as Governor-General of Louisiana for the Spanish Crown, entered into a contract with the Marquis de Maison Rouge to establish a settlement in what is now northeastern Louisiana. The grant covered approximately 1.2 million acres. The Washitaw reclamation narrative argues that this grant was a recognition of prior Indigenous ownership — that the French were not granting new land but acknowledging land that already belonged to the Washitaw people.",
      "The U.S. Supreme Court addressed the Maison Rouge grant directly in United States v. Turner (1850). The Court ruled that the contract between Carondelet and Maison Rouge 'conveyed no interest in the land to Maison Rouge, but was merely intended to mark out by certain and definite boundaries the limits of the establishment which he was authorized to form.' In other words, the Court ruled that the grant was an authorization to settle, not a transfer of land ownership. The Washitaw narrative disputes this interpretation, arguing that the Court's ruling was itself an act of colonial legal erasure.",
      "The Washitaw reclamation narrative is significant for this encyclopedia not because its specific historical claims are verified, but because it represents the most developed example of a broader pattern: communities that were dispossessed of land and identity using the tools of colonial law attempting to use those same tools to reclaim what was taken. The Washitaw's use of land grant documents, constitutional arguments, and federal court filings mirrors the Cherokee Nation's use of Worcester v. Georgia, the Muscogee (Creek) Nation's use of treaty law in McGirt v. Oklahoma, and the Cherokee Freedmen's use of the 1866 treaty in their citizenship battle. The specific claims differ. The underlying dynamic — using the colonizer's legal system to challenge the colonizer's land seizure — is identical.",
      "The genetic and archaeological evidence does not currently support the Washitaw claim of a pre-Columbian Black African presence in the Mississippi Valley as the original mound builders. The Etowah Mounds and the broader Mississippian culture are documented by archaeologists as the product of Indigenous peoples whose descendants are the modern Cherokee, Creek, Choctaw, Chickasaw, and Seminole Nations. However, the documented history of the 1930 Census erasure, the Dawes Rolls' Freedmen category, and the systematic reclassification of mixed Black-Indigenous people as 'Negro' means that many people of genuine mixed Black-Indigenous heritage cannot trace that heritage through official records. The Washitaw narrative, whatever its evidentiary limitations, speaks to a real and documented erasure.",
    ],
    pullQuote: {
      text: "The contract between the Baron de Carondelet and the Marquis de Maison Rouge conveyed no interest in the land to Maison Rouge, but was merely intended to mark out by certain and definite boundaries the limits of the establishment which he was authorized to form.",
      attribution: "United States v. Turner, 52 U.S. 663 (1850) — U.S. Supreme Court"
    },
    keyDocuments: [
      "United States v. Turner, 52 U.S. 663 (1850) — U.S. Supreme Court ruling on the Maison Rouge grant",
      "Washitaw-Turner Goston El-Bey, Verdiacee. Return of the Ancient Ones (1993) — Tier 3 reclamation narrative",
      "Maison Rouge Land Grant (1795), Louisiana State Archives"
    ],
    didYouKnow: "The Washitaw de Dugdahmoundyah filed a claim with the United Nations Working Group on Indigenous Populations in 1993, the same year 'Return of the Ancient Ones' was published. The UN acknowledged receipt of the claim but did not rule on its merits."
  },

  // ─── DEEPENED: Prison Industrial Complex ─────────────────────────────────────
  "prison-industrial-complex": {
    slug: "prison-industrial-complex",
    fullText: [
      "Michelle Alexander's 2010 book 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness' is the most rigorous academic argument that the U.S. criminal justice system operates as a modern racial caste system. Alexander's central thesis is that mass incarceration does not merely disproportionately affect Black Americans — it is specifically designed to control Black Americans, replacing the explicit racial hierarchy of Jim Crow with a colorblind legal framework that produces the same results. 'We have not ended racial caste in America,' she writes. 'We have merely redesigned it.'",
      "The evidence for Alexander's argument is documented throughout this encyclopedia. The 13th Amendment's 'except as punishment for crime' loophole (1865) immediately created the legal mechanism for re-enslaving Black men through convict leasing. The Black Codes (1865–1866) created the crimes — vagrancy, 'insulting gestures,' 'malicious mischief' — that would fill the prisons. The Anti-Drug Abuse Act (1986) established the 100:1 crack/powder cocaine sentencing disparity that targeted Black communities. The Crime Bill (1994) established three-strikes mandatory life imprisonment. Each step was documented, legal, and colorblind on its face. Each step produced the same result: the mass incarceration of Black Americans.",
      "The private prison industry's financial interest in high incarceration rates is documented in SEC filings. CoreCivic's 2024 annual report explicitly lists 'leniency in conviction or parole standards' as a financial risk — meaning that if fewer people are convicted or if parole standards are relaxed, CoreCivic's revenue will decline. This is not an allegation. It is a statement in a document filed with the Securities and Exchange Commission, a federal agency. The private prison industry has spent millions of dollars lobbying against criminal justice reform. Their financial interests are structurally aligned with mass incarceration.",
      "The scale of the disparity is documented by the Bureau of Justice Statistics. Black Americans are incarcerated at a rate approximately 5 times higher than white Americans. In 2020, Black Americans represented 38% of the state prison population despite being 13% of the U.S. population. The U.S. Sentencing Commission's own 2015 report found that the 100:1 crack/powder cocaine sentencing disparity 'overstated the relative harmfulness of crack cocaine' and that 'their severity mostly impacted minorities.' This is the federal government's own agency acknowledging that its own sentencing guidelines were racially biased.",
      "The connection to the broader history documented in this encyclopedia is direct. The convict leasing system (1865–1928) leased the labor of prisoners to private companies — the same companies that are now the private prison industry. The 13th Amendment's loophole that enabled convict leasing is the same loophole that enables prison labor today. The Black Codes that filled the prisons in 1865 are the functional equivalent of the drug laws that fill the prisons today. The system did not change. It was redesigned.",
    ],
    pullQuote: {
      text: "We have not ended racial caste in America. We have merely redesigned it.",
      attribution: "Michelle Alexander, The New Jim Crow: Mass Incarceration in the Age of Colorblindness (2010)"
    },
    keyDocuments: [
      "Alexander, Michelle. The New Jim Crow: Mass Incarceration in the Age of Colorblindness. The New Press (2010)",
      "Bureau of Justice Statistics, Prisoners in 2020 (2021)",
      "U.S. Sentencing Commission, Report to Congress: Impact of the Fair Sentencing Act (2015)",
      "CoreCivic Annual Report and SEC Filing (2024)"
    ],
    didYouKnow: "The United States has the highest incarceration rate in the world — 639 per 100,000 people as of 2023. The next highest is El Salvador at 564. China, which has four times the U.S. population, has a lower total prison population."
  },

  // ─── DEEPENED: Wealth Extraction ─────────────────────────────────────────────
  "wealth-extraction": {
    slug: "wealth-extraction",
    fullText: [
      "Eric Williams' 1944 book 'Capitalism and Slavery' made the foundational economic argument that the British Industrial Revolution was financed by the profits of the transatlantic slave trade. Williams, a Trinidadian historian who later became the first Prime Minister of Trinidad and Tobago, documented how plantation owners, shipbuilders, and merchants connected with the slave trade accumulated vast fortunes that established banks and heavy industry in Europe. 'Slavery helped finance the Industrial Revolution in England,' he wrote. This argument — that the wealth of the modern world was built on the unpaid labor of enslaved people — is now supported by a substantial body of economic historical research.",
      "Edward Baptist's 2014 book 'The Half Has Never Been Told: Slavery and the Making of American Capitalism' extends Williams' argument to the United States with specific economic data. Baptist documents that the 3.2 million people enslaved in the United States had a market value of $1.3 billion in 1850 — one-fifth of the nation's total wealth and approximately equal to the entire gross national product. The cotton produced by enslaved labor in the American South was the primary raw material for the textile mills of New England and Britain. Without enslaved labor, there is no Industrial Revolution. Without the Industrial Revolution, there is no modern global economy.",
      "The specific mechanism by which this wealth was extracted and concentrated is documented in the history of the GI Bill (1944). The Servicemen's Readjustment Act provided white veterans with college tuition, low-interest home loans, and unemployment benefits — creating the American middle class. Black veterans were systematically excluded through the administration of the program through local VA offices, local banks, and local universities that practiced racial discrimination. In Mississippi in 1947, 3,229 VA loans were issued. Only 2 went to Black veterans. The wealth transfer that created the American middle class was racially exclusive by design.",
      "The Federal Reserve's Survey of Consumer Finances documents the result of this history. In 2019, the median white family had a net worth of $188,200. The median Black family had a net worth of $24,100 — approximately 13 cents for every dollar of white wealth. This gap is not the product of individual choices or cultural differences. It is the mathematical result of 246 years of unpaid labor, 80 years of deliberate exclusion from wealth-building programs, and the documented destruction of Black wealth through events like the Tulsa Race Massacre (1921) and the systematic routing of highways through Black business districts.",
      "Carter G. Woodson's 1933 book 'The Mis-Education of the Negro' provides the educational dimension of this economic argument. Woodson argued that the American education system was deliberately designed to prevent Black Americans from understanding their own history and economic potential. 'If you can control a man's thinking you do not have to worry about his action,' he wrote. 'When you determine what a man shall not think, you do not have to concern yourself about what he will do.' The educational system that taught Black Americans to see themselves as inferior, dependent, and incapable of economic self-sufficiency was not an accident. It was a feature of the system that extracted their labor and denied them the wealth it produced.",
    ],
    pullQuote: {
      text: "The 3.2 million people enslaved in the United States had a market value of $1.3 billion in 1850 — one-fifth of the nation's wealth and almost equal to the entire gross national product.",
      attribution: "Edward Baptist, The Half Has Never Been Told: Slavery and the Making of American Capitalism (2014)"
    },
    keyDocuments: [
      "Williams, Eric. Capitalism and Slavery. University of North Carolina Press (1944)",
      "Baptist, Edward E. The Half Has Never Been Told. Basic Books (2014)",
      "Woodson, Carter G. The Mis-Education of the Negro. Associated Publishers (1933)",
      "Federal Reserve, Survey of Consumer Finances (2019)"
    ],
    didYouKnow: "Eric Williams completed 'Capitalism and Slavery' as his doctoral dissertation at Oxford University in 1938. Oxford rejected it. He published it independently in 1944. It is now considered one of the most important works of economic history of the 20th century."
  },

  // ─── DEEPENED: Sound of Resistance ───────────────────────────────────────────
  "sound-of-resistance": {
    slug: "sound-of-resistance",
    fullText: [
      "Amiri Baraka's 1963 book 'Blues People: Negro Music in White America' is the foundational argument that Black American music is not entertainment — it is documentation. 'Every voice, every title is telling you the story of Afro-American history,' Baraka wrote. The blues did not emerge from a cultural vacuum. It emerged from the specific historical conditions of slavery, Reconstruction's betrayal, Jim Crow, and the Great Migration. To understand the blues is to understand the history documented in this encyclopedia.",
      "The specific genealogy of Black American music is a direct reflection of the history of Black American people. The field hollers and work songs of enslaved people in Georgia and Mississippi became the blues. The blues became jazz. Jazz became rhythm and blues. R&B became soul. Soul became funk. Funk became hip-hop. Each transformation was not merely musical — it was a response to specific historical conditions. The blues emerged from the Delta in the aftermath of Reconstruction's failure. Jazz emerged from New Orleans at the height of Jim Crow. Soul emerged from Detroit and Memphis during the Civil Rights Movement. Hip-hop emerged from the South Bronx in the aftermath of urban renewal and the crack epidemic.",
      "The Thompson and Olsen research on the science and psychology of music (2021) provides the scientific evidence for what Baraka documented culturally. Their research demonstrates that music evokes autobiographical memories rooted in the brain's frontal regions, acting as a resilient conduit for cultural continuity. Mass Choir Gospel music releases oxytocin to promote community cohesion. The specific neurological mechanisms by which Black music preserved cultural memory and community bonds across generations of oppression are now documented in peer-reviewed research.",
      "The Georgia connection to this musical history is direct and specific. Ray Charles was born in Albany, Georgia in 1930 — the same year the Census enumerator instructions were issued that erased mixed Black-Indigenous identity. Little Richard was born in Macon, Georgia in 1932. James Brown was born in Barnwell, South Carolina and grew up in Augusta, Georgia. Otis Redding was born in Dawson, Georgia. These artists did not emerge from nowhere. They emerged from the specific communities that had survived the Trail of Tears, the Land Lottery, the Black Codes, convict leasing, and Jim Crow — and they transformed that survival into music that changed the world.",
      "The economic dimension of this musical history is documented in the entertainment industry chapter. The same companies that profited from the minstrel shows of the 19th century became the record labels that signed Ray Charles, Little Richard, and James Brown — and kept the majority of the profits. Berry Gordy's Motown Records was the most successful attempt to build Black ownership within the music industry, but even Motown ultimately sold to MCA (now Universal Music Group) in 1988. Today, three major labels — Universal Music Group, Sony Music Entertainment, and Warner Music Group — control approximately 68% of the global music market. The artists who created the music that defines American culture own a fraction of its economic value.",
    ],
    pullQuote: {
      text: "Every voice, every title is telling you the story of Afro-American history.",
      attribution: "Amiri Baraka, Blues People: Negro Music in White America (1963)"
    },
    keyDocuments: [
      "Baraka, Amiri (LeRoi Jones). Blues People: Negro Music in White America. William Morrow (1963)",
      "Thompson, William Forde and Olsen, Kirk N. The Science and Psychology of Music. MIT Press (2021)",
      "Gordy, Berry. To Be Loved: The Music, the Magic, the Memories of Motown. Warner Books (1994)"
    ],
    didYouKnow: "Ray Charles, Little Richard, James Brown, and Otis Redding were all born in Georgia within a 30-mile radius of each other. The concentration of musical genius in that specific region of Georgia is not a coincidence — it is the product of a specific community that had survived specific historical conditions."
  },

};
