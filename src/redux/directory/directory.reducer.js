const INITIAL_STATE = {
  sections: [
    {
      title: "Hoodies",
      imageUrl:
        "https://i.pinimg.com/474x/33/52/ee/3352ee9a40112184c58b06290a0ada87.jpg",
      // imageUrl: "https://static3.businessinsider.com/image/5be1e668e4218a374b51b6a0-534-534/fitness-apparel-startup-gymshark-was-started-by-a-19-year-old-and-is-now-one-of-the-fastest-growing-companies-in-the-world--heres-what-the-clothes-are-actually-like.jpg",
      // imageUrl:"https://i.pinimg.com/originals/02/a3/4b/02a34b1230b8ed687d46f21363d36c5c.jpg",
      id: 1,
      linkUrl: "hoodies",
      size: "long"
    },
    {
      title: "Base Layer",
      imageUrl:
        "https://i.pinimg.com/originals/7d/b4/ab/7db4ab9df83c0aec50c3a0e3dd5c59d0.jpg",
      // imageUrl: "https://i.pinimg.com/originals/7c/2d/b7/7c2db70ac6243d970869de19fc7b758e.jpg",
      id: 2,
      size: "large",
      linkUrl: "jackets"
    },
    // {
    //   title: "sneakers",
    //   imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
    //   id: 3,
    //   linkUrl: "sneakers"
    // },
    {
      title: "womens",
      // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      imageUrl:
        "https://marketingweek.imgix.net/content/uploads/2018/10/11153228/Gymshark-Heroines.jpg",
      size: "large",
      id: 4,
      linkUrl: "womens"
    },
    {
      title: "mens",
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
      size: "large",
      id: 5,
      linkUrl: "mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
