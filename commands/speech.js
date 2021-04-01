const replies = [
    "wow",
    "great",
    "cool",
    "Very Nice"
]

const index = Math.floor(Math.random()*replies.length);
msg.channel.send(replies[index]);