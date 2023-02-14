import React, { useEffect, useState } from 'react'


const IssuesList = () => {
    const [list, setlist] = useState([]);
    const [issueTitle, setissueTitle] = useState('good-first-issue');
    const token = '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';

    console.log(list)

    useEffect(() => {
        fetch(`https://api.github.com/search/issues?per_page=100&q=label:${issueTitle}`)
            .then(res => res.json())
            .then(data => (setlist(data.items)))
    }, [issueTitle])

    const handleSubmit = (e) => {
        e.preventDefault();
        let toFind = e.target[0].value;
        let toget = toFind.replace(/ /g, "-")
        console.log("clicked", toget)
        setissueTitle(toget)
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <div>
                    <center>
                        <h1 style={{ color: "white" }}>
                            Your github <span style={{ fontStyle: "italic", color: "#29bf12" }}> issue </span> finder
                        </h1>
                        <h3>
                            Made with ❤️ by <span><a href="https://www.linkedin.com/in/ayush-dhiman-3000651a0/" target="_blank" style={{textDecoration:"none", color:"white"}}> Ayush Dhiman </a></span>
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='enter here' style={{ borderRadius: "10px", outline: "none", border: "0.3px solid green", padding: "10px 5px", marginBottom: "5px", width: "25%", fontSize: "1.3rem", color: "yellow", backgroundColor: "black", fontWeight: "bolder" }} /> <br />
                            <button onClick={() => { handleSubmit() }} type="submit" style={{ borderRadius: "10px", outline: "none", border: "0.3px solid black", padding: "10px", marginBottom: "5px", color: "black", backgroundColor: "white", fontWeight: "bolder", width: "26%", cursor: "pointer", fontSize: "20px" }}>Search</button>
                        </form>
                    </center>
                </div>
                <div style={{ display: "flex", padding: "0px", textAlign: "center", justifyContent: "center" }}>
                    <h3> <span style={{ color: "white", borderRadius: "10px", backgroundColor: "#086375", padding: "5px 10px" }}>Some common labels  </span>
                        <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'red' }}>bug</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'blue' }}>documentation</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'grey' }}>duplicate</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "black", backgroundColor: 'skyblue' }}>enhancement</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'purple' }}>good first issue</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "black", backgroundColor: 'cyan' }}>help wanted</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'darkgreen' }}>easy</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "black", backgroundColor: 'pink' }}>beginner</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "black", backgroundColor: 'yellow' }}>friendly</span></li>
                            <li style={{ margin: "10px", listStyle: "none" }}><span style={{ margin: "5px", borderRadius: "10px", padding: "5px", color: "white", backgroundColor: 'orange' }}>new</span></li>
                        </ul>
                    </h3>
                </div>
                {
                    list && list.map((data) => {
                        return (
                            data.labels.map((d) => {
                                // if (d.name == "beginner-friendly" || d.name == "good-first-issue") {
                                if (d.name == issueTitle) {
                                    {
                                        var extracted = data.html_url.split("/")
                                    }
                                    return (
                                        <div key={data.created_at + d.id
                                        } style={{ border: "4px solid white", borderRadius: "10px", margin: "auto", marginBottom: "10px", padding: "10px", width: "90%", backgroundColor: "#d7d9ce" }}>
                                            <a href={data.html_url} style={{ textDecoration: "none", color: "white" }}>
                                                {data.state == "open" ?
                                                    <h3 style={{ padding: "5px", width: "50%", borderRadius: "10px", color: "white", backgroundColor: "darkgreen" }}>{data.state} </h3> : <h3 style={{ padding: "5px", width: "50%", borderRadius: "10px", color: "white", backgroundColor: "red" }}>{data.state} </h3>
                                                }
                                                <h3 style={{ backgroundColor: "white", width: "30%", borderRadius: "10px", color: "black", padding: "5px 2px" }}><span style={{ margin: "0px 5px", padding: "0px 10px", backgroundColor: `#${d.color}`, borderRadius: "50px" }}>
                                                    Level :
                                                </span> {d.name} </h3>
                                                <h3 style={{ backgroundColor: "white", width: "30%", borderRadius: "10px", color: "black", padding: "5px 2px" }}><span style={{ margin: "0px 5px", padding: "0px 10px", backgroundColor: "pink", borderRadius: "50px" }}>
                                                    Repo :
                                                </span>{data.user.login} / {extracted[3]} </h3>

                                                <h3 style={{ backgroundColor: "white", width: "30%", borderRadius: "10px", color: "black", padding: "5px 2px" }}>
                                                    <span style={{ margin: "0px 5px", padding: "0px 10px", backgroundColor: "orange", borderRadius: "50px" }}>
                                                        Problem :
                                                    </span>
                                                    {data.title} </h3>


                                                <h3 style={{ backgroundColor: "white", width: "30%", borderRadius: "10px", color: "black", padding: "5px 2px" }}>
                                                    <span style={{ margin: "0px 5px", padding: "0px 10px", backgroundColor: "brown", borderRadius: "50px", color: "white" }}>
                                                        Last updated :
                                                    </span>
                                                    {data.updated_at.slice(0, 10)} // At: {data.updated_at.slice(11, 16)}  </h3>

                                            </a>
                                        </div>
                                    )
                                }

                            })
                        )
                    })
                }
            </div>
        </div>
    )

}

export default IssuesList