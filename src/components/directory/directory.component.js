import React from "react";
import MenuItem from "../menuItem/menuItem.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: "Hoodies",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
        id: 1,
        linkUrl: "hoodies",
        size: "long"
      },
      {
        title: "Accessories",
        imageUrl: "https://blogcms.gymshark.com/uploads/1526901852-3.jpg",
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
        imageUrl: "",
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

  render() {
    console.log("history", this.props.history);
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
