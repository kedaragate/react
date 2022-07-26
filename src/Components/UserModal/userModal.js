import React from "react";

class UserModal extends React.Component {
  constructor() {
    super();
    this.state = { userData: [] };
  }

  componentDidMount() {
    fetch("https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca", {
      headers: {
        "app-id": "62c1b1b65b25e6a595ee427b",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
}
