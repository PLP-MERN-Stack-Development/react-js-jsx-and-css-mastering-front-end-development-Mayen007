import React, { useEffect, useState } from "react";
import Card from "./Card";

// Phase 2: Add loading and error state handling
const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json.slice(0, 20)); // limit to 20 for demo
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-red-500">Error: {error}</span>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-2 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">API Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className="h-full flex flex-col justify-between card-theme"
          >
            <div>
              <h3
                className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-300 truncate"
                title={item.title}
              >
                {item.title}
              </h3>
              <p className="text-theme mb-4 line-clamp-3">{item.body}</p>
            </div>
            <div className="mt-auto pt-2 text-xs text-gray-400">
              Post ID: {item.id}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ApiData;
