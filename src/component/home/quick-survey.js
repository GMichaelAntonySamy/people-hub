import React, { useState } from "react";
import Headings from "../shared/heading";
import { motion } from "framer-motion";

const QuickSurvey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const surveyData = [
    {
      title: "How satisfied are you with our services?",
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
    },
    {
      title: "Would you recommend us to others?",
      options: ["Yes, definitely", "Maybe", "Not sure", "Probably not", "No"],
    },
    {
      title: "Was our support team helpful?",
      options: ["Extremely helpful", "Somewhat helpful", "Neutral", "Not helpful", "Very unhelpful"],
    },
    {
      title: "How likely are you to use our service again?",
      options: ["Very likely", "Likely", "Neutral", "Unlikely", "Very unlikely"],
    },
  ];

  const handleOptionChange = (option) => {
    setResponses({
      ...responses,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < surveyData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = surveyData[currentQuestionIndex];

  return (
    <div style={{ margin: "auto",marginTop:'20px'}}>
      <Headings text={"Quick Survey"} />
      {/* Question Section */}
      {!showSummary ? (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background: "#f8f9fa",
            marginTop:'20px'
          }}
        >
          <div style={{ fontWeight: "600",fontSize:'20px', marginBottom: "10px" }}>{currentQuestion.title}</div>
          <div>
            {currentQuestion.options.map((option, optIndex) => (
              <label
                key={optIndex}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  cursor: "pointer",
                  fontSize:'18px',
                  fontWeight: 600,
                }}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={responses[currentQuestionIndex] === option}
                  onChange={() => handleOptionChange(option)}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: currentQuestionIndex === 0 ? "#ccc" : "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {currentQuestionIndex === surveyData.length - 1 ? "Finish" : "Submit & Next"}
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            background: "#f8f9fa",
            marginTop:'20px'
          }}
        >
          <h3 style={{ fontWeight: "600", marginBottom: "10px" }}>Survey Summary</h3>
          {surveyData.map((survey, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{index + 1}. {survey.title}</strong>
              <div>{responses[index] || "No response given"}</div>
            </div>
          ))}
          <button
            onClick={() => alert("Thank you for completing the survey!")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit Survey
          </button>
        </motion.div>
      )}
      {/* Navigation Bar */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        {surveyData.map((_, index) => (
          <div
            key={index}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: index === currentQuestionIndex ? "#7864ac" : "#f8f9fa",
              color: index === currentQuestionIndex ? "#fff" : "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              margin: "0 5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSurvey;
