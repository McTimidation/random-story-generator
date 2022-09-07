const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const image = document.getElementById('image');

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

const trumpStory = "Oh, we'll generate a random story. We'll generate the most random story you've ever seen. You think you've seen random? You don't even know. You're gonna love it. It's gonna be huge."


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const itemX = randomValueFromArray(insertX);
    const itemY = randomValueFromArray(insertY);
    const itemZ = randomValueFromArray(insertZ);

   newStory = newStory.replaceAll(':insertx:', itemX);
   newStory = newStory.replaceAll(':inserty:', itemY);
   newStory = newStory.replaceAll(':insertz:', itemZ);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', `${name}`);    
    } 

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature = Math.round((94-32)-(5/9)) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
        image.style.visibility = 'visible';
    } else { 
        image.style.visibility = 'hidden';    
    }
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
    if (customName.value === 'Donald Trump') {
        story.textContent = trumpStory;
        if (document.getElementById("uk").checked) {
            story.textContent = "Don't check that box. Why would you check that box? You don't need the metric system. You think you need it. You don't need it. The media wants you to think it's better. I don't think so.";
            document.getElementById("image").src = "images/wrong-drumpf.gif";
        }
     }
}
