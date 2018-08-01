import React, { Component } from "react";

class JobContent extends Component {
  render() {
    return (
      <div className="job-page">
        <div className="Content">
          <div className="MainDescriptionJob">
            <h1 className="Title">What Jobs has Thomas done?</h1>
            <p className="Info">
              Believe it or not Thomas started working when he was 15 through a
              summerjob Thomas was able to learn the value of a team and the
              perks and benifits that come from being a good worker, this helped
              him land his first full-time job in which he is still enrolled in.{" "}
            </p>
          </div>

          <div className="ButtonsJob">
            <div className="Btn1">
              <button type="button" className="DropperButton">
                {" "}
                CCYC{" "}
              </button>
              <p className="Description2Btn1">
                Thomas worked for CCYC and learned some, he made friends and
                gained a little bit of money. Though this was a great experience
                Thomas understood that just because he had fun didn't mean he
                needed to go back. instead he understood that jobs that are
                fulltime offer a much better output so he chose to search for a
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
                At San Juan Building Supply Thomas learned work ethic and
                managing a schedule, with San Juan he learned how to stock
                shelves, interact with customers, manage deliverys, clean, how
                to concer, and manage money. Thomas still works for San Juan
                Building Supply and plans on keeping it for as long as he can
                manage. Thomas now understands the importance of keeping a job
                and being loyal
              </p>
            </div>
          
            <div className="Btn3">
              <button type="button" className="DropperButton">
                {" "}
                Future Plans{" "}
              </button>
              <p className="Description2Btn3">
                Thomas is a wanderer he does not know what he wants to do.
                Somtimes He think and wishes that the cool calming breeze would
                just guide him through life. However that is not the case and He
                realizes that, in order not to mess up, Thomas is attempting to
                learn a whole ton about everything he can. Thomas is one of
                those people who, because they don't have many goals, trys to
                learn everything. But somthing tells me that he will have to set
                his mind on somthing at some point.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobContent;
