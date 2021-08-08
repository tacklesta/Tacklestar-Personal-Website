import React from 'react';

class Resume extends React.Component {
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map((education) => {
        return (<div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">{education.degree}<br/>
            <em className="date">{education.graduated}</em>
          </p>
          {/* <span>&bull;</span> */
          }
          {/* <p>{education.description}</p> */}
          <br/>
        </div>);
      });
      var work = this.props.data.work.map((work) => {
        return (<div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">{work.title}<br/>
            <em class="date">{work.years}</em>
          </p>
          {/* <span>&bull;</span> */
          }
          <p>{work.description}</p>
        </div>);
      });

      // var skills = this.props.data.skills.map((skills) => {
      //   var className = 'bar-expand ' + skills.name.toLowerCase();
      //   return (

      //   <li key={skills.name}>
      //     <span className={className} style={{
      //         width: skills.level,
      //         background: this.getRandomColor()
      //       }}></span>
      //     <em>{skills.name}</em>


      //     <div class="row">
      //        <div key={skills1.name} className="col-md-6 skills"><em>{skills1.name}</em>
      //          <div class="progress">
      //            <div className="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width:skills1.level}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
      //          </div>
      //        <br/>
      //      </div>
      //          <div key={skills2.name} className="col-md-6 skills"><em>{skills2.name}</em>
      //          <div class="progress">
      //            <div className="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width:skills2.level}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
      //          </div>
      //        <br/>
      //      </div>
      //          </div>

      //   </li>
      //   );
      // });
    }
    return (<section id="resume">
      <div className="row education">
        <div className="three columns header-col edu-head">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns resume-content">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col work-head">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col resume-content">
          {work}
        </div>
      </div>

      {/* <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <h5>{skillmessage}</h5>

                        <div className="bars">
                            <ul className='skills'>
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div> */
      }

      <div className="row skill">
        <div className="three columns resume-head">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col sub-text">
          <h5>{skillmessage}</h5>
        </div>

        <div class="container">
          {/* {skills} */}
        <div class="row">
            <div class="col-md-6 skills">C++
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width:"80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <br/>
              </div>
              <div class="col-md-6">Python
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br/></div>
              </div>
              <div class="row">
                <div class="col-md-6">JavaScript
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <br/></div>
                  <div class="col-md-6">Machine Learning
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '65%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/></div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">MERN Stack
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '60%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <br/></div>
                          <div class="col-md-6">Flask
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '40%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <br/></div>
                            <div class="col-md-6">NLP
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '60%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <br/></div>
                            <div class="col-md-6">MYSQL
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" style={{background:this.getRandomColor(), width: '55%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <br/></div>
                          </div>
                        {/* </div> */}
                        </div>
                      </div>

                      
                    </section>
                    );
    }
}

export default Resume;
