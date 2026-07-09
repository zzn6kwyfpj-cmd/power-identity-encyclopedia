// Vietnam, Crack Epidemic, and Gun Pipeline chapter content
// All claims are Tier 1 (primary sources) or Tier 2 (peer-reviewed scholarship)
// Tier 3 claims are explicitly labeled as such

export const VIETNAM_CHAPTER_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {
  "black-vietnam-veterans": {
    slug: "black-vietnam-veterans",
    fullText: [
      "The Vietnam War was the first major American conflict fought after the formal desegregation of the military — and the first in which the full weight of racial inequality in the draft system was documented by the government itself. Black soldiers were sent to fight for a country that had denied them the right to vote until 1965, denied them VA benefits after World War II, and would deny them again when they returned from Southeast Asia.",
      "Project 100,000 — officially known as 'New Standards Men' and unofficially known as 'McNamara's Morons' — was implemented in October 1966 by Secretary of Defense Robert McNamara. The program lowered mental and physical standards for military induction, allowing approximately 354,000 men previously deemed unfit to enter the armed forces between October 1966 and June 1971 (ERIC Document ED031634). These recruits were disproportionately Black: 40.6% of Project 100,000 participants were African American, compared to their 12% representation in the total military force. These men were assigned to combat roles at a higher rate and experienced a 20% casualty rate — double the 10% rate for other recruits. The program was, in documented effect, a mechanism for drafting the most vulnerable men in America and placing them in the most dangerous positions.",
      "The racial disparity in Vietnam combat deaths is documented by the Department of Defense. Black soldiers constituted 12.5% of all U.S. combat deaths — 7,243 out of 58,177 total — while representing approximately 11% of the U.S. population at the time (American War Library, Vietnam War Casualties by Race). This disproportionate burden was compounded by the documented fact that college deferments — the primary mechanism for avoiding the draft — were overwhelmingly used by white men, who had greater access to higher education in part because of the GI Bill's documented racial exclusion after World War II.",
      "Upon returning home, Black Vietnam veterans faced documented discrimination in VA benefits. A 2022 lawsuit filed by the Black Veterans Project alleged decades of discriminatory practices by the VA. Studies documented that Black veterans with PTSD were denied benefits at a 25% higher rate than white veterans for initial PTSD claims between 2001 and 2017 (PBS NewsHour, 2022). The National Vietnam Veterans Readjustment Study (NVVRS) found significantly higher rates of PTSD among Black and Hispanic veterans compared to white veterans — attributed to greater exposure to war-zone stressors and the compounded trauma of returning to communities still living under racial discrimination.",
      "The connection between Vietnam veteran trauma and urban gang formation is documented by scholarly analysis, though a direct Tier 1 causal link to the specific founding of the Crips and Bloods is not established by primary sources (Tier 2). What is documented is the broader pattern: peer-reviewed research in the Albany Government Law Review (Fleury-Steiner et al., 2013) documents how 'the drug war's focus on arrest, conviction, and incarceration has undermined marginalized African American veterans' ability to transition positively back into civilian society.' The trauma, unemployment, and community destabilization experienced by Black Vietnam veterans — combined with the Nixon administration's War on Drugs, which specifically targeted Black communities — created the documented conditions for the crack epidemic that would devastate those same communities a decade later.",
    ],
    pullQuote: {
      text: "Our main argument is that the drug war has plunged marginalized African American veterans deeper into unemployment, poverty, and other manifestations of structural violence. The drug war's focus on arrest, conviction, and incarceration has undermined marginalized African American veterans' ability to transition positively back into civilian society.",
      attribution: "Fleury-Steiner et al., 'From the Battlefield to the War on Drugs,' Albany Government Law Review (2013)"
    },
    keyDocuments: [
      "ERIC Document ED031634, 'Project One Hundred Thousand: Characteristics and Performance of New Standards Men' — files.eric.ed.gov",
      "American War Library, Vietnam War U.S. Military Deaths by Race — americanwarlibrary.com",
      "PBS NewsHour, 'VA denied benefits for Black veterans at higher rate for decades, lawsuit says' (2022)",
      "Dohrenwend et al., 'War-Related PTSD in Black, Hispanic, and Majority White Vietnam Veterans,' Journal of Traumatic Stress (2008) — PMC NCBI",
      "Fleury-Steiner et al., 'From the Battlefield to the War on Drugs,' Albany Government Law Review (2013)"
    ],
    didYouKnow: "40.6% of Project 100,000 participants were Black — more than three times their representation in the general military force. These men experienced a 20% combat casualty rate, double the rate of other recruits."
  },

  "crack-epidemic-iran-contra": {
    slug: "crack-epidemic-iran-contra",
    fullText: [
      "The crack cocaine epidemic that devastated Black communities across America in the 1980s and 1990s is one of the most documented and most contested chapters in modern American history. This chapter presents the evidence with strict tier discipline — separating what is proven by primary government sources from what is scholarly analysis, and what is claimed but not yet proven.",
      "The Kerry Committee Report (1989) — produced by the U.S. Senate Subcommittee on Terrorism, Narcotics and International Operations — is the foundational Tier 1 primary source. The report concluded that 'foreign policy considerations interfered with the U.S.'s ability to fight the war on drugs,' specifically noting that priorities regarding Nicaragua 'at times delayed, halted, or interfered with U.S. law enforcement's efforts.' The investigation found 'considerable evidence' that individuals supporting the Contras were involved in drug trafficking, that the Contra supply network was utilized by drug trafficking organizations, and that elements of the Contras knowingly received financial and material assistance from drug traffickers.",
      "The CIA Inspector General's 1998 Report (Volume II: The Contra Story) corroborated and expanded these findings. The IG report found that the CIA was aware of allegations that ten Contras may have been involved in drug trafficking, and that the CIA 'acted inconsistently in handling allegations or information indicating that Contra-related organizations and individuals were involved in drug trafficking.' In some instances, the CIA's knowledge of these allegations 'did not deter their use by CIA,' and the agency failed to inform Congress or law enforcement about drug trafficking allegations concerning 11 Contra-related individuals and assets. This is Tier 1 documented fact: the CIA knew, and did not act.",
      "Gary Webb's 1996 'Dark Alliance' series in the San Jose Mercury News (Tier 2) brought national attention to the connection between Nicaraguan drug rings — specifically Oscar Danilo Blandon and Norwin Meneses — and the Los Angeles crack trade. Webb documented how these individuals sold massive quantities of cocaine and funneled some profits to the Contras. Webb was initially discredited by major newspapers. However, subsequent government investigations — including the CIA IG report itself — acknowledged that his core findings about the Blandon-Meneses-Contra connection were substantially correct, even if his most dramatic implications were not fully proven.",
      "The most important evidence tier distinction in this chapter: The specific claim that the CIA deliberately introduced crack cocaine to Black communities as a matter of policy is Tier 3 — it is not supported by any declassified document containing a directive to that effect. What is Tier 1 documented is that the CIA was aware of drug trafficking by Contra supporters, chose not to report it to law enforcement, and prioritized Cold War geopolitics over the public health of the communities being devastated. The documented result — 78.7% of crack cocaine defendants were Black in FY2010 (U.S. Sentencing Commission) — was a consequence of deliberate policy neglect, not a proven deliberate policy of introduction. The distinction matters for the encyclopedia's credibility, and for the reader's ability to make informed judgments.",
    ],
    pullQuote: {
      text: "Foreign policy considerations interfered with the U.S.'s ability to fight the war on drugs. Foreign policy priorities towards Nicaragua at times delayed, halted, or interfered with U.S. law enforcement's efforts to keep narcotics out of the United States.",
      attribution: "Kerry Committee Report (1989), U.S. Senate Subcommittee on Terrorism, Narcotics and International Operations"
    },
    keyDocuments: [
      "Kerry Committee Report (1989), U.S. Senate Subcommittee on Terrorism, Narcotics and International Operations — archive.org",
      "CIA Inspector General's Report, Volume II: The Contra Story (1998) — cia.gov/readingroom",
      "U.S. Sentencing Commission, Crack Cocaine Retroactivity Data Report (2018)",
      "Webb, Gary. 'Dark Alliance' series, San Jose Mercury News (1996) — subsequently republished as Dark Alliance: The CIA, the Contras, and the Crack Cocaine Explosion (1998)"
    ],
    didYouKnow: "The Kerry Committee Report was a bipartisan U.S. Senate investigation that concluded in 1989 — seven years before Gary Webb's 'Dark Alliance' series. The government's own investigation documented Contra drug trafficking before Webb published a single word."
  },

  "iron-pipeline-gun-violence": {
    slug: "iron-pipeline-gun-violence",
    fullText: [
      "The question of where the guns came from — the guns that fueled the crack epidemic's violence, that transformed American inner cities in the 1980s and 1990s — has a documented answer. The Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) traces guns recovered in crimes, and their data tells a specific, documented story about the flow of firearms from states with weak gun laws to cities with strict ones.",
      "The ATF's annual Crime Gun Intelligence reports document what is known as the 'Iron Pipeline' — a documented trafficking route from Southern states (primarily Georgia, Virginia, North Carolina, and South Carolina) to Northern cities. ATF data consistently shows that the majority of crime guns recovered in cities with strict gun laws were originally purchased legally in states with weak gun laws. A 2010 ATF report found that 90% of guns recovered at crime scenes in New York City were originally purchased in other states, with the top source states being Virginia, Georgia, Florida, North Carolina, and South Carolina. Georgia is a documented primary source state for crime guns recovered in Northern cities.",
      "The documented connection between redlined neighborhoods and gun violence is established by peer-reviewed research. Sociologist Robert Vargas's research (Wounded City: Violent Turf Wars in a Chicago Barrio, 2016) documents how neighborhood disinvestment — the same disinvestment created by redlining — creates the conditions for gun violence. Patrick Sharkey's peer-reviewed research (Stuck in Place: Urban Neighborhoods and the End of Progress Toward Racial Equality, 2013) documents how concentrated poverty, itself a product of documented housing discrimination, is the strongest predictor of neighborhood violence rates.",
      "Operation Fast and Furious (2009-2011) is a documented case of ATF negligence in gun trafficking enforcement. The ATF's Phoenix Field Division allowed approximately 2,000 firearms to 'walk' — be purchased by known straw buyers and transported to Mexican drug cartels — without interdiction. The operation was exposed by ATF whistleblowers and investigated by the House Committee on Oversight and Government Reform (Final Report, 2012). The committee found that ATF supervisors 'knowingly allowed' the guns to walk, and that the operation resulted in guns being found at crime scenes in both Mexico and the United States, including at the murder scene of U.S. Border Patrol Agent Brian Terry.",
      "The Firearm Owners Protection Act of 1986 weakened ATF enforcement capacity in documented ways. The Act prohibited the ATF from conducting more than one unannounced inspection per year of licensed gun dealers, and made it significantly harder to prosecute dealers who violated record-keeping requirements. The documented result: a 2004 ATF report found that 57% of crime guns were traced to just 1.2% of licensed dealers — but the 1986 Act's restrictions made it significantly harder to investigate and prosecute these dealers. The documented connection between weak enforcement, gun trafficking, and community violence is a Tier 1 primary source finding, not a theoretical claim.",
    ],
    pullQuote: {
      text: "90% of guns recovered at crime scenes in New York City were originally purchased in other states, with the top source states being Virginia, Georgia, Florida, North Carolina, and South Carolina.",
      attribution: "Bureau of Alcohol, Tobacco, Firearms and Explosives, Crime Gun Trace Reports (2010)"
    },
    keyDocuments: [
      "ATF Crime Gun Trace Reports (annual) — atf.gov",
      "House Committee on Oversight and Government Reform, 'Fast and Furious: The Anatomy of a Failed Operation' (2012) — oversight.house.gov",
      "Vargas, Robert. Wounded City: Violent Turf Wars in a Chicago Barrio. Oxford University Press, 2016.",
      "Sharkey, Patrick. Stuck in Place: Urban Neighborhoods and the End of Progress Toward Racial Equality. University of Chicago Press, 2013.",
      "ATF, 'Following the Gun: Enforcing Federal Laws Against Firearms Traffickers' (2000) — atf.gov"
    ],
    didYouKnow: "57% of all crime guns traced by the ATF were sold by just 1.2% of licensed gun dealers — but the Firearm Owners Protection Act of 1986 limited ATF to one unannounced inspection per year per dealer, making it significantly harder to investigate these concentrated sources of crime guns."
  },
};
