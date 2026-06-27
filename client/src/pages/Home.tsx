import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { DiagonalDivider } from "@/components/DiagonalDivider";
import { ChevronDown, Mail, Linkedin, Github, Download, Star, Users, Code2, Cloud, Database, BarChart3, Zap, Sparkles, BrainCircuit, Orbit } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Dark Futuristic AI Portfolio
 * Design: Deep navy/charcoal with electric cyan and vibrant purple accents
 * Typography: Sora (headlines) + Inter (body)
 * Motion: Smooth scroll-triggered animations, hover effects, staggered reveals
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroHighlights = [
    { value: "3+", label: "Years building AI systems" },
    { value: "5k+", label: "Students trained" },
    { value: "50+", label: "Projects shipped" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/logo-icon_e95cb902.png"
              alt="Rajiv Kumar"
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold font-sora">RK</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-sm hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.open("mailto:rajeevranjanmohanupadhyay@gmail.com")}
          >
            Get In Touch
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.18),transparent_24%),linear-gradient(135deg,rgba(3,7,18,0.96),rgba(8,15,33,0.95))]" />
          <div className="mesh-grid absolute inset-0 opacity-30" />
          <motion.div
            className="aurora-orb absolute -left-10 top-20 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
            animate={{ x: [0, 34, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="aurora-orb absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
            animate={{ x: [0, -25, 0], y: [0, 24, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.02, 0.95] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/0 via-background/35 to-background" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 inline-block">
                <Badge className="border-accent/50 bg-accent/20 px-4 py-1.5 text-accent">
                  <Sparkles className="mr-2 h-3 w-3" />
                  AI Engineer & Data Scientist
                </Badge>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl font-sora">
                Turning bold ideas into{" "}
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  high-impact intelligence
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0">
                Certified SAP Data Engineer Trainer with 3+ years of expertise in Python, AI, Machine Learning, and Cloud Technologies. I build systems that feel premium, scale fast, and deliver measurable value.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground transition-transform duration-300 hover:-translate-y-1 hover:bg-accent/90"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:bg-accent/10"
                  onClick={() => window.open("mailto:rajeevranjanmohanupadhyay@gmail.com")}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto w-full max-w-xl"
            >
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Live portfolio signal
                  </div>
                  <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Premium build
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {heroHighlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="rounded-2xl border border-white/10 bg-background/70 p-3"
                      >
                        <div className="text-xl font-semibold text-accent">{item.value}</div>
                        <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <BrainCircuit className="h-4 w-4" />
                      Agentic AI
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Intelligent workflows built with production-grade architecture and elegant UX.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Orbit className="h-4 w-4" />
                      Cloud deployment
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Deploying scalable solutions across Azure, SAP, and modern cloud platforms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-14 flex justify-center"
          >
            <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
              <ChevronDown className="h-5 w-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container max-w-4xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">About Me</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealSection delay={100}>
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate Data Scientist and AI Engineer dedicated to building practical, scalable solutions that solve real-world problems. With a strong foundation in machine learning, deep learning, and cloud technologies, I combine technical expertise with a commitment to knowledge sharing.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a certified SAP Data Engineer Trainer, I've had the privilege of mentoring over 5000 students, helping them master AI and data science concepts. My approach blends theoretical rigor with hands-on project experience, ensuring learners can immediately apply their knowledge.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Pune, India, I specialize in deploying AI solutions on cloud platforms like Microsoft Azure and SAP Cloud Foundry, turning concepts into production-ready systems.
                </p>
              </div>
            </ScrollRevealSection>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5000+", label: "Students Trained" },
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "2", label: "SAP Certifications" },
              ].map((stat, i) => (
                <ScrollRevealSection key={i} delay={100 + i * 100}>
                  <Card className="bg-card/50 border-border/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container max-w-5xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Skills & Expertise</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "AI/ML",
                skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Agentic AI"],
              },
              {
                icon: Code2,
                title: "Programming",
                skills: ["Python", "SQL", "Data Processing", "API Development"],
              },
              {
                icon: Cloud,
                title: "Cloud",
                skills: ["Microsoft Azure", "SAP Cloud Foundry", "IBM Cloud", "Cloud Deployment"],
              },
              {
                icon: BarChart3,
                title: "Data Tools",
                skills: ["Power BI", "NumPy & Pandas", "Matplotlib", "Excel"],
              },
              {
                icon: Database,
                title: "Databases",
                skills: ["MySQL", "MongoDB", "Data Modeling", "Query Optimization"],
              },
              {
                icon: Users,
                title: "Training",
                skills: ["Curriculum Design", "Mentorship", "Project Guidance", "Knowledge Transfer"],
              },
            ].map((skill, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <Card className="bg-card/50 border-border/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <skill.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold font-sora">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {skill.skills.map((s, j) => (
                      <li key={j}>• {s}</li>
                    ))}
                  </ul>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container max-w-5xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Featured Projects</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "House Price Prediction (Pune)",
                description: "Advanced ML model for predicting residential property prices in Pune using regression techniques and feature engineering.",
                tags: ["Machine Learning", "Azure", "Python"],
                impact: "Deployed on Azure & SAP Cloud for real-time predictions",
                icon: Code2,
              },
              {
                title: "Potato Plant Disease Detection",
                description: "Deep learning solution using Computer Vision to identify potato plant diseases, helping farmers make informed decisions.",
                tags: ["Deep Learning", "Computer Vision", "CNN"],
                impact: "Practical solution for agricultural AI applications",
                icon: Zap,
              },
            ].map((project, i) => (
              <ScrollRevealSection key={i} delay={i * 150}>
                <Card className="bg-card/50 border-border/50 overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 group">
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/30 to-secondary/30" />
                    <project.icon className="w-16 h-16 text-accent/50 group-hover:text-accent/70 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-sora mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, j) => (
                        <Badge key={j} className="bg-accent/20 text-accent border-accent/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent/50 hover:bg-accent/10"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container max-w-4xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Experience & Achievements</h2>
          </ScrollRevealSection>

          <div className="space-y-8">
            {[
              {
                title: "SAP Data Engineer Trainer",
                subtitle: "3+ Years | Certified Professional",
                points: [
                  "Trained 5000+ students in AI, ML, and Data Science",
                  "Mentored real-world projects from concept to deployment",
                  "Designed comprehensive curriculum for data engineering",
                  "Led college initiatives as Project Mentor & Lead Coordinator",
                ],
              },
              {
                title: "AI Solutions Developer",
                subtitle: "Ongoing | Production-Grade Systems",
                points: [
                  "Built and deployed ML models on Azure & SAP Cloud",
                  "Developed end-to-end AI solutions for various domains",
                  "Implemented best practices for model optimization",
                  "Collaborated with cross-functional teams on cloud projects",
                ],
              },
            ].map((exp, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <div className="border-l-2 border-accent/50 pl-8 relative">
                  <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full" />
                  <h3 className="text-xl font-semibold font-sora mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground mb-3">{exp.subtitle}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.points.map((point, j) => (
                      <li key={j}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Certifications</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SAP Analytics Cloud",
                description: "Advanced analytics and business intelligence",
              },
              {
                title: "SAP HANA Data Engineer",
                description: "Enterprise data engineering and architecture",
              },
            ].map((cert, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <Card className="bg-card/50 border-border/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                  <div className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold font-sora mb-1">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Testimonials</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Rajiv's training transformed my understanding of AI and ML. His practical approach and mentorship helped me land my dream role.",
                author: "Student Success Story",
              },
              {
                text: "A true expert in data science and cloud technologies. Rajiv's solutions are innovative and production-ready.",
                author: "Project Collaborator",
              },
            ].map((testimonial, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <Card className="bg-card/50 border-border/50 p-6 hover:border-accent/50 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold font-sora text-sm">- {testimonial.author}</p>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section Placeholder */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-12">Latest Insights</h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {["AI Trends 2024", "Cloud Best Practices", "ML Deployment Guide"].map((title, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <Card className="bg-card/50 border-border/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                  <div className="h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-accent/50" />
                  </div>
                  <h3 className="font-semibold font-sora mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Coming soon...</p>
                  <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80">
                    Read More →
                  </Button>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container max-w-2xl">
          <ScrollRevealSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 text-center">Let's Connect</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Ready to discuss AI solutions, training opportunities, or collaboration? Reach out today.
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2"
                onClick={() => window.open("mailto:rajeevranjanmohanupadhyay@gmail.com")}
              >
                <Mail className="w-5 h-5" />
                Email Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 flex items-center gap-2"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 flex items-center gap-2"
                onClick={() => alert("Resume download coming soon")}
              >
                <Download className="w-5 h-5" />
                Resume
              </Button>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img
                src="/manus-storage/logo-icon_e95cb902.png"
                alt="Rajiv Kumar"
                className="w-6 h-6"
              />
              <span className="text-sm text-muted-foreground">
                © 2024 Rajiv R Kumar Mohan Upadhyay. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
