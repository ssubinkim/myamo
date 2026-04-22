import { useState } from 'react';
import { Droplets, Moon, Footprints, Plus, Check } from 'lucide-react';

export function TodayView() {
  const [waterGlasses, setWaterGlasses] = useState(4);
  const [sleepHours, setSleepHours] = useState(7);
  const [activeMinutes, setActiveMinutes] = useState(45);
  const [walks, setWalks] = useState([
    { id: 1, title: 'Morning Trail', distance: '3.2 mi', duration: '52 min', completed: true },
    { id: 2, title: 'Evening Hike', distance: '5.0 mi', duration: '1h 25m', completed: false }
  ]);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="tracking-tight">{greeting()}</h1>
        <p className="text-muted-foreground tracking-wide">Sunday, April 20</p>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-6">
        <h2 className="tracking-wide">Steady Steps</h2>

        <div className="space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="tracking-wide">Water</p>
                  <p className="text-sm text-muted-foreground">{waterGlasses} glasses</p>
                </div>
              </div>
              <button
                onClick={() => setWaterGlasses(waterGlasses + 1)}
                className="w-12 h-12 rounded-full bg-muted hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${Math.min((waterGlasses / 8) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="tracking-wide">Sleep</p>
                  <p className="text-sm text-muted-foreground">{sleepHours} hours</p>
                </div>
              </div>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-500"
                style={{ width: `${Math.min((sleepHours / 8) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Footprints className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="tracking-wide">Active</p>
                  <p className="text-sm text-muted-foreground">{activeMinutes} minutes</p>
                </div>
              </div>
              <button
                onClick={() => setActiveMinutes(activeMinutes + 15)}
                className="w-12 h-12 rounded-full bg-muted hover:bg-accent transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${Math.min((activeMinutes / 60) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-5">
        <h2 className="tracking-wide">Today's Walks</h2>

        <div className="space-y-3">
          {walks.map(walk => (
            <div key={walk.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
              <button
                onClick={() => setWalks(walks.map(w => w.id === walk.id ? {...w, completed: !w.completed} : w))}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  walk.completed ? 'bg-primary border-primary' : 'border-muted-foreground/30 hover:border-primary'
                }`}
              >
                {walk.completed && <Check className="w-5 h-5 text-white" />}
              </button>
              <div className="flex-1">
                <p className="tracking-wide">{walk.title}</p>
                <p className="text-sm text-muted-foreground">{walk.distance} · {walk.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-colors tracking-wide">
          Log New Walk
        </button>
      </div>
    </div>
  );
}
