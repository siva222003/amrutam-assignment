export const MorningTimeSlots = [
  "09:00 AM",

  "09:30 AM",

  "10:00 AM",

  "10:30 AM",

  "11:00 AM",

  "11:30 AM",

  "12:00 PM",
];

export const EveningTimeSlots = [
  "01:00 PM",

  "01:30 PM",

  "02:00 PM",

  "02:30 PM",

  "03:00 PM",

  "03:30 PM",

  "04:00 PM",
];


export const expertiseSelectOptions = {
  expertise: [
    { value: "Hair care", label: "Hair care" },
    { value: "Immunity", label: "Immunity" },
    { value: "Pregnancy", label: "Pregnancy" },
    { value: "Women's Health Care", label: "Women's Health Care" },
  ],
  gender: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ],
  fees: [
    { value: "Rs.0-Rs.500", label: "Rs.0-Rs.500" },
    { value: "Rs.500-Rs.1000", label: "Rs.500-Rs.1000" },
    { value: "Rs.1000-Rs.1500", label: "Rs.1000-Rs.1500" },
  ],
  languages: [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Telugu" },
    { value: "Telugu", label: "Telugu" },
  ],
};

export const selectInput = [
  {placeholder : "Expertise",options : expertiseSelectOptions.expertise},
  {placeholder : "Gender",options : expertiseSelectOptions.gender},
  {placeholder : "Fees",options : expertiseSelectOptions.fees},
  {placeholder : "Languages",options : expertiseSelectOptions.languages},
]