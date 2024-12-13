import { ListeningStats } from '../../types/music';

interface ListeningGraphProps {
  stats: ListeningStats[];
}

export function ListeningGraph({ stats }: ListeningGraphProps) {
  const maxHours = Math.max(...stats.map(stat => stat.hours));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Listening History</h3>
      <div className="flex items-end h-40 gap-2">
        {stats.map((stat) => (
          <div key={stat.date} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-indigo-600 rounded-t-md transition-all duration-500"
              style={{ height: `${(stat.hours / maxHours) * 100}%` }}
            />
            <span className="text-xs mt-2 rotate-45 origin-left">{stat.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}