import React, { useState } from 'react';
import { useSalon } from '../../context/SalonContext';
import { GlamwayCrownIcon } from '../common/GlamwayLogo';
import { Sparkles, X, Send, Bot, User, Calendar, ShieldAlert } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const BeautyConciergeModal: React.FC = () => {
  const { isAiConciergeOpen, setIsAiConciergeOpen, openBookingModal } = useSalon();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: 'Good day. I am your Glamway AI Beauty Concierge for our North Carolina destination salons. How may I assist in curating your beauty visit today? I can recommend bespoke hair, nail, lash, and skincare rituals, compare color treatments, and assist with reservation inquiries for our North Carolina branches.',
      timestamp: 'Just now'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestionPills = [
    'Recommended ritual for shine and frizz control?',
    'Compare French Balayage vs Caviar Silk Keratin',
    'Tell me about private bridal suite bookings',
    'What is included in the Grand Empress Day Retreat?'
  ];

  if (!isAiConciergeOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-6).map(m => ({ role: m.sender === 'ai' ? 'model' : 'user', text: m.text }))
        })
      });

      const data = await response.json();
      const aiReply: ChatMessage = {
        id: `msg-ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || 'Our concierge team would be delighted to welcome you to The Glamway Beauty Salon in North Carolina. Please choose a branch to reserve.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiReply]);
    } catch {
      const fallbackReply: ChatMessage = {
        id: `msg-ai-${Date.now()}`,
        sender: 'ai',
        text: 'For hair revitalizing and luminous shine, our signature recommendation is the Caviar Silk Keratin Infusion ($320, 150 mins), which seals the cuticle while preserving natural bounce. For radiant glass skin, our Botanical Radiance Hydra-Infusion ($175, 75 mins) is available at our North Carolina branches.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF9F4] w-full max-w-2xl border border-[#C6A667]/40 rounded-sm shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#3B2A28] text-white px-6 py-4 flex items-center justify-between border-b border-[#C6A667]/30">
          <div className="flex items-center gap-3">
            <GlamwayCrownIcon size={32} />
            <div>
              <div className="font-serif text-lg font-semibold tracking-wide flex items-center gap-2">
                <span>The Glamway Concierge</span>
                <span className="text-[10px] bg-[#8E4B63] text-white font-sans font-bold px-2 py-0.5 uppercase tracking-wider rounded-xs border border-[#C6A667]/30">
                  AI Beauty Guide
                </span>
              </div>
              <div className="text-[11px] text-[#C6A667]">
                Charlotte, NC · Luxury Beauty Salon · Eastern Time (America/New_York)
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsAiConciergeOpen(false)}
            className="text-white/70 hover:text-white p-1"
            aria-label="Close concierge"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-[#3B2A28] text-[#C6A667] flex items-center justify-center shrink-0 mt-0.5 border border-[#C6A667]/30">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-sm p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#8E4B63] text-[#FFF9F4]'
                    : 'bg-white border border-[#C6A667]/25 text-[#3B2A28]'
                }`}
              >
                {msg.text}
                <div className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-[#FFF9F4]/60' : 'text-[#A98F86]'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#C6A667] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3 text-xs text-[#A98F86]">
              <div className="w-7 h-7 rounded-full bg-[#3B2A28] text-[#C6A667] flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
              </div>
              <span>The Glamway AI is formulating your personalized aesthetic recommendation...</span>
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        <div className="px-6 py-2 bg-[#FFF9F4] border-t border-[#C6A667]/15 overflow-x-auto flex gap-2 scrollbar-none">
          {suggestionPills.map((pill, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(pill)}
              className="text-xs bg-white text-[#3B2A28] border border-[#C6A667]/30 hover:border-[#8E4B63] px-3 py-1.5 rounded-sm whitespace-nowrap transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#C6A667]/30 flex items-center gap-3">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask The Glamway AI about hair rituals, suite bookings, or USD pricing..."
            className="flex-1 bg-[#FFF9F4] border border-[#C6A667]/40 px-4 py-2.5 text-xs sm:text-sm text-[#3B2A28] rounded-sm focus:outline-none focus:border-[#8E4B63]"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!inputPrompt.trim() || isLoading}
            className="px-4 py-2.5 bg-[#8E4B63] hover:bg-[#70374C] text-white rounded-sm transition-colors disabled:opacity-40 shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setIsAiConciergeOpen(false);
              openBookingModal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 bg-[#C6A667] hover:bg-[#3B2A28] text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors whitespace-nowrap shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Disclaimer footer */}
        <div className="bg-[#FFF9F4] px-6 py-1.5 border-t border-[#3B2A28]/5 text-[10px] text-[#A98F86] flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-[#C6A667]" />
            <span>Licensed cosmetic &amp; wellness guidance. North Carolina Board of Cosmetic Art Sciences compliant.</span>
          </span>
          <span>USD ($) · America/New_York (EST)</span>
        </div>

      </div>
    </div>
  );
};
