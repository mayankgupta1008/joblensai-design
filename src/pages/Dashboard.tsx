import {
  TrendingUp,
  Send,
  Eye,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const stats = [
  { title: "Applications Sent", value: "24", change: "+8 this week", icon: Send, color: "text-primary" },
  { title: "Profile Views", value: "156", change: "+23%", icon: Eye, color: "text-accent" },
  { title: "Responses", value: "12", change: "50% rate", icon: MessageSquare, color: "text-success" },
  { title: "Interviews", value: "4", change: "2 scheduled", icon: Calendar, color: "text-warning" },
];

const recentApplications = [
  { company: "Google", role: "Senior Frontend Developer", status: "Interview", time: "2 days ago" },
  { company: "Stripe", role: "Full Stack Engineer", status: "Applied", time: "3 days ago" },
  { company: "OpenAI", role: "Backend Engineer", status: "Viewed", time: "5 days ago" },
  { company: "Figma", role: "Product Designer", status: "Applied", time: "1 week ago" },
];

const statusColors: Record<string, string> = {
  Interview: "bg-success/20 text-success border-success/30",
  Applied: "bg-primary/20 text-primary border-primary/30",
  Viewed: "bg-accent/20 text-accent border-accent/30",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, John! 👋</h2>
          <p className="text-muted-foreground">Your AI agent is working on 3 applications right now.</p>
        </div>
        <Button className="gradient-primary border-0 shadow-glow" asChild>
          <Link to="/swipe">
            <Target className="mr-2 h-4 w-4" />
            Start Swiping
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Agent & Recent */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Agent Status */}
        <Card className="border-border bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg gradient-accent flex items-center justify-center animate-ai-pulse">
                <Sparkles className="h-4 w-4 text-accent-foreground" />
              </div>
              <div>
                <CardTitle>AI Agent</CardTitle>
                <CardDescription>Currently processing applications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Crafting email for Stripe...</span>
                <span className="text-accent">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="p-3 rounded-xl bg-secondary/50 border border-border text-sm">
              <p className="text-muted-foreground">
                "Highlighting your React experience and previous fintech projects to match Stripe's requirements..."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card className="border-border bg-card/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your latest job applications</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-primary" asChild>
              <Link to="/applications">
                View all <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app.company} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {app.company[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{app.role}</p>
                      <p className="text-xs text-muted-foreground">{app.company} • {app.time}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={statusColors[app.status]}>{app.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
