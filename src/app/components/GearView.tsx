import { useState } from 'react';
import { Check, Package, Footprints, Backpack, Droplet, Compass, Sun } from 'lucide-react';

export function GearView() {
  const [gearItems, setGearItems] = useState([
    { id: 1, name: 'Trail Running Shoes', category: 'Footwear', checked: true, icon: Footprints },
    { id: 2, name: 'Daypack (20-30L)', category: 'Pack', checked: true, icon: Backpack },
    { id: 3, name: 'Water Filter', category: 'Hydration', checked: false, icon: Droplet },
    { id: 4, name: 'Navigation Tools', category: 'Safety', checked: true, icon: Compass },
    { id: 5, name: 'Sun Protection', category: 'Clothing', checked: false, icon: Sun },
    { id: 6, name: 'First Aid Kit', category: 'Safety', checked: true, icon: Package }
  ]);

  const [routes] = useState([
    { name: 'Pine Ridge Loop', distance: '12 mi', elevation: '2,400 ft', difficulty: 'Moderate' },
    { name: 'Cascade Trail', distance: '8 mi', elevation: '1,200 ft', difficulty: 'Easy' },
    { name: 'Summit Peak', distance: '15 mi', elevation: '3,800 ft', difficulty: 'Challenging' }
  ]);

  const toggleItem = (id: number) => {
    setGearItems(gearItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const checkedCount = gearItems.filter(i => i.checked).length;
  const totalCount = gearItems.length;

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="tracking-tight">Gear & Trail</h1>
        <p className="text-muted-foreground tracking-wide">Expedition readiness</p>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="tracking-wide">Essential Gear</h2>
          <span className="text-sm text-muted-foreground tracking-wide">
            {checkedCount}/{totalCount} ready
          </span>
        </div>

        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${(checkedCount / totalCount) * 100}%` }}
          />
        </div>

        <div className="space-y-2">
          {gearItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 transition-all"
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.checked ? 'bg-primary border-primary' : 'border-muted-foreground/30'
                }`}>
                  {item.checked && <Check className="w-5 h-5 text-white" />}
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <p className="tracking-wide">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </button>
            );
          })}
        </div>

        <button className="w-full py-4 rounded-xl bg-muted hover:bg-accent transition-colors tracking-wide">
          Add Gear Item
        </button>
      </div>

      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-5">
        <h2 className="tracking-wide">Practice Routes</h2>

        <div className="space-y-3">
          {routes.map((route, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-muted/30 border border-border space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="tracking-wide">{route.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{route.distance} · {route.elevation}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs tracking-wide ${
                  route.difficulty === 'Easy' ? 'bg-primary/10 text-primary' :
                  route.difficulty === 'Moderate' ? 'bg-secondary/30 text-secondary-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {route.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
