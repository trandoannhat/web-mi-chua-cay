export default function OrderTracking() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Track Order</h1>
      <input className="input mt-4" placeholder="Order code" />
      <button className="mt-4 bg-primary text-white px-6 py-2 rounded">
        Track
      </button>
    </div>
  );
}
