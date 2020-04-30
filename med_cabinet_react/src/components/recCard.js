import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import WeedCardStyle from '../styles/weedCard'

// const dummyData = [{ "id": 6, "Strain": "24K-Gold", "Type": "hybrid", "Rating": "4.6", "Effects": "Happy,Relaxed,Euphoric,Uplifted,Talkative", "Flavor": "Citrus,Earthy,Orange", "Description": "Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!" }]

function WeedCard( props ) {
    const { strain } = props;
    console.log("Inside WeedCard", strain);

    return (
        <div className='cardWrapper'>
                <WeedCardStyle className='weedCard'>
                    <h4>{strain.Strain}</h4>
                    <p>{strain.Rating} stars</p><StarRatingComponent name='rating' editing={false} starCount={5} starColor={"#008B8B"} value={strain.Rating} />
                    <p>Type: {strain.Type}</p>
                    <p>Flavor: {strain.Flavor}</p>
                    <p>Effects: {strain.Effects}</p>
                    <span className='descWrapper'>
                        <p>{strain.Description}</p>
                    </span>
                </WeedCardStyle>
            {/* {props.strains.map(strain => {

            })} Commented this out for*/}
        </div>
    )

}

export default WeedCard
