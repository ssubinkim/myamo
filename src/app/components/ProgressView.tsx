import { TrendingUp, Award, Target } from 'lucide-react';

export function ProgressView() {
  const stats = [
    { label: 'Total Miles', value: '142', change: '+12 this week', icon: TrendingUp },
    { label: 'Longest Walk', value: '8.2 mi', change: 'April 15', icon: Award },
    { label: 'Active Days', value: '23/30', change: '77% consistency', icon: Target }
  ];

  const weeklyData = [
    { week: 'Week 1', miles: 12 },
    { week: 'Week 2', miles: 18 },
    { week: 'Week 3', miles: 22 },
    { week: 'Week 4', miles: 28 },
    { week: 'Week 5', miles: 24 },
    { week: 'Week 6', miles: 32 }
  ];

  const maxMiles = Math.max(...weeklyData.map(w => w.miles));

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="tracking-tight">Progress</h1>
        <p className="text-muted-foreground tracking-wide">Your journey so far</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground tracking-wide">{stat.label}</p>
                  <p className="text-3xl tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.change}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-6">
        <h2 className="tracking-wide">Weekly Miles</h2>

        <div className="space-y-4">
          {weeklyData.map((data, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground tracking-wide">{data.week}</span>
                <span className="tracking-wide">{data.miles} mi</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700"
                  style={{ width: `${(data.miles / maxMiles) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-6 border border-primary/20">
        <div className="space-y-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h3 className="tracking-wide">Strong Progress</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You're building steady endurance. Keep this consistency and you'll be trail-ready in no time.
          </p>
        </div>
      </div>
    </div>
  );
}
