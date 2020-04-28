import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import WeedCardStyle from '../styles/weedCard'

const dummyData = {"id":6,"Strain":"24K-Gold","Type":"hybrid","Rating":"4.6","Effects":"Happy,Relaxed,Euphoric,Uplifted,Talkative","Flavor":"Citrus,Earthy,Orange","Description":"Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!"}

function WeedCard({props}) {
    return(
        <WeedCardStyle className='weedCard'>
        <h4>{dummyData.Strain}</h4>
        <p>{dummyData.Rating} stars</p><StarRatingComponent name='rating' editing={false} starCount={5} starColor={"#008B8B"} value={dummyData.Rating}/>
        <p>Type: {dummyData.Type}</p>
        <p>Flavor: {dummyData.Flavor}</p>
        <p>Effects: {dummyData.Effects}</p>
        <p>{dummyData.Description}</p>
        </WeedCardStyle>
    )

}

export default WeedCard