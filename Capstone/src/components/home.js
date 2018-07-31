import React, { Component } from 'react';
import Header from './header';
import Main from './main';


 class HomeContent extends Component {
  render() {                  
    return (
      <div className="Content">

        <div className="MainDescription">
        <h1 className="Title">What is this abomination? </h1>
        <p className="Info">Thru the past while thomas has been learning many codeing skills. In order ot pass this class Thomas was required to create a "Capstone" Project this is that. Though this website may seem small it is just one small step towards understanding. If a 16yr old teenager can create this then just imagine the possibilitys of the future!</p>
        </div>

        <div className="Description1">
        <h1 className="Title">What is in this function?</h1>
        <p className="Info">This Website was mainly constructed in order to test Thomas' knowledge on the subject of "coding" however this website also intails the profile of Thomas. If he has finished you should see that this site contains his info, similearly to a resume or profile description. This website was created with the intentions that not many people will see it, so there will be many bugs, and flaws. </p>
        </div>

        <div className="Description1">
        <h1 className="Title">Why Learn Coding?</h1>
        <p className="Info">Thomas was able to learn how to code thru a free program granted by a grant, to the San Juan School District. Thomas was able to learn HTML, CSS, SCSS, And JAVASCRIPT. Though he did learn much he still doesn't completely understand some princeipals (Like spelling -__-) Thomas plans on taking all of the information stored in his head and expanding on it. Coding is not the only thing thomas is doing however, refer to the tabs.</p>
        </div>

        <div className="Description1">
        <h1 className="Title">Was it Worth it?</h1>
        <p className="Info">The specific campus Thomas and his classmates attended had a length of 8:00 to 2:00, with included lunches. Thomas and many others did not completely finish the course, however this was due to the unique schedule when we ran the figures with lunches included, it was found that the San Juan campus had lost at least 2 hours each week, however this was inevitable so the kids were allowed to pass. so hopfully Thomas will learn To speed it up! but in all seriousness Thomas learned a whole ton about himself and about coding so I think I would call it a success, though It did get tireing. Thomas honestly didn't care though because if he wasn't at school he was at work so... yeah. Thomas Liked learning new things and hopes that this will aid him in the future.</p>
        </div>
      </div>
    );
  }
}

export default HomeContent;