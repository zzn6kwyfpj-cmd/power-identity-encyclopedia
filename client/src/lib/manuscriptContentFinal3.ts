// Final 3 chapters: Plessy v. Ferguson, Nat Turner Rebellion, Civil Rights Acts
// Sources: Plessy v. Ferguson 163 U.S. 537 (1896), Virginia Code (1831),
// Civil Rights Act 1964, Voting Rights Act 1965

export const FINAL_3_CONTENT: Record<string, {
  slug: string;
  fullText: string[];
  pullQuote?: { text: string; attribution: string };
  keyDocuments?: string[];
  didYouKnow?: string;
}> = {

  "plessy-v-ferguson": {
    slug: "plessy-v-ferguson",
    fullText: [
      "On June 7, 1892, Homer Plessy — a man who was seven-eighths white and one-eighth Black — boarded a whites-only railway car in New Orleans, Louisiana. He was arrested. His arrest was deliberate. Plessy was part of a coordinated legal challenge organized by the Citizens' Committee to Test the Constitutionality of the Separate Car Act — a group of New Orleans Creole citizens who had specifically chosen Plessy because his appearance would make the absurdity of racial classification visible. The case that resulted, Plessy v. Ferguson, would define American law for 58 years.",
      "On May 18, 1896, the U.S. Supreme Court ruled 7-1 in Plessy v. Ferguson that racial segregation was constitutional under the 'separate but equal' doctrine. Justice Henry Billings Brown, writing for the majority, argued that the 14th Amendment 'could not have been intended to abolish distinctions based upon color, or to enforce social, as distinguished from political equality.' The ruling gave constitutional legitimacy to the entire architecture of Jim Crow laws that had been building since Reconstruction's collapse.",
      "Justice John Marshall Harlan wrote the lone dissent — one of the most powerful dissenting opinions in Supreme Court history. 'Our Constitution is color-blind,' Harlan wrote, 'and neither knows nor tolerates classes among citizens.' He predicted with precision what the ruling would produce: 'The present decision, it may well be apprehended, will not only stimulate aggressions, more or less brutal and irritating, upon the admitted rights of colored citizens, but will encourage the belief that it is possible, by means of state enactments, to defeat the beneficent purposes which the people of the United States had in view when they adopted the recent amendments of the Constitution.'",
      "The 'separate but equal' doctrine was a legal fiction from the moment it was written. The facilities provided to Black Americans under Jim Crow were separate. They were never equal. The schools had fewer resources, less experienced teachers, and older textbooks. The hospitals had inferior equipment and undertrained staff. The railway cars were older and less maintained. The legal system knew this. The courts knew this. The doctrine was not a good-faith attempt to provide equality within separation. It was a legal mechanism to maintain racial hierarchy while claiming constitutional compliance.",
      "Plessy v. Ferguson was overturned on May 17, 1954, in Brown v. Board of Education — 58 years after it was decided. Chief Justice Earl Warren, writing for a unanimous Court, ruled that 'separate educational facilities are inherently unequal.' The ruling did not immediately desegregate American schools. It took the Civil Rights Movement, the Civil Rights Act (1964), and the Voting Rights Act (1965) to begin the actual enforcement of what Brown had declared. The enforcement gap between legal rights and actual power — the central theme of this encyclopedia — was 58 years long in the case of Plessy v. Ferguson.",
    ],
    pullQuote: {
      text: "Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.",
      attribution: "Justice John Marshall Harlan, dissenting, Plessy v. Ferguson, 163 U.S. 537 (1896)"
    },
    keyDocuments: [
      "Plessy v. Ferguson, 163 U.S. 537 (1896), Cornell Law School",
      "Brown v. Board of Education, 347 U.S. 483 (1954), overturning Plessy",
      "Louisiana Separate Car Act (1890), Louisiana State Archives"
    ],
    didYouKnow: "Homer Plessy, the plaintiff in Plessy v. Ferguson, was seven-eighths white and one-eighth Black. His appearance was so 'white' that he had to inform the train conductor of his Black ancestry before being removed from the whites-only car. The Citizens' Committee chose him specifically to make the absurdity of racial classification visible to the Court. The Court was unmoved."
  },

  "nat-turner-rebellion": {
    slug: "nat-turner-rebellion",
    fullText: [
      "On the night of August 21, 1831, Nat Turner — an enslaved preacher in Southampton County, Virginia — led a rebellion that killed approximately 60 white Virginians over two days. It was the deadliest slave revolt in U.S. history. Turner had been planning the rebellion for months, believing he had received divine visions commanding him to act. He and a small group of followers moved from plantation to plantation, freeing enslaved people and killing slaveholders and their families.",
      "The rebellion was suppressed within two days by Virginia militia and federal troops. Turner evaded capture for more than two months before being found hiding in a hole beneath a pile of fence rails. He was tried, convicted, and hanged on November 11, 1831. In the weeks following the rebellion, white mobs killed an estimated 100 to 200 Black people — most of whom had no connection to the rebellion. The violence against innocent Black people far exceeded the violence of the rebellion itself.",
      "The political consequences of the Nat Turner Rebellion were immediate and documented. Virginia's legislature debated — and narrowly rejected — a gradual emancipation plan in early 1832. Had it passed, the history of American slavery might have been different. Instead, Virginia and other Southern states responded by dramatically tightening their slave codes. Virginia passed laws prohibiting enslaved people from being taught to read or write, from holding religious meetings without white supervision, and from gathering in groups of more than five. Georgia, North Carolina, South Carolina, and Mississippi passed similar laws within months.",
      "The suppression of Black literacy following the Nat Turner Rebellion is one of the most consequential acts of the antebellum period. The connection to Carter G. Woodson's 'The Mis-Education of the Negro' (1933) is direct: the deliberate destruction of Black literacy in 1831 created the conditions that Woodson documented 100 years later. The educational system that prevented Black Americans from understanding their own history was built on the foundation of laws passed in the weeks after Nat Turner's rebellion.",
      "Nat Turner's 'Confessions' — dictated to attorney Thomas R. Gray while Turner awaited execution — is one of the most important primary source documents in American history. In it, Turner describes his religious visions, his planning, and his motivations. 'I heard a loud noise in the heavens,' he said, 'and the Spirit instantly appeared to me and said the Serpent was loosened, and Christ had laid down the yoke he had borne for the sins of men, and that I should take it on and fight against the Serpent.' Whether one reads this as religious conviction or as the language of a man who had been denied every other form of agency, it is the documented voice of a man who refused to accept the terms of his enslavement.",
    ],
    pullQuote: {
      text: "I heard a loud noise in the heavens, and the Spirit instantly appeared to me and said the Serpent was loosened, and Christ had laid down the yoke he had borne for the sins of men, and that I should take it on and fight against the Serpent.",
      attribution: "Nat Turner, The Confessions of Nat Turner (1831), as recorded by Thomas R. Gray"
    },
    keyDocuments: [
      "Gray, Thomas R. The Confessions of Nat Turner. Lucas & Deaver (1831) — available at the Library of Congress",
      "Virginia Code (1831–1832), tightening slave codes in response to the rebellion",
      "Drewry, William Sidney. The Southampton Insurrection (1900)"
    ],
    didYouKnow: "In the weeks following the Nat Turner Rebellion, white mobs killed an estimated 100 to 200 Black people in Virginia — most of whom had no connection to the rebellion. The violence against innocent Black people far exceeded the violence of the rebellion itself. The state of Virginia executed 56 enslaved people for alleged participation. The rebellion killed approximately 60 white people. The response killed more than twice that number of Black people."
  },

  "civil-rights-acts": {
    slug: "civil-rights-acts",
    fullText: [
      "On July 2, 1964, President Lyndon B. Johnson signed the Civil Rights Act of 1964 into law. It was the most comprehensive civil rights legislation in American history — and it was passed 101 years after the Emancipation Proclamation, 96 years after the 14th Amendment guaranteed equal protection, and 74 years after the Supreme Court had established 'separate but equal' as constitutional doctrine. The Act prohibited discrimination based on race, color, religion, sex, or national origin in employment, public accommodations, and federally assisted programs.",
      "The Civil Rights Act was not passed without a fight. Southern Democratic senators conducted the longest filibuster in Senate history — 60 days — to block the bill. Senator Strom Thurmond of South Carolina spoke for 24 hours and 18 minutes straight in opposition. The bill passed only because Republican senators broke the filibuster — one of the last major instances of bipartisan civil rights cooperation in American history. President Johnson, who had been a segregationist earlier in his career, used every tool of presidential power to pass the bill, reportedly telling an aide: 'We have lost the South for a generation.'",
      "One year later, on August 6, 1965, President Johnson signed the Voting Rights Act. The Act prohibited discriminatory voting practices — specifically the literacy tests, poll taxes, and grandfather clauses that had been used to disenfranchise Black voters across the South since Reconstruction's collapse. Section 5 of the Act required states with a history of voting discrimination to obtain federal 'preclearance' before changing any voting law — the most powerful enforcement mechanism in the history of American civil rights legislation.",
      "The Voting Rights Act's impact was immediate and documented. In Mississippi, Black voter registration increased from 6.7% in 1964 to 59.8% in 1967. In Alabama, it increased from 19.3% to 51.6% in the same period. Black Americans were elected to public office across the South for the first time since Reconstruction. The Act proved that when the federal government chose to enforce constitutional rights, it could do so effectively. The enforcement gap was not inevitable. It was a choice.",
      "On June 25, 2013, the Supreme Court gutted the Voting Rights Act in Shelby County v. Holder. Chief Justice John Roberts, writing for the 5-4 majority, ruled that the formula used to determine which states required preclearance was outdated. Within hours of the ruling, several states — including Texas, North Carolina, and Georgia — announced new voter ID laws and redistricting plans that had previously been blocked under Section 5. The pattern documented throughout this encyclopedia repeated itself with mathematical precision: a legal right was established, enforced for a period, and then the enforcement mechanism was removed. The gap between legal rights and actual power is not a historical artifact. It is the present-day operating condition of American democracy.",
    ],
    pullQuote: {
      text: "We have lost the South for a generation.",
      attribution: "President Lyndon B. Johnson, to an aide, after signing the Civil Rights Act of 1964"
    },
    keyDocuments: [
      "Civil Rights Act of 1964, Pub. L. 88-352, 78 Stat. 241 — National Archives",
      "Voting Rights Act of 1965, Pub. L. 89-110, 79 Stat. 437 — National Archives",
      "Shelby County v. Holder, 570 U.S. 529 (2013) — gutting the Voting Rights Act"
    ],
    didYouKnow: "Within hours of the Supreme Court's ruling in Shelby County v. Holder (2013), which gutted the Voting Rights Act's preclearance requirement, Texas announced a voter ID law and a redistricting plan that had previously been blocked under Section 5. North Carolina and Georgia followed within days. The states that had been most aggressively blocked from voter suppression under the Voting Rights Act moved the fastest to implement new restrictions the moment the enforcement mechanism was removed."
  },

};
