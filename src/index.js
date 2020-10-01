window.onload = function () {
    const inp = document.getElementById('inp')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')

    // Extract text from text area and store it to an array
    const participantsNames = []
    // Get input names and add
    inp.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            let newNames = event.target.value.split(', ')
            if (newNames[0] !== '') {
                newNames.forEach(name => {
                    participantsNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    // Give a try button check
    giveATry.addEventListener('click', (e) => {
        if (participantsNames.length === 0) {
            alert('You have no name')
        } else {
            let shuffleNames = shuffle(participantsNames)
            for (i = 1; i < shuffleNames.length; i++) {
                (function (i, count) {
                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffleNames.length))
                        display.innerHTML = shuffleNames[rand]

                        if (count === shuffleNames.length - 1) {
                            if(!firstPosition.innerHTML){
                                firstPosition.innerHTML = shuffleNames[rand]
                                let indx = participantsNames.indexOf(shuffleNames[rand])
                                participantsNames.splice(indx, 1)
                            } else if (!secondPosition.innerHTML){
                                secondPosition.innerHTML = shuffleNames[rand]
                                let indx = participantsNames.indexOf(shuffleNames[rand])
                                participantsNames.splice(indx, 1)
                            } else if (!thirdPosition.innerHTML){
                                thirdPosition.innerHTML = shuffleNames[rand]
                                let indx = participantsNames.indexOf(shuffleNames[rand])
                                participantsNames.splice(indx, 1)
                            } else {
                                alert('Raffle Draw Already Completed!')
                            }
                        }
                    }, i)
                })(i * 100, i)
            }
        }
    })

    // TODO: Extract text from text area and store it to an array
    // TODO: Render the names extracted from text area
    // TODO: Shuffle the names Array for better result
    // TODO: Pick a Random number, Remove him/her from the names array
    // TODO: Display winners name
}

function createListItem(name) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}

// Shuffle the names Arra
function shuffle(arr) {
    let shuffledArray = [...arr]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArray[rand]
        shuffledArray[rand] = shuffledArray[i]
        shuffledArray[i] = temp
    }

    return shuffledArray
}
