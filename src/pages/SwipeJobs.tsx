import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  X,
  RotateCcw,
  Star,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Briefcase,
  Zap,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  remote: boolean;
  posted: string;
  match: number;
  skills: string[];
  description: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "G",
    location: "Mountain View, CA",
    salary: "$180k - $250k",
    type: "Full-time",
    remote: true,
    posted: "2 hours ago",
    match: 92,
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    description: "Join our team to build the next generation of web experiences. We're looking for passionate engineers who love creating beautiful, performant user interfaces at scale.",
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "Stripe",
    logo: "S",
    location: "San Francisco, CA",
    salary: "$160k - $220k",
    type: "Full-time",
    remote: true,
    posted: "5 hours ago",
    match: 88,
    skills: ["Python", "React", "PostgreSQL", "AWS"],
    description: "Help us build the economic infrastructure for the internet. Work on challenging problems at scale and ship code that powers millions of businesses.",
  },
  {
    id: "3",
    title: "Product Designer",
    company: "Figma",
    logo: "F",
    location: "New York, NY",
    salary: "$140k - $190k",
    type: "Full-time",
    remote: false,
    posted: "1 day ago",
    match: 85,
    skills: ["UI/UX", "Figma", "Prototyping", "User Research"],
    description: "Design the future of collaborative design tools. Work closely with engineers and PMs to ship features used by millions of designers worldwide.",
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "OpenAI",
    logo: "O",
    location: "San Francisco, CA",
    salary: "$200k - $300k",
    type: "Full-time",
    remote: true,
    posted: "3 hours ago",
    match: 94,
    skills: ["Python", "ML/AI", "Distributed Systems", "Kubernetes"],
    description: "Build the infrastructure that powers AI models serving billions of requests. Work on cutting-edge technology that's shaping the future of AI.",
  },
  {
    id: "5",
    title: "Mobile Developer",
    company: "Spotify",
    logo: "S",
    location: "Stockholm, Sweden",
    salary: "€90k - €130k",
    type: "Full-time",
    remote: true,
    posted: "12 hours ago",
    match: 79,
    skills: ["React Native", "iOS", "Android", "TypeScript"],
    description: "Create the best music streaming experience on mobile. Work on features used by hundreds of millions of users every day.",
  },
];

