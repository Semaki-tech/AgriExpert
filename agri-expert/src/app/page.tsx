"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bot, Paperclip, Mic, Send, Volume2, Languages, User, X } from "lucide-react";

// Mock AI Flow Imports
import { askExpert } from "@/ai/flows/expert-system-question-answering";
import { identifyCropDisease } from "@/ai/flows/crop-disease-identification";
import { textToSpeech } from "@/ai/flows/text-to-speech";
import { translateToEwe } from "@/ai/flows/translate";

type Message = {
  role: "user" | "assistant";
  content: string;
  id: string;
};

export default function ExpertAiPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis AgriExpert. Posez-moi une question sur l'agriculture togolaise ou envoyez une photo d'une plante pour un diagnostic.",
      id: "initial-message",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() && !attachedFile) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      id: Date.now().toString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    let responseContent: string;
    if (attachedFile) {
      responseContent = await identifyCropDisease(attachedFile, inputValue);
      setAttachedFile(null);
    } else {
      responseContent = await askExpert(inputValue);
    }

    const assistantMessage: Message = {
      role: "assistant",
      content: responseContent,
      id: Date.now().toString() + "-ai",
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleTranslate = async (text: string, messageId: string) => {
    const translatedText = await translateToEwe(text);
    setMessages(messages.map(m => m.id === messageId ? {...m, content: translatedText} : m));
  };

  const handleTextToSpeech = async (text: string) => {
    // Assuming Ewe text contains "(Ewe)"
    const lang = text.includes("(Ewe)") ? "ee-TG" : "fr-FR";
    await textToSpeech(text, lang);
  };

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start gap-4 ${message.role === "user" ? "justify-end" : ""}`}>
              {message.role === "assistant" ? <Avatar className="h-8 w-8 bg-secondary"><AvatarFallback><Bot /></AvatarFallback></Avatar> : <Avatar className="h-8 w-8"><AvatarFallback><User /></AvatarFallback></Avatar>}
              <div className={`max-w-xl rounded-lg p-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.role === 'assistant' && message.id !== 'initial-message' && (
                  <div className="mt-2 flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleTextToSpeech(message.content)}><Volume2 className="h-4 w-4" /></Button>
                    {!message.content.includes("(Ewe)") && <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleTranslate(message.content, message.id)}><Languages className="h-4 w-4" /></Button>}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 bg-secondary"><AvatarFallback><Bot /></AvatarFallback></Avatar>
              <div className="max-w-xl rounded-lg p-3 bg-muted"><p>AgriExpert est en train d'écrire...</p></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t bg-background p-4">
        <div className="relative">
          {attachedFile && (
            <div className="absolute bottom-full mb-2 flex items-center gap-2 rounded-md border bg-muted p-2 text-sm">
              <Paperclip className="h-4 w-4" />
              <span>{attachedFile.name}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setAttachedFile(null)}><X className="h-4 w-4" /></Button>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div className="relative">
              <Input
                placeholder="Posez votre question ou décrivez votre image..."
                className="pr-24" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }}}
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-2 flex items-center gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon" disabled={isLoading}><Mic className="h-5 w-5" /></Button></TooltipTrigger>
                    <TooltipContent><p>Entrée vocale (Bientôt disponible)</p></TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon" disabled={isLoading} onClick={() => fileInputRef.current?.click()}><Paperclip className="h-5 w-5" /></Button></TooltipTrigger>
                    <TooltipContent><p>Joindre une image</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <input type="file" ref={fileInputRef} onChange={handleFileAttach} className="hidden" accept="image/*" />
              </div>
            </div>
            <Button className="w-full" onClick={handleSendMessage} disabled={isLoading}>
              <Send className="mr-2 h-4 w-4" /> Envoyer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
