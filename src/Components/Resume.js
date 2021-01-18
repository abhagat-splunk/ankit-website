import React, { Component } from 'react';
class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
            <li>{work.description}</li>
            <li>{work.descriptionTwo}</li>
            <li>{work.descriptionThree}</li>
            <li>{work.descriptionFour}</li>
            </ul>
        </div>
      })
      var devLanguages = this.props.data.devLanguages.map(function(language){
        return <li class="software-skill-inline" name={language.name}><a href={language.url}><i class={language.className}></i><p>{language.name}</p></a></li>
      })
      var databases = this.props.data.databases.map(function(database){
        return <li class="software-skill-inline" name={database.name}><a href={database.url}><i class={database.className}></i><p>{database.name}</p></a></li>
      })
      var frameworks = this.props.data.frameworks.map(function(framework){
        return <li class="software-skill-inline" name={framework.name}><a href={framework.url}><i class={framework.className}></i><p>{framework.name}</p></a></li>
      })
      var others = this.props.data.others.map(function(service){
        return <li class="software-skill-inline" name={service.name}><a href={service.url}><i class={service.className}></i><p>{service.name}</p></a></li>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



    <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
          <div key="Dev Languages"><h3>Dev Languages</h3>
            <div class="software-skills-main-div">
              <ul class="dev-icons">
                {devLanguages}
              </ul>
            </div>
            </div>
            <div key="Databases">
              <h3>Databases</h3>
              <div class="software-skills-main-div">
              <ul class="dev-icons">
                {databases}
              </ul>
              </div> 
            </div>
            <div key="Frameworks">
              <h3>Frameworks</h3>
              <div class="software-skills-main-div">
              <ul class="dev-icons">
                {frameworks}
              </ul>
              </div> 
            </div>
            <div key="Others">
              <h3>Others</h3>
              <div class="software-skills-main-div">
              <ul class="dev-icons">
                {others}
                <li class="software-skill-inline" name={"K8s"}><a href={"https://kubernetes.io"}><span class="iconify" data-icon="mdi-kubernetes" data-inline="false" style={{color:"gray"}}></span><p>Kubernetes</p></a></li>
              </ul>
              </div> 
            </div>
          </div>
    </div>
    
   </section>
    );
  }
}

export default Resume;
