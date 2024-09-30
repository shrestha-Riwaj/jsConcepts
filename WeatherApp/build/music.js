let mood = document.querySelector('#mood');
let playList = document.querySelector('#playlist');
let ul = document.createElement('ul');
let li = document.createElement('li');

mood.addEventListener('change', (e)=>{
    e.preventDefault();
    console.log(mood.value);

    const musicList = [
        {
            sad:[
                'a',
                'a',
                'a',
                'a',
            ],
            relaxed:[
                'aa',
                'av',
                'ac',
                'ax',
            ],
            happy:[
                'a',
                'a',
                'a',
                'a',
            ],
            energetic:[
                'a',
                'a',
                'a',
                'a',
            ],
        }
    ];
    moodSong(mood.value,musicList)
})
function moodSong (mood, list){
    if (mood === 'sad'){
        console.log(list[0].sad[1]);
        for (let i =0; i<list[0].sad.length; i++){
            p.innerHTML = list[0].sad[i];
            playList.appendChild(p);
        };

    }
    else if (mood === 'relaxed'){
        console.log(list[0].relaxed[1]);
        for (let i =0; i<list[0].relaxed.length; i++){
            li.innerHTML = list[0].relaxed[i];
            playList.appendChild(ul);
            ul.appendChild(li);
        };

    }
}