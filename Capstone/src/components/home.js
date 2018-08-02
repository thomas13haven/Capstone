import React, { Component } from 'react';
import Header from './header';
import Main from './main';


 class HomeContent extends Component {
  render() {                  
    return (
      <div className="Content">

        <div className="MainDescription">
        <h1 className="Title">Why an About me Page?</h1>
        <p className="InfoM">Thru the past while I have been learning many codeing skills. In order ot pass this class I was required to create a "Capstone" Project this is that. Though this website may seem small it is just one small step towards understanding. If a 16yr old teenager can create this then just imagine the possibilitys of the future! This website is not that functional for a consumer it is more personalized, like a resume, or a profile page.</p>
        </div>

        <div className="Description1">
        <h1 className="Title">What is in this function?</h1>
        <p className="InfoM">This Website was mainly constructed in order to test my knowledge on the subject of "coding" however this website also intails the profile of Thomas me!. If I have finished you should see that this site contains my info, similearly to a resume or more like a profile page. This website was created with the intentions that not many people will see it, so there will be many bugs, and flaws. but I plan to fix most.</p>
        </div>

        <div className="Description1">
        <h1 className="Title">Why Learn Coding?</h1>
        <p className="InfoM">I was able to learn how to code thru a free program granted by a grant, to the San Juan School District. I was able to learn HTML, CSS, SCSS, And JAVASCRIPT. Though I did learn much I still don't completely understand some parts. I plans on taking all of the information stored in my head and expanding on it. Coding is not the only thing I am doing however, refer to the tabs. Coding is a growing business so this opportunity and opportunitys like it are irrefusable.</p>
        </div>

        <div className="Description1">
        <h1 className="Title">Was it Worth it?</h1>
        <p className="InfoM">The specific campus I and my classmates attended had a length of 8:00 to 2:00, with included lunches. I and many others did not completely finish the course, however this was due to the unique schedule when we ran the figures with lunches included, it was found that the San Juan campus had lost at least 2 hours each week, however this was inevitable so the kids were allowed to pass. so hopfully I will learn To speed it up! but in all seriousness I learned a whole ton about myself and about coding so I think I would call it a success, though It did get tireing. I honestly didn't care though because if I wasn't at school I was at work so... yeah it wouldn't change my schedule. I Liked learning new things and hopes that this will aid me in the future.</p>
        </div>
      </div>
    );
  }
}

export default HomeContent;