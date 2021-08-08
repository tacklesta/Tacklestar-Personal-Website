import React from 'react';

class Portfolio extends React.Component{
    render(){
        if(this.props.data){
            var projects = this.props.data.projects.map((projects)=>{
                var projectName = 'images/portfolio/'+projects.image;
                return <div className="columns portfolio-item" key={projects.title}>
                    <div className="item-wrap">
                        <a href={projects.url} title={projects.title}>
                            <img alt={projects.title} src={projectName}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            })
        }
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1><strong>Check out some of My Works :</strong></h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
            );
    }
}

export default Portfolio;