import React, { useState } from "react";
import axios from "axios";
import "./ChatTutor.css"; // Assuming you still have your CSS file
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(""); 
  const [selectedPage, setSelectedPage] = useState('home');
 
  const handleCourseChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedPage(selectedValue);
  
      // Navigate to the corresponding page based on the selected option
      if (selectedValue === 'class510') navigate('/class510');
      else if (selectedValue === 'puc') navigate('/puc');
      else if (selectedValue === 'ugCourses') navigate('/ugCourses');
      else if (selectedValue === 'competitiveExams') navigate('/competitiveExams');
  };
  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    /*const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages); // Optimistically update messages with user's input
    setInput(""); // Clear the input field*/
    const userMessage = { sender: "user", text: input };
    const conversationHistoryToSend = [...messages]; // This is the history BEFORE the new message

    // Optimistically update the UI with the user's new message
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput(""); // Clear the input field


    try {
      // Make a POST request to the backend API
      // Changed the URL to '/chatbot' to match server.js routing
      const response = await axios.post("http://localhost:5000/chatbot", {
        message: input,
        //conversationHistory: newMessages, // Send the updated history for context
        conversationHistory: conversationHistoryToSend,
      });

      const botReply = response.data.reply; // Get the reply from the backend
      // Update messages again with the bot's reply
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botReply }]);

    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      // Add a user-friendly error message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="chat-tutor-container">
    {/* Navbar Section */}
      <header>
        <h3>Student Guide</h3>
      </header>
      <nav>
        <a href="/home">HOME</a>
        <a href="#">
          SELECT COURSE
          <div className="dropdown-container">
            <form>
              <select onChange={handleCourseChange} defaultValue="">
                <option value="" disabled>Select option</option>
                <option value="class510">Class 5-10</option>
                <option value="puc">PUC</option>
                <option value="ugCourses">UG Courses</option>
                <option value="competitiveExams">Competitive Exams</option>
              </select>
            </form>
          </div>
        </a>
        <a href="/interests">INTERESTS</a>
        <a href="/chatbot">CHATBOT</a>
        <a href="/help">HELP</a>
      </nav>

      <h2>Hi! How can I help you?</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            <strong>{msg.sender === "user" ? "You: " : "Chatbot: "}</strong>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { // Allow sending message with Enter key
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button className="send-btn" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;