"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatbotButton() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Government Schemes Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I can help you find schemes based on your eligibility criteria. What specific category are you interested in?",
        "To find the right scheme for you, I need some information. Could you tell me your age, state, and occupation?",
        "You might be eligible for several schemes. Would you like me to help you filter them based on your requirements?",
        "I found several schemes that match your criteria. Would you like me to explain the application process for any specific one?",
        "For more detailed information, you can visit the scheme details page or contact our support team.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chatbot Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#156b36] p-0 shadow-lg hover:bg-[#156b36]/90"
        aria-label="Chat with assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col shadow-xl sm:w-[400px]">
          <CardHeader className="border-b bg-[#156b36] text-white">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              {t("home.cta.button.chat")}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="flex h-full flex-col p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex max-w-[80%] gap-2">
                    {message.sender === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-[#156b36] text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === "user" ? "bg-[#156b36] text-white" : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>

                    {message.sender === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="border-t p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder={`${t("home.hero.button.chatAssistant")}...`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-[#156b36] hover:bg-[#156b36]/90"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
