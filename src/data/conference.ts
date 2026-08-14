export type PaperItem = {
  title: string;
  authors: string;
  paperUrl?: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  details: string;
  papers?: PaperItem[];
};

export const conference = {
  title: "2026 APSA Political Psychology Pre-Conference",
  shortTitle: "APSA Pol Psych 2026",
  siteUrl: "https://apsa-polpsych-preconf.org",
  socialImagePath: "/social-preview.png",
  theme: "Political Psychology Across the Discipline: New Theory, Methods, Measures, and Applications",
  location: "Harvard University",
  dateLabel: "September 2, 2026",
  timeLabel: "8:30 am Breakfast - 5:45 pm Reception",
  signupUrl: "https://www.eventbrite.com/e/2026-political-psychology-pre-conference-registration-1986286640812?aff=oddtdtcreator",
  description: [
    "In increasing numbers, political psychologists now span the traditional subfields of Political Science, producing impactful work in International Relations, Comparative Politics, American Politics, and Theory. This growing diversity - extending even into emerging areas like computational political science - has led scholars to ask fresh questions in new contexts, expanding psychological work well beyond its traditional home in social psychology.",
    "That expansion has proven generative. Recent political psychology work offers new ways of thinking about emotion, motivation, attitudes, and other key processes and outcomes, while applying these insights to a wider range of social and political phenomena than ever before, with implications that reach into other subfields as well.",
  ],
  audience: [
    "All scholars with an interest in political psychology are invited at any stage of their career.",
    "Participants working across political science subfields, including international relations, comparative politics, American politics, theory, and computational approaches.",
    "Attendees are encouraged to book their hotel one night early and join the discussion before the main APSA meeting begins.",
  ],
  format: [
    "Four thematic paper panels",
    "Fifteen-minute presentations followed by Q&A",
    "A roundtable with editors of the journal Political Psychology",
    "A moderated discussion on future directions in political psychology",
    "Breakfast, lunch, coffee, snacks, and a closing reception with complimentary drink tickets",
  ],
  schedule: [
    {
      time: "8:30-9:00 am",
      title: "Breakfast",
      details: "Breakfast and informal conversation before the program begins.",
    },
    {
      time: "9:00-9:30 am",
      title: "Opening Remarks",
      details: "Conference welcome and framing for the day.",
    },
    {
      time: "9:30-10:45 am",
      title: "Panel 1: Theory",
      details: "Paper presentations and discussion on theoretical innovation in political psychology.",
      papers: [
        {
          title: "Bias as Resource: A Psychological Alignment Model of Resilient Knowledge",
          authors: "Lena Aarøe",
        },
        {
          title: "G(r)ay Liberals? Symbolic Identity Recognition, Conservative Co-optation, and Political Judgment Among Minoritized Voters",
          authors: "Alberto López Ortega, Martin Naunov, Stuart J. Turnbull-Dugarte",
        },
        {
          title: "Enduring Wounds: State Violence and Conspiracy Thinking in American Politics",
          authors: "Franshelly M. Martinez-Ortiz",
        },
      ],
    },
    {
      time: "10:45 am-12:00 pm",
      title: "Panel 2: Computational Methods",
      details: "Paper presentations and discussion on computational approaches to political psychology.",
      papers: [
        {
          title: "The Substance of Partisan Affect: Identity, Issues, and the Asymmetric American Voter",
          authors: "Yujin Julia Jung, Dean Schafer, T. Murat Yildirim, Brandon Beomseob Park",
        },
        {
          title: "When War Costs Generate Escalatory Demands: Measuring Perceived International Injustice with Machine Learning",
          authors: "Alina Khamatdinova",
        },
        {
          title: "Are Conversations More Persuasive Than Static, One-Way Messages? Experimental Evidence from AI Political Persuasion",
          authors: "Jacques Courbe",
        },
      ],
    },
    {
      time: "12:00-1:00 pm",
      title: "Lunch",
      details: "Lunch and conversation with presenters and attendees.",
    },
    {
      time: "1:00-2:00 pm",
      title: "Roundtable with the Editors of Political Psychology",
      details: "A roundtable conversation with editors of the journal Political Psychology.",
    },
    {
      time: "2:00-3:15 pm",
      title: "Panel 3: Causal Inference and Emotion",
      details: "Paper presentations and discussion on causal inference, emotion, threat, and political behavior.",
      papers: [
        {
          title: "Too Damn High! Housing Affordability and Protest Participation",
          authors: "Deren Onursal, Adam LeGrand Hobbs",
        },
        {
          title: "Triple Threat: A Lab Experiment of Experienced Threat and Ideology",
          authors: "Jesse Mehravar, Amanda Friesen, Benjamin Ruisch, Ruben Andre Teixeira Azevedo",
        },
        {
          title: "Asking About Violence: Experimental Evidence from Survey Research in Mexico",
          authors: "Manuel Moscoso-Rojas, Hannah Baron, Rebecca Leitman, Sandra Ley, Lauren Young",
        },
      ],
    },
    {
      time: "3:15-4:30 pm",
      title: "Panel 4: Measurement and Scale Development",
      details: "Paper presentations and discussion on measurement, scale development, and belief networks.",
      papers: [
        {
          title: "The Reservist State: How Geopolitical Rivalry Undermines Women's Representation",
          authors: "Alexis Y. Jang",
        },
        {
          title: "Political Mental Health is Distinct from Mental Health and Has Unique Political Correlates",
          authors: "Delaney Peterson, Gijs Schumacher, Frederic R. Hopp, Bert N. Bakker",
        },
        {
          title: "The Structure of Belief Networks in Mass Publics",
          authors: "Allen Wilson, Connor Choate",
        },
      ],
    },
    {
      time: "4:45-5:45 pm",
      title: "Moderated Discussion",
      details: "A closing moderated discussion on future directions in political psychology.",
    },
    {
      time: "5:45 pm",
      title: "Reception",
      details: "A concluding reception with time to connect informally with fellow participants.",
    },
  ] satisfies ScheduleItem[],
};
