import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ProfilePicture from "@/assets/profile_picture.jpg";

const VENTURES = [
  {
    id: "education-academy",
    name: "Education Academy",
    role: "Co-Founder/CEO",
    timeframe: "(2020-present)",
    description:
      "Founded Education Academy in 2020 as a custom solution for UIL/TMSCA (drawing on my competitive math background) and evolved into a comprehensive AI-powered educational platform. Now partnered with 300+ Texas schools, our platform offers gamified learning, virtual competitions, and AI grading, all achieved without external fundraising.",
    link: "https://www.educationacademy.xyz",
  },
  {
    id: "tlc-time-clock",
    name: "TLC Time Clock",
    role: "Founder/CEO",
    timeframe: "(2020)",
    description:
      "Sold a web app to a local chain of small businesses to provide a time clock solution for their growing enterprise. My solution was the first to combine facial and thumb print recognition, GPS tracking, and payroll integration, all for a fraction of the cost of competitors.",
  },
];

const SKILLS = [
  {
    heading: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    heading: "Technologies & Tools",
    skills: [
      "Next.js",
      "React",
      "Tailwind",
      "PostgreSQL",
      "Flask",
      "Node.js",
      "Express",
      "Cypress",
      "Selenium",
      "Jest",
      "Docker",
      "AWS",
      "GCP",
      "Supabase",
      "REST",
      "HTML",
      "CSS",
      "Bash",
      "Latex",
      "Git",
      "PyTorch",
      "TensorFlow",
      "YOLO",
    ],
  },
  {
    heading: "Soft Skills",
    skills: [
      "Problem Solving",
      "Leadership",
      "Teamwork",
      "Collaboration",
      "Cold Outreach",
      "Communication",
      "Adaptability",
      "Time Management",
      "Mentoring",
      "Empathy",
      "Resilience",
      "Negotiation",
      "Conflict Resolution",
      "Decision Making",
      "Public Speaking",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-[100vh] py-12 md:px-24">
      <div className="h-full flex flex-col space-y-12 items-center max-w-5xl">
        <section className="container">
          <div className="grid mx-auto items-center gap-6 md:grid-cols-2 md:gap-10">
            <div className="space-y-4">
              {/* <Badge variant="secondary">Entrepreneur & Full Stack Software Engineer</Badge> */}
              <h1 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                Javier (Andrew) Garcia
              </h1>
              <p className="text-muted-foreground">Builder. Tech Optimist. Lifestyle Enthusiast.</p>
              <div className="flex items-center gap-4 text-sm">
                <Link
                  className="text-muted-foreground hover:underline underline-offset-4"
                  href="#about"
                >
                  About
                </Link>
                <Link
                  className="text-muted-foreground hover:underline underline-offset-4"
                  href="#ventures"
                >
                  Ventures
                </Link>
                <Link
                  className="text-muted-foreground hover:underline underline-offset-4"
                  href="#misc"
                >
                  Misc
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Image
                alt="Profile Picture"
                className="rounded-full"
                height="200"
                width="200"
                src={ProfilePicture}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-col space-y-4 max-w-5xl">
            <h2 id="about" className="text-xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
              About
            </h2>
            <p>
              Hi, I&apos;m Javier, but please call me Andrew! I&apos;m passionate about building
              things that make people&apos;s lives better.
            </p>
            <p>
              Most recently, I&apos;ve focused on making education as fun and accessible for others
              as it was for me– especially to students from underserved communities. Founding{" "}
              <Button asChild variant="link" className="h-min p-0 text-base text-blue-600">
                <Link href="#education-academy">Education Academy</Link>
              </Button>
              , I&apos;ve pioneered hundreds of solutions that democratize learning for thousands
              across Texas including parterning with the largest math and science organizations in
              Texas.
            </p>
            <p>
              Beyond education, I&apos;m interested in plant-based bodybuilding, gaming, English
              bulldogs, electronic music, and anime. Welcome to a window into my life!
            </p>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-col space-y-4 max-w-5xl">
            <h2
              id="ventures"
              className="text-xl font-bold tracking-tighter md:text-3xl lg:text-4xl"
            >
              Ventures
            </h2>

            <ul className="space-y-8">
              {VENTURES.map((venture) => (
                <li id={venture.id} key={venture.name} className="flex flex-col space-y-2">
                  <div>
                    <h3 className="text-base font-bold tracking-tighter md:text-xl lg:text-2xl">
                      {venture.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {venture.role} &#183; {venture.timeframe}
                    </p>
                  </div>
                  <p>{venture.description}</p>
                  {venture.link && (
                    <Button asChild variant="outline" className="w-min">
                      <Link href={venture.link} className="">
                        Visit Website
                      </Link>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-col space-y-6 max-w-5xl">
            <h2 id="misc" className="text-xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
              Misc
            </h2>

            <div>
              <h3
                id="experience"
                className="text-base font-bold tracking-tighter md:text-xl lg:text-2xl"
              >
                Experience
              </h3>

              <ul className="list-disc list-outside">
                <li>
                  COGNISENSE AI, Lead Product Designer (2020) - led a team to the development of a
                  wireless infrared camera system
                </li>
                <li>
                  Northrop Grumman, Systems Engineering Intern (2018) - wrote Javascript scripts to
                  automate the system engineering teams interal processes
                </li>
                <li>
                  TLC Pharmacy, Java Developer (2017) - made a desktop app to manage financial data
                </li>
              </ul>
            </div>

            <div>
              <h3
                id="education"
                className="text-base font-bold tracking-tighter md:text-xl lg:text-2xl"
              >
                Education
              </h3>
              <p>
                B.S. in Mechanical Engineering (Dynamic Systems &amp; Controls) from Stanford
                University (2016-2020): 3.73/4.00 GPA
              </p>
              <ul className="list-disc list-outside">
                <li>Freshman RA - Rinconada</li>
                <li>Phi Kappa Psi - Historian</li>
                <li>Stanford UAV Club - Public Outreach Officer</li>
              </ul>
            </div>

            <div>
              <h3
                id="achievements"
                className="text-base font-bold tracking-tighter md:text-xl lg:text-2xl"
              >
                Achievements
              </h3>

              <p>
                TMSCA Top Dog Award: Best overall math and science student in Texas (
                <Button asChild variant="link" className="w-min px-0 text-base text-blue-600">
                  <Link href="https://www.tmsca.org/images/2015_hs_state/6a_top_gun.pdf">2015</Link>
                </Button>{" "}
                &amp;{" "}
                <Button asChild variant="link" className="w-mi px-0 text-base text-blue-600">
                  <Link href="https://www.tmsca.org/images/2016_hs_state/6a_top_gun.pdf">2016</Link>
                </Button>
                )
              </p>
              <ul className="list-disc list-outside">
                <li>Highest calculator score record holder</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3
                id="skills"
                className="text-base font-bold tracking-tighter md:text-xl lg:text-2xl"
              >
                Skills
              </h3>

              <div className="flex flex-col space-y-4">
                {SKILLS.map((skill) => (
                  <div key={skill.heading}>
                    <h4 className="text-sm font-bold tracking-tighter md:text-lg lg:text-xl">
                      {skill.heading}
                    </h4>
                    <div className="grid w-full grid-cols-2 items-stretch justify-center md:grid-cols-3">
                      {skill.skills.map((skill) => (
                        <p key={skill} className="text-sm text-muted-foreground text-left">
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex-grow w-full max-w-5xl flex flex-col items-start justify-end pt-12">
        <Separator className="my-4" />
        <div className="container flex h-5 items-center space-x-4">
          <Button asChild variant="link" className="p-0">
            <Link href="https://www.linkedin.com/in/andrewgarcia2811" className="">
              LinkedIn
            </Link>
          </Button>
          <Separator orientation="vertical" />
          <Button asChild variant="link" className="p-0">
            <Link href="mailto:andrewgarcia2811@gmail.com" className="">
              Email
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  );
}
