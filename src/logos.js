const logos = [
  {
    id: 1,
    location: "Baltimore",
    teamName: "Orioles",
    division: "AL East",
    src: "http://content.sportslogos.net/logos/53/52/thumbs/5258002019.gif"
  },
  {
    id: 2,
    location: "Boston",
    teamName: "Red Sox",
    division: "AL East",
    src:
      "http://content.sportslogos.net/logos/53/53/thumbs/c0whfsa9j0vbs079opk2s05lx.gif"
  },
  {
    id: 3,
    location: "Chicago",
    teamName: "White Sox",
    division: "AL Central",
    src:
      "http://content.sportslogos.net/logos/53/55/thumbs/oxvkprv7v4inf5dgqdebp0yse.gif"
  },
  {
    id: 4,
    location: "Cleveland",
    teamName: "Indians",
    division: "AL Central",
    src: "http://content.sportslogos.net/logos/53/57/thumbs/5753472014.gif"
  },
  {
    id: 5,
    location: "Detroit",
    teamName: "Tigers",
    division: "AL Central",
    src: "http://content.sportslogos.net/logos/53/59/thumbs/5989642016.gif"
  },
  {
    id: 6,
    location: "Houston",
    teamName: "Astros",
    division: "AL West",
    src: "http://content.sportslogos.net/logos/53/4929/thumbs/492995032000.gif"
  },
  {
    id: 7,
    location: "Kansas City",
    teamName: "Royals",
    division: "AL Central",
    src: "http://content.sportslogos.net/logos/53/62/thumbs/6283222019.gif"
  },
  {
    id: 8,
    location: "Los Angeles",
    teamName: "Angels",
    division: "AL West",
    src: "http://content.sportslogos.net/logos/53/6521/thumbs/652143892016.gif"
  },
  {
    id: 9,
    location: "Minnesota",
    teamName: "Twins",
    division: "AL Central",
    src:
      "http://content.sportslogos.net/logos/53/65/thumbs/peii986yf4l42v3aa3hy0ovlf.gif"
  },
  {
    id: 10,
    location: "New York",
    teamName: "Yankees",
    division: "AL East",
    src: "http://content.sportslogos.net/logos/53/68/thumbs/1256.gif"
  },
  {
    id: 11,
    location: "Oakland",
    teamName: "Athletics",
    division: "AL West",
    src:
      "http://content.sportslogos.net/logos/53/69/thumbs/6xk2lpc36146pbg2kydf13e50.gif"
  },
  {
    id: 12,
    location: "Seattle",
    teamName: "Mariners",
    division: "AL West",
    src: "http://content.sportslogos.net/logos/53/75/thumbs/1305.gif"
  },
  {
    id: 13,
    location: "Tampa Bay",
    teamName: "Rays",
    division: "AL East",
    src: "http://content.sportslogos.net/logos/53/2535/thumbs/253594482019.gif"
  },
  {
    id: 14,
    location: "Texas",
    teamName: "Rangers",
    division: "AL West",
    src:
      "http://content.sportslogos.net/logos/53/77/thumbs/ajfeh4oqeealq37er15r3673h.gif"
  },
  {
    id: 15,
    location: "Toronto",
    teamName: "Blue Jays",
    division: "AL East",
    src: "http://content.sportslogos.net/logos/53/78/thumbs/7889872020.gif"
  },
  {
    id: 16,
    location: "Arizona",
    teamName: "Diamondbacks",
    division: "NL West",
    src:
      "http://content.sportslogos.net/logos/54/50/thumbs/gnnnrbxcmjhdgeu6mavqk3945.gif"
  },
  {
    id: 17,
    location: "Atlanta",
    teamName: "Braves",
    division: "NL East",
    src: "http://content.sportslogos.net/logos/54/51/thumbs/5171502018.gif"
  },
  {
    id: 18,
    location: "Chicago",
    teamName: "Cubs",
    division: "NL Central",
    src:
      "http://content.sportslogos.net/logos/54/54/thumbs/q9gvs07u72gc9xr3395u6jh68.gif"
  },
  {
    id: 19,
    location: "Cincinnati",
    teamName: "Reds",
    division: "NL Central",
    src:
      "http://content.sportslogos.net/logos/54/56/thumbs/z9e0rqit393ojiizsemd0t1hx.gif"
  },
  {
    id: 20,
    location: "Colorado",
    teamName: "Rockies",
    division: "NL West",
    src: "http://content.sportslogos.net/logos/54/58/thumbs/5868712017.gif"
  },
  {
    id: 21,
    location: "Los Angeles",
    teamName: "Dodgers",
    division: "NL West",
    src:
      "http://content.sportslogos.net/logos/54/63/thumbs/efvfv5b5g1zgpsf56gb04lthx.gif"
  },
  {
    id: 22,
    location: "Miami",
    teamName: "Marlins",
    division: "NL East",
    src: "http://content.sportslogos.net/logos/54/3637/thumbs/363775442019.gif"
  },
  {
    id: 23,
    location: "Milwaukee",
    teamName: "Brewers",
    division: "NL Central",
    src: "http://content.sportslogos.net/logos/54/64/thumbs/6464742020.gif"
  },
  {
    id: 24,
    location: "New York",
    teamName: "Mets",
    division: "NL East",
    src:
      "http://content.sportslogos.net/logos/54/67/thumbs/m01gfgeorgvbfw15fy04alujm.gif"
  },
  {
    id: 25,
    location: "Philadelphia",
    teamName: "Phillies",
    division: "NL East",
    src: "http://content.sportslogos.net/logos/54/70/thumbs/7075792019.gif"
  },
  {
    id: 26,
    location: "Pittsburgh",
    teamName: "Pirates",
    division: "NL Central",
    src: "http://content.sportslogos.net/logos/54/70/thumbs/7075792019.gif"
  },
  {
    id: 27,
    location: "San Diego",
    teamName: "Padres",
    division: "NL West",
    src: "http://content.sportslogos.net/logos/54/73/thumbs/7375172020.gif"
  },
  {
    id: 28,
    location: "San Francisco",
    teamName: "Giants",
    division: "NL West",
    src:
      "http://content.sportslogos.net/logos/54/74/thumbs/cpqj6up5bvgpoedg5fwsk20ve.gif"
  },
  {
    id: 29,
    location: "St. Louis",
    teamName: "Cardinals",
    division: "NL Central",
    src:
      "http://content.sportslogos.net/logos/54/72/thumbs/3zhma0aeq17tktge1huh7yok5.gif"
  },
  {
    id: 30,
    location: "Washington",
    teamName: "Nationals",
    division: "NL East",
    src:
      "http://content.sportslogos.net/logos/54/578/thumbs/rcehah9k0kekjkgzm077fflws.gif"
  }
];

export { logos };
