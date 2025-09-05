import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/data/site"

export default function Portfolio() {
  const socialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return Github
      case "linkedin":
        return Linkedin
      case "twitter":
      case "x":
        return Twitter
      case "email":
      case "gmail":
        return Mail
      default:
        return ExternalLink
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 xl:gap-8">
          {/* About Me - Tall Card (Top Left) */}
          <Card
            id="about"
            className="md:col-span-2 lg:col-span-2 xl:col-span-3 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="Your profile photo" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold shadow-none">{"DBM"}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground font-serif text-balance">About Me</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">Bangalore,India</span>
                  </div>
                </div>
              </div>
              <p className="text-card-foreground leading-relaxed font-sans flex-1 text-sm text-pretty">
  Hi, I’m <b>Darshan B M</b>, a <b>21-year-old Computer Science Engineering - Data Science student</b> exploring the world of <b>Data Science and Machine Learning</b>.<br /><br />
  I’ve been learning and practicing with <b>Python, NumPy, Pandas, Matplotlib, and Seaborn</b> to analyze and visualize data.<br /><br />
  I also have beginner-level experience in <b>data preprocessing, feature engineering, machine learning, and deep learning</b>.<br /><br />
  For visualization and insights, I use <b>Tableau and Power BI</b>, and I work with databases like <b>MySQL and MongoDB</b>.<br /><br />
  I’ve started building projects with <b>Flask, FastAPI, and Streamlit</b>, and I manage my workflow using <b>Git, GitHub, Jupyter, VS Code, and Google Colab</b>.<br /><br />
  I’m passionate about <b>growing my skills step by step</b> and excited to apply them to solve <b>real-world problems</b>.
</p>

              {/* 
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="font-sans text-xs rounded-full">HubSpot CMS</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">JavaScript</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">React</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Node.js</Badge>
              </div>
              */}
            </div>
          </Card>

          {/* Experience - Medium Card (Top Middle) */}
          {/* 
          <Card
            id="experience"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">Experience</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary font-sans">TC</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">
                      Senior Full Stack Developer
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">TechCorp Inc. • 2022 - Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary font-sans">ST</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">Full Stack Developer</h4>
                    <p className="text-xs text-muted-foreground font-sans">StartupXYZ • 2020 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          */}

          {/* Status - Square Card (Top Right) */}
          {/* commented out Available/status section at your request; keeping code for future use */}
          {/*
          <Card className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-semibold text-card-foreground font-sans">Available</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-sans">Open to new opportunities</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">Projects</span>
                  <span className="font-semibold text-card-foreground font-sans">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">Experience</span>
                  <span className="font-semibold text-card-foreground font-sans">5 years</span>
                </div>
              </div>
            </div>
          </Card>
          */}

          {/* Skills - Square Card (Top Right) */}
          <Card
            id="skills"
            className="md:col-span-1 lg:col-span-1 xl:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-serif text-balance">Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 font-serif">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs rounded-full font-sans">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="text-xs rounded-full font-sans">
                      Numpy
                    </Badge>
                    <Badge variant="secondary" className="text-xs rounded-full font-sans">
                      SQL
                    </Badge>
                    <Badge variant="secondary" className="text-xs rounded-full font-sans">
                      NoSql
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 font-serif">Technologies &amp; Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs rounded-full font-sans">
                      Github
                    </Badge>
                    <Badge variant="outline" className="text-xs rounded-full font-sans">
                      VS Code
                    </Badge>
                    <Badge variant="outline" className="text-xs rounded-full font-sans">
                      Excel
                    </Badge>
                    <Badge variant="outline" className="text-xs rounded-full font-sans">
                      Tableau
                    </Badge>
                    <Badge variant="outline" className="text-xs rounded-full font-sans">
                      PowerBI
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links - Square Card (Bottom Left) */}
          <Card
            id="contact"
            className="md:col-span-1 lg:col-span-1 xl:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-semibold text-card-foreground mb-4 font-serif text-balance">Connect</h3>
              <div className="space-y-3">
                {siteConfig.socials.map((s) => {
                  const Icon = socialIcon(s.label)
                  return (
                    <a
                      key={s.label + s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-sans">{s.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </Card>

          {/* Selected Projects - Large Card (Bottom Right) */}
          <Card
            id="projects"
            className="md:col-span-2 lg:col-span-3 xl:col-span-4 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-serif text-balance">Notable Projects</h3>
              <div className="space-y-4">
                {siteConfig.projects.map((p) => {
                  // prefer liveUrl if present, otherwise fallback to repoUrl
                  const primaryUrl = p.liveUrl || p.repoUrl || "#"
                  return (
                    <div key={p.title} className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground font-serif">{p.title}</h4>
                        {p.description ? (
                          <p className="text-sm text-muted-foreground mb-2 font-sans text-pretty">{p.description}</p>
                        ) : null}
                        {p.tech?.length ? (
                          <div className="flex flex-wrap gap-1">
                            {p.tech.map((t) => (
                              <Badge key={t} variant="outline" className="text-xs font-sans rounded-full">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="ml-3 font-sans bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-200 rounded-full"
                      >
                        <a href={primaryUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open ${p.title}`}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>

          {/* Resume - New Card (Right of Projects on large screens) */}
          <Card
            id="resume"
            className="sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-3 font-serif text-balance">Resume</h3>
              <p className="text-sm text-muted-foreground mb-4 font-sans text-pretty">
                Download my resume as a PDF. Keep in touch for opportunities and collaborations.
              </p>
              <Button asChild className="font-sans rounded-full">
                <a href={siteConfig.resume.url} download={siteConfig.resume.fileName} aria-label="Download resume PDF">
                  <span className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {siteConfig.resume.label}
                  </span>
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-sans">Built with TypeScript,JavaScript,Next.js,React19 • © 2025 Darshan B M</p>
        </footer>
      </div>
    </div>
  )
}
