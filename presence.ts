const presence = new Presence({
  clientId: "797596006820085790" //The client ID of the Application created at https://discordapp.com/developers/applications
});

var browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "idlescape"
  };
  var titleFormatted = document.title.substring(12);
  presenceData.startTimestamp = browsingStamp;
  if (document.location.pathname == "/" || document.location.pathname == "/characters") {
    presenceData.details = "Choosing a character";
  } else {
    presenceData.details = titleFormatted;
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});