// Your code goes here

// on load

window.addEventListener('load', () => {
    alert('Welcome to the FUN BUS')
})

//double click bus image
 const busImage = document.querySelector('.intro img')

busImage.addEventListener('dblclick', (event) => {
    event.target.src = 'data:image/jpeg;base64,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'
})

// mouse-over second image-content image

const funImg = document.querySelector('.img-content:nth-of-type(2) img')

funImg.addEventListener('mouseover', (event) => {
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMh7afIGtEzC7cxYBbW8zJiGuDFdVRBKYONQ&usqp=CAU'
})

// mouse-leave second image-content iamge

funImg.addEventListener('mouseleave', () => {
    event.target.src = "data:image/jpeg;base64,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"
})

const adventureImg = document.querySelector('.img-content:nth-of-type(1) img')

// mouse down and error events
adventureImg.addEventListener('mousedown', (event) => {
    event.target.src = 'img/fun.jpg'
})
adventureImg.addEventListener('error', (event) => {
    event.target.alt = 'PICTURE UNABLE TO LOAD'
})
