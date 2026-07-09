// Additional chapter content for the three new historical gaps
export const EXTRA_CHAPTER_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {
  "gullah-geechee": {
    slug: "gullah-geechee",
    fullText: [
      "The Gullah Geechee people are direct descendants of enslaved Africans who were brought to the coastal regions of North Carolina, South Carolina, Georgia, and Florida, primarily through the ports of Charleston and Savannah. Their unique culture, language, and traditions have been remarkably preserved due to the geographic isolation of the Sea Islands and surrounding Lowcountry areas. This isolation allowed for the retention of a high volume of Africanisms in their English-based Creole language, Gullah, as well as in their music, foodways, spiritual practices, and crafts.",
      "The origins of the Gullah Geechee people are deeply intertwined with the brutal transatlantic slave trade. Shipping records from the Port of Charleston indicate that a significant portion of enslaved Africans — particularly from Angola, Sierra Leone, and Gambia — were brought to the region due to their expertise in rice cultivation. This knowledge was crucial for the burgeoning rice economy of South Carolina and Georgia in the 1700s, making these colonies among the wealthiest in North America. The enslaved Gullah people played a pivotal role in building this agricultural wealth, utilizing their traditional farming techniques, including tidal irrigation, to cultivate vast rice fields.",
      "White plantation owners often left enslaved Gullah Geechee people to manage vast rice and cotton plantations during the hot, humid months, fearing tropical diseases like malaria and yellow fever. This inadvertently allowed for a greater preservation of African cultural traditions due to reduced direct white oversight. The Gullah language, food traditions (including rice-based dishes, okra, and benne seeds), basket weaving, and spiritual practices like the 'ring shout' all survived because of this geographic and social isolation.",
      "In recognition of their distinct cultural heritage, the Gullah Geechee Cultural Heritage Corridor National Heritage Area was federally designated in 2006 by the U.S. Congress. This corridor spans from southern North Carolina to northern Florida, encompassing 79 barrier islands and communities up to 30 miles inland. However, the Gullah Geechee people have faced significant challenges in the 20th and 21st centuries: rising property taxes, unclear land titles (often due to heirs' property issues), and increasing development pressures have led to the loss of family land that has been passed down for generations. This ongoing dispossession directly connects to the encyclopedia's central thesis — the same mechanisms of legal and economic extraction that seized Cherokee and Creek land in the 1830s continue to operate against the Gullah Geechee people today.",
    ],
    pullQuote: {
      text: "Working on large plantations with hundreds of laborers, and with African traditions reinforced by new imports from the same regions, the Gullahs developed a culture in which elements of African languages, cultures, and community life were preserved to a high degree.",
      attribution: "Beaufort, SC Official Tourism Site — Gullah Culture and History"
    },
    keyDocuments: [
      "Gullah Geechee Cultural Heritage Corridor National Heritage Area (NPS, 2006) — nps.gov",
      "Southern Poverty Law Center, Tax Targeting Gullah-Geechee Landowners on Sapelo Island (2025)",
      "The Guardian, Gullah Geechee People Set Out to Keep Their Family Land (2026)"
    ],
    didYouKnow: "The Gullah word 'buckra' (meaning white person or boss) comes directly from the Efik language of Nigeria — one of hundreds of African linguistic survivals in the Gullah language that prove the direct cultural continuity from West Africa to the Sea Islands of Georgia."
  },

  "five-tribes-slavery": {
    slug: "five-tribes-slavery",
    fullText: [
      "Intellectual honesty requires that this encyclopedia address a history that complicates the narrative of a natural Black-Indigenous alliance: the documented enslavement of Black people by the Five Civilized Tribes. This history does not diminish the crimes committed against Indigenous peoples — it reveals the full complexity of how colonial power structures corrupted every community they touched.",
      "By 1860, the Five Civilized Tribes collectively held over 7,300 enslaved Black people. The Cherokee Nation held the largest number, with 2,511 enslaved individuals comprising 15% of their population. The Choctaw held 2,349 (14%), the Creek held 1,532 (10%), and the Chickasaw held 975 — which at 18% was the highest proportion relative to their total population, comparable to white slaveholders in neighboring Tennessee. The Seminole, whose system of slavery more closely resembled indentured servitude or sharecropping, held fewer enslaved people but still participated in the institution.",
      "Following the Civil War, in which factions of all Five Tribes allied with the Confederacy, the United States forced the nations to sign the Treaties of 1866. A critical provision of these treaties required the tribes to abolish slavery and grant full citizenship rights, including land allotments, to their Freedmen (formerly enslaved Black people) and their descendants. Article II of the Treaty with the Cherokee explicitly stated that all freedmen 'shall have all the rights of native Cherokees.'",
      "This history profoundly complicates the narrative of a natural Black-Indigenous alliance against white supremacy. The reality is that wealthy, politically powerful members of the Five Tribes were active participants in the enslavement and exploitation of Black people. Furthermore, the rigid racial hierarchies established by tribal slave codes often ignored the complex reality of individuals who were both Indigenous and enslaved. Because tribal laws often followed the condition of the mother, children born to enslaved Black women and Indigenous men were typically enslaved, existing at the painful intersection of two systems of oppression.",
      "The legacy of this enslavement directly connects to the Dawes Rolls and the ongoing battles over Cherokee Freedmen citizenship. When the Dawes Commission created the rolls in the late 19th century, they segregated individuals into 'by blood' and 'Freedmen' categories, often ignoring the Indigenous ancestry of the Freedmen. This racialized categorization laid the groundwork for modern efforts by some tribes to disenfranchise Freedmen descendants — a struggle that continues to highlight the enduring impact of Native American slaveholding. The Cherokee Nation stripped Freedmen descendants of citizenship in 2007; a U.S. District Court restored it in 2017.",
    ],
    pullQuote: {
      text: "The Five Civilized Tribes were deeply committed to slavery, established their own racialized black codes, immediately reestablished slavery when they arrived in Indian territory, rebuilt their nations with slave labor, crushed slave rebellions, and enthusiastically sided with the Confederacy in the Civil War.",
      attribution: "Tiya Miles, historian, University of Michigan"
    },
    keyDocuments: [
      "Doran, Michael F. 'Negro Slaves of the Five Civilized Tribes.' Annals of the Association of American Geographers (1978)",
      "Treaty with the Cherokee (1866), Article II — Oklahoma State University Library",
      "Smith, Ryan P. 'How Native American Slaveholders Complicate the Trail of Tears Narrative.' Smithsonian Magazine (2018)"
    ],
    didYouKnow: "By 1860, the Chickasaw Nation had the highest proportion of enslaved Black people among the Five Civilized Tribes — 18% of their total population — a rate comparable to white slaveholders in neighboring Tennessee."
  },

  "black-cowboys": {
    slug: "black-cowboys",
    fullText: [
      "The narrative of the American West, romanticized through popular culture, frequently overlooks the significant contributions of Black cowboys. Historical estimates indicate that approximately one in four cowboys who participated in cattle drives from the 1860s to the 1880s were African American — totaling at least 5,000 individuals. These men, many of whom were formerly enslaved or born into families of former slaves, possessed invaluable skills in cattle handling acquired during their time on plantations and ranches.",
      "Notable figures include Nat Love, also known as 'Deadwood Dick,' whose autobiography published in 1907 chronicled his adventurous life on the frontier, including his prowess as a roper and marksman. Bill Pickett, born in 1870, gained international fame as a rodeo star and is credited with inventing the technique of 'bulldogging' or steer wrestling — a rodeo staple still practiced today. Bose Ikard served as a trusted associate and banker for cattle baron Charles Goodnight on the Goodnight-Loving Trail, a testament to the respect and reliance placed upon Black cowboys by their employers.",
      "Despite their significant contributions, Black cowboys were systematically erased from popular culture. Dime novels of the late 19th century almost exclusively featured white heroes. Buffalo Bill's Wild West shows, which toured nationally and internationally, employed very few Black performers and none in heroic roles. Hollywood westerns of the 20th century completed this erasure, presenting the American West as an almost exclusively white space. This deliberate cultural erasure is a direct example of the industrialization of dehumanization documented in this encyclopedia — the same forces that created the minstrel show also created the myth of the all-white cowboy.",
      "The connection to the Builders of America chapter is direct: Black cowboys were essential to the cattle industry that fed the nation and generated enormous wealth. The connection to the Entertainment Industry chapter is equally direct: their erasure from popular culture was not accidental — it was the deliberate construction of a white American mythology that required the invisibility of Black labor and genius.",
    ],
    pullQuote: {
      text: "I carry my scars as a badge of honor, for they show that I have been in the thick of the fight.",
      attribution: "Nat Love (Deadwood Dick), The Life and Adventures of Nat Love (1907)"
    },
    keyDocuments: [
      "Love, Nat. The Life and Adventures of Nat Love (1907) — Archive.org free access",
      "Durham, Philip and Jones, Everett L. The Negro Cowboys (1965)",
      "Katz, William Loren. The Black West (1971)"
    ],
    didYouKnow: "Bill Pickett, a Black cowboy, invented the technique of bulldogging (steer wrestling) — a rodeo staple still practiced in competitions worldwide today. He was inducted into the National Rodeo Hall of Fame in 1971."
  },
};
