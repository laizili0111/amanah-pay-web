
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X, Bot, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Assalamu alaikum! I\'m Faith Finance\'s assistant. How can I help you with your charitable giving journey today?',
    sender: 'bot',
    timestamp: new Date()
  }
];

const ChatbotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      content: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response after a small delay
    setTimeout(() => {
      const botResponse = getBotResponse(input.trim().toLowerCase());
      const newBotMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    if (userInput.includes('zakat') || userInput.includes('calculate')) {
      return "You can calculate your Zakat on our Dashboard page. Navigate to the Dashboard and select the 'Zakat Calculator' tab to get started.";
    } else if (userInput.includes('donation') || userInput.includes('donate')) {
      return "You can make donations through our Campaigns page. Browse the available campaigns, select one that speaks to you, and click 'Donate Now' to contribute.";
    } else if (userInput.includes('certificate') || userInput.includes('nft')) {
      return "For each successful donation, you'll receive a unique NFT certificate as proof. You can view your certificates in your transaction history on the Dashboard page.";
    } else if (userInput.includes('blockchain') || userInput.includes('technology')) {
      return "We use blockchain technology to ensure transparency and traceability in all donations. You can learn more about our technology on the About page.";
    } else if (userInput.includes('quadratic') || userInput.includes('funding')) {
      return "Our platform utilizes Quadratic Funding to distribute matching funds. This approach gives more weight to the number of donors rather than donation amounts, promoting inclusivity. Learn more on our About page.";
    } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('assalam')) {
      return "Wa alaikum assalam! How can I assist you with our Islamic charitable platform today?";
    } else if (userInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with regarding Islamic charitable giving?";
    } else {
      return "I'm here to help with questions about our platform. You can ask about making donations, calculating Zakat, our blockchain technology, or our Quadratic Funding approach. How can I assist you?";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="h-14 w-14 rounded-full bg-islamic-primary hover:bg-islamic-primary/90 shadow-lg"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </Button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 md:w-96"
          >
            <Card className="border border-islamic-primary/20 shadow-xl">
              <CardHeader className="bg-islamic-primary text-white p-3 flex flex-row items-center space-x-2">
                <Avatar className="h-8 w-8 bg-white">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    <Bot size={20} className="text-islamic-primary" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Faith Finance Assistant</h3>
                  <p className="text-xs opacity-80">Online | Ask me anything</p>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <ScrollArea className="h-[350px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn("flex", 
                          message.sender === 'user' ? "justify-end" : "justify-start"
                        )}
                      >
                        <div 
                          className={cn(
                            "max-w-[80%] rounded-lg p-3",
                            message.sender === 'user' 
                              ? "bg-islamic-primary text-white rounded-tr-none" 
                              : "bg-gray-100 text-gray-800 rounded-tl-none"
                          )}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
                          <div className="flex space-x-1 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-3 pt-1 border-t">
                <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                  <Textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your question..."
                    className="min-h-[40px] max-h-[120px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (input.trim()) {
                          handleSubmit(e);
                        }
                      }
                    }}
                  />
                  <Button 
                    type="submit" 
                    className="bg-islamic-primary hover:bg-islamic-primary/90"
                    disabled={!input.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotAssistant;
