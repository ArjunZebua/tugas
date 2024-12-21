import { useState } from "react";
import { Send } from "lucide-react";

const ContactUs = () => {
  const [message, setMessage] = useState(""); // State to hold the message input
  const [isMessageSent, setIsMessageSent] = useState(false); // State to track if the message is sent
  const [sentMessage, setSentMessage] = useState(""); // State to hold the sent message

  const handleSendMessage = () => {
    if (message.trim()) {
      setSentMessage(message); // Store the sent message
      setIsMessageSent(true); // Set message sent to true
      setMessage(""); // Clear the message input field after sending
    }
  };

  return (
    <div className="bg-black min-h-screen py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">
        Contact Us
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
        <div className="space-y-6">
          <p className="text-xl text-black">
            <span className="font-semibold text-blue-600">Name:</span> Arjun
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold text-blue-600">Date of Birth:</span> 1999-01-01
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold text-blue-600">Faculty:</span> Computer Science
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold text-blue-600">Major:</span> Software Engineering
          </p>
          <p className="text-xl text-black">
            <span className="font-semibold text-blue-600">Hobby:</span> Coding, Gaming
          </p>
        </div>

        <div className="mt-8">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-4 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
          />
        </div>

        <div className="mt-8">
          <button
            onClick={handleSendMessage}
            className="w-full py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-lg font-semibold shadow-md transform hover:scale-105 transition-all"
          >
            <Send className="inline mr-2" />
            Send Message
          </button>
        </div>

        {/* Success message after sending the message */}
        {isMessageSent && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            <p>Your message has been sent successfully! Here s what you sent:</p>
            <div className="mt-2 p-4 bg-gray-100 border rounded-lg">
              <p className="text-black">{sentMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
