import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../LeftSidebar/Sidebar";
import RightSidebar from "../RightSideBar/RightSidebar";
import QuestionList from "../QuestionList/QuestionList";
import "./HomePage.css";

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("interesting");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validSortOptions = ["activity", "votes", "creation", "hot"]; // Check valid values

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        // Validate the filter or default to "activity"
        const validFilter = validSortOptions.includes(filter)
          ? filter
          : "activity";

        const response = await axios.get(
          `https://api.stackexchange.com/2.3/questions`,
          {
            params: {
              order: "desc",
              sort: validFilter,
              site: "stackoverflow",
              pagesize: 20,
            },
          }
        );
        setQuestions(response.data.items);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => fetchQuestions(), 300); // Debounce API calls
    return () => clearTimeout(debounceFetch);
  }, [filter]);

  return (
    <div className="homepage">
      <Header />
      <Sidebar />

      <main className="main-content">
        <div className="top-section">
          <h2>Top Questions</h2>
        </div>

        <div className="filters">
          {["interesting", "bountied", "hot", "week", "month"].map((item) => (
            <button
              key={item}
              className={`filter-button ${filter === item ? "active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button className="ask-btn1">Ask Question</button>
        </div>

        {loading && <p>Loading questions...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <QuestionList questions={questions} />}
      </main>

      <RightSidebar />
    </div>
  );
}

export default HomePage;
