// Full content for 14 previously summary-only chapters
// Sources: National Archives, DOJ settlement documents, CDC, Kerner Commission Report,
// Shilts And the Band Played On, Dyer Bill Congressional Record, etc.

export const FULL_CHAPTER_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {

  "chinese-exclusion": {
    slug: "chinese-exclusion",
    fullText: [
      "On May 6, 1882, President Chester A. Arthur signed the Chinese Exclusion Act into law — the first federal legislation in U.S. history to explicitly bar an entire ethnic group from immigrating to the United States. The Act imposed an absolute 10-year ban on Chinese laborers entering the country and required non-laborers to obtain certification from the Chinese government for entry. It was the Doctrine of Discovery applied to immigration: the legal principle that certain people did not have the right to be present on American soil.",
      "The Chinese Exclusion Act was not the beginning of anti-Chinese discrimination — it was its codification. Chinese workers had been brought to the United States in large numbers to build the transcontinental railroad (completed 1869) and to work in California's mines and farms. They performed the most dangerous work at the lowest wages. When the economic boom ended and competition for jobs increased, white workers and politicians turned on the Chinese community. The Act was the result of that turn.",
      "The specific provisions of the Act reveal its racial architecture. Section 1 suspended the immigration of Chinese laborers for 10 years. Section 4 required Chinese laborers already in the country to obtain certificates of residence — essentially internal passports — to prove their right to be present. Section 14 declared that 'hereafter no State court or court of the United States shall admit Chinese to citizenship.' Chinese immigrants were the only group in American history explicitly barred from naturalization by federal statute.",
      "The Act was extended for another 10 years by the Geary Act in 1892, made permanent in 1902, and not repealed until 1943 — when the United States needed China as an ally against Japan in World War II. Even then, the repeal imposed a yearly quota of only 105 Chinese immigrants. The Act's connection to the broader history documented in this encyclopedia is direct: the same legal framework that declared Indigenous land 'waste and desolate' and classified mixed Black-Indigenous people as 'Negro' by default was used to declare Chinese people legally ineligible for citizenship.",
      "The Georgia connection is specific. In 1873, Chinese laborers were contracted to expand the Augusta Canal — one of the first uses of Chinese labor in the American South. Augusta developed the largest Chinese population in Georgia until the mid-20th century, sustained by a merchant class that was exempt from the Exclusion Act. In 2011 and 2012, both the U.S. Senate and House of Representatives formally condemned the Chinese Exclusion Act — 129 years after its passage.",
    ],
    pullQuote: {
      text: "From and after the expiration of ninety days next after the passage of this act, and until the expiration of ten years next after the passage of this act, the coming of Chinese laborers to the United States be, and the same is hereby, suspended.",
      attribution: "Chinese Exclusion Act, May 6, 1882, National Archives Record Group 11"
    },
    keyDocuments: [
      "Chinese Exclusion Act (1882), National Archives Record Group 11",
      "Geary Act (1892), extending the Chinese Exclusion Act",
      "U.S. Senate Resolution 201 (2011), formally condemning the Chinese Exclusion Act"
    ],
    didYouKnow: "The Chinese Exclusion Act was the first federal law in U.S. history to explicitly bar an entire ethnic group from immigration. It was not fully repealed until 1943 — 61 years after its passage. Chinese Americans were not granted the right to naturalize until that same year."
  },

  "buffalo-soldiers": {
    slug: "buffalo-soldiers",
    fullText: [
      "In 1866, Congress created six all-Black regiments in the U.S. Army — the 9th and 10th Cavalry and the 24th and 25th Infantry. These soldiers, known as the Buffalo Soldiers, served on the western frontier fighting in the Indian Wars, protecting settlers, and building infrastructure. The name 'Buffalo Soldiers' was given to them by the Indigenous peoples they fought against — a name that carries the full complexity of the history documented in this encyclopedia: Black soldiers, fighting for a country that enslaved their parents, against Indigenous peoples whose land was being stolen by that same country.",
      "The Spanish-American War (1898) was the Buffalo Soldiers' most celebrated moment — and their most bitter betrayal. When the USS Maine exploded in Havana Harbor on February 15, 1898, killing 250 Americans, the United States declared war on Spain. Of the approximately 17,000 U.S. troops sent to Cuba, 3,000 were Black soldiers from the 9th and 10th Cavalry. They fought at the Battle of Las Guasimas and the assault on San Juan Hill — the battle that made Theodore Roosevelt famous.",
      "The Buffalo Soldiers' contribution to the victory at San Juan Hill was documented by their own officers and by Spanish military records. They earned five Medals of Honor and 29 Certificates of Merit for their gallantry. But Theodore Roosevelt, in his account of the battle, revised their role — suggesting they had needed to be 'urged' forward by white officers. Tenth Cavalry Trooper Presley Holliday responded directly: 'His statement was uncalled for and uncharitable, and considering the moral and physical effect the advance of the 10th Cavalry had in weakening the forces opposed to the Colonel's regiment, both at Las Guasimas and San Juan Hill, altogether ungrateful.'",
      "The Treaty of Paris (December 10, 1898) ended the Spanish-American War and transferred Puerto Rico, Guam, and the Philippines to the United States. This was the Doctrine of Discovery extended to the Pacific. The same legal principle that had authorized European Christian nations to claim sovereignty over 'uncivilized' lands in 1452 was now being applied to the Pacific Islands. The Buffalo Soldiers who had fought for this expansion returned home to Jim Crow Georgia, Alabama, and Mississippi — to segregated trains, disenfranchisement, and lynching.",
      "The Georgia connection is documented. During the Spanish-American War, Georgia hosted several training camps, including Camp Thomas at Chickamauga — the largest and most deadly in the country due to a typhoid outbreak. Black 'Immune' regiments, formed in Georgia and believed to be immune to tropical diseases, faced months of racial attacks from white civilians in Augusta and Macon while preparing to fight for their country. The men who fought for American empire in Cuba and the Philippines were denied the rights of American citizenship when they returned home.",
    ],
    pullQuote: {
      text: "His statement was uncalled for and uncharitable, and considering the moral and physical effect the advance of the 10th Cavalry had in weakening the forces opposed to the Colonel's regiment, both at Las Guasimas and San Juan Hill, altogether ungrateful.",
      attribution: "Tenth Cavalry Trooper Presley Holliday, responding to Theodore Roosevelt's revised account of San Juan Hill"
    },
    keyDocuments: [
      "Treaty of Paris (1898), National Archives — transferring Puerto Rico, Guam, and the Philippines to the U.S.",
      "Medal of Honor citations for Buffalo Soldiers (1898), U.S. Army Center of Military History",
      "Holliday, Presley. Letter to the New York Age (1899)"
    ],
    didYouKnow: "Despite facing severe racial discrimination and segregation, Buffalo Soldiers had some of the lowest court-martial and desertion rates in the U.S. Army. They also had the highest reenlistment rates — because for many Black men in the post-Reconstruction South, the Army was the only institution that paid them equally and promoted them based on merit."
  },

  "bracero-program": {
    slug: "bracero-program",
    fullText: [
      "On August 4, 1942, the United States and Mexico signed an executive agreement establishing the Bracero Program — a temporary guest worker program that would bring Mexican agricultural laborers to the United States to address wartime labor shortages. Over the next 22 years, the program issued more than 4.6 million contracts, making it the largest foreign worker program in U.S. history. The mechanisms of control and exploitation used in the Bracero Program bear striking resemblance to the convict leasing system documented elsewhere in this encyclopedia.",
      "The specific conditions of the Bracero Program were documented in the agreement itself. Workers were to receive the same wages as domestic workers, adequate housing, food, and medical care. Employers were prohibited from using Braceros to break strikes. In practice, these protections were systematically violated. Braceros often faced discrimination, withheld wages, and exposure to deadly pesticides. In 1943, 500 Braceros suffered food poisoning in Grants Pass, Oregon. Employers frequently lowered wages to deter domestic workers, thereby creating the very labor shortage that justified continued importation of Bracero labor.",
      "The racial dimension of the Bracero Program is documented in Mexico's response to it. Mexico blacklisted several U.S. states — including Texas — from participating in the program due to notorious histories of discrimination and mistreatment of Mexican workers. Texas was only re-admitted after the U.S. government took greater control of the program under Public Law 78 in 1951. The same state that had used the Texas Rangers to suppress Mexican-American labor organizing was now formally barred from accessing Mexican labor because of its documented record of abuse.",
      "The connection to the broader history documented in this encyclopedia is direct. The Bracero Program operated simultaneously with the convict leasing system's legacy in the American South, the school-to-prison pipeline's precursors in urban schools, and the GI Bill's racial exclusion of Black veterans. Each of these systems extracted labor from vulnerable populations — formerly enslaved Black men, Mexican migrant workers, Indigenous people on reservations — and denied them the wealth that labor produced. The Bracero Program ended on December 31, 1964 — the same year the Civil Rights Act was passed.",
      "The Bracero Program's legacy is visible in the present-day agricultural labor force. The program created migration patterns and social networks that persisted after its termination. Many former Braceros and their families settled permanently in the United States, forming the foundation of the Mexican-American agricultural labor force that continues to harvest the majority of American fruits and vegetables. Their labor built the American food system. Their contributions to American wealth are undocumented in most American history textbooks.",
    ],
    pullQuote: {
      text: "Historians tend to agree that while the United States and Mexico believed they were the key actors in the agreement, the agricultural corporations were the true players throughout the course of the Bracero Program and their goal was solely profit.",
      attribution: "Sandra Puebla, 'The Bracero Program: The Bi-National Migrant Labor Agreement 1942-1964,' Compass: An Undergraduate Journal of American Political Ideas (2019)"
    },
    keyDocuments: [
      "Bracero Program Agreement (1942), National Archives",
      "Public Law 78 (1951), extending and restructuring the Bracero Program",
      "Galarza, Ernesto. Merchants of Labor: The Mexican Bracero Story. McNally & Loftin (1964)"
    ],
    didYouKnow: "Mexico blacklisted Texas from the Bracero Program due to its notorious history of discrimination against Mexican workers. Texas was only re-admitted after the U.S. federal government took greater control of the program. The state that had used the Texas Rangers to suppress Mexican-American labor organizing was formally barred from accessing Mexican labor because of its documented record of abuse."
  },

  "kerner-commission": {
    slug: "kerner-commission",
    fullText: [
      "On July 28, 1967, President Lyndon B. Johnson established the National Advisory Commission on Civil Disorders — known as the Kerner Commission after its chairman, Illinois Governor Otto Kerner Jr. — to investigate the causes of over 150 race riots that had erupted across the United States that summer. The commission's 426-page report, issued on February 29, 1968, became an instant bestseller, with over two million copies purchased by Americans. It outsold even the Warren Report, which had investigated President Kennedy's assassination.",
      "The Kerner Report's central finding was the most direct statement the federal government had ever made about systemic racism: 'Our nation is moving toward two societies, one black, one white — separate and unequal.' The report identified the direct cause of the riots as 'the social consequences of white racism' — not Black criminality, not outside agitators, not poverty alone. The federal government's own commission concluded that white racism was the root cause of racial violence in America.",
      "The specific findings of the Kerner Report documented the mechanisms of that racism with precision. The commission found that 30% of homeowners and 40% of businesses in six major cities faced 'serious insurance problems' due to insurance companies abandoning minority areas — a direct consequence of the HOLC redlining maps documented in this encyclopedia. It found that Black unemployment rates were consistently double those of white workers with equivalent education. It found that Black children attended schools with less experienced teachers, fewer resources, and lower expectations.",
      "The Kerner Report made extensive recommendations: creating 1 million new public sector jobs and 1 million private sector jobs over three years, building 6 million new housing units in five years, reforming the welfare system, and fundamentally restructuring police-community relations. President Johnson, who had commissioned the report, largely ignored its recommendations. He was reportedly furious that the commission had not credited his Great Society programs with preventing more riots.",
      "The Kerner Report's most important legacy is what it proves about the federal government's own understanding of systemic racism. The government commissioned the study, received the findings, and chose not to act on them. This is not ignorance. It is the documented enforcement gap — the space between knowing what is wrong and choosing not to fix it — that runs through the entire history documented in this encyclopedia, from Jackson's refusal to enforce Worcester v. Georgia to the Senate's refusal to pass the Dyer Anti-Lynching Bill.",
    ],
    pullQuote: {
      text: "Our nation is moving toward two societies, one black, one white — separate and unequal.",
      attribution: "Report of the National Advisory Commission on Civil Disorders (Kerner Report), February 29, 1968"
    },
    keyDocuments: [
      "Report of the National Advisory Commission on Civil Disorders (Kerner Report), 1968 — available at the Eisenhower Foundation",
      "Kerner Commission, established by Executive Order 11365 (July 29, 1967)"
    ],
    didYouKnow: "The Kerner Report was such a bestseller that it outsold even the Warren Report, which had investigated President Kennedy's assassination. Over two million Americans purchased copies. President Johnson, who commissioned the report, largely ignored its recommendations and was reportedly furious at its findings."
  },

  "aids-epidemic-federal-delay": {
    slug: "aids-epidemic-federal-delay",
    fullText: [
      "By the end of 1981, the Centers for Disease Control had officially reported 337 AIDS cases and 130 deaths in the United States. The disease was new, poorly understood, and spreading rapidly. The Reagan administration's response was silence. President Reagan did not publicly mention AIDS until 1985 — four years into the epidemic. He did not give a major speech on AIDS until 1987. By that time, 20,849 Americans had died. The word 'AIDS' does not appear once in Ronald Reagan's autobiography.",
      "The documented timeline of federal inaction is specific. In 1982, the CDC requested $55 million for AIDS research. The Reagan administration approved $8 million. In 1983, the Public Health Service identified AIDS as its number one priority. The administration did not increase funding proportionally. In 1984, the virus that causes AIDS (HIV) was identified. The administration did not launch a public information campaign. In 1985, Rock Hudson — a personal friend of the Reagans — died of AIDS. Reagan still did not speak publicly about the epidemic.",
      "The disproportionate impact on Black communities is documented by the CDC's own data. In the early 1980s, most AIDS cases occurred among white gay men. But by 1996, cases among Black individuals had surpassed all other racial and ethnic groups. By 1987, HIV disease had become the leading cause of death for African-American men between the ages of 35 and 44, accounting for 23.5% of all deaths in that demographic. The federal government's delay in responding to the AIDS epidemic was not racially neutral in its consequences.",
      "The connection to the broader history documented in this encyclopedia is direct. The same federal government that had deliberately withheld penicillin from 399 Black men with syphilis in the Tuskegee Study (1932–1972) was now delaying its response to an epidemic that was killing Black Americans at disproportionate rates. The same distrust of the medical establishment that the Tuskegee Study had created in Black communities — a documented, rational response to documented abuse — made Black communities more vulnerable to AIDS because they were less likely to seek testing and treatment.",
      "Randy Shilts, in his 1987 book 'And the Band Played On,' characterized the Reagan administration's response as 'a drama of national failure, played against the backdrop of needless death.' Federal funding for AIDS-related efforts increased from $8 million in 1982 to $508 million in 1986 — but the increase came too late and was considered insufficient by public health experts. By the end of 1985, there were 12,529 reported American deaths from AIDS. The epidemic that the federal government chose not to address in its early years became one of the defining public health catastrophes of the 20th century.",
    ],
    pullQuote: {
      text: "A drama of national failure, played against the backdrop of needless death.",
      attribution: "Randy Shilts, And the Band Played On: Politics, People, and the AIDS Epidemic (1987)"
    },
    keyDocuments: [
      "Centers for Disease Control, AIDS Surveillance Reports (1981–1987)",
      "Shilts, Randy. And the Band Played On. St. Martin's Press (1987)",
      "Reagan, Ronald. An American Life. Simon & Schuster (1990) — AIDS not mentioned"
    ],
    didYouKnow: "The word 'AIDS' does not appear once in Ronald Reagan's autobiography, 'An American Life,' published in 1990. Reagan did not give a major speech on AIDS until 1987 — six years into the epidemic and after more than 20,000 Americans had died."
  },

  "subprime-mortgage-crisis": {
    slug: "subprime-mortgage-crisis",
    fullText: [
      "In July 2012, the U.S. Department of Justice announced a $175 million settlement with Wells Fargo Bank to resolve allegations of discrimination against African-American and Hispanic borrowers in its mortgage lending from 2004 through 2009. The settlement was the second-largest fair lending settlement in DOJ history. Thomas E. Perez, the Assistant Attorney General for the Civil Rights Division, described the discriminatory charges as a 'racial surtax' — a premium charged to Black and Hispanic borrowers for the same loan products that white borrowers received at lower rates.",
      "The specific documented practices were systematic. Between 2004 and 2008, Wells Fargo allegedly steered approximately 4,000 African-American and Hispanic wholesale borrowers into subprime mortgages, even when similarly qualified non-Hispanic white borrowers received prime loans. From 2004 to 2009, the bank charged approximately 30,000 African-American and Hispanic wholesale borrowers higher fees and rates than non-Hispanic white borrowers, irrespective of their creditworthiness. These were not isolated incidents. They were documented patterns across thousands of loans.",
      "The 2008 financial crisis wiped out 53% of Black household wealth — the largest single destruction of Black wealth since the Tulsa Race Massacre of 1921. The Federal Reserve's Survey of Consumer Finances documented that the median Black family's net worth fell from $19,200 in 2007 to $9,000 in 2010. The median white family's net worth fell from $192,500 to $171,000 in the same period. The crisis hit everyone, but it hit Black families hardest — because Black families had been systematically steered into the most predatory loan products.",
      "The connection to the broader history documented in this encyclopedia is direct. The HOLC redlining maps of the 1930s had denied Black families access to federally insured mortgages for decades, preventing them from building the homeownership wealth that white families accumulated. When Black families finally gained access to mortgage credit in the 1990s and 2000s, the financial industry responded by targeting them with the most predatory products available. The same communities that had been excluded from wealth-building were now being targeted for wealth extraction.",
      "The Wells Fargo settlement required the bank to provide $50 million in direct down payment assistance to communities significantly impacted by the housing crisis and discrimination. This is the documented pattern of accountability in American history: the harm is systematic and affects hundreds of thousands of people over decades; the remedy is a one-time payment that does not come close to restoring what was taken. The $175 million settlement divided among 34,000 affected borrowers averages approximately $5,150 per family — a fraction of the wealth destroyed.",
    ],
    pullQuote: {
      text: "A 'racial surtax' charged to minority homeowners for the same loan products that white homeowners received at lower rates.",
      attribution: "Thomas E. Perez, Assistant Attorney General for the Civil Rights Division, DOJ press release (July 12, 2012)"
    },
    keyDocuments: [
      "United States v. Wells Fargo Bank, N.A., DOJ Settlement Agreement (July 12, 2012)",
      "Federal Reserve, Survey of Consumer Finances (2007, 2010)",
      "Rothstein, Richard. The Color of Law. Liveright (2017)"
    ],
    didYouKnow: "The Wells Fargo $175 million fair lending settlement was the second-largest in DOJ history at the time. The first was a $335 million settlement with Countrywide Financial Corporation for similar predatory lending practices targeting Black and Hispanic borrowers. Both settlements were reached after the damage had already been done — after the 2008 financial crisis had wiped out 53% of Black household wealth."
  },

  "dyer-antilynching-bill": {
    slug: "dyer-antilynching-bill",
    fullText: [
      "On January 26, 1922, the U.S. House of Representatives passed the Dyer Anti-Lynching Bill by a vote of 230 to 119. The bill, introduced by Republican Congressman Leonidas Dyer of Missouri, would have made lynching a federal crime punishable by up to five years in prison and a $5,000 fine. It was the first federal anti-lynching bill to pass either chamber of Congress. It would not be the last time such a bill passed the House. It would also not be the last time such a bill died in the Senate.",
      "The Senate killed the Dyer Bill through filibuster. Southern Democratic senators — the same senators who represented the states where the overwhelming majority of lynchings occurred — talked the bill to death. They argued that lynching was a state matter and that federal intervention would violate states' rights. This was the same states' rights argument that had been used to resist federal enforcement of Worcester v. Georgia in 1832, to resist Reconstruction in 1865, and to resist the Civil Rights Act in 1964. The argument was consistent. Its purpose was consistent. Its result was consistent.",
      "The Equal Justice Initiative has documented 4,084 racial terror lynchings in the American South between 1877 and 1950. Georgia had the second-highest number of any state — 589 documented lynchings. These were not secret crimes. They were public spectacles. They were advertised in newspapers. Families brought children. Photographs were taken and sold as postcards. The federal government knew. Congress knew. The Senate chose not to act.",
      "Between 1882 and 1968, Congress introduced more than 200 anti-lynching bills. Three passed the House. None passed the Senate. The United States did not pass a federal anti-lynching law until March 29, 2022 — when President Biden signed the Emmett Till Antilynching Act into law. That is 101 years after the Dyer Bill passed the House. It is 140 years after the first anti-lynching bill was introduced in Congress. The enforcement gap between legal rights and actual power is not a metaphor in this history. It is a documented, measurable, 140-year gap.",
      "The Dyer Bill's failure is the most direct proof of the federal enforcement gap documented throughout this encyclopedia. The federal government had the legal mechanism to stop racial terror. Congress had the votes in the House. The Senate chose not to use that mechanism. This is not ignorance. It is not oversight. It is a documented choice, made repeatedly, over 140 years, by the same institution that had the power to stop the killing and chose not to.",
    ],
    pullQuote: {
      text: "Between 1882 and 1968, Congress introduced more than 200 anti-lynching bills. Three passed the House. None passed the Senate.",
      attribution: "NAACP Legislative History of Federal Anti-Lynching Legislation"
    },
    keyDocuments: [
      "Dyer Anti-Lynching Bill, H.R. 13 (67th Congress, 1922), Congressional Record",
      "Equal Justice Initiative, Lynching in America: Confronting the Legacy of Racial Terror (2017)",
      "Emmett Till Antilynching Act, Pub. L. 117-107 (March 29, 2022)"
    ],
    didYouKnow: "Georgia had the second-highest number of documented racial terror lynchings of any state — 589 between 1877 and 1950, according to the Equal Justice Initiative. The federal government did not pass a law making lynching a federal crime until 2022 — 140 years after the first anti-lynching bill was introduced in Congress."
  },

  "moynihan-report": {
    slug: "moynihan-report",
    fullText: [
      "In March 1965, Daniel Patrick Moynihan — then Assistant Secretary of Labor under President Lyndon B. Johnson — submitted a confidential report to the White House titled 'The Negro Family: The Case for National Action.' The report argued that the Black family was in a state of 'crisis' and that the 'tangle of pathology' within Black communities — including high rates of single-parent households, welfare dependency, and crime — was the primary obstacle to Black advancement. The report became public in July 1965 and immediately became one of the most controversial documents in American history.",
      "The Moynihan Report's central argument was that the legacy of slavery had created a 'matriarchal' family structure in Black communities that was 'out of line with the rest of American society' and was perpetuating poverty. Moynihan argued that the solution was not more civil rights legislation but rather policies that would strengthen the Black family — specifically, policies that would increase Black male employment and restore the 'normal' two-parent family structure.",
      "The report's critics — including civil rights leaders, Black scholars, and feminist scholars — identified its fundamental flaw: it blamed the victim. The 'tangle of pathology' that Moynihan identified was not the cause of Black poverty. It was the consequence of documented policies: the man-in-the-house rules that structurally excluded Black fathers from families by threatening welfare benefits, the redlining that denied Black families homeownership, the convict leasing and mass incarceration that removed Black men from communities, and the wage discrimination that made it impossible for Black men to support families on a single income.",
      "The specific policy consequences of the Moynihan Report were devastating. The report provided intellectual cover for welfare reform policies that cut benefits to families with absent fathers — policies that punished single mothers for the structural conditions that had created single-parent households. It shifted the national conversation from systemic racism to Black family structure, from what the government had done to what Black people were doing wrong. This shift in framing — from structural analysis to cultural pathology — is documented as one of the most consequential rhetorical moves in the history of American social policy.",
      "The Moynihan Report's legacy is still visible in contemporary policy debates. The argument that Black poverty is primarily caused by 'broken families' rather than by documented policies of exclusion and extraction continues to circulate in American political discourse. The report is a Tier 1 primary source — it is a real document with real policy consequences — but its analytical framework is a Tier 2 scholarly debate. The evidence documented in this encyclopedia supports the critics: the 'tangle of pathology' was created by specific, documented policies, not by cultural failure.",
    ],
    pullQuote: {
      text: "At the heart of the deterioration of the fabric of Negro society is the deterioration of the Negro family. It is the fundamental source of the weakness of the Negro community at the present time.",
      attribution: "Daniel Patrick Moynihan, The Negro Family: The Case for National Action (1965)"
    },
    keyDocuments: [
      "Moynihan, Daniel Patrick. The Negro Family: The Case for National Action. U.S. Department of Labor (1965)",
      "King v. Smith, 392 U.S. 309 (1968) — ruling that 'man-in-the-house' rules violated federal law",
      "Rainwater, Lee and William L. Yancey. The Moynihan Report and the Politics of Controversy. MIT Press (1967)"
    ],
    didYouKnow: "The 'man-in-the-house' rules that Moynihan's report identified as a consequence of Black family breakdown were actually created by government policy: welfare regulations that cut benefits to any family where an able-bodied man was present. The King v. Smith Supreme Court ruling (1968) found these rules violated federal law — proving that the 'broken family' was in part a product of the welfare system itself."
  },

  "george-floyd-justice-act": {
    slug: "george-floyd-justice-act",
    fullText: [
      "On May 25, 2020, George Floyd — a 46-year-old Black man — died in Minneapolis, Minnesota, after a police officer knelt on his neck for 9 minutes and 29 seconds while he was handcuffed and face-down on the ground. His death was recorded on video and viewed by hundreds of millions of people worldwide. The protests that followed were the largest in American history — an estimated 15 to 26 million people participated in demonstrations across all 50 states and in countries around the world.",
      "On March 3, 2021, the U.S. House of Representatives passed the George Floyd Justice in Policing Act by a vote of 220 to 212. The bill would have banned chokeholds and no-knock warrants at the federal level, required police to use body cameras, created a national registry of police misconduct, and — most significantly — eliminated qualified immunity for police officers, making it easier to hold officers legally accountable for civil rights violations. It was the most comprehensive federal police reform legislation in American history.",
      "The Senate killed the bill. Negotiations between Democratic Senator Cory Booker and Republican Senator Tim Scott collapsed in September 2021. The primary sticking point was qualified immunity — the legal doctrine that shields police officers from civil lawsuits unless their conduct violates 'clearly established' law. Republican senators refused to eliminate it. The bill died without a vote in the Senate.",
      "The pattern is documented and precise. The Dyer Anti-Lynching Bill (1922): passed the House, killed by Senate filibuster. The Civil Rights Act (1957, 1960): passed with significant weakening amendments after Senate filibuster. The Voting Rights Act (1965): passed but gutted by Shelby County v. Holder (2013). The George Floyd Justice in Policing Act (2021): passed the House, died in the Senate. The enforcement gap between legal rights and actual power is not a historical artifact. It is the present-day operating condition of the American political system.",
      "The specific connection to the history documented in this encyclopedia is the doctrine of qualified immunity itself. Qualified immunity was created by the Supreme Court in 1967 — not by Congress, not by the Constitution, but by judicial interpretation. It has been expanded by subsequent rulings to the point where officers can violate clearly established constitutional rights and face no civil liability as long as the specific conduct has not been previously ruled unconstitutional in a nearly identical case. It is the legal mechanism that makes the enforcement gap permanent — a doctrine that protects state violence from accountability.",
    ],
    pullQuote: {
      text: "I can't breathe.",
      attribution: "George Floyd, May 25, 2020 — documented in Minneapolis Police Department body camera footage"
    },
    keyDocuments: [
      "George Floyd Justice in Policing Act, H.R. 1280 (117th Congress, 2021), Congressional Record",
      "Pearson v. Callahan, 555 U.S. 223 (2009) — expanding qualified immunity doctrine",
      "Minneapolis Police Department body camera footage, Hennepin County District Court (2021)"
    ],
    didYouKnow: "Qualified immunity — the legal doctrine that shields police officers from civil lawsuits — was not created by Congress or the Constitution. It was created by the Supreme Court in 1967 and has been expanded by subsequent rulings. It is not mentioned anywhere in the Civil Rights Act of 1871, the law it is supposed to interpret."
  },

  "living-legacy": {
    slug: "living-legacy",
    fullText: [
      "On July 9, 2020, the U.S. Supreme Court issued its ruling in McGirt v. Oklahoma. Justice Neil Gorsuch, writing for the 5-4 majority, opened with these words: 'On the far end of the Trail of Tears was a promise.' The Muscogee (Creek) Nation had been promised, by treaty, that their new territory in Oklahoma would be theirs 'as long as grass grows or water runs.' The Court ruled that this promise had never been legally broken — that the Muscogee (Creek) Nation's reservation, established after their forced removal from Georgia in the 1830s, had never been formally disestablished by Congress. Nearly half of Oklahoma, including most of Tulsa, remains 'Indian Country' under federal law.",
      "The McGirt ruling is the most significant legal victory for Indigenous sovereignty since Worcester v. Georgia (1832) — and unlike Worcester, it was enforced. The Creek Nation whose ancestors built the Etowah Mounds in Cartersville, Georgia, whose land was seized through the fraudulent Treaty of Indian Springs (1825), whose people were marched to Oklahoma on the Trail of Tears, had their sovereignty recognized by the Supreme Court 188 years after Jackson refused to enforce Marshall's ruling.",
      "The Land Back movement is the organized effort to return Indigenous land to Indigenous peoples. Since 2020, significant acreage has been returned across the United States. The Esselen Tribe of Monterey County received 1,199 acres of ancestral land in California in 2020. The Kashia Band of Pomo Indians received 688 acres in 2021. The NDN Collective's Land Back campaign has documented dozens of returns. These are not symbolic gestures — they are documented transfers of legal title from non-Indigenous owners to Indigenous nations.",
      "The Cherokee Freedmen citizenship battle is the most direct living connection between the Dawes Rolls and the present day. In 2007, the Cherokee Nation amended its constitution to strip citizenship from the descendants of Cherokee Freedmen — the formerly enslaved people who had been enrolled on the Freedmen roll rather than the Citizens by Blood roll. A U.S. District Court ruled in 2017 that this violated the 1866 treaty between the Cherokee Nation and the United States, which had guaranteed citizenship to Freedmen and their descendants. The battle over who counts as Cherokee — a battle that began with the Dawes Commission in 1898 — is still being fought in federal courts.",
      "NAGPRA — the Native American Graves Protection and Repatriation Act (1990) — requires federal agencies and institutions that receive federal funding to return Native American cultural items and human remains to lineal descendants and culturally affiliated tribes. Since its passage, NAGPRA has facilitated the repatriation of over 1.8 million cultural items and the remains of more than 60,000 individuals. The Smithsonian's National Museum of Natural History alone has repatriated the remains of over 6,900 ancestors. The history documented in this encyclopedia is not over. The legal battles, the identity reclamation movements, and the struggle for economic justice are ongoing — and they are winning.",
    ],
    pullQuote: {
      text: "On the far end of the Trail of Tears was a promise.",
      attribution: "Justice Neil Gorsuch, McGirt v. Oklahoma, 591 U.S. ___ (2020)"
    },
    keyDocuments: [
      "McGirt v. Oklahoma, 591 U.S. ___ (2020), U.S. Supreme Court",
      "Native American Graves Protection and Repatriation Act (NAGPRA), 25 U.S.C. § 3001 (1990)",
      "Cherokee Nation v. Nash, 267 F. Supp. 3d 86 (D.D.C. 2017) — Cherokee Freedmen citizenship ruling"
    ],
    didYouKnow: "The McGirt v. Oklahoma ruling (2020) recognized that nearly half of Oklahoma — including most of Tulsa — remains 'Indian Country' under federal law. The Muscogee (Creek) Nation's reservation, established after their forced removal from Georgia in the 1830s, was never legally dissolved. The Creek who built the Etowah Mounds in Cartersville, Georgia still have a sovereign nation. It is in Oklahoma."
  },

};
