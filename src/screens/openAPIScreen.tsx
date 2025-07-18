import React, { useState, useCallback } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import axios from 'axios';
import { OPENAI_API_KEY } from 'react-native-dotenv';

export default function OpenAIChatBotScreen() {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      _id: 1,
      text: 'Hi! How can I help you today?',
      createdAt: new Date(),
      user: { _id: 2, name: 'Bot' },
    },
  ]);

  const onSend = useCallback(async (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));

    const userMessage = newMessages[0].text;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          //   model: 'gpt-4o-mini', // or gpt-4o, gpt-3.5-turbo etc.
          messages: [{ role: 'user', content: userMessage }],
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
            'OpenAI-Project': 'proj_qA5HB1Uo1CrPoYA0kLHWH3Ga',
          },
        },
      );

      const botReply = response.data.choices[0].message.content;

      const botMessage: IMessage = {
        _id: Math.random().toString(36).substring(7),
        text: botReply,
        createdAt: new Date(),
        user: { _id: 2, name: 'Bot' },
      };

      setMessages((previousMessages) => GiftedChat.append(previousMessages, botMessage));
    } catch (error) {
      console.error('OpenAI API error:', error);
    }
  }, []);
  console.log('API KEY:', OPENAI_API_KEY); // debug this

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1 }}
      placeholder="Type your message..."
    />
  );
}
