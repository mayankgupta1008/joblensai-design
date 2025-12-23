import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Check,
  Star,
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  Target,
  Mail,
  FileText,
  Bot,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Target,
    title: "Swipe on Jobs",
    description: "Browse curated job listings tailored to your skills. Swipe right on roles you love, left on ones you don't.",
  },
  {
    icon: Bot,
    title: "AI Agent Outreach",
    description: "Our LangGraph-powered agent crafts personalized emails and applies on your behalf automatically.",
  },
  {
    icon: FileText,
    title: "Smart Resume Match",
    description: "Your resume is analyzed and matched with job requirements for higher success rates.",
  },
  {
    icon: Mail,
    title: "Automated Emails",
    description: "Personalized cover letters and emails sent directly to hiring managers. No templates.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Upload Your Resume",
    description: "Add your resume and let our AI understand your skills, experience, and career goals.",
  },
  {
    step: "02",
    title: "Swipe on Jobs",
    description: "Browse job cards Tinder-style. Swipe right on jobs you want, left on ones you don't.",
  },
  {
    step: "03",
    title: "AI Takes Over",
    description: "Our agent researches the company, writes a personalized email, and applies for you.",
  },
  {
    step: "04",
    title: "Track & Succeed",
    description: "Monitor application status, responses, and interview invites all in one place.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out SwipeJobs",
    features: ["10 swipes per day", "5 AI applications/month", "Basic resume parsing", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For active job seekers",
    features: ["Unlimited swipes", "50 AI applications/month", "Advanced resume optimization", "Priority AI agent", "Application analytics", "Interview prep tips"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    description: "Maximum job hunting power",
    features: ["Everything in Pro", "Unlimited AI applications", "Direct recruiter connections", "LinkedIn integration", "Resume A/B testing", "Dedicated success manager"],
    popular: false,
  },
];

const stats = [
  { value: "50K+", label: "Jobs Applied" },
  { value: "12K+", label: "Interviews Landed" },
  { value: "89%", label: "Response Rate" },
  { value: "4.9★", label: "User Rating" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Swipe<span className="text-gradient">Jobs</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <Button size="sm" className="gradient-primary border-0 shadow-glow" asChild>
              <Link to="/swipe">Start Swiping</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-glow opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 gradient-accent border-0 text-accent-foreground px-4 py-1.5 animate-fade-in">
              <Sparkles className="h-3 w-3 mr-1" /> AI-Powered Job Applications
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in">
              Swipe Right on
              <span className="block text-gradient">Your Dream Job</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              The Tinder for job hunting. Swipe on jobs you love, and let our AI agent 
              craft personalized applications and send them for you. Land interviews, not just applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gradient-primary border-0 text-lg px-8 h-14 shadow-glow" asChild>
                <Link to="/swipe">
                  Start Swiping Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe Preview */}
          <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl rounded-3xl" />
            <div className="relative max-w-lg mx-auto">
              {/* Mock Job Card */}
              <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-muted p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-14 w-14 rounded-xl gradient-accent flex items-center justify-center text-xl font-bold text-accent-foreground">
                      G
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Senior Frontend Developer</h3>
                      <p className="text-muted-foreground">Google • Mountain View, CA</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">$180k-$250k</Badge>
                    <Badge variant="secondary">Remote OK</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm flex-1">
                    Join our team to build the next generation of web experiences. 
                    We're looking for passionate engineers who love creating beautiful, 
                    performant user interfaces at scale...
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">Posted 2 hours ago</span>
                    <span className="text-xs text-accent">92% Match</span>
                  </div>
                </div>
                {/* Action buttons overlay */}
                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-8">
                  <button className="h-16 w-16 rounded-full gradient-pass flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <X className="h-8 w-8 text-white" />
                  </button>
                  <button className="h-20 w-20 rounded-full gradient-like flex items-center justify-center shadow-lg shadow-accent/30 transform hover:scale-110 transition-transform">
                    <Heart className="h-10 w-10 text-white" />
                  </button>
                </div>
              </div>

              {/* Background cards */}
              <div className="absolute -right-8 top-8 w-full h-full rounded-2xl border border-border bg-card/50 -z-10 rotate-3" />
              <div className="absolute -left-8 top-8 w-full h-full rounded-2xl border border-border bg-card/30 -z-20 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Job Hunting,<span className="text-gradient"> Reinvented</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop spending hours on applications. Let AI do the heavy lifting while you focus on what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-border bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Four Steps to <span className="text-gradient-accent">Your Next Role</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From resume to interview in just a few swipes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="text-6xl font-bold text-gradient opacity-20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, <span className="text-gradient">Transparent</span> Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free. Upgrade when you're ready to supercharge your job search.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden border-border ${
                  plan.popular
                    ? "ring-2 ring-primary bg-card shadow-lg shadow-primary/10"
                    : "bg-card/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 gradient-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "gradient-primary border-0 shadow-glow" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/swipe">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="absolute inset-0 gradient-glow" />
            <div className="relative text-center py-20 px-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of job seekers who've transformed their search with AI-powered applications.
              </p>
              <Button size="lg" className="gradient-primary border-0 shadow-glow h-14 px-8 text-lg" asChild>
                <Link to="/swipe">
                  Start Swiping Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">SwipeJobs</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered job applications that get you hired.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Career Tips</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resume Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 SwipeJobs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
