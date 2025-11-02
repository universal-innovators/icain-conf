import './PcMainbody.css'

function PcMainBody({myBody}) {
    return ( 
    
    <div className="Pcbody">
       <p dangerouslySetInnerHTML={{ __html: myBody }} />

    </div>
        )
}

export default PcMainBody;