const getImageBtn = document.querySelector("#showimage")
const imageElement = document.querySelector("#image")

const access_key = "q1HqDdaq4nTQRB0zoREAw_VVmcerghEyoksMY9w3iHo"

getImageBtn.addEventListener("click", () => {
    fetchImage()
})

async function fetchImage() {
    const url = "https://api.unsplash.com/photos/random"
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${access_key}`
            }
        })
        if (response.ok) {
            const imagesData = await response.json()
            const { regular } = await imagesData.urls
            displayImage(regular)
        } else {
            throw new Error(
                `Something went wrong: ${response.status} ${response.statusText}`
            )
        }
    } catch (error) {
        console.log(error)
    }
}

function displayImage(url) {
    imageElement.src = url
}

fetchImage()