/* eslint-disable react/prop-types */


const NewsItem = ({title,src,description,url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src?src:"https://c8.alamy.com/comp/KX81MA/cute-teddy-bear-holding-a-yellow-sign-that-reads-sorry-isolated-on-KX81MA.jpg"} style={{height:"200px",width:"328px"}} className="card-img-top" alt="We are unable to gather the image"/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"There is no information about this"}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}

export default NewsItem
