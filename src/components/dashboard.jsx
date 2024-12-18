import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Filter, Menu, X } from 'lucide-react';

const PopulationDashboard = () => {
  const [startYear, setStartYear] = useState('2010');
  const [endYear, setEndYear] = useState('2022');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedMetrics, setSelectedMetrics] = useState({
    total: true,
    male: true,
    female: true,
    ratio: true,
    growth: true
  });

  const fullData = [
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

  const filteredData = fullData.filter(
    item => item.year >= startYear && item.year <= endYear
  );

  const handleMetricToggle = (metric) => {
    setSelectedMetrics(prev => ({
      ...prev,
      [metric]: !prev[metric]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed at top */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 truncate">DAG.DIG.DUG.SER</h1>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <img src="https://sanggaukab.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75" alt="Logo" className="h-8 md:h-10" />
                <span className="text-sm md:text-lg font-semibold">Kabupaten Sanggau</span>
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isFilterOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block border-t md:border-t-0 p-4 bg-white`}>
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Filters</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Year Range Selection */}
                <div className="flex flex-wrap gap-4">
                  <div className="w-full sm:w-auto">
                    <label className="block text-sm text-gray-600 mb-1">Start Year</label>
                    <select 
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      {fullData.map(item => (
                        <option key={item.year} value={item.year}>{item.year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full sm:w-auto">
                    <label className="block text-sm text-gray-600 mb-1">End Year</label>
                    <select 
                      value={endYear}
                      onChange={(e) => setEndYear(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      {fullData.map(item => (
                        <option key={item.year} value={item.year}>{item.year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Metrics Selection */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.total}
                      onChange={() => handleMetricToggle('total')}
                      className="rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-sm">Total</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.male}
                      onChange={() => handleMetricToggle('male')}
                      className="rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-sm">Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.female}
                      onChange={() => handleMetricToggle('female')}
                      className="rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-sm">Female</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.ratio}
                      onChange={() => handleMetricToggle('ratio')}
                      className="rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-sm">Ratio</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedMetrics.growth}
                      onChange={() => handleMetricToggle('growth')}
                      className="rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-sm">Growth</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 space-y-6 mt-4">
        {/* Stats Cards */}
        {selectedMetrics.total && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium">Total Penduduk</h3>
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">
                {filteredData[filteredData.length - 1].total.toLocaleString()}
              </p>
            </div>

            {selectedMetrics.male && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-medium">Laki-laki</h3>
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-indigo-600 mt-2">
                  {filteredData[filteredData.length - 1].male.toLocaleString()}
                </p>
              </div>
            )}

            {selectedMetrics.female && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-medium">Perempuan</h3>
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-2">
                  {filteredData[filteredData.length - 1].female.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {selectedMetrics.total && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-medium mb-4">Trend Populasi Total</h3>
              <div className="h-60 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={filteredData}>
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
          )}

          {(selectedMetrics.male || selectedMetrics.female) && (
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-medium mb-4">Distribusi Gender</h3>
              <div className="h-60 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={filteredData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {selectedMetrics.male && (
                      <Bar dataKey="male" name="Laki-laki" fill="#4f46e5" />
                    )}
                    {selectedMetrics.female && (
                      <Bar dataKey="female" name="Perempuan" fill="#c084fc" />
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Additional Stats */}
        {(selectedMetrics.ratio || selectedMetrics.growth) && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-base md:text-lg font-medium mb-4">Statistik Tambahan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedMetrics.ratio && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Sex Ratio</div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">107.43</div>
                </div>
              )}
              {selectedMetrics.growth && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Pertumbuhan Penduduk</div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">107.43</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopulationDashboard;