const presence = new Presence({
  clientId: "797596006820085790" //The client ID of the Application created at https://discordapp.com/developers/applications
});

var browsingStamp = Math.floor(Date.now() / 1000);
var flag = "";

function getLevel(index: number)
{
  let isMastery = document.getElementsByClassName("skill-level-bar-ni-exp-bar")[index].className.includes("mastery");
  return document.getElementsByClassName("skill-level-bar-ni-exp-level")[index].textContent + (isMastery ? "M" : "");
}

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "idlescape"
  };
  var titleFormatted = document.getElementsByClassName("status-action")[0].textContent;
  
  if(flag == ""){
    flag = titleFormatted;
  }
  if(flag != titleFormatted){
    browsingStamp = Math.floor(Date.now() / 1000);
  }
  presenceData.startTimestamp = browsingStamp;

  if (document.location.pathname == "/" || document.location.pathname == "/characters") {
    presenceData.details = "Choosing a character";
  } else {
    presenceData.details = titleFormatted;
    if((<HTMLImageElement>document.getElementsByClassName("header-league-icon")[0]).src.startsWith("https://idlescape.com/images/leagues/ironman")) {
      var league = "Ironman League";
    } else {
      var league = "Normal League";
    }
    presenceData.state = document.getElementsByClassName("navbar1-box left drawer-button noselect")[0].textContent.substring(2) + "in " + league;

    if(titleFormatted.startsWith("Mining")){
      presenceData.smallImageText = "Mining level : " + getLevel(0);
      presenceData.smallImageKey = "mining";
    }
      else if(titleFormatted.startsWith("Foraging"))
    {
      presenceData.smallImageText = "Foraging level : " + getLevel(1);
      presenceData.smallImageKey = "foraging";
    }
      else if(titleFormatted.startsWith("Fishing"))
    {
      presenceData.smallImageText = "Fishing level : " + getLevel(2);
      presenceData.smallImageKey = "fishing";
    }
      else if(titleFormatted.startsWith("Smithing"))
    {
      presenceData.smallImageText = "Smithing level : " + getLevel(3);
      presenceData.smallImageKey = "smithing";
    }
      else if(titleFormatted.startsWith("Cooking"))
    {
      presenceData.smallImageText = "Cooking level : " + getLevel(5);
      presenceData.smallImageKey = "cooking";
    } 
      else if(titleFormatted.startsWith("Runecrafting"))
    {
      presenceData.smallImageText = "Runecrafting level : " + getLevel(7);
      presenceData.smallImageKey = "runecrafting";
    }
      else if(titleFormatted.startsWith("Enchanting"))
    {
      presenceData.details = "Scrollcrafting";
      presenceData.smallImageText = "Enchanting level : " + getLevel(8);
      presenceData.smallImageKey = "enchanting";
    }
      else if(titleFormatted.startsWith("Fighting"))
    {
      presenceData.smallImageText = "HP:" + getLevel(9) +
        ", ATK:" + getLevel(10) + 
        ", STR:" + getLevel(11) + 
        ", DEF:" + getLevel(12);
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