import React from "react"
export default function ReactList(){ /// list function, listing the members of the IT Paradigm
    let Memberslist = [
        "Gerald P. Palacio",
        "John Benedict Tano",
        "Louizza Pajarillon",
        "Eljah Kirstine Salazar",
        "Diether Adante",
        "Kimblery basuita",
        "Louiezzy Ramos"
    ]
    return(
        <div>
            <h2>1. IT Paradigm Members</h2>
            <ol>
                {Memberslist.map(members => <li>{members}</li>)}
            </ol>
        </div>
    )
}