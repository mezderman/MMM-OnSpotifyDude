Module.register("MMM-OnSpotifyDude", {
    // Module config defaults.
    defaults: {
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
    },

    // Define start sequence.
    start() {
        this.sendSocketNotification("SET_CONFIG", this.config);
    },

    notificationReceived: function (notification, payload, sender) {
        if (notification == "NOW_PLAYING") {
            Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
            this.sendSocketNotification("NOW_PLAYING", payload);
        }
    },

    socketNotificationReceived: function (notification, payload) {
        switch (notification) {
            case "DUDE_DATA":
                console.log(payload.text);
                this.dudeText = payload.text;
                this.updateDom();
                break;
        }
    },

    getStyles: function () {
        let files = [this.file("css/included.css")];
        return files;
    },

    // Override dom generator.
    getDom() {
        const wrapper = document.createElement("div");

        wrapper.classList.add("chat-container");
        const message = document.createElement("div");
        const profilePic = document.createElement("div");
        profileUrl = `${this.data.path}assets/dude.jpg`;
        profilePic.style.backgroundImage = "url('" + profileUrl + "')";
        const paragraph = document.createElement("p");

        message.classList.add("message");
        profilePic.classList.add("profile-pic");
        paragraph.classList.add("bubble", "thought");

        paragraph.textContent = this.dudeText;

        message.appendChild(profilePic);
        message.appendChild(paragraph);
        wrapper.appendChild(message);
        return wrapper;
    },

});
