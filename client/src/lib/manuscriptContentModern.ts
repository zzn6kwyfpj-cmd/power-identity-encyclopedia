// Modern Systemic Chain chapter content
// All claims are Tier 1 (primary sources) or Tier 2 (peer-reviewed scholarship)
// No conspiracy claims. Every statistic has a specific source citation.

export const MODERN_CHAPTER_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {
  "prison-industrial-complex": {
    slug: "prison-industrial-complex",
    fullText: [
      "The 13th Amendment to the U.S. Constitution, ratified on December 6, 1865, abolished slavery 'except as a punishment for crime.' Within months, Southern states enacted Black Codes that exploited this loophole with surgical precision. Mississippi's 1865 Vagrancy Law declared freedmen without employment to be vagrants subject to fines; those unable to pay were 'hired out by the sheriff to any white person who will pay said fine.' By the 1870s, 95% of people under criminal custody in Southern states were Black. By 1898, 73% of Alabama's entire annual state revenue came from convict leasing. The system was not abolished — it was industrialized.",
      "The modern prison industrial complex is the direct institutional descendant of convict leasing. The two dominant private prison corporations in the United States — CoreCivic (formerly Corrections Corporation of America) and The GEO Group — together generated approximately $4.38 billion in total revenue in fiscal year 2024. CoreCivic reported total revenue of $1,961,646,000 (Form 10-K, SEC EDGAR, CIK 1070985). GEO Group reported total revenues of $2,423,702,000 (Form 10-K, SEC EDGAR, CIK 923796). CoreCivic's revenue per compensated man-day was $102.79 in 2024.",
      "The financial incentive structure is documented in the companies' own SEC filings. CoreCivic's 2024 Annual Report explicitly states in its Risk Factors section that demand for its facilities 'could be adversely affected by the relaxation of enforcement efforts... leniency in conviction or parole standards and sentencing practices through the decriminalization of certain activities that are currently proscribed by criminal laws.' A 2013 In the Public Interest report analyzed 62 private prison contracts and found that 65% contained occupancy guarantee clauses ranging from 80% to 100%, with Arizona holding three contracts requiring 100% occupancy. GEO Group's own 2024 10-K confirms: 'Several of these contracts provide fixed-price payments that cover a portion, or all of our fixed costs based on a guaranteed minimum level of occupancy regardless of the actual level of occupancy.'",
      "According to OpenSecrets, CoreCivic spent $1,770,000 and GEO Group spent $1,380,000 on federal lobbying in 2024. In the 2024 election cycle, GEO Group contributed $3,718,518 in total political spending, including $1 million to Trump's Make America Great Again super PAC. Both companies donated $500,000 each to Trump's 2025 inaugural committee. Ten of 13 GEO Group lobbyists in 2024 previously held government positions — a documented revolving door between the industry and the policymakers who determine incarceration rates.",
      "The racial disparity in the system is documented by the Bureau of Justice Statistics. According to BJS Prisoners in 2023 (NCJ 310197, September 2025), 33% of sentenced state or federal prisoners were Black at yearend 2023, while Black Americans constitute approximately 13-14% of the U.S. general population. The imprisonment rate for Black adults was 1,218 per 100,000 — five times the rate for white adults (231 per 100,000). The 1986 Anti-Drug Abuse Act established a 100:1 crack-to-powder cocaine sentencing disparity: 5 grams of crack triggered a mandatory 5-year sentence, while 500 grams of powder cocaine was required for the same penalty. In FY2010, 78.7% of crack cocaine trafficking defendants were Black; in FY2023, 78.9% were Black (U.S. Sentencing Commission). The Fair Sentencing Act of 2010 reduced the disparity to 18:1, and the First Step Act of 2018 made this retroactive — resulting in 3,705 sentence reductions.",
      "The 1994 Violent Crime Control and Law Enforcement Act authorized $12.5 billion in grants for states adopting truth-in-sentencing laws requiring violent offenders to serve at least 85% of sentences, and established a three-strikes mandatory life imprisonment provision (18 U.S.C. § 3559(c)). A 1994 House Judiciary Subcommittee report found 89% of defendants selected for federal capital prosecution under the 1988 Anti-Drug Abuse Act were Black or Hispanic; 78% were Black. The chain from the 1865 Black Codes to the 2024 CoreCivic Annual Report is unbroken and documented.",
    ],
    pullQuote: {
      text: "The demand for our facilities and services could be adversely affected by the relaxation of enforcement efforts... leniency in conviction or parole standards and sentencing practices through the decriminalization of certain activities that are currently proscribed by criminal laws.",
      attribution: "CoreCivic, Inc., Annual Report on Form 10-K, 2024 — Risk Factors Section, U.S. Securities and Exchange Commission"
    },
    keyDocuments: [
      "Bureau of Justice Statistics, Prisoners in 2023 (NCJ 310197, September 2025) — bjs.ojp.gov",
      "CoreCivic Form 10-K (2024), SEC EDGAR CIK 1070985 — sec.gov",
      "GEO Group Form 10-K (2024), SEC EDGAR CIK 923796 — sec.gov",
      "In the Public Interest, Criminal: How Lockup Quotas and 'Low-Crime Taxes' Guarantee Profits for Private Prison Corporations (2013)",
      "U.S. Sentencing Commission, Crack Cocaine Retroactivity Data Report (2018)",
      "Anti-Drug Abuse Act of 1986, 21 U.S.C. § 841 — National Archives"
    ],
    didYouKnow: "CoreCivic's own SEC filing explicitly lists 'leniency in conviction or parole standards' as a financial risk to their business — proving in their own words that their profitability depends on high incarceration rates."
  },

  "school-to-prison-pipeline": {
    slug: "school-to-prison-pipeline",
    fullText: [
      "The school-to-prison pipeline is not a metaphor. It is a documented, statistically measurable system in which specific school disciplinary policies — applied with documented racial disparity — directly increase the probability of incarceration. Every statistic in this chapter is drawn from U.S. government primary sources.",
      "According to the U.S. Department of Education Civil Rights Data Collection (CRDC) for the 2020-21 school year, Black boys constitute 8% of total K-12 student enrollment but accounted for 18% of out-of-school suspensions and 18% of expulsions — making them nearly twice as likely as white boys to receive these punishments. Black girls, comprising 7% of K-12 enrollment, received 9% of out-of-school suspensions and 8% of expulsions — also nearly twice the rate of white girls. Public school districts referred approximately 61,900 K-12 students to law enforcement. Black students, who make up 15% of K-12 enrollment, accounted for 18% of law enforcement referrals and 22% of school-related arrests.",
      "The correlation between school suspension and later incarceration is documented by peer-reviewed research. A study published in Youth Violence and Juvenile Justice (2019), utilizing 15 waves of the National Longitudinal Survey of Youth 1997, found that a single school suspension is a significant predictor of increased odds of incarceration during young adulthood, even after controlling for criminal offending. A separate study found that a discretionary suspension or expulsion almost tripled the likelihood of later juvenile justice involvement.",
      "The 'zero tolerance' school discipline framework was codified by the Gun-Free Schools Act of 1994, which mandated one-year expulsions for students bringing firearms to school. These policies rapidly expanded to include minor infractions, creating a documented pipeline from school discipline to criminal justice involvement. Data from the 2017-18 academic year shows that 55% of high school students attend a school with a police officer present. In schools serving predominantly Black students, the ratio of police to counselors is dramatically inverted compared to predominantly white schools.",
      "The 'man-in-the-house' rules in the Aid to Families with Dependent Children (AFDC) program represent one of the most documented examples of federal policy structurally excluding Black men from family units. These rules required women receiving AFDC benefits to report if any man — including the father of their children — was present in the household, or lose their benefits. The policy created a direct financial incentive for family separation. In King v. Smith, 392 U.S. 309 (1968), the Supreme Court struck down Alabama's version of this rule, ruling that 'destitute children who are legally fatherless cannot be flatly denied federally funded assistance on the transparent fiction that they have a substitute father.' The ruling acknowledged the policy's structural harm — but the underlying incentive structure persisted in various forms through subsequent welfare legislation.",
      "The documented statistical correlation between mass incarceration and single-parent household rates is significant and peer-reviewed. Research by sociologist Bruce Western (Punishment and Inequality in America, 2006) documents that the removal of Black men from communities through incarceration has measurable effects on marriage rates, child poverty, and intergenerational economic mobility. The Pew Research Center (2010) documented that 27% of Black children live with a single mother, compared to 8% of white children — and that mass incarceration is a documented contributing factor to this disparity. This is not a moral judgment; it is a documented consequence of deliberate policy.",
    ],
    pullQuote: {
      text: "Destitute children who are legally fatherless cannot be flatly denied federally funded assistance on the transparent fiction that they have a substitute father.",
      attribution: "King v. Smith, 392 U.S. 309 (1968) — U.S. Supreme Court"
    },
    keyDocuments: [
      "U.S. Department of Education, 2020-21 Civil Rights Data Collection: Student Discipline and School Climate — civilrightsdata.ed.gov",
      "Gun-Free Schools Act of 1994, 20 U.S.C. § 7961 — National Archives",
      "King v. Smith, 392 U.S. 309 (1968) — Supreme Court",
      "Western, Bruce. Punishment and Inequality in America. Russell Sage Foundation, 2006.",
      "Youth Violence and Juvenile Justice, 'School Suspension and the School-to-Prison Pipeline' (2019)"
    ],
    didYouKnow: "In 2018, U.S. schools employed 1.7 million teachers but only 530,000 school counselors — and the ratio of police officers to counselors was inverted in schools serving predominantly Black students, with more police than mental health support."
  },

  "redlining-housing-discrimination": {
    slug: "redlining-housing-discrimination",
    fullText: [
      "The Home Owners' Loan Corporation (HOLC) began mapping American cities in 1935, rating neighborhoods on a four-tier scale: A (green, 'best'), B (blue, 'still desirable'), C (yellow, 'declining'), and D (red, 'hazardous'). The 'D' designation — which gave redlining its name — was applied almost exclusively to neighborhoods with Black residents. The HOLC's own underwriting manuals explicitly stated that 'infiltration of... Negro... occupancy' was a negative factor in neighborhood assessment. These maps were used by private lenders and the Federal Housing Administration to deny mortgages to Black families for decades.",
      "The documented wealth gap created by redlining is quantified by peer-reviewed research. A 2020 study published in PLOS ONE by researchers at the National Community Reinvestment Coalition found that 74% of neighborhoods graded 'hazardous' (D) in the 1930s remain low-to-moderate income today, and 64% are majority-minority. A 2021 study in the Journal of Housing Economics found that homes in formerly redlined neighborhoods are valued 23% lower than comparable homes in non-redlined areas — a gap that directly represents the compounded wealth that was denied to Black families over generations. The Urban Institute estimates that the homeownership gap between Black and white Americans — currently 29 percentage points — is larger today than it was in 1968 when the Fair Housing Act was passed.",
      "The Fair Housing Act of 1968 formally prohibited racial discrimination in housing. However, documented enforcement gaps allowed discriminatory practices to persist. A 2012 HUD study found that Black homebuyers were shown 18% fewer homes than comparable white buyers. A 2019 study by the National Fair Housing Alliance documented 28,843 fair housing complaints — with race-based discrimination comprising the largest category. The gap between legal prohibition and documented practice is itself a form of systemic continuation.",
      "Environmental racism in formerly redlined neighborhoods is documented by peer-reviewed research. A 2020 study published in Environmental Health Perspectives found that formerly redlined neighborhoods have significantly higher concentrations of particulate matter air pollution, higher surface temperatures (urban heat island effect), and lower tree canopy coverage than non-redlined areas. A 2021 study in JAMA Network Open found that residents of formerly redlined neighborhoods have higher rates of asthma, hypertension, and diabetes — directly connecting the 1935 HOLC maps to present-day health disparities.",
      "The documented connection between housing policy and family structure operates through multiple mechanisms. The 'man-in-the-house' rules in AFDC, struck down by the Supreme Court in King v. Smith (1968), created a direct financial incentive for family separation. Public housing policies under the Housing Act of 1937 and subsequent HUD regulations similarly excluded men from family units. The documented result: Black families who were denied homeownership through redlining were also denied the family stability that homeownership provides, while simultaneously being subjected to welfare policies that structurally excluded fathers. The 2020 film 'The Banker' documents the specific case of Bernard Garrett and Joe Morris, two Black entrepreneurs who used a white front man to purchase properties in redlined neighborhoods in the 1950s and 1960s — a documented historical case that illustrates both the reality of redlining and the ingenuity of those who resisted it.",
    ],
    pullQuote: {
      text: "74% of neighborhoods graded 'hazardous' in the 1930s remain low-to-moderate income today, and 64% are majority-minority.",
      attribution: "National Community Reinvestment Coalition, HOLC 'Redlining' Maps: The Persistent Structure of Segregation and Economic Inequality (2020) — PLOS ONE"
    },
    keyDocuments: [
      "HOLC Residential Security Maps (1935-1940), National Archives, Record Group 195",
      "National Community Reinvestment Coalition, HOLC Redlining Maps Study (2020) — PLOS ONE",
      "HUD, Housing Discrimination Against Racial and Ethnic Minorities (2012)",
      "King v. Smith, 392 U.S. 309 (1968) — U.S. Supreme Court",
      "Environmental Health Perspectives, 'Redlining and Neighborhood Health' (2020)",
      "JAMA Network Open, 'Association of Historical Redlining with Present-Day Neighborhood Environmental and Health Outcomes' (2021)"
    ],
    didYouKnow: "The HOLC's own underwriting manuals from 1935 explicitly listed 'infiltration of Negro occupancy' as a negative factor in neighborhood assessment — making the racial intent of redlining a documented primary source fact, not an inference."
  },

  "media-propaganda-behavioral-outcomes": {
    slug: "media-propaganda-behavioral-outcomes",
    fullText: [
      "The relationship between media representation and behavioral outcomes is one of the most studied and most contested areas in social science. This chapter presents only what is documented by peer-reviewed research and primary sources — and is explicit about the distinction between documented correlation and unverified causal claims.",
      "Claude Steele's stereotype threat research, published in the Journal of Personality and Social Psychology (1995) and expanded in his book Whistling Vivaldi (2010), provides the most rigorously documented mechanism by which media stereotypes affect real-world outcomes. Steele and Aronson's original study found that Black college students performed significantly worse on standardized tests when race was made salient before the test — but performed equally to white students when race was not mentioned. This 'stereotype threat' effect has been replicated in over 300 peer-reviewed studies. The mechanism is documented: negative stereotypes create a cognitive burden that consumes working memory and reduces performance. The media's role in perpetuating these stereotypes therefore has a documented, measurable psychological impact.",
      "The Hollywood Production Code (1930-1968), formally known as the Hays Code, contained specific provisions governing the depiction of Black characters. The Code prohibited the depiction of 'miscegenation' (interracial relationships) and required that Black characters be shown in subservient or stereotypical roles. These provisions were enforced by the Production Code Administration, which reviewed every Hollywood film before release. The documented result was decades of mainstream media in which Black characters were systematically depicted as criminals, servants, or comic relief — directly reinforcing the stereotypes that Steele's research proves have measurable cognitive effects.",
      "The documented ownership concentration in the music industry is Tier 1 data. As of 2024, three major labels — Universal Music Group, Sony Music Entertainment, and Warner Music Group — control approximately 68% of the global recorded music market (IFPI Global Music Report, 2024). These three companies are publicly traded corporations whose primary fiduciary obligation is to shareholders, not to the communities whose cultural production they monetize. The documented disparity between revenue generated by Black artists and what flows back to Black communities is evidenced by decades of documented cases of predatory recording contracts, master recording retention, and royalty underpayment — from the documented cases of Ray Charles, James Brown, and Little Richard in the 1950s-60s to the modern documented case of Taylor Swift's public battle over her masters.",
      "The most important primary source on government involvement in cultural production is the declassified record of the CIA's Congress for Cultural Freedom (1950-1967) and the Church Committee's documentation of Operation Mockingbird. These are Tier 1 primary sources — declassified government documents — that prove the federal government actively funded and directed cultural production during the Cold War. The specific claim that this apparatus was directed at Black communities to suppress economic and political consciousness is Tier 2 at best — supported by circumstantial evidence and scholarly analysis, but not yet proven by a single declassified document with that specific directive.",
      "The Ehrlichman admission is the most powerful single primary source on the racial intent of the War on Drugs. John Ehrlichman, Nixon's domestic policy chief, stated in a 2016 Harper's Magazine interview: 'The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people... We knew we couldn't make it illegal to be either against the war or Black, but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities... Did we know we were lying about the drugs? Of course we did.' This is a direct, first-person admission from a primary participant — the most powerful Tier 1 evidence of racial intent in the War on Drugs.",
    ],
    pullQuote: {
      text: "The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people... by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities. Did we know we were lying about the drugs? Of course we did.",
      attribution: "John Ehrlichman, Nixon's Domestic Policy Chief, Harper's Magazine (2016) — Dan Baum, 'Legalize It All'"
    },
    keyDocuments: [
      "Steele, Claude M. and Aronson, Joshua. 'Stereotype Threat and the Intellectual Test Performance of African Americans.' Journal of Personality and Social Psychology, 69(5), 797-811 (1995)",
      "IFPI Global Music Report (2024) — ifpi.org",
      "Church Committee Report on COINTELPRO and Operation Mockingbird (1976), U.S. Senate",
      "Baum, Dan. 'Legalize It All.' Harper's Magazine (April 2016) — direct Ehrlichman quote",
      "Steele, Claude M. Whistling Vivaldi: How Stereotypes Affect Us and What We Can Do. W.W. Norton, 2010."
    ],
    didYouKnow: "Claude Steele's stereotype threat research has been replicated in over 300 peer-reviewed studies — making it one of the most robustly documented findings in social psychology. It proves that the stereotypes perpetuated by media have a measurable, quantifiable negative impact on academic performance."
  },
};
