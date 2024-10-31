let animals = [
    {
        name: "Lion",
        src: "zoo-featured/1.png",
        text: "The lion (Panthera leo) is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on medium-sized and large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.",
    },
    {
        name: "Giraffe",
        src: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/4659/image/s1300x1300/AdobeStock_331202050_538219_reduced.jpg",
        text: "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes have been thought of as one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into four extant species due to new research into their mitochondrial and nuclear DNA, and individual species can be distinguished by their fur coat patterns. Seven other extinct species of Giraffa are known from the fossil record. "
    },
    {
        name: "Cat",
        src: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Bengal_Cat.jpg",
        text: "The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a pet and farm cat, but also ranges freely as a feral cat avoiding human contact. Valued by humans for companionship and its ability to kill vermin, the cat's retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. "
    },
    {
        name: "Dog",
        src: "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
        text: "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture. Experts estimate that due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids."
    },
    {
        name: "Polar Beer",
        src: "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
        text: "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture. Experts estimate that due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids."
    }
]

let animal = document.getElementById('animal')
animal.addEventListener('change', chooseAnimal)


function makeOptions()
{
    let options = ""
    for(let i = 0; i < animals.length; i++)
    {
        options = options + `<option value="${animals[i]['name']}">${animals[i]['name']}</option>`
    }
    animal.innerHTML = options
}
makeOptions()

function chooseAnimal()
{
    let val = document.getElementById('animal').value
    document.getElementById('animalHeading').innerHTML = `Interview of ${val}`

    for(let i = 0; i < animals.length; i++)
    {
        if(val == animals[i]['name'])
        {
            let img = document.getElementById('animalPic')
            img.setAttribute('src', animals[i]['src'])
            document.getElementById('animalText').innerText = animals[i]['text']
        }
    }
}