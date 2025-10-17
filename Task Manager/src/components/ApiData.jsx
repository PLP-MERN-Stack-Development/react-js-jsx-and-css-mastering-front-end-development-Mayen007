import React, { useEffect, useState } from "react";
import Card from "./Card";

/**
 * ApiData component fetches and displays posts from a public API (JSONPlaceholder).
 * Features:
 * - Fetches data and displays in a grid layout
 * - Loading and error states
 * - Pagination
 * - Search/filter functionality
 * @returns {JSX.Element}
 */
const POSTS_PER_PAGE = 6;
const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json.slice(0, 30)); // limit to 30 for demo
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  // Filter data by search
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.body.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic (applies after filtering)
  const totalPages = Math.ceil(filteredData.length / POSTS_PER_PAGE) || 1;
  const paginatedData = filteredData.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // Reset to page 1 when search changes
  useEffect(() => {
    setPage(1);
  }, [search]);

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
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full max-w-md px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-theme text-theme"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No results found.
          </div>
        ) : (
          paginatedData.map((item) => (
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
          ))
        )}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50 hover:enabled:bg-gray-300 dark:hover:enabled:bg-gray-600 cursor-pointer"
        >
          Previous
        </button>
        <span className="font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50 hover:enabled:bg-gray-300 dark:hover:enabled:bg-gray-600 cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ApiData;
