const presence = new Presence({
  clientId: "797596006820085790" //The client ID of the Application created at https://discordapp.com/developers/applications
});

var browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "idlescape"
  };
  var titleFormatted = document.getElementsByClassName("status-action")[0].textContent;
  presenceData.startTimestamp = browsingStamp;
  if (document.location.pathname == "/" || document.location.pathname == "/characters") {
    presenceData.details = "Choosing a character";
  } else {
    presenceData.details = titleFormatted;
    if((<HTMLImageElement>document.getElementsByClassName("header-league-icon")[0]).src.startsWith("https://idlescape.com/images/leagues/ironman")) {
      var league = "Ironman";
    } else {
      var league = "Normal";
    }
    presenceData.state = document.getElementsByClassName("navbar1-box left drawer-button noselect")[0].textContent.substring(2) + "in " + league;

    if(titleFormatted.startsWith("Mining")){
      presenceData.smallImageText = "Mining level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[0].textContent;
      presenceData.smallImageKey = "mining";
    }
      else if(titleFormatted.startsWith("Foraging"))
    {
      presenceData.smallImageText = "Foraging level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[1].textContent;
      presenceData.smallImageKey = "foraging";
    }
      else if(titleFormatted.startsWith("Fishing"))
    {
      presenceData.smallImageText = "Fishing level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[2].textContent;
      presenceData.smallImageKey = "fishing";
    }
      else if(titleFormatted.startsWith("Smithing"))
    {
      presenceData.smallImageText = "Smithing level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[4].textContent;
      presenceData.smallImageKey = "smithing";
    }
      else if(titleFormatted.startsWith("Cooking"))
    {
      presenceData.smallImageText = "Cooking level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[5].textContent;
      presenceData.smallImageKey = "cooking";
    }
      else if(titleFormatted.startsWith("Runecrafting"))
    {
      presenceData.smallImageText = "Runecrafting level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[7].textContent;
      presenceData.smallImageKey = "runecrafting";
    }
      else if(titleFormatted.startsWith("Enchanting"))
    {
      presenceData.details = "Scrollcrafting";
      presenceData.smallImageText = "Enchanting level : " + document.getElementsByClassName("skill-level-bar-ni-exp-level")[8].textContent;
      presenceData.smallImageKey = "enchanting";
    }
      else if(titleFormatted.startsWith("Fighting"))
    {
      presenceData.smallImageText = "HP:" + document.getElementsByClassName("skill-level-bar-ni-exp-level")[9].textContent +
        ", ATK:" + document.getElementsByClassName("skill-level-bar-ni-exp-level")[10].textContent + 
        ", STR:" + document.getElementsByClassName("skill-level-bar-ni-exp-level")[11].textContent + 
        ", DEF:" + document.getElementsByClassName("skill-level-bar-ni-exp-level")[12].textContent;
      presenceData.smallImageKey = "fighting";
    }
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});