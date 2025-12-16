import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, AlertCircle, Cpu } from 'lucide-react';
import { sendMessageStream } from '../services/geminiService';
import { Message } from '../types';
import { GenerateContentResponse } from "@google/genai";

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Greetings. I am your Coursera Intelligence Unit. Query me regarding learning paths, financial structures, or academic partnerships." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = await sendMessageStream(userMessage.text);
      
      let fullResponse = "";
      
      // Add a placeholder message for the model
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || "";
        fullResponse += textChunk;
        
        // Update the last message (model's response) with the accumulated text
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text = fullResponse;
          }
          return newMessages;
        });
      }

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Re-establishing link...", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-guide" className="py-24 bg-black relative border-t border-white/10">
      {/* Background Matrix-like effect subtle */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,86,210,0.2)]">
          
          {/* Sidebar / Info */}
          <div className="md:w-1/3 bg-black/40 p-8 border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full"></div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-6 shadow-[0_0_20px_#2563EB] animate-pulse-glow">
                <Cpu size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-white">AI Neural Guide</h2>
              <div className="h-1 w-12 bg-blue-500 rounded-full mb-6"></div>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                Powered by Gemini 2.5 Flash architecture. Initialize queries regarding platform capability and course trajectory.
              </p>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">Suggested Queries</p>
                {[
                  "Is Coursera free?",
                  "What are Professional Certificates?",
                  "How does financial aid work?"
                ].map((query, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(query)} 
                    className="group flex items-center w-full text-left bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/50 p-3 rounded-xl text-xs text-slate-300 transition-all duration-300"
                  >
                    <Sparkles size={12} className="mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {query}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-500 font-mono">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              SYSTEM ONLINE // GEMINI-2.5-FLASH
            </div>
          </div>

          {/* Chat Interface */}
          <div className="md:w-2/3 flex flex-col h-[600px] relative">
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                  
                  {msg.role === 'model' && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10">
                      <Bot size={20} className="text-white" />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl p-5 backdrop-blur-sm border ${
                    msg.role === 'user' 
                      ? 'bg-blue-600/20 border-blue-500/30 text-white rounded-tr-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
                      : msg.isError 
                        ? 'bg-red-900/20 border-red-500/30 text-red-200'
                        : 'bg-white/5 border-white/10 text-slate-200 rounded-tl-sm'
                  }`}>
                    {msg.isError && <AlertCircle className="inline mr-2 mb-1" size={16}/>}
                    <div className="whitespace-pre-wrap text-sm leading-relaxed font-light">
                       {msg.text}
                    </div>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <User size={20} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && !messages[messages.length - 1]?.text && (
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 rounded-tl-sm flex items-center">
                        <Loader2 className="animate-spin text-blue-400" size={20} />
                        <span className="ml-2 text-xs text-blue-400 animate-pulse">Processing...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-black/20">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-20 group-hover:opacity-60 transition duration-500 blur"></div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Input command..."
                  className="relative w-full bg-[#0B1120] text-white border border-white/10 rounded-xl py-4 pl-6 pr-14 focus:outline-none focus:bg-[#0f172a] placeholder-slate-600 shadow-xl"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-blue-500/50"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;