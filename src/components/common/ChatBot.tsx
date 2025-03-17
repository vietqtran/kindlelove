// components/ChatBot.tsx
'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Message {
   id: string
   text: string
   sender: 'user' | 'bot'
   timestamp: Date
}

const ChatBot: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [messages, setMessages] = useState<Message[]>([])
   const [inputMessage, setInputMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const messagesEndRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (isOpen) {
         scrollToBottom()
      }
   }, [messages, isOpen])

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
   }

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!inputMessage.trim()) return

      // Add user message
      const userMessage: Message = {
         id: Date.now().toString(),
         text: inputMessage,
         sender: 'user',
         timestamp: new Date()
      }

      setMessages((prev) => [...prev, userMessage])
      setInputMessage('')
      setIsLoading(true)

      try {
         // Format messages for API
         const chatHistory = messages.map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
         }))

         // Call API route to get bot response
         const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               message: userMessage.text,
               chatHistory: chatHistory
            })
         })

         if (!response.ok) {
            throw new Error('Failed to get response')
         }

         const data = await response.json()

         // Add bot response
         const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response,
            sender: 'bot',
            timestamp: new Date()
         }

         setMessages((prev) => [...prev, botMessage])
      } catch (error) {
         console.error('Error sending message:', error)

         // Add error message
         const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: 'Sorry, I encountered an error. Please try again later.',
            sender: 'bot',
            timestamp: new Date()
         }

         setMessages((prev) => [...prev, errorMessage])
      } finally {
         setIsLoading(false)
      }
   }

   const toggleChat = () => {
      setIsOpen((prev) => !prev)
   }

   return (
      <div className='fixed bottom-4 right-4 z-50'>
         {/* Chat Button */}
         <button
            onClick={toggleChat}
            className='bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center'
            aria-label='Toggle chat'
         >
            {isOpen ? (
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth={2}
                     d='M6 18L18 6M6 6l12 12'
                  />
               </svg>
            ) : (
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth={2}
                     d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                  />
               </svg>
            )}
         </button>

         {/* Chat Window */}
         {isOpen && (
            <div className='absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200'>
               {/* Chat Header */}
               <div className='bg-blue-600 text-white p-4 flex justify-between items-center'>
                  <h3 className='font-medium'>Chat Support</h3>
                  <button
                     onClick={toggleChat}
                     className='text-white hover:text-gray-200'
                  >
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M6 18L18 6M6 6l12 12'
                        />
                     </svg>
                  </button>
               </div>

               {/* Chat Messages */}
               <div className='flex-1 p-4 overflow-y-auto max-h-96'>
                  {messages.length === 0 ? (
                     <div className='text-center text-gray-500 py-8'>
                        <p>Send a message to start chatting</p>
                     </div>
                  ) : (
                     messages.map((message) => (
                        <div
                           key={message.id}
                           className={`mb-4 ${
                              message.sender === 'user'
                                 ? 'text-right'
                                 : 'text-left'
                           }`}
                        >
                           <div
                              className={`inline-block px-4 py-2 rounded-lg ${
                                 message.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none'
                                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                              }`}
                           >
                              {message.text}
                           </div>
                           <div className='text-xs text-gray-500 mt-1'>
                              {message.timestamp.toLocaleTimeString([], {
                                 hour: '2-digit',
                                 minute: '2-digit'
                              })}
                           </div>
                        </div>
                     ))
                  )}
                  {isLoading && (
                     <div className='text-left mb-4'>
                        <div className='inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-lg rounded-bl-none'>
                           <div className='flex space-x-1'>
                              <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'></div>
                              <div
                                 className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'
                                 style={{ animationDelay: '0.2s' }}
                              ></div>
                              <div
                                 className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'
                                 style={{ animationDelay: '0.4s' }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
               </div>

               {/* Chat Input */}
               <form
                  onSubmit={handleSubmit}
                  className='border-t border-gray-200 p-4'
               >
                  <div className='flex'>
                     <input
                        type='text'
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder='Type a message...'
                        className='flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        disabled={isLoading}
                     />
                     <button
                        type='submit'
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50'
                        disabled={isLoading || !inputMessage.trim()}
                     >
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           className='h-5 w-5'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                           />
                        </svg>
                     </button>
                  </div>
               </form>
            </div>
         )}
      </div>
   )
}

export default ChatBot
