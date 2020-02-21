import React, { Component } from "react";
import HomeCard from "./HomeCard";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    const cardInfo = [
      {
        id: 1,
        title: "Statistics",
        message:
          "Hitting and pitching statistics are organized between standard and advanced stats and encompass the seasons 2002-2019. Charts can also be viewed to compare data between seasons, teams, or league averages.",
        link: "",
        button: ""
      },
      {
        id: 2,
        title: "Search for Individual Players",
        message:
          "Search for players in the above search bar or on the Player Search page.",
        link: "/players",
        button: "Player Search"
      },
      {
        id: 3,
        title: "Return Player Stats by Season",
        message:
          "Instead of searching for a specific player, return hitting and pitching statistics for players according to season.",
        link: "/players",
        button: "Player Seasons"
      },
      {
        id: 4,
        title: "Team Selection",
        message:
          "View the statistics of a specific team. Yearly team stats can be viewed, as well as roster statistics for each season shown.",
        link: "/teamselect",
        button: "Team Select"
      },
      {
        id: 5,
        title: "Team Statistics",
        message:
          "Compare team statistics side by side. Select a different season in order to view statistics between teams during selected season.",
        link: "/teamstats",
        button: "Team Statistics"
      },
      {
        id: 6,
        title: "Glossary",
        message:
          "Any unfamiliar statistics? The Glossary contains definitions for all statistics used.",
        link: "/glossary",
        button: "Glossary"
      }
    ];

    return (
      <div className="homePage mt-5">
        <div className="row">
          {cardInfo.map(card => (
            <HomeCard
              key={card.id}
              title={card.title}
              msg={card.message}
              link={card.link}
              button={card.button}
            />
          ))}
        </div>
      </div>
    );
  }
}
