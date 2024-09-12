
const roster = [
    { name: "Aaron Rodgers", position: "QB", number: 8, imageUrl: "https://smartcdn.gprod.postmedia.digital/torontosun/wp-content/uploads/2024/09/Aaron-Rodgers.jpg" },
    { name: "Sauce Gardner", position: "CB", number: 1, imageUrl: "https://storage.googleapis.com/afs-prod/media/b5b35019213842b7992fb24f24acb608/3000.jpeg" },
    { name: "Garrett Wilson", position: "WR", number: 5, imageUrl: "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/jets/w80ywpqtnlsihiucgo74" },
    { name: "Breece Hall", position: "RB", number: 20, imageUrl: "https://th.bing.com/th/id/R.89068aaeb3249afee8f7d95417d98c70?rik=H87DetY7U5oKOA&pid=ImgRaw&r=0" },
    { name: "Quinnen Williams", position: "DT", number: 95, imageUrl: "https://www.si.com/.image/t_share/MTgyMjQ0NTA3NTcwNDE0NzIz/quinnen-williams-sideline-jets.jpg" },
    { name: "C.J Mosley", position: "LB", number: 57, imageUrl: "https://jetswire.usatoday.com/wp-content/uploads/sites/66/2024/09/1964300829.jpeg?w=1000&h=600&crop=1" },
    { name: "Jermiane Johnson", position: "DE", number: 11, imageUrl: "https://media.jetsxfactor.com/cdn-cgi/image/width=800,height=450,fit=crop,quality=90,gravity=auto,sharpen=1,metadata=none,format=auto,onerror=redirect/wp-content/uploads/2024/09/06161909/Jermaine-Johnson-NY-Jets-NFL-Haason-Reddick.jpg" },
    { name: "Quincy Williams", position: "LB", number: 56, imageUrl: "https://www.amny.com/wp-content/uploads/2022/11/AP22310772789550-1-1200x800.jpg" },
    
]; 


function renderRoster() {
    const rosterList = document.getElementById('roster-list');
    rosterList.innerHTML = ''; 

    roster.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        
        playerDiv.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>${player.position} #${player.number}</p>
        `;
        
        rosterList.appendChild(playerDiv);
    });
}


document.addEventListener('DOMContentLoaded', renderRoster);