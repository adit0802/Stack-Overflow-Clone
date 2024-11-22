import React from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import "./QuestionList.css";

const QuestionList = ({ questions }) => {
  return (
    <div className="questions">
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionItem key={question.question_id} question={question} />
        ))
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default QuestionList;
