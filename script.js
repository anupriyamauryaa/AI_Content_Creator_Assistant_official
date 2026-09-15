const titles = {
    dashboard: ["Dashboard", "Create better content with AI"],
    writer: ["AI Content Writer", "Generate content using AI"],
    captions: ["IG Captions", "Create engaging Instagram captions"],
    hashtags: ["Hashtag Gen", "Generate relevant hashtags"],
    ytTitles: ["YT Titles", "Create clickable YouTube titles"],
    ytDescription: ["YT Description", "Generate YouTube descriptions"],
    blog: ["Blog Builder", "Build complete blog content"],
    rewriter: ["Content Rewriter", "Rewrite your existing content"],
    ideas: ["Idea Generator", "Generate new content ideas"],
    tone: ["Tone Changer", "Change the writing style"],
    analyzer: ["Content Analyzer", "Analyze your content"]
};


function openTool(tool, button) {

    // Hide all pages
    document.querySelectorAll(".tool-page")
        .forEach(page => page.classList.remove("active-page"));

    // Show selected page
    document.getElementById(tool)
        .classList.add("active-page");

    // Remove active menu
    document.querySelectorAll(".menu-item")
        .forEach(item => item.classList.remove("active"));

    // Activate selected menu
    if (button) {
        button.classList.add("active");
    }

    // Change heading
    document.getElementById("pageTitle").textContent =
        titles[tool][0];

    document.getElementById("pageSubtitle").textContent =
        titles[tool][1];
}


function selectFromCard(tool) {

    const buttons = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {

        if (
            button.textContent
                .toLowerCase()
                .includes(tool.toLowerCase())
        ) {
            openTool(tool, button);
        }

    });
}


/* AI CONTENT WRITER */

function generateWriter() {

    const topic =
        document.getElementById("writerTopic").value;

    const type =
        document.getElementById("writerType").value;

    if (!topic) {
        alert("Please enter a topic.");
        return;
    }

    document.getElementById("writerResult").textContent =
`Generated ${type}

Title: ${topic}

Artificial Intelligence is changing the way people create, learn and work. It provides powerful tools that can help users save time, improve productivity and generate creative ideas.

In today's digital world, ${topic} has become an important topic for creators and businesses. By using modern AI tools, creators can produce useful and engaging content more efficiently.

Key Benefits:
• Saves time
• Improves productivity
• Generates creative ideas
• Helps create engaging content

This is an AI-generated demo response.`;
}


/* INSTAGRAM CAPTION */

function generateCaption() {

    const topic =
        document.getElementById("captionTopic").value;

    const style =
        document.getElementById("captionStyle").value;

    if (!topic) {
        alert("Enter a topic.");
        return;
    }

    document.getElementById("captionResult").textContent =
`✨ ${topic}

Creating moments, sharing experiences and enjoying every step of the journey.

Style: ${style}

#contentcreator #trending #explore #instagram #creator`;
}


/* HASHTAGS */

function generateHashtags() {

    const topic =
        document.getElementById("hashtagTopic").value;

    if (!topic) {
        alert("Enter a topic.");
        return;
    }

    const clean = topic
        .replace(/\s+/g, "")
        .toLowerCase();

    document.getElementById("hashtagResult").textContent =
`#${clean}
#${clean}creator
#${clean}content
#${clean}lover
#${clean}community
#trending
#viral
#explore
#reels
#instagram
#contentcreator
#digitalcreator
#fyp
#socialmedia`;
}


/* YOUTUBE TITLES */

function generateYtTitles() {

    const topic =
        document.getElementById("ytTitleTopic").value;

    if (!topic) {
        alert("Enter a video topic.");
        return;
    }

    document.getElementById("ytTitleResult").textContent =
`1. ${topic} - Everything You Need to Know
2. 10 Amazing Facts About ${topic}
3. ${topic}: Complete Beginner's Guide
4. I Tried ${topic} — Here's What Happened
5. The Ultimate ${topic} Guide
6. ${topic} Tips You Need to Know
7. How to Master ${topic} Step by Step`;
}


/* YOUTUBE DESCRIPTION */

function generateYtDescription() {

    const topic =
        document.getElementById("ytDescTopic").value;

    if (!topic) {
        alert("Enter a video topic.");
        return;
    }

    document.getElementById("ytDescResult").textContent =
`Welcome to the channel!

In today's video, we are discussing ${topic}.

In this video you will learn:
• Important information about ${topic}
• Useful tips
• Beginner-friendly explanations
• Practical ideas

Don't forget to Like, Share and Subscribe!

#${topic.replace(/\s+/g, "")} #YouTube #Creator`;
}


/* BLOG */

function generateBlog() {

    const topic =
        document.getElementById("blogTopic").value;

    if (!topic) {
        alert("Enter a blog topic.");
        return;
    }

    document.getElementById("blogResult").textContent =
`# ${topic}

## Introduction

${topic} is an interesting and important subject in today's digital world.

## What is ${topic}?

${topic} refers to an area that continues to develop and create new opportunities.

## Main Benefits

• Easy to understand
• Saves time
• Improves productivity
• Creates new opportunities

## Conclusion

As technology continues to develop, understanding ${topic} can help people make better decisions and discover new opportunities.`;
}


/* REWRITER */

function rewriteContent() {

    const text =
        document.getElementById("rewriteText").value;

    if (!text) {
        alert("Enter some content.");
        return;
    }

    document.getElementById("rewriteResult").textContent =
`Improved Version:

${text}

The content has been rewritten to make it clearer, smoother and easier to understand while keeping the original meaning.`;
}


/* IDEA GENERATOR */

function generateIdeas() {

    const topic =
        document.getElementById("ideaTopic").value;

    if (!topic) {
        alert("Enter a topic.");
        return;
    }

    document.getElementById("ideaResult").textContent =
`10 Content Ideas for ${topic}

1. Beginner's Guide to ${topic}
2. Top 10 Facts About ${topic}
3. Common Mistakes People Make
4. Tips and Tricks
5. Latest Trends
6. Myths vs Facts
7. Frequently Asked Questions
8. Step-by-Step Tutorial
9. Benefits and Disadvantages
10. Future of ${topic}`;
}


/* TONE CHANGER */

function changeTone() {

    const text =
        document.getElementById("toneText").value;

    const tone =
        document.getElementById("toneType").value;

    if (!text) {
        alert("Enter content.");
        return;
    }

    document.getElementById("toneResult").textContent =
`Tone: ${tone}

${text}

The content above has been adapted to a ${tone.toLowerCase()} tone.`;
}


/* CONTENT ANALYZER */

function analyzeContent() {

    const text =
        document.getElementById("analyzeText").value;

    if (!text) {
        alert("Enter content.");
        return;
    }

    const words =
        text.trim().split(/\s+/).length;

    const characters =
        text.length;

    document.getElementById("analyzeResult").textContent =
`Content Analysis

Word Count: ${words}
Character Count: ${characters}

Readability: Good

Content Quality:
✓ Clear topic
✓ Understandable structure
✓ Suitable for further optimization

Suggestions:
• Add a stronger introduction
• Use shorter paragraphs
• Add relevant keywords
• Include a clear call-to-action`;
}