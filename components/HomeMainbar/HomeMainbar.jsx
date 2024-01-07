import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import Question from "./Questions";
import QuestionList from "./QuestionList";
const HomeMainbar = () => {

  var questionsList=[{
    id:1,
    votes:3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody:"It meant to be",
    questionTags:["java","node js","mongodb"],
    userPosted:"mano",
    time:"jan 1"

  },{
   id:2,
   votes:0,
   noOfAnswers: 2,
   questionTitle: "What is a function?",
   questionBody:"It meant to be",
   questionTags:["javascript","R","python"],
   userPosted:"mano",
   time:"jan 1"

},{
 id:3,
 votes:1,
 noOfAnswers: 0,
 questionTitle: "What is a function?",
 questionBody:"It meant to be",
 questionTags:["javascript","R","python"],
 userPosted:"mano",
 time:"jan 1"

}]
  const location = useLocation();
  // const user = 1;
  // const navigate = useNavigate();

  // const questionsList = useSelector((state) => state.questionsReducer);

  // const checkAuth = () => {
  //   if (user === null) {
  //     alert("login or signup to ask a question");
  //     navigate("/Auth");
  //   } else {
  //     navigate("/AskQuestion");
  //   }
  // };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <Link to='/AskQuestion' className='ask-btn' >Ask Question</Link>
        </div>{/* <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )} */}
         <div>
        {
        questionsList.data === null ? 
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        }
     </div>
    </div>
  );
};

export default HomeMainbar;