export default function SwipeJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(mockJobs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [appliedCount, setAppliedCount] = useState(0);

  const currentJob = jobs[currentIndex];
  const hasMoreJobs = currentIndex < jobs.length;

  const handleSwipe = useCallback((direction: "left" | "right") => {
    if (!hasMoreJobs) return;

    setSwipeDirection(direction);

    if (direction === "right") {
      setAppliedCount((prev) => prev + 1);
      toast({
        title: "Applied! 🎉",
        description: `AI Agent is crafting your application for ${currentJob.title} at ${currentJob.company}`,
      });
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSwipeDirection(null);
      setDragOffset(0);
    }, 300);
  }, [currentIndex, currentJob, hasMoreJobs]);

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      if (appliedCount > 0) setAppliedCount((prev) => prev - 1);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const cardCenter = window.innerWidth / 2;
    const offset = clientX - cardCenter;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragOffset) > 100) {
      handleSwipe(dragOffset > 0 ? "right" : "left");
    } else {
      setDragOffset(0);
    }
  };

  const getCardStyle = () => {
    if (swipeDirection) {
      return swipeDirection === "right" ? "animate-swipe-right" : "animate-swipe-left";
    }
    return "";
  };

  const getRotation = () => {
    return dragOffset * 0.05;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">SwipeJobs</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-medium">{appliedCount}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm mx-auto">
          {/* Progress */}
          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Daily Progress</span>
              <span className="font-medium">{currentIndex}/{jobs.length} viewed</span>
            </div>
            <Progress value={(currentIndex / jobs.length) * 100} className="h-2" />
          </div>

          {/* Card Stack */}
          <div className="relative h-[450px] sm:h-[480px] md:h-[520px]">
            {hasMoreJobs ? (
              <>
                {/* Background cards */}
                {currentIndex + 2 < jobs.length && (
                  <div className="absolute inset-0 rounded-2xl border border-border bg-card/30 scale-[0.9] translate-y-4 -z-20" />
                )}
                {currentIndex + 1 < jobs.length && (
                  <div className="absolute inset-0 rounded-2xl border border-border bg-card/60 scale-95 translate-y-2 -z-10" />
                )}

                {/* Main Card */}
                <Card
                  className={cn(
                    "absolute inset-0 rounded-2xl border-border bg-card overflow-hidden cursor-grab active:cursor-grabbing transition-transform duration-200",
                    getCardStyle()
                  )}
                  style={{
                    transform: isDragging ? `translateX(${dragOffset}px) rotate(${getRotation()}deg)` : undefined,
                  }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDrag}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDrag}
                  onTouchEnd={handleDragEnd}
                >
                  {/* Like/Pass Indicators */}
                  <div
                    className={cn(
                      "absolute top-8 left-6 z-10 px-4 py-2 rounded-lg border-4 border-success text-success font-bold text-2xl -rotate-12 opacity-0 transition-opacity",
                      dragOffset > 50 && "opacity-100"
                    )}
                  >
                    APPLY
                  </div>
                  <div
                    className={cn(
                      "absolute top-8 right-6 z-10 px-4 py-2 rounded-lg border-4 border-destructive text-destructive font-bold text-2xl rotate-12 opacity-0 transition-opacity",
                      dragOffset < -50 && "opacity-100"
                    )}
                  >
                    PASS
                  </div>

                  <div className="h-full flex flex-col p-4 sm:p-5 md:p-6">
                    {/* Company Header */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="h-12 w-12 sm:h-14 md:h-16 sm:w-14 md:w-16 rounded-xl gradient-accent flex items-center justify-center text-xl sm:text-2xl font-bold text-accent-foreground shrink-0">
                        {currentJob.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg sm:text-xl font-bold truncate">{currentJob.title}</h2>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Building2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="truncate">{currentJob.company}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className={cn(
                        "shrink-0 text-xs sm:text-sm",
                        currentJob.match >= 90 ? "gradient-like text-success-foreground border-0" : ""
                      )}>
                        {currentJob.match}%
                      </Badge>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                        <span className="truncate">{currentJob.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                        <span className="truncate">{currentJob.salary}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                        <span>{currentJob.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                        <span>{currentJob.posted}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {currentJob.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-secondary/50 text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {currentJob.skills.length > 3 && (
                        <Badge variant="outline" className="bg-secondary/50 text-xs">
                          +{currentJob.skills.length - 3}
                        </Badge>
                      )}
                      {currentJob.remote && (
                        <Badge className="gradient-accent border-0 text-accent-foreground text-xs">
                          Remote
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm flex-1 line-clamp-3 sm:line-clamp-4">
                      {currentJob.description}
                    </p>

                    {/* AI Agent Preview */}
                    <div className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-xl bg-secondary/50 border border-border">
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full gradient-accent flex items-center justify-center animate-ai-pulse">
                          <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent-foreground" />
                        </div>
                        <span className="text-muted-foreground">AI Agent ready to apply</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </>
            ) : (
              /* No More Cards */
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <Star className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">All caught up!</h3>
                <p className="text-muted-foreground mb-6">
                  You've viewed all available jobs. Check back later for more matches.
                </p>
                <div className="text-lg font-semibold text-gradient">
                  {appliedCount} applications sent
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {hasMoreJobs && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
                onClick={handleUndo}
                disabled={currentIndex === 0}
              >
                <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="icon"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full gradient-pass shadow-lg"
                onClick={() => handleSwipe("left")}
              >
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
              <Button
                size="icon"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full gradient-like shadow-lg shadow-accent/30"
                onClick={() => handleSwipe("right")}
              >
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Star className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
