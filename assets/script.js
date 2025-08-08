async function loadFeed(){
  try{
    const res = await fetch("feed.json", {cache:"no-store"});
    const feed = await res.json();
    const box = document.getElementById("feed");
    box.innerHTML = feed.items.slice(0,10).map(it=>`
      <div class="item">
        <strong>${it.title}</strong><br>
        <small>${it.date}</small>
        <p>${it.summary}</p>
      </div>
    `).join("");
  }catch(e){
    console.log(e);
  }
}
loadFeed();
