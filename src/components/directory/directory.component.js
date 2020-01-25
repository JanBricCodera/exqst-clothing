import React from "react";
import MenuItem from "../menuItem/menuItem.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
        id: 1,
        linkUrl: "shop/hats"
      },
      {
        title: "jackets",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
        id: 2,
        linkUrl: "shop/jackets"
      },
      {
        title: "sneakers",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
        id: 3,
        linkUrl: "shop/sneakers"
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "long",
        id: 4,
        linkUrl: "shop/womens"
      },
      {
        title: "mens",
        // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
        size: "long",
        id: 5,
        linkUrl: "shop/mens"
      }
    ]
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
