import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoTriangleOutline } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";
import "./QuestionItem.css";

const QuestionItem = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question.title}</h3>
      <p>
        {question.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </p>
      <div className="meta">
        <span>
          <IoTriangleOutline className="icon1" title="Votes" /> {question.score}
        </span>
        <span>
          <LiaCommentsSolid className="icon" title="Answers" />{" "}
          {question.answer_count}
        </span>
        <span>
          <MdOutlineRemoveRedEye className="icon" title="Views" />{" "}
          {question.view_count}
        </span>
      </div>
      <span className="asked">
        Asked {new Date(question.creation_date * 1000).toLocaleString()}
      </span>
    </div>
  );
};

export default QuestionItem;
