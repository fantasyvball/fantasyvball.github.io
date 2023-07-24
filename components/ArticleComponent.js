export default {
  template: `
    <div class="article-page" v-if="article">
      <div class="text-center">
        <img :src="article.image" class="img-fluid mb-3 w-100" :alt="article.title">
      </div>
      <div class="container">
        <h1 class="text-center">{{ article.title }}</h1>
        <p class="text-center">Author: {{ article.author }}</p>
        <p class="text-center">Publish Date: {{ article.publishDate }}</p>
        <div class="text-left">
          <md-block>
            {{ article.content }}
          </md-block>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      articles: [
        {
          id: 0,
          title: "Welcome to Fantasy Volleyball",
          author: "Fantasy Volleyball Team",
          publishDate: "2023-07-19",
          image: "https://duckduckgo.com/i/4586c410.jpg",
          content: `

**Fantasy Volleyball** is not your typical sports platform. It's an engaging and interactive experience that allows you to dive into the world of volleyball like never before. Here are the exciting features that make **Fantasy Volleyball** stand out from the rest:

### **1. Create Your Dream Team**
Select players from real volleyball teams to build your dream squad. But be strategic - you can only use each player once every season! Each decision counts, and every week presents new opportunities to excel.

### **2. Active Team Management**
You're not just a spectator here - you're a manager! Actively manage your team every week, swapping players, optimizing lineups, and strategizing to gain the upper hand. Feel the rush as your well-thought-out decisions lead to victories.

### **3. Earn Points and Rewards**
As your chosen players perform in real-life matches, you earn points based on their performances and categorical stats compared to other teams. Rise through the ranks and unlock exciting rewards as you climb the [**leaderboard**](https://example.com/leaderboard).

### **4. A Thriving Community**
**Fantasy Volleyball** is more than just a game; it's a lively community of volleyball lovers. Engage with fellow players, share strategies, and discuss match highlights. Join the conversation, and let your enthusiasm for the sport shine!

### **5. Blogging and Insights**
Express yourself and share your knowledge through blog posts. Whether it's analyzing matches, discussing tactics, or showcasing your team's success, **Fantasy Volleyball** provides a platform for your voice to be heard.

### **6. Performance Analysis**
Track your team's progress through our comprehensive stat interface. Dive deep into player performances, assess strategies, and fine-tune your gameplay for better results.

## **Join the Fantasy Volleyball Community Today!**

If you're a volleyball enthusiast, this is the ultimate platform to showcase your passion and skills. Create your dream team, manage players, earn points, and interact with a dynamic community. **Fantasy Volleyball** brings the thrill of the game to your fingertips.

Are you ready to take the court? [**Sign up**](https://example.com/signup) for **Fantasy Volleyball** now, and become a part of this electrifying community! Let's spike up the fun together! 🏐🔥
          `,
        },
        {
          id: 1,
          title: "Sample Article",
          author: "John Doe",
          publishDate: "2023-07-01",
          image: "https://duckduckgo.com/i/4586c410.jpg",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          id: 2,
          title: "Sample Article",
          author: "John Doe",
          publishDate: "2023-07-01",
          image: "https://duckduckgo.com/i/4586c410.jpg",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        // {
        //   id: 3,
        //   title: "Sample Article",
        //   author: "John Doe",
        //   publishDate: "2023-07-01",
        //   image: "https://duckduckgo.com/i/4586c410.jpg",
        //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
      ],
    };
  },
  computed: {
    article() {
      const id = parseInt(this.$route.params.id);
      console.log("id:" + id)
      console.log("articles:" + this.articles.length)
      if (Number.isInteger(id) && id >= 0 && id < this.articles.length) {
        return this.articles[id];
      } else {
        this.$router.push("/404");
        return null;
      }
    },
  },
};