export type Scheme = {
  id: string
  title: string
  ministry: string
  description: string
  longDescription?: string
  categories: string[]
  eligibility: {
    criteria: string[]
    gender?: string
    minAge?: number
    maxAge?: number
    economicStatus?: string
    occupation?: string[]
    states?: string[]
  }
  benefits: string[]
  financialAssistance?: string
  applicationProcess: string[]
  requiredDocuments: string[]
  applicationDeadline?: string
  launchDate: string
  targetBeneficiaries: string
  schemeType: string
  importantNotice?: string
  featured?: boolean
  faqs: {
    question: string
    answer: string
  }[]
}

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    title: "PM-KISAN",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Income support of ₹6,000 per year in three equal installments to all land holding farmer families.",
    longDescription:
      "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from Government of India. The scheme provides income support to all landholding farmers' families across the country with cultivable land, subject to certain exclusions. Under the scheme, an amount of ₹6,000 per year is released in three 4-monthly installments of ₹2,000 each directly into the bank accounts of the beneficiaries.",
    categories: ["Agriculture", "Financial"],
    eligibility: {
      criteria: [
        "All landholding farmers' families, which have cultivable landholding in their names",
        "Small and Marginal Farmers (SMF) families having combined landholding up to 2 hectares",
        "Farmers who own land as per land records of the concerned State/UT",
      ],
      gender: "All",
      economicStatus: "All",
      occupation: ["Farmer"],
      states: ["All India"],
    },
    benefits: [
      "Income support of ₹6,000 per year",
      "Amount transferred directly to bank accounts in three equal installments",
      "Financial assistance for agricultural inputs",
      "Reduced dependence on moneylenders",
    ],
    financialAssistance: "₹6,000 per year in three equal installments of ₹2,000 each",
    applicationProcess: [
      "Visit the nearest Common Service Centre (CSC) or Agriculture Department office",
      "Fill the PM-KISAN application form with personal and land details",
      "Submit required documents for verification",
      "Application is verified by local authorities",
      "After approval, beneficiary receives the amount directly in bank account",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Land Records/Patta/Land Ownership Certificate",
      "Bank Account Details with IFSC Code",
      "Passport Size Photograph",
      "Mobile Number",
    ],
    applicationDeadline: "Open throughout the year",
    launchDate: "February 24, 2019",
    targetBeneficiaries: "Small and Marginal Farmers",
    schemeType: "Central Sector Scheme",
    importantNotice: "Farmers are advised to link their Aadhaar with bank accounts to receive benefits seamlessly.",
    featured: true,
    faqs: [
      {
        question: "How can I check my PM-KISAN beneficiary status?",
        answer:
          "You can check your beneficiary status on the PM-KISAN portal (pmkisan.gov.in) by entering your Aadhaar number or account number.",
      },
      {
        question: "What if I have multiple land parcels in different villages?",
        answer:
          "The benefit is provided to a family as a whole, irrespective of the size of landholding or number of land parcels. A family with multiple land parcels will receive only one installment of ₹2,000 every four months.",
      },
      {
        question: "I haven't received my installment. What should I do?",
        answer:
          "Check your status on the PM-KISAN portal. If your application shows 'Rejected' or 'Failed Transaction', contact your local agriculture officer or visit the nearest Common Service Centre for assistance.",
      },
      {
        question: "Is there any income limit for availing benefits under PM-KISAN?",
        answer:
          "Initially, the scheme was limited to small and marginal farmers, but it has been extended to all landholding farmer families irrespective of the size of their landholdings. However, certain higher-income categories like income tax payers, professionals, etc. are excluded.",
      },
    ],
  },
  {
    id: "pmjay",
    title: "Ayushman Bharat - PMJAY",
    ministry: "Ministry of Health & Family Welfare",
    description:
      "Health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    longDescription:
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is the largest health assurance scheme in the world which aims at providing a health cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization to over 10.74 crore poor and vulnerable families (approximately 50 crore beneficiaries) that form the bottom 40% of the Indian population.",
    categories: ["Health", "Social Welfare"],
    eligibility: {
      criteria: [
        "Families included in the SECC 2011 database under identified deprivation categories",
        "Families that were covered under the RSBY scheme but not in SECC 2011",
        "All families belonging to identified occupational categories of urban workers",
      ],
      gender: "All",
      economicStatus: "BPL",
      states: ["All India"],
    },
    benefits: [
      "Health insurance coverage of ₹5 lakh per family per year",
      "Cashless and paperless treatment at empanelled hospitals",
      "Coverage for 3 days of pre-hospitalization and 15 days post-hospitalization expenses",
      "No restriction on family size, age or gender",
      "All pre-existing conditions covered from day one",
    ],
    financialAssistance: "Health coverage up to ₹5 lakh per family per year",
    applicationProcess: [
      "Check eligibility on the PMJAY website or mobile app",
      "Visit the nearest Ayushman Bharat Kendra or Common Service Centre",
      "Provide necessary identification documents",
      "Get your e-card generated",
      "Use the e-card at empanelled hospitals for cashless treatment",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Ration Card/SECC Data Reference",
      "Mobile Number",
      "Any Government Issued ID if Aadhaar is not available",
    ],
    launchDate: "September 23, 2018",
    targetBeneficiaries: "Poor and vulnerable families",
    schemeType: "Central Sector Scheme",
    featured: true,
    faqs: [
      {
        question: "How do I know if I am eligible for PMJAY?",
        answer:
          "You can check your eligibility by visiting the PMJAY website (pmjay.gov.in) or by calling the toll-free helpline at 14555. You can also visit the nearest Ayushman Bharat Kendra or Common Service Centre.",
      },
      {
        question: "Which hospitals are covered under PMJAY?",
        answer:
          "Both public and private hospitals empanelled under PMJAY provide services. You can find the list of empanelled hospitals on the PMJAY website or mobile app.",
      },
      {
        question: "Do I need to pay any premium for PMJAY?",
        answer:
          "No, eligible beneficiaries do not need to pay any premium. The scheme is fully funded by the Government.",
      },
      {
        question: "What medical procedures are covered under PMJAY?",
        answer:
          "PMJAY covers over 1,500 medical procedures including surgeries, daycare treatments, and medical consultations across various specialties like cardiology, neurology, oncology, etc.",
      },
    ],
  },
  {
    id: "pmay",
    title: "Pradhan Mantri Awas Yojana (PMAY)",
    ministry: "Ministry of Housing and Urban Affairs",
    description:
      "Housing for all by providing financial assistance for construction of pucca houses to eligible families.",
    longDescription:
      "Pradhan Mantri Awas Yojana (PMAY) is an initiative by the Government of India in which affordable housing will be provided to the urban poor with a target of building 20 million affordable houses by 31 March 2022. It has two components: PMAY-Urban for urban areas and PMAY-Gramin for rural areas.",
    categories: ["Housing", "Social Welfare"],
    eligibility: {
      criteria: [
        "Families with annual income up to ₹3 lakh for EWS category",
        "Families with annual income between ₹3-6 lakh for LIG category",
        "Families with annual income between ₹6-12 lakh for MIG-I category",
        "Families with annual income between ₹12-18 lakh for MIG-II category",
        "Should not own a pucca house in any part of India",
      ],
      gender: "All (preference to female-headed households)",
      economicStatus: "EWS, LIG, MIG",
      states: ["All India"],
    },
    benefits: [
      "Interest subsidy on home loans",
      "Direct financial assistance for house construction",
      "Affordable housing through public-private partnerships",
      "Slum rehabilitation with participation of private developers",
    ],
    financialAssistance: "Up to ₹2.67 lakh in different forms based on the component of the scheme",
    applicationProcess: [
      "Visit the nearest Urban Local Body (ULB) office or Common Service Centre",
      "Fill the PMAY application form with personal and property details",
      "Submit required documents for verification",
      "Application is verified by local authorities",
      "After approval, beneficiary receives the assistance as per the applicable component",
    ],
    requiredDocuments: [
      "Aadhaar Card of all family members",
      "Income Certificate",
      "Proof of residence",
      "Bank Account Details",
      "Land documents (if applicable)",
      "Caste Certificate (if applicable)",
    ],
    applicationDeadline: "Open throughout the year",
    launchDate: "June 25, 2015",
    targetBeneficiaries: "Economically Weaker Sections and Low Income Groups",
    schemeType: "Centrally Sponsored Scheme",
    featured: true,
    faqs: [
      {
        question: "What are the different components of PMAY?",
        answer:
          "PMAY has four components: (1) In-situ Slum Redevelopment, (2) Credit Linked Subsidy Scheme, (3) Affordable Housing in Partnership, and (4) Beneficiary-led individual house construction/enhancement.",
      },
      {
        question: "How much subsidy can I get under PMAY?",
        answer:
          "Under the Credit Linked Subsidy Scheme (CLSS), you can get an interest subsidy of 6.5% for EWS/LIG categories on housing loans up to ₹6 lakh, 4% for MIG-I on loans up to ₹9 lakh, and 3% for MIG-II on loans up to ₹12 lakh.",
      },
      {
        question: "Can I apply for PMAY if I already own a house?",
        answer:
          "No, if you or any member of your family owns a pucca house in any part of India, you are not eligible for PMAY benefits.",
      },
      {
        question: "How can I track my PMAY application status?",
        answer:
          "You can track your application status on the PMAY website (pmaymis.gov.in) by entering your application number or Aadhaar number.",
      },
    ],
  },
  {
    id: "pmjdy",
    title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    ministry: "Ministry of Finance",
    description:
      "National mission for financial inclusion to ensure access to financial services like banking, savings, remittance, credit, insurance, and pension.",
    longDescription:
      "Pradhan Mantri Jan Dhan Yojana (PMJDY) is a National Mission on Financial Inclusion encompassing an integrated approach to bring about comprehensive financial inclusion of all the households in the country. The plan envisages universal access to banking facilities with at least one basic banking account for every household, financial literacy, access to credit, insurance and pension facility.",
    categories: ["Financial", "Social Welfare"],
    eligibility: {
      criteria: [
        "Any individual above 10 years of age",
        "Indian citizen without a bank account",
        "One account per household",
      ],
      gender: "All",
      minAge: 10,
      economicStatus: "All",
      states: ["All India"],
    },
    benefits: [
      "Zero balance savings bank account",
      "RuPay debit card with ₹1 lakh accident insurance cover",
      "Life insurance cover of ₹30,000",
      "Overdraft facility up to ₹10,000",
      "Direct Benefit Transfer (DBT) for government schemes",
    ],
    applicationProcess: [
      "Visit the nearest bank branch or Banking Correspondent",
      "Fill the PMJDY account opening form",
      "Submit required KYC documents",
      "Receive passbook and RuPay card",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "If Aadhaar is not available: Voter ID, Driving License, PAN Card, Passport or NREGA Card",
      "Recent passport size photograph",
    ],
    launchDate: "August 28, 2014",
    targetBeneficiaries: "Unbanked population",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "Is there any minimum balance requirement for PMJDY accounts?",
        answer:
          "No, PMJDY accounts can be opened with zero balance. However, if you want to avail the overdraft facility, you need to operate the account satisfactorily for 6 months.",
      },
      {
        question: "Can I open multiple PMJDY accounts?",
        answer:
          "No, only one PMJDY account per household is allowed. However, other family members can open regular savings accounts.",
      },
      {
        question: "How can I activate the insurance benefits of my PMJDY account?",
        answer:
          "The RuPay card must be used at least once every 90 days to keep the accident insurance cover active. The life insurance cover is available for one account per household opened before January 31, 2015.",
      },
      {
        question: "What is the overdraft facility in PMJDY accounts?",
        answer:
          "After satisfactory operation of the account for 6 months, an overdraft facility up to ₹10,000 is provided to the account holder. This is a form of small credit that can be used for emergency needs.",
      },
    ],
  },
  {
    id: "sukanya-samriddhi",
    title: "Sukanya Samriddhi Yojana (SSY)",
    ministry: "Ministry of Finance",
    description: "Small savings scheme for the girl child with high interest rate and tax benefits.",
    longDescription:
      "Sukanya Samriddhi Yojana is a small deposit scheme for the girl child launched as a part of the 'Beti Bachao Beti Padhao' campaign. It is meant to meet the education and marriage expenses of a girl child. The scheme offers one of the highest interest rates among all government-backed saving schemes and provides tax benefits under Section 80C of the Income Tax Act.",
    categories: ["Financial", "Education"],
    eligibility: {
      criteria: [
        "Account can be opened for a girl child up to the age of 10 years",
        "Only one account per girl child, maximum two accounts in a family",
        "Natural or legal guardian can open and operate the account",
      ],
      gender: "Female",
      maxAge: 10,
      states: ["All India"],
    },
    benefits: [
      "High interest rate (currently 8.2% per annum, compounded annually)",
      "Tax benefits under Section 80C of Income Tax Act",
      "Maturity amount and interest earned are tax-free",
      "Partial withdrawal allowed for higher education and marriage",
      "Account can be transferred anywhere in India",
    ],
    financialAssistance: "Interest rate of 8.2% per annum (subject to revision quarterly)",
    applicationProcess: [
      "Visit the nearest post office or authorized bank",
      "Fill the SSY account opening form",
      "Submit required documents",
      "Make the initial deposit (minimum ₹250)",
    ],
    requiredDocuments: [
      "Birth certificate of the girl child",
      "Identity and address proof of the guardian/parent",
      "Passport size photograph of the guardian and the girl child",
    ],
    launchDate: "January 22, 2015",
    targetBeneficiaries: "Girl children below 10 years of age",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "What is the minimum and maximum deposit amount?",
        answer:
          "The minimum deposit is ₹250 per financial year, and the maximum is ₹1.5 lakh per financial year. Deposits can be made in lump sum or in installments.",
      },
      {
        question: "When does the account mature?",
        answer:
          "The account matures after 21 years from the date of opening. However, if the account is not closed, it continues to earn interest.",
      },
      {
        question: "Can I withdraw money before maturity?",
        answer:
          "Partial withdrawal up to 50% of the balance is allowed after the girl child attains 18 years of age for higher education or marriage purposes.",
      },
      {
        question: "What happens if the minimum deposit is not made in a year?",
        answer:
          "If the minimum deposit of ₹250 is not made in a financial year, the account becomes inactive. It can be reactivated by paying a penalty of ₹50 per year along with the minimum deposit for each year of default.",
      },
    ],
  },
  {
    id: "pmsby",
    title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    ministry: "Ministry of Finance",
    description: "Accident insurance scheme offering coverage for death or disability due to accidents.",
    longDescription:
      "Pradhan Mantri Suraksha Bima Yojana is an accident insurance scheme launched by the Government of India. It offers a renewable one-year accidental death and disability cover of ₹2 lakh for partial/permanent disability to all citizens and residents of India in the age group of 18 to 70 years for a premium of just ₹12 per annum per member.",
    categories: ["Financial", "Social Welfare"],
    eligibility: {
      criteria: [
        "Any individual between 18-70 years of age",
        "Must have a bank account",
        "Must give consent for auto-debit of premium",
      ],
      gender: "All",
      minAge: 18,
      maxAge: 70,
      states: ["All India"],
    },
    benefits: [
      "Accidental death coverage of ₹2 lakh",
      "Permanent total disability coverage of ₹2 lakh",
      "Permanent partial disability coverage of ₹1 lakh",
      "Low premium of just ₹12 per annum",
    ],
    financialAssistance: "Insurance coverage of ₹2 lakh for a premium of ₹12 per year",
    applicationProcess: [
      "Visit your bank branch or banking correspondent",
      "Fill the PMSBY enrollment form",
      "Provide bank account details for auto-debit of premium",
      "Receive the insurance certificate",
    ],
    requiredDocuments: ["Identity and address proof", "Bank account details", "Passport size photograph", "Age proof"],
    launchDate: "May 9, 2015",
    targetBeneficiaries: "All citizens between 18-70 years",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "How is the premium paid for PMSBY?",
        answer:
          "The premium of ₹12 per annum is auto-debited from the bank account of the subscriber on or before June 1st of each annual coverage period.",
      },
      {
        question: "What is the claim process for PMSBY?",
        answer:
          "In case of an accident, the nominee or the insured person needs to inform the bank and submit the required documents. The claim amount is directly credited to the bank account of the nominee/insured.",
      },
      {
        question: "Can I join PMSBY if I already have other insurance policies?",
        answer:
          "Yes, PMSBY is independent of any other insurance cover you may have. You can enroll for PMSBY even if you have other insurance policies.",
      },
      {
        question: "What happens if there is insufficient balance in my account for premium deduction?",
        answer:
          "If there is insufficient balance in your account on the due date for auto-debit, your coverage may lapse. You can, however, re-join the scheme in future years by paying the annual premium.",
      },
    ],
  },
  {
    id: "pmfby",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description:
      "Crop insurance scheme providing comprehensive risk coverage for farmers from pre-sowing to post-harvest losses.",
    longDescription:
      "Pradhan Mantri Fasal Bima Yojana is a crop insurance scheme that aims to reduce the premium burden on farmers and ensure early settlement of crop assurance claims for the full insured sum. It provides comprehensive coverage against crop loss due to non-preventable natural risks from pre-sowing to post-harvest for the crops/areas notified by the State Government.",
    categories: ["Agriculture", "Financial"],
    eligibility: {
      criteria: [
        "All farmers growing notified crops in notified areas",
        "Both loanee and non-loanee farmers",
        "Sharecroppers and tenant farmers",
      ],
      gender: "All",
      occupation: ["Farmer"],
      states: ["All India"],
    },
    benefits: [
      "Low premium rates: 2% for Kharif crops, 1.5% for Rabi crops, 5% for annual commercial/horticultural crops",
      "Full insurance coverage for the sum insured",
      "Coverage for crop losses due to natural calamities, pests, and diseases",
      "Post-harvest coverage for up to two weeks",
      "Use of technology like smartphones, drones for quick claim settlement",
    ],
    financialAssistance: "Insurance coverage at subsidized premium rates",
    applicationProcess: [
      "For loanee farmers: Automatic enrollment through banks",
      "For non-loanee farmers: Apply through nearest bank, insurance company, or Common Service Centre",
      "Fill the application form and pay the premium",
      "Receive the acknowledgment/insurance receipt",
    ],
    requiredDocuments: [
      "Land records/tenancy agreement",
      "Identity proof",
      "Bank account details",
      "Sowing certificate from local authorities (for some crops)",
      "Passport size photograph",
    ],
    applicationDeadline: "Varies by crop season and state",
    launchDate: "February 18, 2016",
    targetBeneficiaries: "All farmers growing notified crops",
    schemeType: "Centrally Sponsored Scheme",
    faqs: [
      {
        question: "Which crops are covered under PMFBY?",
        answer:
          "PMFBY covers food crops (cereals, millets, pulses), oilseeds, annual commercial/horticultural crops. The specific crops are notified by the State Governments for each season.",
      },
      {
        question: "How is the claim amount calculated?",
        answer:
          "Claims are calculated based on the shortfall in yield. If the actual yield is less than the threshold yield (which is a percentage of the average yield), the farmer is eligible for compensation based on the shortfall percentage.",
      },
      {
        question: "How can I check the status of my PMFBY claim?",
        answer:
          "You can check your claim status on the PMFBY portal (pmfby.gov.in) by entering your application ID or Aadhaar number. You can also contact your bank or the insurance company.",
      },
      {
        question: "Is it mandatory for loanee farmers to enroll in PMFBY?",
        answer:
          "From Kharif 2020, enrollment in PMFBY is voluntary for all farmers, including loanee farmers who avail crop loans.",
      },
    ],
  },
  {
    id: "nps",
    title: "National Pension System (NPS)",
    ministry: "Ministry of Finance",
    description:
      "Voluntary pension scheme to enable systematic savings during the working life to draw a pension after retirement.",
    longDescription:
      "The National Pension System (NPS) is a voluntary, defined contribution retirement savings scheme designed to enable the subscribers to make optimum decisions regarding their future through systematic savings during their working life. NPS seeks to inculcate the habit of saving for retirement amongst the citizens.",
    categories: ["Financial"],
    eligibility: {
      criteria: [
        "Any Indian citizen between 18-70 years of age",
        "Compliant with KYC norms",
        "Both residents and NRIs can join",
      ],
      gender: "All",
      minAge: 18,
      maxAge: 70,
      states: ["All India"],
    },
    benefits: [
      "Tax benefits under Section 80C and 80CCD(1B) of Income Tax Act",
      "Choice of investment options and fund managers",
      "Low-cost structure and transparent investment norms",
      "Flexibility to switch between investment options and fund managers",
      "Option to withdraw partially before retirement for specific purposes",
    ],
    applicationProcess: [
      "Visit the nearest NPS Point of Presence (PoP) like banks, post offices",
      "Fill the NPS subscription form (UOS-S1)",
      "Submit required KYC documents",
      "Make the initial contribution (minimum ₹500)",
      "Receive the Permanent Retirement Account Number (PRAN) kit",
    ],
    requiredDocuments: [
      "Identity proof (Aadhaar, PAN, Voter ID, etc.)",
      "Address proof",
      "Date of birth proof",
      "PAN card",
      "Recent passport size photograph",
      "Bank account details",
    ],
    launchDate: "January 1, 2004 (for government employees), May 1, 2009 (for all citizens)",
    targetBeneficiaries: "All citizens between 18-70 years",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "What are the different types of NPS accounts?",
        answer:
          "NPS offers two types of accounts: Tier I (mandatory, retirement account with restrictions on withdrawals) and Tier II (voluntary, savings account with no restrictions on withdrawals and no tax benefits).",
      },
      {
        question: "What are the investment options in NPS?",
        answer:
          "NPS offers four investment options: Active Choice (where you decide the asset allocation), Auto Choice (lifecycle fund based on age), Corporate CG (for corporate sector employees), and Government CG (for government employees).",
      },
      {
        question: "When can I withdraw from my NPS account?",
        answer:
          "You can partially withdraw from your Tier I account (up to 25% of your contributions) after 3 years for specific purposes like higher education, marriage, home purchase, etc. Complete withdrawal is allowed at the age of 60 or above.",
      },
      {
        question: "What happens to my NPS account after retirement?",
        answer:
          "At retirement (age 60), you must use at least 40% of your accumulated corpus to purchase an annuity (pension) from an IRDAI-regulated insurance company. The remaining 60% can be withdrawn as a lump sum or in phases.",
      },
    ],
  },
  {
    id: "skill-india",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description:
      "Skill development initiative providing industry-relevant skill training to youth to enhance employability.",
    longDescription:
      "Pradhan Mantri Kaushal Vikas Yojana is the flagship scheme of the Ministry of Skill Development & Entrepreneurship implemented through the National Skill Development Corporation. The objective is to enable Indian youth to take up industry-relevant skill training that will help them in securing a better livelihood.",
    categories: ["Education", "Employment"],
    eligibility: {
      criteria: [
        "Indian nationals between 15-45 years of age",
        "School/college dropouts or unemployed youth",
        "No specific educational qualification required for most courses",
      ],
      gender: "All",
      minAge: 15,
      maxAge: 45,
      states: ["All India"],
    },
    benefits: [
      "Free short-term skill development training",
      "Monetary reward on successful completion of training and certification",
      "Industry-recognized certification",
      "Placement assistance",
      "Soft skills training and entrepreneurship guidance",
    ],
    financialAssistance: "Monetary reward ranging from ₹5,000 to ₹10,000 based on the sector and job role",
    applicationProcess: [
      "Visit the nearest PMKVY Training Centre or Common Service Centre",
      "Register on the Skill India Portal (skillindia.gov.in)",
      "Select the preferred course and training center",
      "Complete the enrollment process",
      "Attend the training program and assessment",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Educational certificates (if any)",
      "Bank account details",
      "Passport size photographs",
    ],
    launchDate: "July 15, 2015",
    targetBeneficiaries: "Youth seeking skill development and employment",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "What types of courses are offered under PMKVY?",
        answer:
          "PMKVY offers courses across 37 sectors including automotive, beauty & wellness, construction, electronics, healthcare, IT, retail, tourism & hospitality, and many more. The duration ranges from 150 to 300 hours depending on the job role.",
      },
      {
        question: "Is there any fee for the training under PMKVY?",
        answer:
          "No, the training under PMKVY is completely free of cost for the candidates. The government pays the training providers directly.",
      },
      {
        question: "How can I find the nearest PMKVY training center?",
        answer:
          "You can find the nearest training center by visiting the Skill India Portal (skillindia.gov.in) or by calling the toll-free helpline at 88000-55555.",
      },
      {
        question: "Is job placement guaranteed after PMKVY training?",
        answer:
          "While job placement is not guaranteed, the training providers are mandated to provide placement assistance to at least 70% of the successfully certified candidates. Many candidates get placed in various industries based on their performance and skill level.",
      },
    ],
  },
  {
    id: "ujjwala",
    title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    ministry: "Ministry of Petroleum and Natural Gas",
    description: "Scheme to provide LPG connections to women from Below Poverty Line (BPL) households.",
    longDescription:
      "Pradhan Mantri Ujjwala Yojana aims to safeguard the health of women and children by providing them with clean cooking fuel – LPG, so that they don't have to compromise their health in smoky kitchens or wander in unsafe areas collecting firewood. The scheme provides financial support of ₹1,600 for each LPG connection to BPL households.",
    categories: ["Social Welfare", "Health"],
    eligibility: {
      criteria: [
        "Women from BPL households",
        "Woman should be above 18 years of age",
        "Household should not already have an LPG connection",
        "Preference to SC/ST and other disadvantaged communities",
      ],
      gender: "Female",
      minAge: 18,
      economicStatus: "BPL",
      states: ["All India"],
    },
    benefits: [
      "Free LPG connection with financial assistance of ₹1,600",
      "First LPG cylinder and pressure regulator provided",
      "Option for EMI facility for stove and first refill cost",
      "Improved health conditions by eliminating indoor air pollution",
      "Time saved from collecting firewood can be used for other productive activities",
    ],
    financialAssistance: "₹1,600 per LPG connection",
    applicationProcess: [
      "Visit the nearest LPG distributor or Common Service Centre",
      "Fill the PMUY application form",
      "Submit required documents",
      "After verification, receive the LPG connection",
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "BPL Ration Card or any other document proving BPL status",
      "Bank Account details",
      "Proof of address",
      "Recent passport size photograph",
    ],
    launchDate: "May 1, 2016",
    targetBeneficiaries: "Women from BPL households",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "Can I get a free refill under the Ujjwala scheme?",
        answer:
          "The scheme provides a free connection, but refills need to be purchased. However, the government provides subsidy on each refill which is directly transferred to the beneficiary's bank account.",
      },
      {
        question: "What if I don't have a BPL card but still belong to a poor family?",
        answer:
          "Under Ujjwala 2.0, the scheme has been extended to families without BPL cards but belonging to disadvantaged categories. You can check with your local LPG distributor for specific eligibility criteria.",
      },
      {
        question: "Can I surrender my connection if I can't afford refills?",
        answer:
          "Yes, you can surrender your connection. However, it's advisable to discuss your concerns with the LPG distributor as there might be options like smaller cylinders or additional subsidies available.",
      },
      {
        question: "How many cylinders can I get in a year under the Ujjwala scheme?",
        answer:
          "Under the scheme, you are eligible for up to 12 subsidized cylinders in a financial year, just like any other domestic LPG consumer.",
      },
    ],
  },
  {
    id: "mudra",
    title: "Pradhan Mantri MUDRA Yojana (PMMY)",
    ministry: "Ministry of Finance",
    description: "Scheme to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
    longDescription:
      "Pradhan Mantri MUDRA Yojana was launched to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs. The scheme aims to promote entrepreneurship and create self-employment opportunities.",
    categories: ["Financial", "Employment"],
    eligibility: {
      criteria: [
        "Any Indian citizen with a business plan for non-farm income generating activity",
        "Small business owners, shopkeepers, fruit/vegetable vendors, truck operators, etc.",
        "Manufacturing, processing, trading, and service sector activities",
      ],
      gender: "All (special focus on women entrepreneurs)",
      states: ["All India"],
    },
    benefits: [
      "Loans without collateral under three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh)",
      "Lower interest rates compared to conventional loans",
      "Minimal documentation and quick processing",
      "No processing fee",
      "Flexible repayment options",
    ],
    financialAssistance: "Loans up to ₹10 lakh based on the category",
    applicationProcess: [
      "Visit the nearest bank, MFI, or NBFC",
      "Fill the MUDRA loan application form",
      "Submit business plan and required documents",
      "After approval, receive the loan amount in your bank account",
    ],
    requiredDocuments: [
      "Identity proof",
      "Address proof",
      "Business proof (if existing business)",
      "Business plan or project report",
      "Bank account details",
      "Passport size photographs",
    ],
    launchDate: "April 8, 2015",
    targetBeneficiaries: "Small business owners and entrepreneurs",
    schemeType: "Central Sector Scheme",
    faqs: [
      {
        question: "Do I need collateral or guarantor for MUDRA loans?",
        answer:
          "No collateral or guarantor is required for loans up to ₹10 lakh under the MUDRA scheme. However, for higher amounts in the Kishore and Tarun categories, the lending institution might ask for some form of security.",
      },
      {
        question: "What is the interest rate for MUDRA loans?",
        answer:
          "Interest rates vary from bank to bank and depend on the loan amount and borrower's profile. Generally, they range from 8% to 12% per annum, which is lower than conventional business loans.",
      },
      {
        question: "Can I get a MUDRA loan for an existing business?",
        answer:
          "Yes, MUDRA loans are available for both new and existing businesses. You need to provide proof of your existing business operations along with your application.",
      },
      {
        question: "What is the repayment period for MUDRA loans?",
        answer:
          "The repayment period typically ranges from 3 to 5 years, with flexible EMI options based on the business cash flow and the borrower's repayment capacity.",
      },
    ],
  },
]
