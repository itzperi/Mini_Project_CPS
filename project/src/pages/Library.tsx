import { Sidebar } from '../components/Layout/Sidebar';

export function Library() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Your Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Library content will go here */}
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600">Your playlists and saved songs will appear here</p>
          </div>
        </div>
      </main>
    </div>
  );
}