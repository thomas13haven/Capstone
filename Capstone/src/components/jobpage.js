import React, { Component } from "react";

class JobContent extends Component {
  render() {
    return (
      <div className="job-page">
        <div className="Content">
          <div className="MainDescriptionJob">
            <h1 className="Title">What Jobs has Thomas done?</h1>
            <p className="Info">
              Believe it or not I started working when I was 15, through a
              summer job I was able to learn the value of a team and the
              perks and benifits that come from being a good worker, this helped
              me land his first full-time job in which I am still invested in.{" "}
            </p>
          </div>

          <div className="ButtonsJob">
            <div className="Btn1">
              <button type="button" className="DropperButton">
                {" "}
                CCYC{" "}
              </button>
              <p className="Description2Btn1">
                I worked for the CCYC and learned some, I made friends and
                gained a little bit of money. Though this was a great experience,
                I understood that just because I had fun didn't mean I
                needed to go back. instead I understood that jobs that are
                fulltime offer a much better output so I chose to search for a
                full-time instead. CCYC work was basic trail building and
                matenience, Thomas cooked meals and worked in a team.{" "}
              </p>
            </div>
         
            <div className="Btn2">
              <button type="button" className="DropperButton">
                {" "}
                San Juan Building Supply{" "}
              </button>
              <p className="Description2Btn2">
                At San Juan Building Supply I learned work ethic and
                managing a schedule, with San Juan I learned how to stock
                shelves, interact with customers, manage deliverys, clean, how
                to concer, and manage money. I still work for San Juan
                Building Supply and plan on keeping it for as long as I can
                manage. I now understand the importance of keeping a job
                and being loyal
              </p>
            </div>
          
            <div className="Btn3">
              <button type="button" className="DropperButton">
                {" "}
                Future Plans{" "}
              </button>
              <p className="Description2Btn3">
                I am a wanderer I do not know what I want to do.
                Somtimes I think and wish that the cool calming breeze would
                just guide me through life. However that is not the case and I
                realize that, in order not to mess up, I am attempting to
                learn a whole ton about everything that I can. I am one of
                those people who, because they don't have many goals, trys to
                learn everything. But somthing tells me that I will have to set
                my mind on somthing at some point.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobContent;
