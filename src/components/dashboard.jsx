import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';

const PopulationDashboard = () => {
  const data = [
    { year: '2010', total: 408000, male: 211000, female: 196000 },
    { year: '2011', total: 417000, male: 215000, female: 201000 },
    { year: '2012', total: 424000, male: 219000, female: 204000 },
    { year: '2013', total: 431000, male: 222000, female: 208000 },
    { year: '2014', total: 438000, male: 225000, female: 212000 },
    { year: '2015', total: 445000, male: 228000, female: 216000 },
    { year: '2016', total: 451000, male: 231000, female: 219000 },
    { year: '2017', total: 457000, male: 234000, female: 222000 },
    { year: '2018', total: 464000, male: 237000, female: 226000 },
    { year: '2019', total: 470000, male: 240000, female: 229000 },
    { year: '2020', total: 476000, male: 243000, female: 232000 },
    { year: '2021', total: 483000, male: 247000, female: 235000 },
    { year: '2022', total: 492989, male: 255326, female: 237663 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900">DAG.DIG.DUG.SER</h1>
          <div className="flex items-center space-x-2">
            <img src="https://sanggaukab.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75" alt="Logo" className="h-10" />
            <span className="text-lg font-semibold">Kabupaten Sanggau</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Total Penduduk</h3>
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600 mt-2">492,989</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Laki-laki</h3>
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-indigo-600 mt-2">255,326</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Perempuan</h3>
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600 mt-2">237,663</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Trend Populasi Total</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Distribusi Gender</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="male" name="Laki-laki" fill="#4f46e5" />
                  <Bar dataKey="female" name="Perempuan" fill="#c084fc" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Statistik Tambahan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">Sex Ratio</div>
              <div className="text-2xl font-bold text-gray-900">107.43</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">Pertumbuhan Penduduk</div>
              <div className="text-2xl font-bold text-gray-900">107.43</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationDashboard;