var arr = [
    {name: "vicky", dp: "https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80", image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" },
    {name: "raghav", dp: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80", image: "https://images.unsplash.com/photo-1532703108233-69111d554cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" },
    {name: "harshita", dp: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2541&q=80", image: "https://images.unsplash.com/photo-1532703321856-d512f3613d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2554&q=80" },
    {name: "harsh", dp: "https://images.unsplash.com/photo-1524244310120-3af0bc67465e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80", image: "https://images.unsplash.com/photo-1541444158451-e8d16365c29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" }
];

var clutter = '';
var clutter2 = '';
for (var i = 0; i < 4; i++) {
    clutter = clutter + `
        <div class="story">
            <div id="image">
                <img src=${arr[i].dp} alt="">
                <div id="${i}" class="overlay"></div>
                <div class="username">
                    <h3>${arr[i].name}</h3>
                </div>
            </div>
        </div>`;
    clutter2 = clutter2 + `
    <div class="fullPreview" id="fullPreview${i}">
        <div class="meter">
            <div id='progress${i}' class="progress"></div>
        </div>
        <img src=${arr[i].image}>
    </div>`;
}

document.querySelector('#stories').innerHTML = clutter;

document.querySelector('#main').innerHTML += clutter2;

var s;
var growth = 0; //0 1 2 3 ... 99, 100
document.querySelector('#stories').addEventListener('click', function (dets) {
    // document.querySelector('#fullPreview img').setAttribute('src', arr[dets.target.id].image);
    var pic = document.querySelector(`#fullPreview${dets.target.id}`);
    pic.style.display = 'flex';
    if (growth <= 100) {
        s = setInterval(function () {
            growth++;
            var progress = document.querySelector(`#progress${dets.target.id}`);
            progress.style.width = `${growth}%`;
        }, 25);
        setTimeout(function(){
            pic.style.display = 'none';
            clearInterval(s);
        }, 2510);
    }
    growth = 0;
    console.log(dets.target);
});