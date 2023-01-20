let verse = document.getElementById("verse")
let purport = document.getElementById("purport")
let shlokaid = document.getElementById("shlokaid")
let uddyesh = document.getElementById("uddyesh")
let title = document.getElementById("title")

verse.innerText = "Enter Chapter Number and Verse Number"
// shlokaid.classList.toggle("d-none")


function fetchData(){
    verse.innerText="";
    purport.innerText="";
    let chapnum = document.getElementById("chapinp").value;
    let versenum = document.getElementById("verseinp").value;
    let url = `https://cors-anywhere.herokuapp.com/https://gita-api.vercel.app/tel/verse/${chapnum}/${versenum}`;
    let prom = fetch(url);
    prom.then((res)=>{
        return res.json()
    }).then((val)=>{
        console.log(val);
        // let aud = new Audio(val.audio_link)
        if(val.message){
            verse.innerText = val.message;
            
        }
        else{
            verse.innerText = val.verse;
            purport.innerHTML = '<b>తాత్పర్యం</b> : '+val.translation;
            val.purport.forEach(element => {
                uddyesh.innerHTML+=(element+'</br>');
            });
            shlokaid.setAttribute("href",val.audio_link)
            title.innerText=val.chapter_name
            // shlokaid.addEventListener('click',()=>{
            //     if(shlokaid.innerText==='⏸'){
            //         shlokaid.innerText='▶';
            //         aud.pause()
            //     }
            //     else{
            //         shlokaid.innerText='⏸';
            //         aud.play()
            //     }
            // })
        }
    }).catch((err)=>{
        console.log(err);
        verse.innerText="Enter Chapter Number and Verse Number"
        purport.innerText="";
    })
}