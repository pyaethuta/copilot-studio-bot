"use client";

import React, { useState } from 'react';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { buildTheme } from "@botpress/webchat-generator";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

const clientId = "fcd34f20-1f01-441e-9190-76daeaec2c51";

const ChatIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (language: string) => {
    setIsEnglish(language === "EN");
    setDropdownOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-full">
      <button
        onClick={toggleChat}
        className="bg-[#D31145] text-white p-5 rounded-full shadow-lg"
        aria-label="Open chat"
      >
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-10 bg-white p-4 rounded-lg shadow-lg w-100 h-[500px] transition-all duration-300">
          <div className="flex justify-between items-center bg-[#D31145] rounded-t-lg px-5 w-[350px] absolute z-50 left-0 top-0 h-[67px]" style={{ boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-md font-bold text-white">AIA MM Chatbot</h2>
            <div className="flex items-center">
              <div className="relative">
                <button onClick={toggleDropdown} className="text-[#fff] mr-4 flex text-sm items-center">
                  {isEnglish ? "EN" : "MM"}
                  {dropdownOpen ? (
                    <ChevronUpIcon className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  )}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-50">
                    <button onClick={() => selectLanguage("EN")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      EN
                    </button>
                    <button onClick={() => selectLanguage("MM")} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      MM
                    </button>
                  </div>
                )}
              </div>
              <button onClick={toggleChat} className="text-[#fff]" aria-label="Close chat">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-2 h-full relative w-[318px]">
            {isEnglish ? (
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-7f2c1900-9fd4-4b89-91d3-79a649996f0a/bots/crba2_aiaMyanmarChatbotDemo1/webchat?__version__=2"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
              ></iframe>
            ) : (
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-7f2c1900-9fd4-4b89-91d3-79a649996f0a/bots/crba2_mmCopilot/webchat?__version__=2"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
