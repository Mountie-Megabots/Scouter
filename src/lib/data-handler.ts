// @ts-nocheck

import Teams from '../pages/teams/teams';
import { MakeScoutPiPostRequest, MakeScoutPiRequest } from './api-handler'

export async function fetchMatches() {

  if (localStorage.getItem("matches") != null) {
    return JSON.parse(localStorage.getItem("matches"));
  }
  else {
    try {

      const rawMatches = await MakeScoutPiRequest(`/match/comp/${getCurrentComp()}/all`);

      let matches = []
      let sortedMatches = []
      let count = 1

      rawMatches.data.forEach(function (match) {
        matches.push({
          id: match.id,
          matchNum: match.matchNum,
          red1: match.red1,
          red2: match.red2,
          red3: match.red3,
          blue1: match.blue1,
          blue2: match.blue2,
          blue3: match.blue3,
          uploadStatus: 'pending',
          matchStatus: 'future'
        });
      });

      while (sortedMatches.length < matches.length) {
        matches.forEach(function (match) {
          if (match.matchNum = count) {
            sortedMatches.push(match);
            count++;
          }
        })
      }

      localStorage.setItem("matches", JSON.stringify(sortedMatches));

      return sortedMatches

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }
}

export async function fetchTeams() {
  if (localStorage.getItem("teams") != null) {
    return JSON.parse(localStorage.getItem("teams"));
  }
  else {
    try {

      const rawTeams = await MakeScoutPiRequest(`/comp/${getCurrentComp()}`);

      const teamList = JSON.parse(rawTeams.data.teams);

      let teams = []

      for (var i = 0; i < teamList.length; i++) {
        let team = teamList[i]

        const fullTeam = await MakeScoutPiRequest("/team/" + team);

        let avatar = "/first.png"

        if (fullTeam.data.avatar != "") {
          avatar = 'data:image/png;base64,' + fullTeam.data.avatar
        }

        teams.push({
          name: fullTeam.data.name,
          rank: '0',
          image_url: avatar,
          avgNotesScored: '0',
          avgClimb: '0%',
          teamNum: fullTeam.data.teamNum,
          pitscout: await getPitScoutStatus(fullTeam.data.teamNum)
        });
      };

      localStorage.setItem("teams", JSON.stringify(teams));

      return teams;

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }
}

export async function createComp(name, blueid) {
  console.log(name + " : " + blueid)
  try {
    await MakeScoutPiPostRequest("/comp/create", { name: name, blueid: blueid });
    window.location.href = "/dashboard";

  } catch (error) {
    console.error('Failed To Create Comp:', error)
  }
}

export async function getPitScoutStatus(teamNum) {
  try {
    const pitscout = await MakeScoutPiRequest(`/pitscout/comp/${getCurrentComp()}/team/${teamNum}`);

    // let match = false

    // pitscouts.data.forEach(pitscout => {
    //   // console.log(pitscout.teamNum + " : " + teamNum)
    //   if(pitscout.teamNum == teamNum){
    //     console.log('MATCH')
    //     match = true
    //   }
    // });

    if(pitscout.data != null){
      return 'uploaded'
    }else{
      return 'pending'
    }
  

  } catch (error) {
    console.error('Failed To Get Pitscout Data:', error)
  }
}

export async function getPitScoutByTeam(teamNum) {
  return await MakeScoutPiRequest(`/pitscout/comp/${getCurrentComp()}/team/${teamNum}`);
}

export async function createPitScout(formData){
  try {

    let underStage = false

    if(formData.target.stage.value == 'true'){
      underStage = true
    }

    let newFormData = {
      teamNum: Number(formData.target.teamNum.value),
      botPic: formData.target.filename.value,
      autoRoutines: formData.target.autoroutines.value,
      framePrimeter: Number(formData.target.frameprimeter.value),
      weight: Number(formData.target.totalweight.value),
      drivetrain: formData.target.drivetraintype.value,
      intake: formData.target.status.value,
      scoringPos: formData.target.scoringpos.value,
      driveUnderStage: underStage,
      comments: formData.target.comments.value
    }

    console.log(newFormData)

    await MakeScoutPiPostRequest(`/pitscout/comp/${getCurrentComp()}/create`, newFormData);
    window.location.href = "/dashboard/teams";

  } catch (error) {
    console.error('Failed To Create PitScout:', error)
  }
}

export async function fetchComps() {
  if (localStorage.getItem("comps") != null) {
    return JSON.parse(localStorage.getItem("comps"));
  }
  else {
    try {

      const rawComps = await MakeScoutPiRequest("/comp/all");

      let comps = []

      rawComps.data.forEach(function (comp) {
        comps.push({
          id: comp.id,
          name: comp.name,
        });
      });

      localStorage.setItem("comps", JSON.stringify(comps));
      if(localStorage.getItem("compID") == null){
        localStorage.setItem("compID", 1);
      }

      return comps;

    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }
}

export function getCurrentComp() {
  let id = 1

  if(localStorage.getItem("compID") != null){
      id = localStorage.getItem("compID")
  }

  return id
}

export async function FetchUpcomingMatches() {
  const matches = await fetchMatches()

  let upcomingMatches = []

  for (var i = 0; i < matches.length; i++) {
    let match = matches[i]
    if (match.matchStatus == 'future' && upcomingMatches.length != 5) {

      upcomingMatches.push({
        id: match.id,
        matchNum: match.matchNum,
        red1: match.red1,
        red1Avatar: await GetTeamByNum(match.red1).then((team) => team.image_url),
        red2: match.red2,
        red2Avatar: await GetTeamByNum(match.red2).then((team) => team.image_url),
        red3: match.red3,
        red3Avatar: await GetTeamByNum(match.red3).then((team) => team.image_url),
        blue1: match.blue1,
        blue1Avatar: await GetTeamByNum(match.blue1).then((team) => team.image_url),
        blue2: match.blue2,
        blue2Avatar: await GetTeamByNum(match.blue2).then((team) => team.image_url),
        blue3: match.blue3,
        blue3Avatar: await GetTeamByNum(match.blue3).then((team) => team.image_url),
        uploadStatus: match.uploadStatus,
        matchStatus: match.matchStatus,
      });
    }
  };
  console.log(upcomingMatches)
  return upcomingMatches
}

export async function GetTeamByNum(teamNum) {
  const teams = await fetchTeams()

  for (var i = 0; i < teams.length; i++) {
    let team = teams[i]
    if (team.teamNum == teamNum) {
      return team
    }
  }
}

export async function fetchCardData() {
  try {
    const nextMatch = []
    try {
      await FetchUpcomingMatches().then((matches) => matches[0].matchNum);
    }
    catch (error) {
      console.log("Failed to Fetch Matches")
    }
    const totalTeams = await fetchTeams().then((teams) => teams.length);
    const highScore = 110;
    const ourNextMatch = 5;

    return {
      totalTeams,
      nextMatch,
      highScore,
      ourNextMatch,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function SignIn(formData) {
  const token = await MakeScoutPiPostRequest("/login", { username: formData.get("username"), password: formData.get("password") });

  console.log(token.status)

  if (!token.status & token.status != null) {
    return 'Invaild Username Or Password'
  }
  else if (token.status & token.data.token != null) {
    console.log(token.data.token)
    localStorage.setItem("token", token.data.token);
    window.location.href = "/dashboard"
  }
  else {
    throw new Error('Something Went Wrong');
  }
}

export async function SignOut() {
  localStorage.removeItem("token")
  window.location.href = "/"
}