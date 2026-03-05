import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

const masterclasses = [
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your full potential and design a life of purpose. This 8-week immersive journey will guide you through self-discovery, mindset shifts, and actionable strategies for lasting transformation.",
    start: "March 7th, 2026",
    duration: "8 weeks",
    link: "https://forms.gle/Q5D8eQBB2hxf2LDHA",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "The Habit Mastery Masterclass",
    description:
      "Master the science of habits and build routines that stick. Over 7 powerful weeks, learn how to break limiting patterns and create systems that drive consistent results.",
    start: "March 21st, 2026",
    duration: "7 weeks",
    link: "https://forms.gle/afGaqFpXdhBxqj8E7",
    icon: <Calendar className="h-6 w-6" />,
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
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {mc.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                  {mc.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {mc.description}
                </p>
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
              <a
                href={mc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </a>
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
