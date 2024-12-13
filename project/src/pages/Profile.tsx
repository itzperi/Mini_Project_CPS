import { Sidebar } from '../components/Layout/Sidebar';
import { ListeningGraph } from '../components/Stats/ListeningGraph';
import { mockListeningStats } from '../data/mockData';

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-indigo-600 rounded-full"></div>
              <div>
                <h1 className="text-2xl font-bold">User Profile</h1>
                <p className="text-gray-600">Music enthusiast</p>
              </div>
            </div>
          </div>
          <ListeningGraph stats={mockListeningStats} />
        </div>
      </main>
    </div>
  );
}