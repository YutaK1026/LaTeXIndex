"use client"
import nodemailer from 'nodemailer';
import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null); // State for success/error message

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendMail = async () => {
    setIsSending(true);
    setMessage(null); // Clear any previous messages

    try {
      // Send the form data to your API endpoint
      const response = await fetch("/api/sendmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: formData.subject,
          content: formData.content,
          name: formData.name,
          email: formData.email,
        })
      });

      // Check the response status and show a message based on it
      if (response.status === 200) {
        // Successful response, set the success message
        setMessage("Email sent successfully!");
        // You can also reset the form here if needed
        setFormData({
          name: "",
          email: "",
          subject: "",
          content: "",
        });
      } else {
        // Handle other response status codes here
        setMessage("Error sending email. Status code: " + response.status);
      }
    } catch (error: any) {
      // Handle any errors that occur during the API request
      setMessage("Error sending email: " + error.message);
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4">お問い合わせフォーム</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium"
          >
            名前:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium"
          >
            メールアドレス:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium"
          >
            件名:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium"
          >
            本文:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="border p-2 w-full rounded-md h-32 resize-none"
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleSendMail}
            disabled={isSending}
            className={`border p-2 rounded-md ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "送信中..." : "送信"}
          </button>
        </div>
        {message && (
          <div
            className={`${
              message.includes("successfully")
                ? "text-green-700"
                : "text-red-700"
            } text-sm font-medium`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
