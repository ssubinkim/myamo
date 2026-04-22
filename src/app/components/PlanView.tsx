import { TrendingUp, Dumbbell, MapPin } from 'lucide-react';

export function PlanView() {
  const weeklyPlan = [
    { day: 'Monday', type: 'Walk', detail: 'Easy 4 mi', icon: MapPin },
    { day: 'Tuesday', type: 'Strength', detail: 'Lower body', icon: Dumbbell },
    { day: 'Wednesday', type: 'Walk', detail: 'Hills 5 mi', icon: TrendingUp },
    { day: 'Thursday', type: 'Rest', detail: 'Recovery', icon: null },
    { day: 'Friday', type: 'Walk', detail: 'Long 8 mi', icon: MapPin },
    { day: 'Saturday', type: 'Strength', detail: 'Full body', icon: Dumbbell },
    { day: 'Sunday', type: 'Walk', detail: 'Trail 6 mi', icon: TrendingUp }
  ];

  const milestones = [
    { week: 'Week 4', goal: '20 miles', progress: 45 },
    { week: 'Week 8', goal: '35 miles', progress: 20 },
    { week: 'Week 12', goal: '50+ miles', progress: 5 }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="tracking-tight">The Plan</h1>
        <p className="text-muted-foreground tracking-wide">Building toward your first long trail</p>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-5">
        <h2 className="tracking-wide">This Week</h2>

        <div className="space-y-2">
          {weeklyPlan.map((day, idx) => {
            const Icon = day.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  day.day === 'Sunday'
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-muted/30 border-border hover:bg-muted/50'
                }`}
              >
                <div className="w-24 text-sm text-muted-foreground tracking-wide">{day.day}</div>
                <div className="flex items-center gap-3 flex-1">
                  {Icon && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="tracking-wide">{day.type}</p>
                    <p className="text-sm text-muted-foreground">{day.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-6">
        <h2 className="tracking-wide">Milestones</h2>

        <div className="space-y-5">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="tracking-wide">{milestone.week}</p>
                  <p className="text-sm text-muted-foreground">{milestone.goal}</p>
                </div>
                <span className="text-sm text-muted-foreground">{milestone.progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-700"
                  style={{ width: `${milestone.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
