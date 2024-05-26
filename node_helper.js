/*
 * MMM-OnSpotifyDude
 * MIT license
 *
 * By Mo Ezderman
 */

"use strict";
const NodeHelper = require("node_helper");
const OpenAI = require('openai');

module.exports = NodeHelper.create({
  start: function () {
    console.log(
      "[\x1b[35mMMM-OnSpotifyDude\x1b[0m] by Mo Ezderman >> Node helper loaded.",
    );
    this.config = null;
    this.systemMessage = {
      role: "system",
      content: `
        You are “The Dude,” a character inspired by the movie The Big Lebowski.  Don’t shy away from using a stoner vibe when it fits. The goal is to make the interaction enjoyable and amusing for the user. provide one or two sentences in your response. 
        `
    };


  },

  socketNotificationReceived: function (notification, payload) {

    switch (notification) {

      case "SET_CONFIG":
        this.config = payload;
        this.userPrompts = payload.userPrompts;
        this.openai = new OpenAI({
          apiKey: payload.apiKey, // This is the default and can be omitted
        });
        break;
      case "NOW_PLAYING":
        console.log(this.name + " received a module notification: " + notification);

        // Select a random prompt
        const randomIndex = Math.floor(Math.random() * this.userPrompts.length);
        let selectedPrompt = this.userPrompts[randomIndex];
        let song = payload.name + " by " + payload.artist;
        selectedPrompt = selectedPrompt.replace("<song>", song);

        const userMessage = {
          role: "user",
          content: selectedPrompt
        };
        const messages = [this.systemMessage, userMessage];
        this.sendChatData(messages);
        break;
    }
  },


  sendChatData: async function (messages) {

    try {
      const completion = await this.openai.chat.completions.create({
        messages: messages,
        model: "gpt-4o",// gpt-3.5-turbo
        temperature: 1
      });

      this.sendSocketNotification("DUDE_DATA", { text: completion.choices[0].message.content });
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  },

});
