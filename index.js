const data = [
    {
        name:"Ashish",
        Age:22,
        Language: "javascript",
        City:"Delhi",
        Framework:"Django",
        image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Ritik",
        Age:21,
        Language: "GO",
        City:"Kolkata",
        Framework:"Flask",
        image:"https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        name:"Raj",
        Age:22,
        Language: "Python",
        City:"Delhi",
        Framework:"Django",
        image:"https://randomuser.me/api/portraits/men/79.jpg"
    },
    {
        name:"Kritika",
        Age:21,
        Language: "C",
        City:"Jaipur",
        Framework:"none",
        image:"https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
        name:"Nitin",
        Age:22,
        Language: "C++",
        City:"Mumbai",
        Framework:"Django",
        image:"https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
        name:"Rajesh",
        Age:22,
        Language: "javascript",
        City:"Mumbai",
        Framework:"Angular",
        image:"https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
        name:"Kuku",
        Age:25,
        Language: "Java",
        City:"jaipur",
        Framework:"Django",
        image:"https://randomuser.me/api/portraits/women/75.jpg"
    }
]

function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.Age} years old</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.Language}</li>
    <li class="list-group-item">Lives in ${currentCandidate.City}</li>
    <li class="list-group-item">Uses ${currentCandidate.Framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}