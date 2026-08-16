import { ArrowRight, Calendar, Clock, Sparkles, Users, Wallet, Award } from "lucide-react";

const masterclasses = [
  {
    title: "Teens Leadership and Success Masterclass",
    description:
      "Transforming Today’s Teens into Tomorrow’s Leaders. The teenage years are among the most important years of life. This practical and life-changing program equips teenagers with the mindset, character, leadership skills, emotional intelligence, communication abilities, and success habits they need to thrive in every area of life. Based on The 7 Habits of Highly Effective Teens, this masterclass helps young people become confident, disciplined, purpose-driven, and prepared for the future.",
    descriptionDetails: [
      "Self-confidence and self-esteem",
      "Discovering purpose and personal strengths",
      "Leadership and influence",
      "Goal setting and personal vision",
      "Effective communication and public speaking",
      "Time management and self-discipline",
      "Emotional intelligence",
      "Building healthy friendships",
      "Decision-making and problem-solving",
      "Resisting peer pressure",
      "Digital responsibility and social media wisdom",
      "Teamwork and conflict resolution",
      "Financial responsibility and entrepreneurship basics",
      "Academic excellence strategies",
      "Character, integrity, and responsibility",
    ],
    audience: [
      "Teenagers aged 13–19 years",
      "Secondary & high school students",
      "Student leaders",
      "Young entrepreneurs",
      "Teens preparing for university",
    ],
    closing:
      "Because today’s teenagers become tomorrow’s leaders. Don’t just prepare your child for exams, prepare them for life. Invest in your teenager’s future today!",
    start: "Open registration",
    duration: "Flexible",
    link: "https://forms.gle/Qfb54NysfRQWZzhm8",
    icon: <Users className="h-6 w-6" />,
    featured: true,
  },
  {
    title: "Leadership Masterclass",
    description:
      "Lead yourself, inspire others, impact the world. Become the leader you are called to be in this 6-week online program with Christopher Rubongoya, Leadership & Business Trainer.",
    descriptionDetails: [
      "Develop strong leadership skills",
      "Lead teams with confidence",
      "Make better decisions and create impact",
      "Grow in influence, vision and purpose",
    ],
    detailsTitle: "What You Will Gain",
    closing: "Invest in yourself. Lead the change.",
    start: "Starts 29th August · Every Friday, 7:00PM – 8:30PM (EAT)",
    duration: "6 weeks online",
    fee: "UGX 250,000 (payable in 2 installments)",
    link: "https://forms.gle/o2Lw96fwHyY5EQVT8",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Become the best version of yourself. A 7-week online program with Christopher Rubongoya focused on mindset, discipline and intentional growth.",
    closing: "Become the best version of yourself.",
    start: "Starts 22nd August, 2026 · 10:00AM – 11:00AM (EAT)",
    duration: "7 weeks online",
    fee: "UGX 250,000",
    link: "https://forms.gle/3wgZM56dwoxKK5Zd9",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your full potential and design a life of purpose. This 8-week immersive journey will guide you through self-discovery, mindset shifts, and actionable strategies for lasting transformation.",
    start: "March 7th, 2026",
    duration: "8 weeks",
    link: "https://forms.gle/Q5D8eQBB2hxf2LDHA",
    icon: <Sparkles className="h-6 w-6" />,
    closed: true,
  },
  {
    title: "The Habit Mastery Masterclass",
    description:
      "Master the science of habits and build routines that stick. Over 7 powerful weeks, learn how to break limiting patterns and create systems that drive consistent results.",
    start: "March 21st, 2026",
    duration: "7 weeks",
    link: "https://forms.gle/afGaqFpXdhBxqj8E7",
    icon: <Calendar className="h-6 w-6" />,
    closed: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Life Coach &bull; Speaker &bull; Mentor
        </p>
        <h1 className="max-w-2xl text-5xl font-bold leading-tight text-foreground md:text-6xl">
          Chris Rubongoya
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Empowering individuals to break barriers, build powerful habits, and
          live with intention. Your transformation starts here.
        </p>
      </section>

      {/* Masterclass Cards */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="mb-10 text-center text-3xl font-semibold text-foreground">
          2026 Masterclasses
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {masterclasses.map((mc) => (
            <div
              key={mc.title}
              className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg ${
                mc.featured ? "md:col-span-2" : ""
              } ${mc.closed ? "opacity-80" : ""}`}
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {mc.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                  {mc.title}
                </h3>
                {mc.closed && (
                  <span className="mb-4 inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Registration Closed
                  </span>
                )}
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {mc.description}
                </p>
                {mc.descriptionDetails && (
                  <div className="mb-6">
                    <p className="mb-2 font-semibold text-card-foreground">
                      What Your Teen Will Learn
                    </p>
                    <ul className="grid gap-1.5 sm:grid-cols-2">
                      {mc.descriptionDetails.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {mc.audience && (
                  <div className="mb-6">
                    <p className="mb-2 font-semibold text-card-foreground">
                      Who Should Attend?
                    </p>
                    <ul className="mb-2 space-y-1 text-sm text-muted-foreground">
                      {mc.audience.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {mc.closing && (
                  <p className="mb-6 text-sm font-medium italic text-card-foreground">
                    {mc.closing}
                  </p>
                )}
                <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    {mc.start}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {mc.duration}
                  </span>
                </div>
              </div>
              {mc.closed ? (
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-muted px-6 py-3 font-semibold text-muted-foreground cursor-not-allowed"
                >
                  Closed
                </button>
              ) : (
                <a
                  href={mc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Chris Rubongoya. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
