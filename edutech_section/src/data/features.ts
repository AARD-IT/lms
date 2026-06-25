export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

const img = (n: number) =>
  `/assets/frontend/default/images/img/edtechfeeaturess${n}.png`;

export const features: Feature[] = [
  {
    title: "1. Class Videos",
    desc: "Recorded lessons available anytime.",
    icon: img(1),
  },
  {
    title: "2. Book Appointment",
    desc: "Easy mentor session scheduling.",
    icon: img(2),
  },
  {
    title: "3. Doubt Clarification",
    desc: "Ask questions, get quick answers.",
    icon: img(3),
  },
  {
    title: "4. Ongoing Batches",
    desc: "List of all live classes running.",
    icon: img(4),
  },
  {
    title: "5. Task Submission",
    desc: "Upload and track assignments.",
    icon: img(5),
  },
  {
    title: "6. 1-1 Mentorship",
    desc: "Personal guidance from mentors.",
    icon: img(6),
  },
  {
    title: "7. FAQ",
    desc: "Quick answers to common questions.",
    icon: img(7),
  },
  {
    title: "8. Chat Support",
    desc: "Instant help for issues or queries.",
    icon: img(8),
  },
  {
    title: "9. Job Updates",
    desc: "Latest openings & placement alerts.",
    icon: img(9),
  },
  {
    title: "10. Upcoming Batches",
    desc: "Schedule of future live courses.",
    icon: img(10),
  },
  {
    title: "11. Event Calendar",
    desc: "Class dates, tests, and deadlines.",
    icon: img(11),
  },
  {
    title: "12. Progress Dashboard",
    desc: "Simple view of completion stats.",
    icon: img(12),
  },
  {
    title: "13. Analytics for Admins",
    desc: "Insights on learner activity.",
    icon: img(13),
  },
  {
    title: "14. Notification System",
    desc: "Alerts for classes and updates.",
    icon: img(14),
  },
  {
    title: "15. Resource Library",
    desc: "Central hub for notes and slides.",
    icon: img(15),
  },
  {
    title: "16. Skill Development",
    desc: "Tools and modules to build skills.",
    icon: img(16),
  },
];
