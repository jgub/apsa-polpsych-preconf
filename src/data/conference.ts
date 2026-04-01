export type ScheduleItem = {
  time: string;
  title: string;
  details: string;
};

export type DeadlineItem = {
  label: string;
  value: string;
  note?: string;
};

export const conference = {
  title: "2026 APSA Political Psychology Pre-Conference",
  shortTitle: "APSA Pol Psych 2026",
  siteUrl: "https://apsa-polpsych-preconf.org",
  socialImagePath: "/social-preview.png",
  theme: "Political Psychology Across the Discipline: New Theory, Methods, Measures, and Applications",
  location: "Harvard University",
  dateLabel: "September 2, 2026",
  timeLabel: "8:30 am Breakfast - 5:45 pm Closing Reception",
  signupUrl: "https://www.eventbrite.com/e/2026-political-psychology-pre-conference-registration-1986286640812?aff=oddtdtcreator",
  abstractUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=m278xvtRqEi3eZ7lZLQEEyP2jT0i55ZKvIdg4WrBo49URU5BMFFXUFNMWjYxNjlHUkVQWjZLV1hTTS4u",
  abstractText: "Use a separate proposal form for presenters. This should collect abstracts and presenter details in a spreadsheet you can review as submissions come in.",
  description: [
    "In increasing numbers, political psychologists now span the traditional subfields of Political Science, producing impactful work in International Relations, Comparative Politics, American Politics, and Theory. This growing diversity - extending even into emerging areas like computational political science - has led scholars to ask fresh questions in new contexts, expanding psychological work well beyond its traditional home in social psychology.",
    "That expansion has proven generative. Recent political psychology work offers new ways of thinking about emotion, motivation, attitudes, and other key processes and outcomes, while applying these insights to a wider range of social and political phenomena than ever before, with implications that reach into other subfields as well.",
  ],
  audience: [
    "Whether presenting or not, all scholars with an interest in political psychology are invited at any stage of their career.",
    "Participants working across political science subfields, including international relations, comparative politics, American politics, theory, and computational approaches.",
    "Attendees are encouraged to book their hotel one night early and join the discussion before the main APSA meeting begins.",
  ],
  format: [
    "Four panels with four papers each",
    "Fifteen-minute presentations followed by Q&A",
    "A moderated discussion on future directions in political psychology",
    "Breakfast, lunch, coffee, snacks, and a closing reception with complimentary drink tickets",
  ],
  deadlines: [
    {
      label: "Submissions open",
      value: "Open now",
    },
    {
      label: "Proposal deadline",
      value: "April 25, 2026",
      note: "Abstract submissions close on this date.",
    },
    {
      label: "Full paper deadline",
      value: "August 19, 2026",
      note: "Presenters should submit the full paper no later than two weeks before the conference.",
    },
  ] satisfies DeadlineItem[],
  submissionGuidelines: [
    "Using the links on this site, submit an abstract of no more than 4000 characters describing what you plan to present.",
    "Ensure roughly half the abstract speaks specifically about what type of innovation (theory, methods, measurement, application, etc.) the paper makes and why it's important to the growth of scientific knowledge.",
    "If accepted, commit to submitting the full paper behind your presentation by August 19, 2026.",
  ],
  schedule: [
    {
      time: "8:30-9:00 am",
      title: "Breakfast",
      details: "Breakfast and informal conversation before the program begins.",
    },
    {
      time: "9:00 am",
      title: "Opening Remarks",
      details: "Conference welcome and framing for the day.",
    },
    {
      time: "9:15-10:45 am",
      title: "Panel",
      details: "Conference panel presentations and discussion.",
    },
    {
      time: "11:00 am-12:30 pm",
      title: "Panel",
      details: "Conference panel presentations and discussion.",
    },
    {
      time: "12:30-1:30 pm",
      title: "Lunch",
      details: "Lunch and conversation with presenters and attendees.",
    },
    {
      time: "1:30-3:00 pm",
      title: "Panel",
      details: "Conference panel presentations and discussion.",
    },
    {
      time: "3:15-4:45 pm",
      title: "Panel",
      details: "Conference panel presentations and discussion.",
    },
    {
      time: "5:00-5:45 pm",
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
