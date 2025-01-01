import streamlit as st
from streamlit_chat import message

# Story Data
stories = {
    "Whispers of Heart": {
        "description": "A sweet and touching love story that takes readers on an emotional journey filled with longing and connection. The protagonist navigates love, shyness, and the fear of losing his dream girl.",
        "link": "https://shining-education-078.notion.site/Whispers-of-heart-b55e7ba44907458683df3717c5d75cd9"
    },
    "Echoes Across Time: The Guardian's Love": {
        "description": "A gripping tale of a time keeper tasked with stopping apocalyptic events, battling underwater aliens, and forming a deep connection with a mysterious girl.",
        "link": "https://shining-education-078.notion.site/Echoes-Across-Time-The-Guardian-s-Love-ae4bc21363244bd69fa09bb0df5423a1"
    },
    "AloveStory: The Journey of Souls": {
        "description": "A cute love story about two people who meet by chance, fall for each other, and face unexpected challenges that test their love.",
        "link": "https://shining-education-078.notion.site/AloveStory-108ff936b1e780748472dd7ff9693969"
    },
    "Annihilation": {
        "description": "A tale of rare atoms within humans that can create or destroy worlds, exploring the impact of their inevitable reunion.",
        "link": "https://shining-education-078.notion.site/Annihilation-6e9322ed8bc749c2933abfc89c025949"
    },
    "The Consciousness Loop": {
        "description": "A man’s consciousness transcends time, forcing him to face a mysterious loop of cosmic justice, morality, and destiny.",
        "link": "https://shining-education-078.notion.site/The-cycle-of-kalki-kali-199e141ccc9e400e893d9cf0596b7c45"
    }
}

# About Me Section
about_me = """
Welcome! I am a passionate storyteller who loves to explore the realms of mystery, crime thrillers, and science fiction. 
Each story I write is a journey into the unknown, combining heartfelt emotions with gripping twists and profound ideas. 
From cosmic love stories to tales of universal morality, I aim to create narratives that captivate and linger in the minds of readers. 
Let’s dive into these worlds together!
"""

# Streamlit App Layout
st.title("📚 Story Chatbot")
st.sidebar.title("About Me")
st.sidebar.write(about_me)

st.write("Welcome to the Story Chatbot! Explore captivating stories and unravel thrilling mysteries. Choose a story below to learn more.")

# Display Story Options
story_choice = st.selectbox("Choose a story to explore:", list(stories.keys()))

if story_choice:
    st.subheader(story_choice)
    st.write(stories[story_choice]["description"])
    st.markdown(f"[Read More]({stories[story_choice]['link']})")

# Chat Functionality
st.write("\nLet's chat about the stories or anything else you'd like to know!")
if "messages" not in st.session_state:
    st.session_state["messages"] = []

for i, msg in enumerate(st.session_state["messages"]):
    message(msg["content"], is_user=msg["is_user"], key=str(i))

user_input = st.text_input("You:", "")
if user_input:
    st.session_state["messages"].append({"content": user_input, "is_user": True})
    # Generate response based on user input
    if any(story.lower() in user_input.lower() for story in stories):
        story_found = [story for story in stories if story.lower() in user_input.lower()][0]
        bot_reply = f"You asked about **{story_found}**! Here's what it's about: {stories[story_found]['description']}\nRead more here: {stories[story_found]['link']}"
    else:
        bot_reply = "Thank you for your interest! I love discussing stories and ideas. Let me know which story intrigues you!"
    st.session_state["messages"].append({"content": bot_reply, "is_user": False})
