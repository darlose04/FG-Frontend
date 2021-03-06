import React, { Component } from "react";
// import "../styles/Glossary.css";

export default class Glossary extends Component {
  render() {
    return (
      <div
        className="container mt-2"
        // style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      >
        <h1 id="top" className="text-center mb-2 display-3">
          Statistics Glossary
        </h1>
        <div>
          <a href="#hitting" className="text-success mr-1">
            Go to Hitting
          </a>
          {" | "}
          <a href="#pitching" className="text-success">
            Go to Pitching
          </a>
        </div>

        <div id="hitting" className="p-3 mb-3">
          <h3 className="sectionTitle">Hitting Statistics</h3>
          <p className="sectionTitle">
            Statistic definitions from{" "}
            <a href="https://library.fangraphs.com/offense/offensive-statistics-list/">
              Fangraphs
            </a>
          </p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Games: </strong>The number of games played in.
            </li>
            <li className="list-group-item">
              <strong>Plate Appearances: </strong>The number of times the player
              has come to the plate.
            </li>
            <li className="list-group-item">
              <strong>At Bats: </strong>The number of trips to the plate in
              which the batter does not walk, get hit by a pitch, sacrifice (fly
              or bunt), or reach on interference.
            </li>
            <li className="list-group-item">
              <strong>Hits/Singles/Doubles/Triples/Home Runs: </strong>The
              number of hits of a certain type hit by the player.
            </li>
            <li className="list-group-item">
              <strong>Runs: </strong>The number of runs scored by the player.
            </li>
            <li className="list-group-item">
              <strong>RBI: </strong>Runs Batted In. The number times a run
              scores as a result of a batter's plate appearance, does not count
              situations in which an error caused the run to score or if a run
              scores when the batter hits into a double play.
            </li>
            <li className="list-group-item">
              <strong>Stolen Bases (SB): </strong>The number of stolen bases.
            </li>
            <li className="list-group-item">
              <strong>Walks (BB): </strong>Total number of walks, includes
              intentional walks.
            </li>
            <li className="list-group-item">
              <strong>Intentional Walks (IBB): </strong>Number of times the
              batter was intentionally walked.
            </li>
            <li className="list-group-item">
              <strong>Strikeouts (SO): </strong>Number of strikeouts.
            </li>
            <li className="list-group-item">
              <strong>Hit by Pitch (HBP): </strong>Number of times the batter
              reached after being hit by a pitch.
            </li>
            <li className="list-group-item">
              <strong>Sacrifice Flies (SF): </strong>Number of times the
              batter's fly out allowed a runner to tag up and score.
            </li>
            <li className="list-group-item">
              <strong>Sacrifice Bunts (SH): </strong>Any bunt in which there was
              a runner on base and less than two outs in which the batter was
              put out and at least one runner advanced.
            </li>
            <li className="list-group-item">
              <strong>Ground into Double Play (GDP): </strong>Number of times
              the batter hit into a double play.
            </li>
            <li className="list-group-item">
              <strong>Walk to Strikeout Ratio (BB/K): </strong>Ratio of walks to
              strikeouts, calculated as Walks/Strikeouts.
            </li>
            <li className="list-group-item">
              <strong>Walk Percentage (BB%): </strong>The frequency with which
              the batter has walked. Calculated as walks divided by plate
              appearances.
            </li>
            <li className="list-group-item">
              <strong>Strikeout Percentage (K%): </strong>The frequency with
              which the batter strikes out. Calculated as strikeouts divided by
              plate appearances.
            </li>
            <li className="list-group-item">
              <strong>Ground Ball to Fly Ball Ratio (GB/FB): </strong>The ratio
              of ground balls a batter hits to fly balls, calculated as GB/FB.
            </li>
            <li className="list-group-item">
              <strong>Line Drive Percentage (LD%): </strong>TThe percentage of a
              batter’s balls in play that are line drives, calculated as LD/BIP
              (Balls in Play).
            </li>
            <li className="list-group-item">
              <strong>Ground Ball Percentage (GB%): </strong>The percentage of a
              batter’s balls in play that are ground balls, calculated as
              GB/BIP.
            </li>
            <li className="list-group-item">
              <strong>Fly Ball Percentage (FB%): </strong>The percentage of a
              batter’s balls in play that are fly balls, calculated as FB/BIP.
            </li>
            <li className="list-group-item">
              <strong>Home Run to Fly Ball Rate (HR/FB): </strong>Percentage of
              a batter’s fly balls that go for home runs, calculated as HB/FB
              (even though some HR are line drives).
            </li>
            <li className="list-group-item">
              <strong>ISO: </strong>Isolated Power. Average number of extra
              bases (doubles, triples, home runs) per at bat, calculated several
              ways such as SLG minus AVG.
            </li>
            <li className="list-group-item">
              <strong>BABIP: </strong>Batting Average on Balls in Play. The rate
              at which the batter gets a hit when he puts the ball in play,
              calculated as (H-HR) / (AB-K-HR+SF).
            </li>
            <li className="list-group-item">
              <strong>AVG: </strong>Rate of hits per at bat, calculated as H /
              AB.
            </li>
            <li className="list-group-item">
              <strong>OBP: </strong>On-Base Percentage. Rate at which the batter
              reaches base, calculated as (H+BB+HBP) / (AB+BB+HBP+SF).
            </li>
            <li className="list-group-item">
              <strong>SLG: </strong>Slugging Percentage. Average number of total
              bases per at bat, calculated as Total Bases / AB.
            </li>
            <li className="list-group-item">
              <strong>OPS: </strong>OBP + SLG.
            </li>
            <li className="list-group-item">
              <strong>wOBA: </strong>Weighted On Base Average. Combines all the
              different aspects of hitting into one metric, weighting each of
              them in proportion to their actual run value. While batting
              average, on-base percentage, and slugging percentage fall short in
              accuracy and scope, wOBA measures and captures offensive value
              more accurately and comprehensively.
            </li>
            <li className="list-group-item">
              <strong>wRC+: </strong>Weighted Runs Created Plus. The most
              comprehensive rate statistic uesd to measure hitting performance
              because it takes into account the varying weights of each
              offensive action (like wOBA) and then adjusts them for the park
              and league context in which they took place.
            </li>
            <li className="list-group-item">
              <strong>BsR: </strong>Base Running Runs Above Average. Number of
              runs above or below average a player has been worth on the bases,
              based on stolen bases, caught stealing, extra bases taken, outs on
              the bases, and avoiding double plays. It is the combination of
              wSB, UBR, and wGDP.
            </li>
            <li className="list-group-item">
              <strong>Off: </strong>Offensive Runs Above Average. Number of runs
              above or below average a player has been worth offensively,
              combining Batting Runs and BsR.
            </li>
            <li className="list-group-item">
              <strong>Def: </strong>Defensive Runs Above Average. Number of runs
              above or below average a player has been worth on defense,
              combining Fielding Runs and the positional adjustment.
            </li>
            <li className="list-group-item">
              <strong>WAR: </strong>Wins Above Replacement. A comprehensive
              statistic that estimates the number of wins a player has been
              worth to his team compared to a freely available player such as a
              minor league free agent. Here is a
              <a href="https://library.fangraphs.com/war/war-position-players/">
                link
              </a>
              that explains how Fangraphs calculates WAR, as there are different
              methods of calculating it.
            </li>
          </ul>
        </div>

        <a href="#top" className="text-success">
          Back to Top
        </a>

        <div id="pitching" className="p-3 mb-3">
          <h3 className="sectionTitle">Pitching Statistics</h3>
          <p className="sectionTitle">
            Statistic definitions from{" "}
            <a href="https://library.fangraphs.com/pitching/complete-list-pitching/">
              Fangraphs
            </a>
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Wins: </strong>The number of wins. If a starter goes 5+
              innings and leaves with the lead, and his team does not give up
              that lead, he qualifies for the win. For relievers, if they are
              the pitcher on record when his team takes the lead he gets the
              win.
            </li>
            <li className="list-group-item">
              <strong>Losses: </strong>The number of losses. Giving up the lead
              to the other team while his team is unable to retake the lead at
              any point afterwards.
            </li>
            <li className="list-group-item">
              <strong>No Decisions: </strong>This stat is not kept track of
              here, but it is relevant to wins and losses. Occurs when a pitcher
              leaves a game without earning a win or a loss.
            </li>
            <li className="list-group-item">
              <strong>Games: </strong>Number of games in which the pitcher
              appeared.
            </li>
            <li className="list-group-item">
              <strong>Starts: </strong>The number of games a pitcher starts.
            </li>
            <li className="list-group-item">
              <strong>Saves: </strong>The number of saves a pitcher records. A
              save is rewarded to the relief pitcher who finishes a game for the
              winning team, under certain circumstances. A pitcher cannot
              recieve a save and a win in the same game. A pitcher records a
              save while doing one of the following:
              <ul>
                <li>
                  Enter the game with a lead of no more than three runs and
                  pitch at least one inning
                </li>
                <li>
                  Enter the game with the tying run in the on-deck circle, at
                  the plate, or on the bases
                </li>
                <li>Pitch at least three innings to close the game</li>
              </ul>
            </li>
            <li className="list-group-item">
              <strong>IP: </strong>Innings Pitched. Number of total innings
              pitched (.1 represents 1/3 of an inning, .2 represents 2/3) .
            </li>
            <li className="list-group-item">
              <strong>Hits: </strong>Number of hits allowed by the pitcher.
            </li>
            <li className="list-group-item">
              <strong>Runs: </strong>Number of runs allowed by the pitcher.
            </li>
            <li className="list-group-item">
              <strong>Earned Runs: </strong>Number of earned runs allowed by the
              pitcher.
            </li>
            <li className="list-group-item">
              <strong>Home Runs: </strong>Number of home runs allowed by the
              pitcher.
            </li>
            <li className="list-group-item">
              <strong>Walks: </strong>Number of walks allowed by the pitcher.
            </li>
            <li className="list-group-item">
              <strong>Strikeouts: </strong>Number of strikeouts.
            </li>
            <li className="list-group-item">
              <strong>Intentional Walks: </strong>Number of intentionals walks
              issued by the pitcher.
            </li>
            <li className="list-group-item">
              <strong>Hit by Pitch: </strong>Number of hit batters.
            </li>
            <li className="list-group-item">
              <strong>Wild Pitches: </strong>Number of wild pitches thrown.
            </li>
            <li className="list-group-item">
              <strong>Ground Balls: </strong>Number of ground balls allowed by
              the pitcher.
            </li>
            <li className="list-group-item">
              <strong>Fly Balls: </strong>Number of fly balls allowed by the
              pitcher.
            </li>
            <li className="list-group-item">
              <strong>Line Drives: </strong>Number of line drives allowed by the
              pitcher.
            </li>
            <li className="list-group-item">
              <strong>Balls: </strong>Number of total balls thrown.
            </li>
            <li className="list-group-item">
              <strong>Strikes: </strong>Number of total strikes thrown.
            </li>
            <li className="list-group-item">
              <strong>Pitches: </strong>Number of total pitches thrown.
            </li>
            <li className="list-group-item">
              <strong>K/9: </strong>Strikeouts per 9 innings. Average number of
              strikeouts per 9 innings.
            </li>
            <li className="list-group-item">
              <strong>BB/9: </strong>Walks per 9 innings. Average number of
              walks per 9 innings.
            </li>
            <li className="list-group-item">
              <strong>HR/9: </strong>Home Runs per 9 innings. Average number of
              home runs allowed per 9 innings.
            </li>
            <li className="list-group-item">
              <strong>Average (Batting Average Against): </strong> Rate of hits
              allowed per at bat, calculated as H/AB.
            </li>
            <li className="list-group-item">
              <strong>BABIP: </strong>Batting Average on Balls in Play. The rate
              at which the pitcher allows a hit when the ball is put in play,
              calculated as (H-HR)/(AB-K-HR+SF).
            </li>
            <li className="list-group-item">
              <strong>LOB%: </strong>Left On-Base Percentage. Percentage of
              pitcher's own base runners that they strand over the course of a
              season. Not equal to the LOB column in the box score.
            </li>
            <li className="list-group-item">
              <strong>GB%: </strong>Ground Ball Percentage. The percentage of a
              pitcher's balls in play that are ground balls, calculated as
              GB/BIP.
            </li>
            <li className="list-group-item">
              <strong>LD%: </strong>Line Drive Percentage. The percentage of a
              pitcher's balls in play that are line drives, calculated as
              LD/BIP.
            </li>
            <li className="list-group-item">
              <strong>FB%: </strong>Fly Ball Percentage. The percentage of a
              pitcher's balls in play that are fly balls, calculated as FB/BIP.
            </li>
            <li className="list-group-item">
              <strong>HR/FB: </strong>Home Run to Fly Ball Rate. Percentage of a
              pitcher's fly balls that go for home runs, calculated as HB/FB
              (even though some HR are line drives).
            </li>
            <li className="list-group-item">
              <strong>ERA: </strong>Earned Run Average. The average number of
              earned runs a pitcher allows per 9 innings, calculated as
              ((ER*9)/IP)
            </li>
            <li className="list-group-item">
              <strong>WHIP: </strong>Walks / Hits per Inning Pitched. The number
              of walks and hits allowed per inning pitched.
            </li>
            <li className="list-group-item">
              <strong>FIP: </strong>Fielding Independent Pitching. An estimate
              of a pitcher's ERA based on strikeouts, walks/HBP, and home runs
              allowed, assuming league average results on balls in play.
            </li>
            <li className="list-group-item">
              <strong>xFIP: </strong>Expected Fielding Independent Pitching. An
              estimate of a pitcher's ERA based on strikeouts, walks/HBP, and
              fly balls allowed, assuming league average results on balls in
              play and home run to fly ball ratio.
            </li>
            <li className="list-group-item">
              <strong>WAR: </strong> Wins Above Replacement. A comprehensive
              statistic that estimates the number of wins a player has been
              worth to his team compared to a freely available player such as a
              minor league free agent based on FIP.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
