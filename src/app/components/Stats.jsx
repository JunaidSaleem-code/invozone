const stats = [
  { label: "Products Developed", value: "400+" },
  { label: "Customers", value: "300+" },
  { label: "Countries", value: "120+" }
];

export function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-5xl font-bold text-indigo-600">{stat.value}</div>
              <div className="text-xl text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}