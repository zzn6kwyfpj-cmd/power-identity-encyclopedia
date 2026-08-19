// Royal Archive legal-record registry: normalizes jurisdiction, mechanism, and enforcement limits.
// Each entry describes what the named record establishes; it does not convert a legal rule into proof of uniform outcome.

export type LegalRecordType = "Statute" | "Constitutional amendment" | "Constitution" | "Treaty" | "Court decision" | "Executive / military order" | "Administrative circular";

export interface LegalRecordMetadata {
  recordType: LegalRecordType;
  jurisdiction: string;
  citation: string;
  mechanism: string;
  enforcementPath: string;
  documentedLimit: string;
  sourceUrl: string;
}

export const LEGAL_RECORDS: Record<string, LegalRecordMetadata> = {
  "1662_maternal_status": {
    recordType: "Statute",
    jurisdiction: "Colony of Virginia",
    citation: "Act XII, 2 Hening’s Statutes at Large 170 (Dec. 1662)",
    mechanism: "Made a child’s bond or free status follow the legal condition of the mother in the described colonial context.",
    enforcementPath: "Colonial courts and local administration of status, labor, inheritance, and enslavement.",
    documentedLimit: "The statute establishes a legal rule; it does not establish the ancestry, kinship, or lived experience of every person later classified under colonial categories.",
    sourceUrl: "https://encyclopediavirginia.org/primary-documents/negro-womens-children-to-serve-according-to-the-condition-of-the-mother-1662/"
  },
  "1723_classification": {
    recordType: "Statute",
    jurisdiction: "Colony of Virginia",
    citation: "Act IV, 4 Hening’s Statutes at Large 126–34 (May 1723)",
    mechanism: "Created a linked penal and administrative regime addressing enslaved people and people classified as Negro, Mulatto, or Indian, whether bond or free, with stated exceptions.",
    enforcementPath: "Colonial courts, local officials, militia regulation, taxation, and voting administration.",
    documentedLimit: "The aggregation of categories within a legal regime is not proof that all people placed in those categories shared ancestry, identity, or legal treatment in every circumstance.",
    sourceUrl: "https://encyclopediavirginia.org/primary-documents/an-act-directing-the-trial-of-slaves-committing-capital-crimes-and-for-the-more-effectual-punishing-conspiracies-and-insurrections-of-them-and-for-the-better-government-of-negros-mulattos-and-in/"
  },
  "1740_sc_code": {
    recordType: "Statute",
    jurisdiction: "Province of South Carolina",
    citation: "An Act for the Better Ordering and Governing Negroes and Other Slaves (1740)",
    mechanism: "Established a broad slave-property and policing regime using multiple racialized categories, with stated exceptions and rules requiring freedom to be demonstrated in designated contexts.",
    enforcementPath: "Provincial courts, patrols, enslaver claims, and local colonial administration.",
    documentedLimit: "The statute describes a legal regime, not a complete family history or a uniform outcome for every person named by its categories.",
    sourceUrl: "https://www.loc.gov/resource/gdcmassbookdig.negrolawofsouthc00onea/?st=gallery"
  },
  "1865_mississippi_black_code": {
    recordType: "Statute",
    jurisdiction: "State of Mississippi",
    citation: "Mississippi Black Codes, Laws of the State of Mississippi (1865; published 1866)",
    mechanism: "Applied race-specific restrictions to employment departure, vagrancy, arms, and marriage for people the statutes called freedmen, free Negroes, or mulattoes.",
    enforcementPath: "State and local officers, police, courts, penal provisions, and labor administration.",
    documentedLimit: "The entry documents selected enacted provisions and their legal targets; it does not establish identical enforcement in every county or account for every freedperson’s experience.",
    sourceUrl: "https://constitutioncenter.org/the-constitution/historic-document-library/detail/mississippi-south-carolina-black-codes-1865"
  },
  "1865_south_carolina_black_code": {
    recordType: "Statute",
    jurisdiction: "State of South Carolina",
    citation: "Act to Establish and Regulate the Domestic Relations of Persons of Colour (Dec. 21, 1865)",
    mechanism: "Used master–servant terminology and regulated labor contracts, movement, licensing, vagrancy, and specified work or trade conditions for people classified as persons of color.",
    enforcementPath: "District judges, magistrates, local courts, labor-contract administration, and penal enforcement.",
    documentedLimit: "The statute’s text does not establish a uniform local outcome, a complete history of racial categories, or the identity of any specific individual or family.",
    sourceUrl: "https://ldhi.library.cofc.edu/exhibits/show/after_slavery_educator/unit_three_documents/document_eight"
  },
  "1924_virginia_racial_integrity": {
    recordType: "Statute",
    jurisdiction: "Commonwealth of Virginia",
    citation: "Racial Integrity Act, 1924 Va. Acts ch. 371",
    mechanism: "Required racial designation in the legal administration of marriage and defined “white” through a restrictive statutory rule, creating a state classification framework later revised in 1930.",
    enforcementPath: "Virginia Bureau of Vital Statistics, local clerks, marriage-license administration, and associated vital-record processes.",
    documentedLimit: "The law documents a state classification regime; it does not prove a person’s ancestry, erase a community’s self-identification, or determine sovereign tribal citizenship.",
    sourceUrl: "https://www.lva.virginia.gov/collections/educator-resources/dbva/items/show/226"
  },
  "1865_field_order": {
    recordType: "Executive / military order",
    jurisdiction: "Military Division of the Mississippi; specified coastal territory",
    citation: "Special Field Orders No. 15 (Jan. 16, 1865)",
    mechanism: "Reserved defined lands for settlement and limited family plots to possessory titles pending later action.",
    enforcementPath: "Military administration during the closing phase of the Civil War.",
    documentedLimit: "It was geographically bounded, temporary, and not a nationwide permanent land-grant statute.",
    sourceUrl: "https://www.freedmen.umd.edu/sfo15.htm"
  },
  "1865_freedmens_bureau": {
    recordType: "Statute",
    jurisdiction: "Federal; War Department and designated former Confederate states or Army-operation areas",
    citation: "Freedmen’s Bureau Act, 13 Stat. 507–09 (Mar. 3, 1865)",
    mechanism: "Created the Bureau, temporary relief authority, and a limited abandoned-land assignment and purchase framework.",
    enforcementPath: "Commissioner, assistant commissioners, and field offices under federal administration.",
    documentedLimit: "The statute did not automatically establish permanent title, uniform local enforcement, or individual identity or citizenship.",
    sourceUrl: "https://www.freedmen.umd.edu/fbact.htm"
  },
  "1865_land_restoration": {
    recordType: "Administrative circular",
    jurisdiction: "Bureau of Refugees, Freedmen, and Abandoned Lands",
    citation: "Circular No. 15 (Sept. 12, 1865)",
    mechanism: "Set Bureau land-administration rules and a procedure permitting restoration to pardoned owners under stated conditions.",
    enforcementPath: "Assistant commissioners processed restoration applications and reported action to the Commissioner.",
    documentedLimit: "It states policy and crop safeguards; it does not establish the outcome of every settlement or claim.",
    sourceUrl: "https://www.presidency.ucsb.edu/documents/circular-no-15"
  },
  "1866_freedmens_bureau_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Freedmen’s Bureau Act extension, 14 Stat. 173–77 (July 16, 1866)",
    mechanism: "Continued and amended Bureau authority after Congress overrode President Johnson’s veto.",
    enforcementPath: "Continued federal Bureau administration during Reconstruction.",
    documentedLimit: "Continuation of authority did not guarantee effective protection in every district or prevent later contraction of the Bureau.",
    sourceUrl: "https://www.govinfo.gov/app/details/STATUTE-14/STATUTE-14-Pg173"
  },
  "1866_civil_rights_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Civil Rights Act of 1866, 14 Stat. 27",
    mechanism: "Declared citizenship for most U.S.-born persons and equal benefit of laws protecting person and property.",
    enforcementPath: "Federal statutory rights and federal court enforcement.",
    documentedLimit: "Black Codes, private violence, local administration, and the statute’s treatment of American Indians limited its practical reach.",
    sourceUrl: "https://history.house.gov/Historical-Highlights/1851-1900/The-Civil-Rights-Bill-of-1866/"
  },
  "1866_cherokee_treaty": {
    recordType: "Treaty",
    jurisdiction: "United States and Cherokee Nation",
    citation: "Treaty with the Cherokee, Art. IX, 14 Stat. 799 (July 19, 1866; ratified July 27; proclaimed Aug. 11)",
    mechanism: "Article IX prohibited slavery or involuntary servitude in the Cherokee Nation except as punishment for crime and specified that identified Freedmen, free colored persons, and their descendants would have all the rights of native Cherokees, subject to the article’s stated residence or return conditions.",
    enforcementPath: "Treaty terms, Cherokee Nation law and institutions, federal treaty obligations, and later litigation interpreting the treaty.",
    documentedLimit: "The treaty text establishes its stated legal terms; it does not by itself establish the ancestry, present citizenship, or individual eligibility of every person claiming a Cherokee Freedmen connection.",
    sourceUrl: "https://treaties.okstate.edu/treaties/treaty-with-the-cherokee-1866-0942"
  },
  "1868_fourteenth_amendment": {
    recordType: "Constitutional amendment",
    jurisdiction: "Federal and state governments",
    citation: "U.S. Const. amend. XIV (ratified 1868)",
    mechanism: "Constitutionalized citizenship, due process, equal protection, and congressional enforcement power.",
    enforcementPath: "State compliance, federal legislation, and judicial interpretation.",
    documentedLimit: "Its language required later enforcement and was repeatedly narrowed by doctrine and administrative practice.",
    sourceUrl: "https://www.archives.gov/milestone-documents/14th-amendment"
  },
  "1870_fifteenth_amendment": {
    recordType: "Constitutional amendment",
    jurisdiction: "Federal and state governments",
    citation: "U.S. Const. amend. XV (ratified 1870)",
    mechanism: "Bars denial or abridgment of voting rights on account of race, color, or previous condition of servitude.",
    enforcementPath: "Congressional enforcement legislation and litigation.",
    documentedLimit: "The amendment did not itself supply a complete affirmative voting-right guarantee or prevent later formal barriers.",
    sourceUrl: "https://www.archives.gov/milestone-documents/15th-amendment"
  },
  "1870_enforcement_act": {
    recordType: "Statute",
    jurisdiction: "Federal and state election administration",
    citation: "First Enforcement Act, 16 Stat. 140 (1870)",
    mechanism: "Created federal offenses and remedies for specified interference with voting and registration rights.",
    enforcementPath: "Federal prosecution and federal courts.",
    documentedLimit: "Its effectiveness depended on federal willingness and judicial interpretation, both of which later narrowed.",
    sourceUrl: "https://history.house.gov/Historical-Highlights/1851-1900/The-Enforcement-Acts-of-1870-and-1871/"
  },
  "1871_kkk_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Third Enforcement Act / Ku Klux Klan Act, 17 Stat. 13 (1871)",
    mechanism: "Authorized expanded federal action against conspiracies denying constitutional rights.",
    enforcementPath: "Federal courts and, under specified circumstances, presidential authority.",
    documentedLimit: "Its use and constitutional reach remained vulnerable to enforcement choices and subsequent court decisions.",
    sourceUrl: "https://history.house.gov/Historical-Highlights/1851-1900/The-Enforcement-Acts-of-1870-and-1871/"
  },
  "1871_indian_appropriations_act": {
    recordType: "Statute",
    jurisdiction: "Federal; United States–Indian nation treaty process",
    citation: "Indian Appropriations Act, ch. 120, §1, 16 Stat. 566 (Mar. 3, 1871); codified at 25 U.S.C. §71",
    mechanism: "Ended future federal recognition of an Indian nation or tribe as an independent nation, tribe, or power with whom the United States could contract by treaty, while preserving obligations of treaties lawfully made and ratified before March 3, 1871.",
    enforcementPath: "Congressional legislation, executive orders, executive agreements, federal administration, and judicial interpretation after the change in federal treaty-making procedure.",
    documentedLimit: "The statute did not invalidate earlier ratified treaties or independently settle the scope of tribal sovereignty, treaty rights, or the outcome of a particular nation’s claims.",
    sourceUrl: "https://docsteach.org/document/indian-appropriations-act/"
  },
  "1875_civil_rights_act": {
    recordType: "Statute",
    jurisdiction: "Federal public-accommodations law",
    citation: "Civil Rights Act of 1875, 18 Stat. 335",
    mechanism: "Created listed public-accommodations protections and a federal remedy for racial denial of access.",
    enforcementPath: "Federal statutory remedy and litigation.",
    documentedLimit: "The Civil Rights Cases (1883) invalidated central provisions, exposing the gap between statutory rule and durable enforcement.",
    sourceUrl: "https://www.senate.gov/artandhistory/history/common/generic/CivilRightsAct1875.htm"
  },
  "1876_cruikshank": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "United States v. Cruikshank, 92 U.S. 542 (1876)",
    mechanism: "Narrowly construed federal prosecution under Reconstruction enforcement laws in the Colfax Massacre litigation.",
    enforcementPath: "Binding Supreme Court doctrine governing federal criminal enforcement.",
    documentedLimit: "The state-action analysis weakened available federal remedies against private violence.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep092/usrep092542/usrep092542.pdf"
  },
  "1876_reese": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "United States v. Reese, 92 U.S. 214 (1876)",
    mechanism: "Distinguished the Fifteenth Amendment’s prohibition on race-based denial from an independently conferred affirmative right to vote.",
    enforcementPath: "Binding Supreme Court doctrine governing federal voting-rights enforcement.",
    documentedLimit: "The distinction left space for facially neutral restrictions and narrowed Reconstruction enforcement.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep092/usrep092214/usrep092214.pdf"
  },
  "1944_smith_allwright": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "Smith v. Allwright, 321 U.S. 649 (1944)",
    mechanism: "Invalidated a race-based Democratic primary under the Fifteenth Amendment.",
    enforcementPath: "Constitutional litigation against state-sanctioned electoral exclusion.",
    documentedLimit: "The ruling addressed the white primary but did not eliminate all voting barriers or ensure registration access.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep321/usrep321649/usrep321649.pdf"
  },
  "1890_mississippi_constitution": {
    recordType: "Constitution",
    jurisdiction: "State of Mississippi",
    citation: "Constitution of the State of Mississippi (adopted Nov. 1, 1890), Article XII, Franchise",
    mechanism: "Established state constitutional voting and registration qualifications. The Mississippi Department of Archives and History describes the convention’s literacy-test and poll-tax voting requirements and their exclusionary operation.",
    enforcementPath: "County election officials, registrars, tax administration, state election law, and state courts.",
    documentedLimit: "The constitution and historical context identify a state legal framework; they do not establish identical administration in every county or the voting history of any particular person.",
    sourceUrl: "http://www.mshistorynow.mdah.ms.gov/issue/mississippi-constitution-of-1890-as-originally-adopted"
  },
  "1901_alabama_constitution": {
    recordType: "Constitution",
    jurisdiction: "State of Alabama",
    citation: "Constitution of Alabama (1901), suffrage and elections provisions",
    mechanism: "Created a state constitutional voting framework that the Alabama Department of Archives and History describes as restricting suffrage through literacy, employment, and property qualifications.",
    enforcementPath: "County boards of registrars, local election officials, state election administration, and state courts.",
    documentedLimit: "The archival record identifies statewide qualifications; it does not establish the application of every qualification in every county or a particular voter’s experience.",
    sourceUrl: "https://digital.archives.alabama.gov/digital/collection/voices/id/11307/"
  },
  "1900_north_carolina_suffrage": {
    recordType: "Constitution",
    jurisdiction: "State of North Carolina",
    citation: "Suffrage Amendment to Article VI of the North Carolina Constitution (submitted 1899; ratified 1900; State Archives record dated 1901)",
    mechanism: "Required a voter to read and write a section of the constitution in English and to pay a poll tax, while temporarily exempting people entitled to vote before January 1, 1867 and their lineal descendants from the educational qualification if registered by the stated 1908 deadline.",
    enforcementPath: "County registrars, local election administrators, poll-tax administration, permanent registration records, and state election law.",
    documentedLimit: "The amendment’s text identifies statewide qualifications and an exemption; it does not establish the administration of every registrar, the voting history of a particular person, or a universal outcome for all North Carolinians.",
    sourceUrl: "https://digital.ncdcr.gov/Documents/Detail/amendment-of-the-north-carolina-constitution-regarding-suffrage-1901/789530"
  },
  "1957_civil_rights_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Civil Rights Act of 1957, Pub. L. 85-315, 71 Stat. 634",
    mechanism: "Created the Civil Rights Commission and Justice Department Civil Rights Division and authorized voting-rights injunctions.",
    enforcementPath: "Attorney General litigation, primarily against state officials.",
    documentedLimit: "The case-by-case injunction model remained slow and did not create the Voting Rights Act’s later coverage and preclearance system.",
    sourceUrl: "https://constitution.congress.gov/browse/essay/amdt15-S2-2/ALDE_00013501/"
  },
  "1960_civil_rights_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Civil Rights Act of 1960, Pub. L. 86-449, 74 Stat. 86",
    mechanism: "Expanded federal voting-rights enforcement, including voter-registration record preservation and pattern-or-practice litigation.",
    enforcementPath: "Federal record review and Department of Justice litigation.",
    documentedLimit: "It improved federal tools but still required litigation before the Voting Rights Act’s affirmative administrative protections.",
    sourceUrl: "https://constitution.congress.gov/browse/essay/amdt15-S2-2/ALDE_00013501/"
  },
  "1964_twenty_fourth_amendment": {
    recordType: "Constitutional amendment",
    jurisdiction: "Federal elections",
    citation: "U.S. Const. amend. XXIV (ratified 1964)",
    mechanism: "Prohibited poll taxes as a prerequisite to voting in federal elections.",
    enforcementPath: "Constitutional challenge to poll-tax requirements in federal elections.",
    documentedLimit: "It did not itself reach state-election poll taxes, which required subsequent judicial review.",
    sourceUrl: "https://history.house.gov/Historical-Highlights/1951-2000/The-Twenty-Fourth-Amendment/"
  },
  "1964_civil_rights_act": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Civil Rights Act of 1964, Pub. L. 88-352, 78 Stat. 241",
    mechanism: "Prohibited discrimination in public accommodations and employment and expanded federal desegregation tools.",
    enforcementPath: "Federal agencies, litigation, and the newly created EEOC.",
    documentedLimit: "The statute did not erase preexisting racial inequality or guarantee prompt local compliance.",
    sourceUrl: "https://www.archives.gov/milestone-documents/civil-rights-act"
  },
  "1966_harper": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "Harper v. Virginia Board of Elections, 383 U.S. 663 (1966)",
    mechanism: "Held that a state cannot condition voting on payment of a fee or tax under equal protection doctrine.",
    enforcementPath: "Constitutional litigation against state poll-tax requirements.",
    documentedLimit: "The case removed that barrier but did not itself prevent all discriminatory election practices.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep383/usrep383663/usrep383663.pdf"
  },
  "1966_katzenbach": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "South Carolina v. Katzenbach, 383 U.S. 301 (1966)",
    mechanism: "Upheld Voting Rights Act provisions before the Court as appropriate Fifteenth Amendment enforcement measures.",
    enforcementPath: "Validated federal coverage, preclearance, and affirmative remedies in the challenged provisions.",
    documentedLimit: "Judicial validation did not itself ensure compliance or resolve later constitutional challenges to the coverage formula.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep383/usrep383301/usrep383301.pdf"
  },
  "1968_fair_housing": {
    recordType: "Statute",
    jurisdiction: "Federal housing law",
    citation: "Civil Rights Act of 1968, Title VIII, Pub. L. 90-284, 82 Stat. 73",
    mechanism: "Prohibited specified discrimination in housing sale and rental and supplied federal and private enforcement paths.",
    enforcementPath: "Administrative enforcement, Department of Justice action, and private litigation.",
    documentedLimit: "The law did not undo prior redlining, wealth loss, segregation, or all later discriminatory practices.",
    sourceUrl: "https://www.justice.gov/crt/fair-housing-act-1"
  },
  "1969_allen": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "Allen v. State Board of Elections, 393 U.S. 544 (1969)",
    mechanism: "Read Section 5 broadly for covered changes in voting practices and procedures.",
    enforcementPath: "Preclearance litigation under the Voting Rights Act.",
    documentedLimit: "The holding operated within statutory coverage and was later affected by changes to the preclearance formula.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep393/usrep393544/usrep393544.pdf"
  },
  "1969_gaston_county": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "Gaston County v. United States, 395 U.S. 285 (1969)",
    mechanism: "Prevented reinstatement of a literacy test where a record of discriminatory education made the test an unlawful voting barrier.",
    enforcementPath: "Voting Rights Act litigation against a covered county’s proposed election practice.",
    documentedLimit: "The decision applied to its legal and factual record; it did not end all literacy-test or educational-discrimination effects nationally.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep395/usrep395285/usrep395285.pdf"
  },
  "1980_city_of_rome": {
    recordType: "Court decision",
    jurisdiction: "U.S. Supreme Court",
    citation: "City of Rome v. United States, 446 U.S. 156 (1980)",
    mechanism: "Upheld congressional authority to apply the Voting Rights Act’s preclearance regime to covered changes with discriminatory effect.",
    enforcementPath: "Section 5 preclearance review.",
    documentedLimit: "The decision depended on the then-existing statutory coverage system, later altered by Shelby County.",
    sourceUrl: "https://tile.loc.gov/storage-services/service/ll/usrep/usrep446/usrep446156/usrep446156.pdf"
  },
  "2006_vra_reauthorization": {
    recordType: "Statute",
    jurisdiction: "Federal",
    citation: "Voting Rights Act Reauthorization, Pub. L. 109-246, 120 Stat. 577",
    mechanism: "Extended specified Voting Rights Act and bilingual-election provisions for twenty-five years.",
    enforcementPath: "Statutory continuation of then-active coverage and enforcement provisions.",
    documentedLimit: "The later Shelby County decision invalidated the coverage formula that activated Section 5 preclearance.",
    sourceUrl: "https://history.house.gov/Historical-Highlights/2000/2006-Voting-Rights-Act-reauthorized/"
  }
};
