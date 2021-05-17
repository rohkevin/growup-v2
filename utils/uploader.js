const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDF3Yw4L_5odWGXNNJUDYUCPqPSYf7OgcI",
    authDomain: "growupv2.firebaseapp.com",
    projectId: "growupv2"
  });
  
var db = firebase.firestore();

var blogPostsJSON = [
  {
    "id": "postID01",
    "coverImage": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    "title": "How to budget your finances after university",
    "topic": "finance",
    "dateFormatted": "2021-01-01",
    "datePretty": "January 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID02",
    "coverImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80",
    "title": "3 Tips on starting to invest",
    "topic": "finance",
    "dateFormatted": "2021-04-02",
    "datePretty": "January 2, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID03",
    "coverImage": "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "title": "Investments or paying off loans? Find out what you should do",
    "topic": "finance",
    "dateFormatted": "2021-01-10",
    "datePretty": "January 10, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  }, 
  {
    "id": "postID04",
    "coverImage": "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1603&q=80",
    "title": "Fun patios to checkout if you're uptown Toronto",
    "topic": "social",
    "dateFormatted": "2021-02-01",
    "datePretty": "February 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID05",
    "coverImage": "https://images.unsplash.com/photo-1543269865-4430f94492b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "title": "How to make small talk with anyone",
    "topic": "social",
    "dateFormatted": "2020-01-01",
    "datePretty": "January 1, 2020",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID06",
    "coverImage": "https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
    "title": "Being lost in your 20s",
    "topic": "career",
    "dateFormatted": "2020-12-01",
    "datePretty": "December 1, 2020",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID07",
    "coverImage": "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80",
    "title": "How to initiate coffee chats and grow your network",
    "topic": "career",
    "dateOrder": "10",
    "dateFormatted": "2021-03-01",
    "datePretty": "March 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID08",
    "coverImage": "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "title": "Gorgeous hikes near Toronto that you probably didn't know existed",
    "topic": "health",
    "dateFormatted": "2020-04-01",
    "datePretty": "April 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID09",
    "coverImage": "https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "title": "How is working from home affecting our health?",
    "topic": "health",
    "dateFormatted": "2021-05-01",
    "datePretty": "May 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID10",
    "coverImage": "https://images.unsplash.com/photo-1552622594-4df0b4182152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "title": "Why we stopped walking and how that's affected us in our late 20s onwards",
    "topic": "health",
    "dateFormatted": "2021-04-22",
    "datePretty": "April 22, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID11",
    "coverImage": "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "title": "Pausing life to take the moments that help us live",
    "topic": "health",
    "dateFormatted": "2021-03-19",
    "datePretty": "March 19, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID12",
    "coverImage": "https://images.unsplash.com/photo-1539541417736-3d44c90da315?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "title": "How to help those around us going through harder timess",
    "topic": "health",
    "dateFormatted": "2021-02-23",
    "datePretty": "February 23, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID13",
    "coverImage": "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "title": "Reaching our peak physique",
    "topic": "health",
    "dateFormatted": "2021-01-07",
    "datePretty": "January 7, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID14",
    "coverImage": "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80",
    "title": "Why we actually have to start caring about our nutrition and a simple how-to",
    "topic": "health",
    "dateFormatted": "2021-01-03",
    "datePretty": "January 3, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID15",
    "coverImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "title": "Things I wish I knew before I left university about work, career growth, and life in general",
    "topic": "career",
    "dateFormatted": "2021-02-01",
    "datePretty": "April 1, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  },
  {
    "id": "postID16",
    "coverImage": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "title": "What it means to find someone",
    "topic": "social",
    "dateFormatted": "2021-03-12",
    "datePretty": "March 12, 2021",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id faucibus nisl tincidunt eget. Augue eget arcu dictum varius duis at consectetur. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. At quis risus sed vulputate. Quam viverra orci sagittis eu volutpat. Nulla facilisi morbi tempus iaculis urna id. Vitae suscipit tellus mauris a diam. Ultrices neque ornare aenean euismod elementum nisi. Enim sit amet venenatis urna cursus eget nunc. Leo integer malesuada nunc vel risus commodo. Orci ac auctor augue mauris augue. Morbi enim nunc faucibus a pellentesque. Enim ut tellus elementum sagittis vitae et leo duis ut. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.",
    "author": "Most Palone",
    "authorImage": "https://i1.sndcdn.com/artworks-000371233842-86xe3v-t500x500.jpg"
  }

]

blogPostsJSON.forEach(function(obj) {
    newId = obj.id;
    console.log(newId);
    console.log(typeof newId);
    db.collection("posts").doc(newId).set({
        id: obj.id,
        coverImage: obj.coverImage,
        title: obj.title,
        topic: obj.topic,
        dateFormatted: obj.dateFormatted,
        datePretty: obj.datePretty,
        content: obj.content
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});