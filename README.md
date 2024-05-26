
# MMM-ModulesGroupsRotation

Welcome, friend. You’ve stumbled upon the MMM-OnSpotifyDude module, an easy-going companion to the [MMM-OnSpotify](https://github.com/Fabrizz/MMM-OnSpotify) module . Think of it as the Dude’s way of grooving along with your Spotify tunes, providing some laid-back commentary on the currently playing song. It’s like having The Dude himself lounging in your MagicMirror² setup, casually sharing his thoughts on your music.

## Screenshot
(https://github.com/mezderman/MMM-OnSpotifyDude/blob/main/screenshots/screenshot.jpg)

## Table of Contents
- [Installation](#installation)
- [Using the Module](#using-the-module)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Developer](#developer)
- [License](#license)

## Installation

First, make sure you have the MMM-OnSpotify module installed and configured. You can find it here: [MMM-OnSpotify]((https://github.com/Fabrizz/MMM-OnSpotify).

Then, follow these steps to install MMM-OnSpotifyDude:

Navigate to your MagicMirror modules directory:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/your-username/MMM-OnSpotifyDude.git
cd MMM-OnSpotifyDude
npm install
```

## Using the Module

To get MMM-OnSpotifyDude up and running, you’ll need to add it to the config/config.js file of your MagicMirror setup. Here’s a basic configuration example:

```javascript
{
    module: "MMM-OnSpotifyDude",
    position: "top_center", /* bottom_left, bottom_center */
        config: {
            apiKey:'<OPENAI_API_KEY>',
            // These are the default user prompts. You can add your own. Dont forget to nclude <song> to your template
            userPrompts: [
                "What’s your take on <song>? Channel your inner slacker wisdom and throw in some of that Dude-style humor.",
                "How would The Dude describe  <song>>? Use your signature laid-back style, sprinkle in some slacker wisdom, and keep it amusing and chill.",
                "How does the song  <song> fit into The Dude’s day? Describe it with your signature humor and relaxed vibe.",
                "If The Dude had to tell a joke about the song <song>>, what would it be? Keep it groovy and relaxed",
                "What’s The Dude’s brutally honest opinion on the song <song>? Don’t hold back on the critique, but keep it in your chill style",
                "How would The Dude describe the perfect setting to listen to <song>? Paint a relaxed, vivid picture",
                "What story would The Dude tell that’s inspired by <song>? Give us a laid-back, entertaining tale",
                "If The Dude had to compare <song> to a movie scene, which one would it be and why? Keep it groovy",
                "What would The Dude daydream about while listening to <song>? Share your mellow, imaginative thoughts",
                "How would The Dude describe the feeling of <song>? Use your signature laid-back, philosophical style"
            ]
        }
},
```

## Configuration

The following properties can be configured:

| Option           | Description                                                                          |  |
|------------------|--------------------------------------------------------------------------------------|---------|
| `apiKey`  | OpenAI API Key.                                                                        | `Required`    |
| `userPrompts`   | Time in milliseconds between module rotations.                                       | `Optional`  |




## Dependencies

npm openai.

## Developer

This module was developed by Mo Ezderman.

## License

This module is licensed under the MIT License.
